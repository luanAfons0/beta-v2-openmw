---
title: "Post-release catchup party!"
date: 2021-11-26T11:03:29+01:00
lastmod: 2024-01-05T16:37:02Z
slug: "post-release-catchup-party"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5696
---
Hello again!

While there have been several huge announcements we’ve wanted to share with you lately, we decided to wait with these news until after the release of OpenMW 0.47.0 to avoid stealing too much of the hype. Sorry for that, but we hope you understand. Now, without further ado, let’s dig in!

## Lua is merged

Let’s just begin with, arguably, the biggest one. Petr Mikheev worked really hard on this huge contribution, and the extensive code reviews and feedback from the rest of the team were fantastic. The result is that the basic framework for OpenMW’s future scripting language, Lua, was merged into master a few months ago. This in itself doesn’t actually do much for the end user, but modders can already explore its functions. The real power, however, will be unleashed once gameplay mechanics, user interfaces, various graphical features and other exciting things are controllable through Lua scripts, in what we often refer to as the “de-hardcoding” of OpenMW. Some of this is currently being worked on, or even has already been merged, like Urm’s [basic framework for a Lua-controlled GUI](https://gitlab.com/OpenMW/openmw/-/merge_requests/1138) and Mikheev’s [Lua-controlled camera](https://gitlab.com/OpenMW/openmw/-/merge_requests/1030) and [raycasting](https://gitlab.com/OpenMW/openmw/-/merge_requests/1175).

One important clarification needs to be made, though: OpenMW-Lua will *not* be compatible with MWSE-Lua, the 3rd-party scripting extender for Morrowind.exe. We aim to make our scripting engine *at least* as powerful as MWSE-Lua, but since MWSE-Lua is being developed for a different game engine, mods made for it will unfortunately **not** be compatible with OpenMW. Current MWSE-Lua mods will therefore have to be rewritten, or at least refactored, to be able to function in OpenMW.

And again, to make it perfectly clear: the implementation of Lua in OpenMW is still in its initial stage and will become more powerful as time goes by.

We will discuss Lua more in future blog posts.

## Soft particles and sky shaders

If you are like most people, you might feel a bit annoyed by the fact that particles from things like fire look so obviously flat when looking at the source of the flame. Cody Glassman fixed this by implementing [soft particles](https://gitlab.com/OpenMW/openmw/-/merge_requests/980). There’s a video example in the merge request, and the difference is huge.

Cody also recently got his [sky shader branch](https://gitlab.com/OpenMW/openmw/-/merge_requests/1057) merged into OpenMW master. This is a feature that has been requested for quite a while now by people wanting to do great looking shaders for OpenMW. And now that the sky shaders are here, people like vtastek will be able to play around with the look of the sky, for example making the sky blend a lot better with the fog.

## Navmesh disk cache

One exclusive feature OpenMW has is the automatic and dynamic generation of navigation meshes which greatly enhances the AI’s pathfinding. Basically, OpenMW creates a map of the currently active game world that tells the AI where the terrain is walkable and where it is not, preventing situations where NPCs walk straight into walls or jump down cliffs. The creation of this map is done at runtime in a separate thread, so most modern multi-core computers won’t notice any significant performance loss because of this. For people with weaker computers or mobile devices, however, loading times can be significantly longer. Because of this, elsid is working on a feature that will [store the navigation meshes in files](https://gitlab.com/OpenMW/openmw/-/merge_requests/1058) once they have been created, making the generation of them only necessary once.

## Zoomable world map

Ever wanted to be able to zoom in and out on the world map? See more of the world at the same time? Or less of it, with more detail? Now you can, thanks to Cédric Mocquillon’s new feature that allows for [different zoom levels](https://gitlab.com/OpenMW/openmw/-/merge_requests/275) of the map, including automatically merged map markers when zooming far out and a smooth transition between local and world map when zooming in. Simple yet so effective and a very nice addition to the engine.

## Raindrops keep falling on my head…

…and into the water too. Let’s face it, OpenMW’s raindrop ripples look pretty terrible. Or rather, they *were* looking pretty terrible, since wareya took the matter in his own hands by making an actual good-looking raindrop ripple effect. You can see how they look using a nightly version or visiting the [merge request’s GitLab page](https://gitlab.com/OpenMW/openmw/-/merge_requests/1316). Neat, right?

## No more adding mod directories in the openmw.cfg file

Well, unless you want to of course. Anyway, Frederic Chardon has had [this merge request](https://gitlab.com/OpenMW/openmw/-/merge_requests/192) up for a very long time, but after a lot of discussion regarding its design, it seems we will finally see it merged soon. This means that you will soon be able to add and remove data directories directly in the OpenMW launcher. Finally!

## Magic effects are reworked

Evil Eye has been working relentlessly on OpenMW, and a truckload of MRs merged lately have been his work. One of his bigger projects has been the rework of magic effects. For most people, this probably won’t be very noticeable since there are mostly under-the-hood changes, but quite a few differences to Morrowind’s original engine have been solved thanks to this huge task of his. Check out the merge request [here](https://gitlab.com/OpenMW/openmw/-/merge_requests/1116). If you’re a Morrowind purist that has been annoyed with OpenMW handling certain magic effects differently compared to the original, you’ll like this one a lot.

That’s about it. Or really, it’s far from it, but we’ll have to round off this blog post somewhere. Thank you so much for sticking around with us through all these years. We’ll see you again another time!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7607 "Want to leave a comment?")
