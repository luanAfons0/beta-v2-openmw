---
title: "The week in review"
date: 2012-12-20T17:10:42+01:00
lastmod: 2024-01-05T16:24:48Z
slug: "week-review-33"
categories: ["News"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=2239
---
Hello,

Sir\_**Herrbatka** is still offline, so I’m back once again.

The big news is that version 0.20.0 is out now. This is our ninth release during 2012 and that’s pretty good for a fan project! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This release brings a near-complete implementation of the dialogue system, visual player race changes in character creation, and many other fixes and improvements.

{{< youtube id="swXDXgYUqFA" title="OpenMW 0.20 Release Commentary" >}}

**Known Issues:**  
– Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)  
– The disposition implementation is severely broken and will give wrong numbers in many cases  
– Entering a cell containing a Golden Saint model will crash the game  
– A journal regression causes journal updates to not display correctly  
 **Changelog:**  
– Implemented all missing dialogue filters  
– Implemented Mercantile skill  
– Implemented Persuasion dialogue  
– Initial implementation of AI package classes  
– Implemented 2nd layer for Global map  
– Implemented Animation pausing while game is paused  
– Implemented Player race now changes visually during character creation  
– Fixed Cell reloading when using teleport doors that link to the same cell  
– Fixed “0 a.m.” to display as “12 a.m.”  
– Fixed text persisting in the “name” field of the potion/spell creation window  
– Fixed starting date of new games  
– Fixed console window close behavior  
– Fixed container window formatting to better accommodate long item names  
– Fixed some topics not automatically being added to the known topic list  
– Fixed auto-move working despite DisablePlayerControls being set  
– Fixed rest dialogue opening again after resting  
– Fixed double removal of ingredients when creating potions  
– Various engine code and scripting improvements

In version 0.21.0 news **Chris** and **Scrawl** are working to improve the video player’s reliability, quality and performance. Since their work is pretty complex, I won’t try explaining it there. Feel free to check their commits in git if you’re interested in the details.

**Zini** is still working on the editor.

Thanks to **BrotherBrick**, you are now able to compile against boosts libraries statically on Linux !.

**Corristo** is trying to make OpenMW buildable as a universal 32/64 bit on MacOS.

And as usual, some bugs where fixed.
