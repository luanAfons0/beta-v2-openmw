---
title: "Followers of shadows, the day has come!"
date: 2019-02-20T17:36:57+01:00
lastmod: 2024-01-05T16:38:47Z
slug: "followers-of-shadows"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5249
---
Two weeks ago, we wrote about OpenMW’s offical multiplayer fork, TES3MP. Missed that? Read it [here](/news/2019/time-to-make-stuff-official).

This week, however, we want to talk more about the main project: the OpenMW engine. A lot of things have happened since [the last news post](/news/2018/expect-future) on that topic.

### So, what’s the news?

Let’s begin with a recently merged feature which might seem like a small change at first, but rather is part of bigger project. OpenMW is now [able to read](https://gitlab.com/OpenMW/openmw/merge_requests/56) the [BSA files](https://fileinfo.com/extension/bsa) of Oblivion, Skyrim, Fallout 3 and New Vegas – thanks to the hard work of both cc9cii, who first wrote the code for OpenMW 0.36, and Azdul, who ported the code to the current OpenMW master. This brings us one step closer to actually running assets from later TES and Fallout games in OpenMW. However, a lot of work lies ahead of us – next on our list is support for newer versions of NIF, ESM, and ESP files. We’ll keep you posted.

Speaking of features regarding later Bethesda games: Skyrim uses a nif-ty feature in the NIF files called [NiSwitchNode](https://github.com/OpenMW/openmw/pull/2141) to make plants harvestable. The mod [Glow In The Dahrk](https://www.nexusmods.com/morrowind/mods/45886) by MelchiorDahrk uses the same property – with the help of some Lua code from MWSE-Lua – to create glowing windows during night time. We are very pleased that our sedulous developer akortunov submitted [this pull request](https://github.com/OpenMW/openmw/pull/2153), which makes it possible to use the assets from Glow in the Dahrk in our engine too.

A new contributor, bzzt, has recently started working on large-scale optimisations of our engine, focusing on terrain rendering in order to prepare adding in his vision of a future distant-objects feature. Among many other things, his changes – should they be merged – will improve both the look and the performance of distant terrain in OpenMW. The latter was a major cause of concern for players, and we hope his additions will be well received by the Morrowind community.

Capostrophic has been working a lot to make OpenMW compatible with the popular (and huge) mod [Sotha Sil Expanded](https://www.nexusmods.com/morrowind/mods/42347?). There are still a few nuts to crack before the mod is fully compatible with OpenMW, but Capostrophic is on it and we’ll let you know when everything works as intended. Sometimes you have to go to other content than vanilla Morrowind to find bugs in the engine, so big mods like these offer great opportunities to find unknown bugs and spot differences between OpenMW and vanilla Morrowind.

This post was supposed to be about OpenMW, but we have to mention one small thing about TES3MP: The macOS client is now released! Download it [here.](https://github.com/TES3MP/openmw-tes3mp/releases)

### Shadows are back!

And now the time has come for us to announce a quite big feature that got merged into master today. A feature many have told us is the one thing stopping them from switching to OpenMW for good. This feature was actually present in OpenMW when it, up until version 0.36.0, still used the rendering engine Ogre3D. After the switch to OpenSceneGraph, the feature had to be reimplemented again.

AnyOldName3 has been working on the implementation of shadows in OpenMW for over a year. It has been a long road to get there though. A couple of shadow techniques are included in the OpenSceneGraph library, but they needed to be modified quite a bit to fit our specific needs. A year and a couple of months later, through hard work and a *lot* of bugs and technical issues to master, he has now finished implementing his own technique, based on one of OpenSceneGraph’s methods.

But while the shadows are merged and ready to enhance the immersion of your next adventure in Vvardenfell, there will always be room to improve them in the future. AnyOldName3 already has some ideas what could be added to make them look even better. We might address that in detail in a future post.

So from this day, the first builds with shadows implemented will be built. Grab the latest **nightly builds** for the operating system of your choice [here](/downloads) while they are still hot, or build OpenMW yourself by following the instructions [here](https://wiki.openmw.org/index.php?title=Development_Environment_Setup). Important note though: the Windows nightlies are built at 3:00 AM, UTC. Nightlies for Ubuntu PPA are down at the moment.

Until next time!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=5740 "Want to leave a comment?")
