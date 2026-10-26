---
title: "Week in review"
date: 2013-03-05T15:30:07+01:00
lastmod: 2024-01-05T16:35:09Z
slug: "week-review-41"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2554
---
Hello once again!

![FSM](https://dl.dropbox.com/u/2899105/zrzut%20ekranu30.png)

This is quite hard to understand but basically this week was amazing. In fact I would say that raw diff would show larger changes from 0.21.0 to today when compared to 0.20.0 and 0.21.0. I didn’t checked but I have no doubts about it.

First of: again loads of bugs have been solved. List would be long and boring and we have more interesting things to show you.

A little feature that OpenMW lacked was a click sounds after pressing a button. Now this also works in OpenMW, thanks to vorenon.

OpenMW audio system is now able to handle non 16bit audio samples and this is good! The fact that we also support bitmap textures is maybe not bad, but perhaps ugly. BMP format is a very ineffective way to store texture data since this files are HUGE, but they are also supported by Morrowind, and as a result there are mods that uses textures in this format (like old, large add-on Wizard Island, or more recent, and not just large, but HUGE add-on Tamriel Rebuilt). We cannot ignore this fact but we have a message to TR team.

![Yes, that's right. If you are using BMP textures for your mod you are a bad person.](http://weknowmemes.com/generator/uploads/generated/g1362230410871025715.jpg)

Scrawl added a new feature: creatures and NPCs can now emit ripples, just like flame Atronachs do.

I also want to say that work on OpenCS continues.

But that’s just nothing. The greatest news is that Chris finally merged his animation branch into master. This means that work on AI path-finding can start. We don’t have a man on it at the moment, but this is just a matter of time… And when this feature will be completed the game will definitely gain in playability.

Also, do you know the tool called [WorldSynth](http://www.mindwerks.net/2013/02/introducing-worldsynth-for-your-world-building-needs/ "WorldSynth")? Worldsynth, short for world synthesizer, it creates heightmaps and exports to png and raw that can then be used to create esm/esp files. It doesn’t import in png/raw files yet, but that is coming. The biggest point being that it can procedurally create new worlds.. luciusdxl already presented on the forums of daggerxl project file with heightmap of whole Tamriel. There are tools similar to worldsynth, but this one is simply the best. There are also plans to have python interface in OpenCS to create addons, and WorldSynth can easily be one of the firsts.
