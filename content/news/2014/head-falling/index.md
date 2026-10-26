---
title: "On my head, they keep falling"
date: 2014-10-16T13:05:47+02:00
lastmod: 2024-01-05T16:50:01Z
slug: "head-falling"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4015
---
It’s been a while since the last update, so you’re probably curious what has happened in the meantime. Well, we’ve got 108 closed issues on the 0.33.0 tracker now and many more bugs have been fixed that did not appear on there. Let’s look at a few.

One particularly interesting bug left Dagoth Ur dead. In Morrowind you were supposed to defeat seven of Dagoth Ur’s cronies before facing the big bad himself. A script would be running that lowered Dagoth Ur’s health by 50 points every time you killed one of them, making for a total of 350 points of damage to the Sharmat. In vanilla Morrowind, this script was broken so the damage was not done. However, OpenMW didn’t have this bug in the first place, so the script ran as instructed. The result was that Dagoth Ur, who only had 300 health, would already be lying dead in his cavern before you had even reached him. Ironically, the effects of the bug needed to be replicated to make the game function as intended.

There was also an issue with the rain, a visual effect that is actually all smoke and mirrors. You wouldn’t (or rather shouldn’t) notice, but when it rains in-game, it doesn’t rain everywhere. There’s no reason to, really; it would be unneccessarily taxing your system for little (visual) gain. Instead, it only rains where the player, you, is walking. In first person you wouldn’t see the difference anyway. But once you switched you third person, you could see how [extremely local the rain actually was](https://bugs.openmw.org/attachments/download/608/2014-07-26_00007.jpg). That’s been fixed now. Rain will fall wherever your camera is positioned, not wherever your character is.

Another issue was with followers. When teleporting or traveling via silt strider your follower would be sent to your destination first. After that, you would go. This happened almost simultaneously, so normally you’d never notice. But since your follower has the exact same destination as you, you would be placed on top of your follower’s head. In outside areas that was silly at best, but if you were transported to a destination inside a building (such as one of the Mages Guild halls), you would end up not just on top of your follower, but with the top part of your body clipping through the ceiling. That is fixed now, too, so no more [Philadelphia Experiment](https://en.wikipedia.org/wiki/Philadelphia_Experiment)-esque fusings in the guild halls.

Some news from the OpenCS corner, too. [Terrain rendering has been included](https://github.com/OpenMW/openmw/pull/312), which means you can now properly view the terrain from OpenCS. Those squares with text you see on the screenshot are the x,y-coordinates and the name of the cell. This way you know exactly where you are as you are flying over the terrain.

cc9cii has spent some time cleaning up code and Lazaroth has been playing around with shaders. He wondered what it would look like if water changed its behaviour based on the weather. For example, when it rains, that should be reflected in the water, right? He has already [replicated the effect](http://i.imgur.com/JNfv62K.jpg), but right now only one such effect can be applied to the water itself. Right now it is not possible to apply different effects to the water surface depending on the current weather, but Scrawl mentioned that with some work that should not be a big issue. It’s definitely work that is worth doing, because not only does it allow developers to change the shape of the water surface, it also allows for other cool effects, like streets getting a nice sheen from the rain.

Speaking of Scrawl, he has started a blog of his own. This blog will not only chronicle the more technical sides of OpenMW, but also that of other projects he’s working on. As of now, his most recent post is about porting OpenMW to Ogre 2.0, which *should* give OpenMW a nice performance boost. If you’ve got a little background in software development, this is bound to interest you. [Check out Scrawl’s blog for more of his coding (mis)adventures](http://scrawl.bplaced.net/blog/).

That’s it for now. Version 0.33.0 is making good progress and the sheer amount of fixes has prompted talk of another release soon, so stay tuned.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2516 "Want to leave a comment?")
