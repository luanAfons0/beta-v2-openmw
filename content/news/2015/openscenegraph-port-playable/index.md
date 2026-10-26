---
title: "OpenSceneGraph port now playable"
date: 2015-06-07T19:22:25+02:00
lastmod: 2024-01-05T16:48:07Z
slug: "openscenegraph-port-playable"
categories: ["News"]
authors: ["scrawl"]
guid: https://openmw.org/?p=4362
---
During the past three months, the OpenMW team has been hard at work porting their codebase away from the Ogre3D engine and towards the OpenSceneGraph rendering toolkit. The [previous post](/news/2015/announcing-switch-openscenegraph) talks about our motivations.

We are pleased to announce the porting efforts are finally bearing fruit – as in, all gameplay-essential features have been ported across, so users can enjoy a legitimate game of Morrowind in the [OpenMW-osg](https://github.com/scrawl/openmw/tree/osg) development branch.

Some advanced features – shaders, distant terrain, shadows, and water reflections – have not been ported yet. However, even this early, it is safe to say the transition has been a massive success, in more ways than we initially imagined. Players will find the new OpenMW loads faster, improves framerate, looks more like the original game, and fixes a host of long-standing bugs that proved difficult to address within our old framework.

Hold on… *improved framerate*? Let’s put that to the test…

## The first benchmark

Our test environment shall be:  
GeForce GTX 560 Ti/PCIe/SSE2, AMD Phenom(tm) II X4 955 Processor × 4, Linux 3.13.0-24-generic x86_64  
1680×1050, full screen, no AA, 16x AF, no water reflections, no shadows, no shaders  
Maximum view distance as per the in-game slider

[![osg_bench](https://openmw.org/wp-content/uploads/2015/06/osg_bench-300x188.png)](https://openmw.org/wp-content/uploads/2015/06/osg_bench.png)  
*The testing scene: good old (laggy) Balmora*

|  | OpenMW | OpenMW-osg |
| --- | --- | --- |
| Framerate avg. | 49 | **75** |
| Loading time avg. | 7s | **3.4s** |
| System memory avg. | 344.6mb | **277.1mb** |

Unsurprisingly, the OSG port wins on all three counts. The framerate improvement is decent, though still far short of the 3-4x improvement we saw in [earlier tests](https://forum.openmw.org/viewtopic.php?f=2&t=2760&start=20) with a single model. There is no reason to be concerned, however – you should take these numbers with a grain of salt:

1. **The comparison is unfair**. New rendering features are included in the OSG branch, that bring us closer to vanilla Morrowind compatibility, but affect performance as well. For example, we now dynamically expand bounding boxes based on running animations, which fixes the infamous bug of cliff racers disappearing under certain angles (Bug 455), but is taxing on frame rate as well. Likewise, we have ditched *static geometry batching*, a performance optimization that was causing a multitude of issues, mainly [incorrect lighting](https://bugs.openmw.org/issues/385) and [scripted movement of objects not working](https://bugs.openmw.org/issues/602). Even under all this new workload, the OSG port is *still* faster!
2. **Expect higher performance gains for advanced graphical features**. The comparison was made with the minimum graphics settings, for the simple reason that the advanced settings (shadows, reflections, etc.) do not exist in the OSG branch yet. We expect that once those advanced features are ported, their impact on framerate will be much lower than before, simply due to the new renderer scaling a lot better with regards to GPU workload. Draw submissions are now offloaded to a worker thread, so the graphical complexity of the scene does not block the main thread from performing work in the meantime such as culling, physics, scripting, and animation.
3. **The *real* optimization phase hasn’t even begun yet**. The main focus for now has been to get the game back to a playable state, and that only happened a few days ago. Now, there are plenty of optimization opportunities on the horizon. Our new rendering framework gives us more control over how the scene graph is structured, and how updates are dispatched, something we are only just starting to take advantage of. Planned optimizations in the near future include:
   - Move skinning updates to a worker thread.
   - Move particle updates to a worker thread.
   - Share state across different NIF files.
   - Enable culling for particle emitters/programs.
   - Integrate a model optimizer. Morrowind’s models unfortunately contain plenty of redundant nodes, redundant transforms, and redundant state, which impacts rendering performance. The original engine runs an “optimizer” pass over the models upon loading them into the engine. We should implement a similar optimizer pass. OpenSceneGraph provides the osgUtil::Optimizer that might prove useful for this very purpose.
   - Create a more balanced scene graph, e.g. a quad tree, to reduce the performance impact of culling and scene queries.
4. **Rendering is not the only bottleneck**. Assuming an N times faster renderer would lead to an N times faster OpenMW is wrong. We have other systems contending for frame time, and now that our renderer is faster, these other bottlenecks are becoming ever more apparent. In particular, the physics and animation systems are currently the worst two offenders. Some preliminary optimizations for these systems have made it into the OSG port, but we have no doubts there is more room for improvement.

With that said, better performance is certainly not the only change users can look forward to:

## Preliminary changelog

**Rendering improvements**

- Non-uniform NPC scaling (Bug 814):  
  Certain NPCs are now scaled along their X and Y axes, giving them a more bulky appearance, just like in vanilla Morrowind. Previous versions of OpenMW were unable to support this kind of scaling, due to an Ogre3D limitation.
- Improved rendering precision: solves large coordinate precision issues, exhibited by flickering/shaking when the player travels too far from the world origin. [Video comparison](https://www.youtube.com/watch?v=wybVYwQPVmY)
- Removed static geometry batching: fixes incorrect lighting (Bug 385), fixes scripted movement of objects (Bug 602), and improves cell loading time.
- Vanilla-accurate transparency settings: Previous versions of OpenMW were using transparency settings not quite accurate to vanilla Morrowind, in an effort to facilitate static geometry batching. That has been fixed – users will notice that foliage and other transparent objects now have softer edges.
- Added *small feature culling* option: In addition to culling off-screen objects, we can now also cull objects that would be smaller than a single pixel when rendered. The visual change is virtually unnoticeable, so we have enabled the option by default.

| [![osg_scaling](https://openmw.org/wp-content/uploads/2015/06/osg_scaling-300x156.png)](https://openmw.org/wp-content/uploads/2015/06/osg_scaling.png) | [![osg_transparency](https://openmw.org/wp-content/uploads/2015/06/osg_transparency-300x156.png)](https://openmw.org/wp-content/uploads/2015/06/osg_transparency.png) |
| --- | --- |
| *NPC scaling comparison* | *Transparency comparison* |

**Re-designed NIF loader**

- Support for non-uniform scaling in NIF files (Bug 2052)
- Fixed limitation on the number of nodes in NIF files (Bug 2187)
- Fixed animations “freezing” when the object is culled (Bug 2151)
- Redesigned skinning algorithm to allow for a more efficient scene graph
- Dynamically expand bounding boxes based on skeletal animation; fixes certain creatures disappearing under certain view angles (Bug 455)
- NIF scene graphs are now a shared resource; drastically improves loading time.
- Animation text keys are now a shared resource

**Physics rewrite**

- When compiled with Bullet 2.83 or later, take advantage of btScaledBvhTriangleMeshShape for efficient shape instancing
- Remove the “detailed” Bullet raycasting shapes, replaced by direct raycasting on the scene graph (see “New raycasting” section), vastly reducing memory usage
- Use a btCollisionWorld in place of a btDynamicsWorld, to avoid unnecessary updates for functionality that we are not using
- Map collision objects by pointer instead of by name

**New raycasting**

- Use the osgUtil::IntersectionVisitor for direct raycasting on the scene graph
- Support for raycasting against animated meshes, fixing inaccurate cursor selection for actors (Bug 827)
- Rewrote item selection logic for the inventory preview doll to use raycasting instead of a selection buffer, improving response time

**Improved loading screen**

- Loading screen now renders in the draw thread, thus no longer blocks the loading procedure
- Increased loading screen FPS so the loading bar moves more smoothly
- Upload OpenGL objects in a background thread while the area loads, using osgUtil::IncrementalCompileOperation

**Improved SDL2 support**

SDL2, the library we are using for cross-platform input and window creation, has been more closely integrated with the rendering system. Practical benefits for the user include:

- The antialiasing option finally works on Linux systems (Bug 2014)
- SDL2 is now responsible for creating the graphics context, meaning new display APIs, such as Wayland and Mir on Linux, are automatically supported with no extra maintenance overhead for the OpenMW team.

[![osg_antialiasing](https://openmw.org/wp-content/uploads/2015/06/osg_antialiasing-300x188.png)](https://openmw.org/wp-content/uploads/2015/06/osg_antialiasing.png)  
*8x antialiasing in action*

**Profiling overlay**

A nice side effect of using OpenSceneGraph is access to their top-notch profiling tools. With the ‘F3’ key, an on-screen overlay appears that shows more information with every key press.

[![osg_profiling](https://openmw.org/wp-content/uploads/2015/06/osg_profiling-300x130.png)](https://openmw.org/wp-content/uploads/2015/06/osg_profiling.png)  
*Profiling overlay – the colored bars represent OpenSceneGraph’s internal threads, the white bars OpenMW logic*

**Passive fixes**

The new OpenMW sports a unified OpenGL renderer on all our platforms. Rendering via Direct3D is no longer supported, easing the maintenance and support overhead for the OpenMW team.

Practically speaking, we have thus “fixed” Bug 2186 (garbage pixels on the minimap on Windows) and Bug 1647 (crash when switching to windowed mode on Windows).

**Miscellaneous changes**

Finally, we do have some bonus changes that are not strictly related to the OpenSceneGraph transition, but were committed to the OSG branch anyway in an effort to reduce merge conflicts:

- Tweaked the activation range for lights (Bug 1813)
- Fixed NiGravity strength (Bug 2147)
- Implemented controller extrapolation modes (Bug 1871)
- Implemented the NiPlanarCollider particle processor (Bug 2149)
- Added UI scaling option:

| [![osg_ui_scale_1](https://openmw.org/wp-content/uploads/2015/06/osg_ui_scale_1-300x188.png)](https://openmw.org/wp-content/uploads/2015/06/osg_ui_scale_1.png) | [![osg_ui_scale_2](https://openmw.org/wp-content/uploads/2015/06/osg_ui_scale_2-300x188.png)](https://openmw.org/wp-content/uploads/2015/06/osg_ui_scale_2.png) |
| --- | --- |
| *Normal UI scale* | *2x UI scale, same resolution* |

**Code maintenance / restructuring / cleanup**

The codebase has considerably lost weight, which is likely interesting to developers, though not so interesting to end-users.

- Physics code moved to a new “mwphysics” subsystem
- Removed scene node names, i.e. the RefData::getHandle identifier
- Removed OpenEngine
- Removed platform wrapper
- Removed shiny

In total, \~23.000 lines of code were removed:  
 `git diff upstream/master --shortstat  
689 files changed, 24051 insertions(+), 47695 deletions(-)`

## What’s next?

Phew, that was a lot to take in – even at this stage, the list of improvements is massive, so our first priority should be to merge the port into the main branch, get our various nightly builds up and running again, then get a new release out.

Speaking for the longer term, we are not even close to unleashing the full potential of our new rendering engine. The next steps would be to further improve performance, then work on restoring shaders, distant terrain, water reflections and shadows. Our new NIF loader facilitates the implementation of background cell loading, which was originally planned as a post-1.0 improvement – now, it would be trivial to do, so we might see this feature pre-1.0 after all.

In the meantime though, on the graphics front, there is now nothing stopping us from releasing the long awaited OpenMW 1.0, so perhaps efforts should be diverted to fix the remaining [OpenMW 1.0 blockers](https://bugs.openmw.org/projects/openmw/roadmap#openmw-1.0) first, get version 1.0 out the door, then port the advanced graphical features for version 1.1. We might decide this on a case-by-case basis. In particular, the water reflections should be a lot easier to port than shadows, which weren’t working particularly well in the Ogre branch anyway.

If you have an opinion on the matter, feel free to comment. Though regardless of the priorities we decide on, these are certainly exciting times ahead!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2931 "Want to leave a comment?")
