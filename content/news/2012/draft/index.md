---
title: "The Week in Review"
date: 2012-07-31T14:39:50+02:00
lastmod: 2012-10-11T16:22:33Z
slug: "draft"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1553
---
Though there won’t be a new release for July, last week was a great one for OpenMW. So let’s recap.

First off, we have a new developer, **\_greye**, who finished his first task (making CreatureStats into a class) in a single day. Then he picked another one (maintenance in the item dropping code) and finished that in a short period of time. Both were very well done, so thank you \_**greye** and welcome to the team!

**nhydock**, another new developer, has taken the camera control task (which is composed of four or five subtasks).

**scrawl’s** new shader system has been merged into the main branch. What does that mean for OpenMW? Until now we have been using the Nvidia CG toolkit. This toolkit works with DirectX and OpenGL on all graphics cards, but only gives good performance with Nvidia cards (which is understandable since its developed by Nvidia). We need both DirectX and OpenGL support because Radeon graphics cards (built by amd) lack quality OpenGL drivers. Otherwise we’d just write our shaders in OpenGL. Again the problem is CG doesn’t provide good performance for the Radeon cards. To make matters worse, CG is closed source and available for on Linux, windows, OSX and not on BSD.

To avoid the above mentioned problems with CG, many game developers instead write all their shaders twice: in GLSL for OpenGL and in HLSL for DX or just ignore OpenGL and focus on DirectX.

But the situation is improving because **Scrawl** made a library called “shiny”. From now on we can write a shader once and then compile it as either GLSL or HLSL. But that’s not all, here’s **scrawl** detailing the new library’s design and features:

> – High-level layer on top of OGRE’s material system. It allows you to generate multiple techniques for all your materials from a set of high-level per-material properties.
>
> – Several available Macros in shader source files. Just a few examples of the possibilities: binding OGRE auto constants, binding uniforms to material properties, foreach loops (repeat shader source a given number of times), retrieving per-material properties in an #if condition, automatic packing for vertex to fragment passthroughs. These macros allow you to generate even very complex shaders (for example the Ogre::Terrain shader) without assembling them in C++ code.
>
> – Integrated preprocessor (no, I didn’t reinvent the wheel, I used boost::wave which turned out to be an excellent choice) that allows me to blend out macros that shouldn’t be in use because e.g. the shader permutation doesn’t need this specific feature.
>
> – User settings integration. They can be set by a C++ interface and retrieved through a macro in shader files.
>
> – Automatic handling of shader permutations, i.e. shaders are shared between materials in a smart way.
>
> – An optional “meta-language” (well, actually it’s just a small header with some conditional defines) that you may use to compile the same shader source for different target languages. If you don’t like it, you can still code in GLSL / CG etc separately. You can also switch between the languages at runtime.
>
> – On-demand material and shader creation. It uses Ogre’s material listener to compile the shaders as soon as they are needed for rendering, and not earlier.
>
> – Shader changes are fully dynamic and real-time. Changing a user setting will recompile all shaders affected by this setting when they are next needed.
>
> – Serialization system that extends Ogre’s material script system, it uses Ogre’s script parser, but also adds some additional properties that are not available in Ogre’s material system.
>
> – A concept called “Configuration” allowing you to create a different set of your shaders, doing the same thing except for some minor differences: the properties that are overridden by the active configuration. Possible uses for this are using simpler shaders (no shadows, no fog etc) when rendering for example realtime reflections or a minimap. You can easily switch between configurations by changing the active Ogre material scheme (for example on a viewport level).
>
> – Fixed function support. You can globally enable or disable shaders at any time, and for texture units you can specify if they’re only needed for the shader-based path (e.g. normal maps) or if they should also be created in the fixed function path.

This library should make the lives of developers easier and since it is designed for the Ogre3d rendering engine, it could have bright future beyond even the OpenMW project. Huzzah for open source!

Take a look at the new water shader **scrawl** made using the “shiny” shader library.

![](http://wiki.openmw.org/images/f/f5/Screenshot016.jpg)

![](http://wiki.openmw.org/images/0/08/017-3.jpg)

If all that is not awesome enough, then wait dear readers, because there’s more.

In every blog post since time immemorial we have talked about getting animations to work, but now that saga’s beginning its conclusion. That’s right, the new and completed animation system awaits testing in the main branch. **jhooks1** and **Chris’s** huge effort is bearing fruit. You can expect only falling action (bug fixes and performance improvements) from here on out.

Although animations have been present in OpenMW for some time, they did not use ogre’s animations system, instead OpenMW manually moved all bones. This was not efficient and not all creatures were correctly animated, especially those from expansions sets. For example, Bloodmoon’s werewolf animations looked really bizarre.

But now those problems are solved and we employ Ogre for the animations. Even hardware skinning can be added as a post 1.0 feature.

**Zini** is finishing up the potion usage task. Now the drinking sound effect plays correctly. Additionally,  **zini** refactored the action class.

**Corristo** made sure that OpenMW still works for you OSX users out there. There were mac specific bugs that should now be resolved.

We migrated to new servers after the result of the slashdot effect exposed our inability to handle heavy users loads (our servers crashed). The first choice was amazon cloud which looked quite nice, but soon it became clear that they are insufficient for our needs. At the moment OpenMW.org is on one MyDevil.net server, while bugtracker and forum are on OVH server. In addition OpenMW.org is protected by Cloudflare CDN “proxy”, so it has chance to handle next slashdot effect.
