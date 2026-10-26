---
title: "Shiny new things are coming"
date: 2022-05-26T06:39:17+02:00
lastmod: 2024-01-05T16:33:34Z
slug: "shiny-new-things-are-coming"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5867
---
Almost half a year has passed since the last development blog post. But that’s okay, since what OpenMW lacks in public relations, team team makes up for in development — and we have some **huge** news for you this time. This post will only cover the *latest* progress by the way: there are a lot of things that have happened since last time we had a blog post, but we won’t really be covering those here. You’ll read about these changes in the changelog of the upcoming 0.48.0 release.

### Post-processing is here!

When you play modern 3D games and compare them to older ones like Morrowind, you’ll most likely notice a certain "punch" in the look of the game that the older games lack. The lighting effects, the colours and so on. This is often done through post-processing shaders, something [MGE XE](https://www.nexusmods.com/morrowind/mods/41102/) (a third-party tool for vanilla Morrowind.exe) users have been enjoying for a long time already. OpenMW users had to pretend that they had nice things like bloom, HDR, ambient occlusion, godrays or motion blur — all while the game in reality looked dull and boring. Until now that is.

Cody Glassman aka wazabear finally added a [post-processing framework](https://gitlab.com/OpenMW/openmw/-/merge_requests/1124) to OpenMW. This is probably the biggest graphical enhancement for OpenMW since the implementation of real-time shadows. Modded OpenMW setups will now be able to take a huge step forward in time when it comes to graphic effects.

OpenMW now provides a new file format called omwfx where the post-processing shaders are stored. This means shader developers have an easy way to create and tweak shaders that end users can easily install and manage for their games. Each shader can be turned on and off in one click and can even be fine-tuned through the super-handy in-game interface. The shaders can also be "hot reloaded", i.e, you can edit the shaders while the game is running. This is, of course, very useful for developers so that they can see the result of what they just wrote in real time without restarting the game.

One shader developer, zesterer, has already made [their first contribution](https://github.com/zesterer/openmw-volumetric-clouds) to the community. CMAugust took some great screenshots using these shaders. Have a look at the gorgeous shots [here](https://imgur.com/a/8DRyvi2)!

You can read about the various post-processing settings [here](https://openmw.readthedocs.io/en/latest/reference/modding/settings/postprocessing.html). If you want to get an understanding of the new omwfx format, read about it [here](https://openmw.readthedocs.io/en/latest/reference/postprocessing/index.html).

### Launcher improvements

Speaking of easy ways for end users to install things, our launcher now supports [adding and removing data directories and BSA files](https://gitlab.com/OpenMW/openmw/-/merge_requests/192) which allows you to manage your mods in the launcher’s GUI instead of editing a text file. A highly requested feature now delivered to you by Frederic Chardon, aka fr3dz10. The old text-based way of doing things still exists, of course.

### But what about Lua?

Yes, of course we should talk about Lua. Much has happened since last time we wrote about it, and quite some mods have been released since then. To name a few, our legendary release video narrator Johnnyhostile released his [Smart Ammo](https://www.nexusmods.com/morrowind/mods/51274) and [Marksman’s Eye](https://www.nexusmods.com/morrowind/mods/51141) mods, our Lua developer uramer released the mod [Attend Me](https://www.nexusmods.com/morrowind/mods/51232) and seelof and Greatness7 collaborated to release a mod called [Of Eggs and Dwarves](https://www.nexusmods.com/morrowind/mods/51171) — which, by the way, is available for both OpenMW and MWSE-Lua!

While our scripting system already offers some cool modding capabilities, it has not reached its full potential yet. More of the game logic needs to be de-hardcoded until we get as powerful as the very advanced capabilities granted by MWSE-Lua. We’ll get there step by step, and each one is going to give more power to modders. But know that the road ahead is still quite long before we can even reach some kind of feature parity with MWSE-Lua.

One of the more recent additions to the Lua system is a [settings menu](https://gitlab.com/OpenMW/openmw/uploads/ab7b9a7a212d2225697f027fa1945295/image.png), so that modders can add options to their mods for end users to customise their gaming experience. This very neat feature was brought to you by uramer.

If you’d like to have a go at making your own Lua mod, check out at our [documentation](https://openmw.readthedocs.io/en/latest/reference/lua-scripting/index.html)!

### More work on VR

Mads Buvik Sandvei aka Foal created his VR fork quite some time ago, and many people have been enjoying it. It was, however, something he wrote for fun and the code was not really something that could be merged with our official code. The density of the changes also made it hard for the rest of the team to review.

This is why Mads started to rewrite his VR feature and split it up into several smaller merge requests. One of the bigger ones, [Stereo](https://gitlab.com/OpenMW/openmw/-/merge_requests/1757), was merged recently and as the name suggests, it adds stereoscopic rendering. He even added support for multiview, which basically is a way to render the stereoscopic views in one single pass, making it potentially much faster than the more basic way of rendering the two views with double passes. The only real catch here is that it only works with Nvidia GPUs, at least as of now.

More updates to OpenMW’s VR support are to be expected in the future.

### Wait, did you change the wiki again?

After experimenting with GitLab’s wiki, we went back to our [original wiki](https://wiki.openmw.org), where *everyone* is more than welcome to give us a hand with the content — whether it is about the development environment setup on your favourite Linux distribution or documenting particular game mechanics of Morrowind!

This wraps up today’s blog post. Hopefully, we’ll be able to update you a bit sooner next time. Until then, take care!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7767 "Want to leave a comment?")
