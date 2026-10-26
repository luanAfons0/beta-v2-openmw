---
title: "Bump mappers assemble!"
date: 2016-11-15T09:02:19+01:00
lastmod: 2024-01-05T16:44:55Z
slug: "bump-mappers-assemble"
categories: ["News"]
authors: ["DestinedToDie"]
guid: https://openmw.org/?p=4756
---
With the announcement of OpenMW version 0.39 around 5-6 months ago, some users booted their game up to find an unpleasant surprise – shiny rocks. But they were told that this wasn’t a bug at all. Everything was working as intended.

[![waaxccy](https://openmw.org/wp-content/uploads/2016/11/WAaXCcy-300x188.jpg)](https://openmw.org/wp-content/uploads/2016/11/WAaXCcy.jpg)

So what led to this? Morrowind was initially released in 2002, a time when texturing techniques were not as advanced, and there were no normal maps. As years went by, the community created more and more complex mods on an engine that was frozen solid to the state that it started with a decade ago. At a certain point, the methods began to exceed engine limitations and newer technologies simply couldn’t be applied anymore.

Since the Morrowind engine isn’t open source, it’s not like someone could just edit the code and update it to modern standards. But what they could do is essentially “hack” the engine by datamining for information and make code injectors. This spawned the loved MGE XE distant lands, Morrowind Script Extender, and, last but not least, Morrowind Code Patch. While they have served the community well, they’ve also produced some unwanted side effects such as crashes, instability, memory leaks, and strange methods of texturing.

The latter in particular is caused by Morrowind Code Patch, and is also the reason for our shiny rocks. MCP enables a sort of “fake” bump mapping by using an environmental map to give textures the appearance of being bump-mapped. But no other engine does it this way – and if you were to port a “fake” bump-mapped mesh into Unity engine, Skyrim, or OpenMW, a shiny weird-looking object is what you would get.

So what do we do with these shiny rocks? Do we throw them out? No! Fortunately, they can be redeemed, and we now have [Lysol’s detailed and comprehensive guide](https://forum.openmw.org/viewtopic.php?f=40&t=3922) to lead you through the process. Most bump maps can be fixed with a few easy steps that even the average player with no modding experience can handle.

[![majcbzs](https://openmw.org/wp-content/uploads/2016/11/mAjCbzS-300x188.jpg)](https://openmw.org/wp-content/uploads/2016/11/mAjCbzS.jpg)

But only the author of a mod reserves the right to upload their content, so any user who wanted to play your mod would have to repeat the same process. If you are an author, I encourage you to take a little time to update your mod to OpenMW. Or if you’re short on time, post on our forums and give permission for users to update it and see if someone picks it up. Let’s rid Vvardenfell of those shiny rocks!

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3935)
