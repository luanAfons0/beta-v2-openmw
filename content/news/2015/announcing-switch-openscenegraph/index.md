---
title: "Announcing switch to OpenSceneGraph"
date: 2015-02-15T19:16:41+01:00
lastmod: 2024-01-05T16:49:06Z
slug: "announcing-switch-openscenegraph"
categories: ["News"]
authors: ["scrawl"]
guid: https://openmw.org/?p=4193
---
Ogre3D is the rendering engine used by OpenMW since our very first release. Now, the OpenMW team is announcing the move away from this engine.

Over the course of our alpha versions, Ogre3D has proven extremely useful, enabling rapid development. Thanks to Ogre3D, you can already play a more or less complete game of Morrowind in OpenMW, *today*, and that is an incredible feat in and of itself.

However, to get OpenMW into a polished state and to add the last few missing features, we have difficult tasks ahead of us that would either require creating a fork of Ogre3D that behaves the way we need it to, or switch to a more suitable engine. After much discussion, we have settled on the second option.

### Why switch?

There isn’t one particular show-stopper, but rather the culmination of many different issues.

One blocker for our 1.0 release is the poor framerate compared to vanilla Morrowind. This comes down to scene management and render API bottlenecks in the Ogre3D 1.x series, which are well understood by the Ogre3D team and have since been addressed in the 2.x series. The original plan was to port OpenMW to use Ogre3D 2.x, which is a big undertaking since the programming interface changes are significant. However, we have some fundamental concerns about this port:

- **Tag points:** We are using an Ogre3D feature called “Tag Points” to stitch together the various parts of Morrowind’s segmented bodies. This feature is no longer supported in the 2.x series, so we would have to implement complicated workarounds.
- **OpenGL3 requirement:** The Ogre3D 2.1 branch has dropped support for OpenGL2 hardware. Even though OpenMW was never meant to run on hardware that originally ran Morrowind, we concluded that it is still too early to drop OpenGL2 support, as it would affect a significant portion of our users.
- **Material system:** Ogre 2.1 features a redesigned material system written with AZDO (Approaching Zero Driver Overhead) optimizations in mind, but at the cost of making custom materials difficult to write. We will be doing that extensively in OpenMW, especially considering user-authored modifications, so we would rather have a more flexible and easier to use material system.

On top of these concerns with the latest Ogre3D versions, we’ve also had some longstanding issues:

- **Resource system:** Ogre3D forces the use of a global resource manager, but we need one resource manager per document in OpenCS. Another problem is that all resources are expected to have a unique name, which leads to some unnecessary work on our side, and could rarely cause user-defined resources to conflict with internal resources. This is also an issue well understood by the Ogre3D team, and a “Resource System Redesign” project addressing these points has been started in 2013, but is unfortunately not completed yet.
- **Material stencil support:** The NIF format used by Morrowind can specify “stencil settings”, but the Ogre3D material backend does not support these settings.
- **NPC width scaling:** NPCs in Morrowind have a “weight” property, which should be scaling the NPC on its local X-axis. OpenMW currently ignores this property, because the Ogre3D 1.x skeleton system does not support non-uniform scaling.

### A new engine

In light of these issues, we’ve looked around for alternatives and found the [OpenSceneGraph](http://www.openscenegraph.org/), which appears a perfect fit for the features required by Morrowind and OpenMW, while also delivering high performance. We’ve carefully evaluated all needed features and verified that they can be found in the OSG source code, or can be easily added by a plugin. A detailed roadmap for the port will be posted in the near future, and updated regularly so you can follow along the progress.

One notable difference is OpenSceneGraph supporting OpenGL only. Ogre3D having inbuilt support for OpenGL and DirectX may be considered one of its strong points. In an ideal world this would result in greater choice for the user while requiring no extra effort from the OpenMW team. Unfortunately this is not quite true; writing shaders does not work in a render system agnostic way. In addition to that, we have found some OpenMW bugs only manifesting themselves when the Direct3D backend is used. So we are in fact happy about this change, as we do not have the manpower to maintain support for two different rendering systems, and most of our developers are working on Linux and thus unable to test the Direct3D renderer anyway.

## Pre-emptive FAQ

### Q: How long will the switch take?

The good news is that Ogre3D is a rendering engine and we’re only using it as such. The OpenMW code is structured using different subsystems, and this change will, for the most part, affect only the “mwrender” subsystem. Rendering code makes up roughly 8% of our codebase.

### Q: What will happen with OpenMW using OGRE in the meantime? Further development (new features), maintenance/fixes only, complete obsoletion?

We will continue developing the OGRE branch as usual, with new features and bugfixes, so long as the OSG port is still in development. We know that OpenMW already has lots of players despite its alpha state, so this is very important for us.

### Q: What about the different OpenMW platforms (Linux, Windows, Mac OS X, Android)?

We will continue to support all these platforms.

### Q: The gallery on the OpenSceneGraph website looks really basic. If this engine is so great, why are there no fancy games made with it?

In terms of features, OpenSceneGraph is every bit as powerful (or even more powerful in some aspects) as Ogre3D, so it surprised us to see there are not many games made with it. OSG founder Robert Osfield has his own theory on why this may be the case:

> As a general note about Games and OSG vs Ogre, I suspect it’s partly  
> down the roots of each project and the culture that grew up around it.  
> OSG grew from the vis-sim world and over the years grew into a  
> general purpose and highly portable scene graph library, with it’s  
> community coming form the professional simulator, large scale  
> visualization, VR and scientific markets. Whereas Ogre from the start  
> was graphics API for Games, it too though can be used for more things  
> than games but and culturally games looks to have remained it’s  
> heartland.

### Q: I am worried about Direct3D support being dropped, because I get much higher framerates with the Direct3D renderer in OpenMW compared to the OpenGL renderer.

We are aware of this performance difference and know that it can be attributed to the poorly implemented OpenGL renderer in Ogre3D 1.x. Valve has [shown](http://blogs.valvesoftware.com/linux/faster-zombies/) that a proper OpenGL renderer can be every bit as fast as Direct3D, or even faster.

### Final thank you note

We owe a great deal to Ogre3D and hope to have made up for it with the numerous patches we’ve contributed.

We want to thank all Ogre3D contributors for their great work, everyone on the Ogre3D forums for all the support and encouragement we’ve gotten from there, and a special thanks to Kojack for helping us debug a DDS texture issue.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2754 "Want to leave a comment?")
