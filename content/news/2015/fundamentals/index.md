---
title: "Fundamentals"
date: 2015-07-28T15:51:38+02:00
lastmod: 2024-01-05T16:48:03Z
slug: "fundamentals"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4485
---
Those who have the ability to build OpenMW from the OpenSceneGraph branch have probably already tried it. The new OpenMW is streamlined, fast and of course, most importantly, very functional. It’s not very pretty yet, though. The Ogre version has a bunch of shaders, including Scrawl’s own gorgeous “Shiny” shader which makes the water look incredibly good, but they couldn’t be easily ported to the OSG version. But that’s just eyecandy, and though that is one step back, it’s only temporary. Add to that the fact that with its huge progress in terms of speed and the many fixes that it brings, the whole OSG port represents three steps forward. In fact, it’s far along enough to be included in the next release. So get ready, 0.37.0 will be the version that brings OpenMW-OSG to the world!

At the time of writing, 0.37.0 closes a whopping 138 issues on our tracker. As mentioned in the last post by Scrawl, NPCs are finally the right size. [Raindrops won’t make fire see-through anymore](http://bugs.openmw.org/issues/2111) and [fire no longer make stuff look black](http://bugs.openmw.org/issues/2140). Your followers also won’t be squealing when you touch something the wrong way, so no more “friends” ratting you out to the popo just because you took something that is technically not entirely yours.

Newcomer Kunesj has created a fun little extra that has been integrated already: [the crosshair and tooltips can now show if something is owned or not](https://cloud.githubusercontent.com/assets/7138527/8763449/534ecda8-2d9c-11e5-81ab-186d7ac4dc55.png). It doesn’t work as well as it should yet, so for now it requires editing some configuration files to enable and configure this feature, but it’s a good start to something that a lot of players will welcome.

There’s been some work on OpenMW-CS. NPCs should now have a whole lot more stuff for you to edit, including faction rank, level, skills, and the like. UI nags such as the starting size of the main window and a cancel button closing OpenMW-CS rather than returning to the last screen have been resolved. You can now also sort your search results, which should make the global search function even more useful than before. And, oh, bonus! – we also have [a pretty colour picker now](http://bugs.openmw.org/attachments/download/1377/color_picking.png)!

So as you can see, the team is marching on, but besides the engine and the CS, two other projects have seen the light of day.

For the first one we should give a shout-out to TravDark, the creator of [Ashes of the Apocalypse mod](http://www.moddb.com/mods/ashes-of-apocalypse), and Envy123, the creator of an unofficial expansion to AoA called [Desert Region 2](http://www.moddb.com/mods/desert-region-2-the-final-frontier). These two creators have generously allowed their work to be expanded and revamped so that they can be run as stand-alone games on the OpenMW engine. To this end, content in these mods needs to be replaced, and [such an effort has already started](https://forum.openmw.org/viewtopic.php?f=2&t=2990). In order to be stand-alone, however, it requires replacement of all assets made by Bethesda and work from other modders. That’s a ton of work and a solution needs to be found.

Which brings us to the other project: a bare minimum package for game developers. As OpenMW is merely an engine, it doesn’t only run Morrowind. To have a working game on OpenMW, you need some bare minimum files, such as a sky and some animations. Enter the [OpenMW Game Template project](https://forum.openmw.org/viewtopic.php?f=20&t=3003), a project which aims to provide a minimum package to run OpenMW. Aside from being a good foundation for game developers to work off of, it’s also a fantastic test run for OpenMW. When people try to create their own game, they could run into all sorts of issues and with the tight connections the Game Template project has to the development team, these basic issues can be documented and/or resolved before they can get in the way of the developers of full-fledged games.

So there it is. Two new projects on the side, the CS getting expanded, and OpenMW proper switching to a whole new graphical engine with major fixes and speed as a bonus. Plenty to be excited about, even in this late stage of development!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3015 "Want to leave a comment?")
