---
title: "It’s Ogre"
date: 2015-02-15T11:35:25+01:00
lastmod: 2024-01-05T16:49:18Z
slug: "ogre"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4183
---
In the past few updates we’ve been anxiously looking forward to Ogre 2.0, a major milestone of the 3d engine that is used in OpenMW. It would give our development team much more opportunities to make OpenMW work better than ever before. It is somewhat done now and ready for public consumption, but unfortunately moving OpenMW to Ogre 2 isn’t just a matter of adding a few new lines of code to the program. Because Ogre 2 is different from Ogre 1, OpenMW needs to evolve along with it.

Some of the issues have to do with the way OpenMW “stitches together” the bodyparts of people to make them a working whole. As you might know, people in Morrowind consist of a torso, a head, legs and arms. They also have to be able to hold items, which is another thing to stitch to the model. Since this bit isn’t implemented in Ogre 2 yet, this part will break functionality.

[Scrawl’s latest post on his website](http://scrawl.bplaced.net/blog/?p=34) talks more about issues such as these, so if you are technically inclined and want to know more, definitely give it your eyeballs.

Some more work has been done on OpenMW itself, obviously. Aside from the over 100 bugs fixed on the tracker, some features have been added, such as a fast-forward for NPCs. That is, if you wait a certain amount of hours, NPCs will be at a different spot on the map than before.

Since we’re approaching the release of 0.35.0 fast, it has already gone in lockdown. New work is going into the version after that. Already included in that is fixing the trajectory of the sun. Turns out that this one bugreporter, Yann GOUY, has been paying attention and has seen that the sun doesn’t rise and set in the right spots. The moons aren’t working as they should be either, but they will have to wait a bit. Magnus is now fixed, however. Another very important issue solved in 0.36.0 is the ability to dress dead bodies. I, too, find dressing dead orcs up in nothing but an exquisite right glove of paramount importance to my immersion.

A full changelist has already been written for 0.35.0, and the update should drop any day now, so be sure to keep an eye out on the website or let apt/yum/pacman do the work for you.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2753 "Want to leave a comment?")
