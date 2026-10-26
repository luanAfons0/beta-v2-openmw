---
title: "Base-building"
date: 2015-04-17T15:07:29+02:00
lastmod: 2024-01-05T16:48:29Z
slug: "base-building"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4315
---
As the feature list is getting shorter and shorter, our development team’s attention has been shifting towards issues that are a lot bigger than things like NPCs not doing what they are supposed to do.

Scrawl, for example, is slaving away at porting the project from Ogre3D to OpenSceneGraph, a relatively unknown but immensely flexible and expansive 3d engine which will not only allow OpenMW to run smoother than before, but also allows for better handling of materials and stitching the bodyparts of NPCs together (which is not nearly as gruesome as it sounds). [Scrawl himself has told us](/news/2015/announcing-switch-openscenegraph) about the what and why of OSG, and yes, I *could* tell you all that he is making good progress, but pictures speak louder than words.

[![](http://scrawl.bplaced.net/temp/screen22-16-24.png)](http://scrawl.bplaced.net/temp/screen22-16-24.png)  
[![](http://scrawl.bplaced.net/temp/screen22-07-19.png)](http://scrawl.bplaced.net/temp/screen22-07-19.png)

It’s almost a throwback to version 0.13.0, but don’t worry; unlike [the project way back when in 2012](https://www.youtube.com/watch?v=9gOqBU2oZnk), much of the program is already in place right now, so we promise it won’t take three years to catch up. I mean, just between the time that I started writing this update and the time this got posted [Scrawl got NPCs to render](http://i.imgur.com/jwhQAdr.png). Things are progressing *fast*.

Meanwhile, OpenMW-CS has been developing nicely as well. Our very own modding suite has gotten two more features that you *have* to see if you are a modder.

A plenty large code submission by cc9ii, based on some hard work by sirherrbatka, will give you access to stuff that you didn’t have access to before. Take NPCs, for example. Their settings were previously accessible only through the main table, but there are some things that were not contained therein. Selecting *Edit record* from the right click menu would bring up some more stuff to change (such as if this NPC would buy certain items), but cc9ii’s contribution expands that even further. By editing the NPC, you can now put stuff in his inventory, check out the paths they take while walking through the world, [and much more](https://github.com/OpenMW/openmw/pull/553).

Zini has [announced with the proper fanfare](https://twitter.com/marczinnschlag/status/582217189966610434) that Global Search is now working. When confronted with a huge list of stuff, trying to find that lovely lime-ware platter from the Census and Excise Office is like searching for a needle in a haystack. Previously, it was possible to filter using a specific syntax, but why make it difficult? With Global Search implemented, you can instantly find that one object with nary a thought. What’s more, this global search function will be extended with a replace function, so you don’t have to edit all those potions one by one.

Finally, a bit of community stuff as well. Sterling of the Old School RPG YouTube channel has started his Let’s Play of Morrowind through the OpenMW engine. If you want to see how LPs are done or are just curious about how OpenMW runs in practice, go ahead and watch the first video below. Don’t forget to [check out his channel afterwards](https://www.youtube.com/channel/UC6cCf0rNe7XK8V1rPcW9Bkw) for more content.

{{< youtube id="RjTQlaJe9Z4" title="OpenMW Morrowind Playthrough Orcish Tenacity Part 1" >}}

That it’s for this update. The team is ever active, and we can’t wait to tell you more in our next update. See you next time.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2859 "Want to leave a comment?")
