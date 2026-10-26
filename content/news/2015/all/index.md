---
title: "First of all…"
date: 2015-09-25T18:03:54+02:00
lastmod: 2024-01-05T16:46:13Z
slug: "all"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4535
---
Hello again. Small update since it’s been a while since the last one. The move to OSG has called for a lot of work left and right. Most of it is not exciting enough to get into in a newspost (interesting enough if you want to delve deeper into the development of this project, though!), but there are a couple of things worth noting. First is the object selection via the scene view in OpenMW-CS. Scenes may contain a lot of stuff, and finding the exact item you need may be a hassle. Scrawl and Zini have been working on a way to use the scene window to select objects. Next up is selecting terrain and stuff that isn’t rendered in the scene (such as pathgrids and cell markers). You can’t move them around yet, though, that’s all for a different update.

If you’re not a modder, but only play the game, you will enjoy this second bit of news: Scrawl has restored sun flares! Check out the before and after pics:

[![](http://i.imgur.com/mVxl6WZ.png)](http://i.imgur.com/mVxl6WZ.png) [![](http://i.imgur.com/oU1zKrY.png)](http://i.imgur.com/oU1zKrY.png)

Rather than being a flat disk in the sky, light blooms now. Pretties.

Every step in the direction of beautifying the game is a good one and the team (especially OSG/shader magician Scrawl) is planning to do much more! There’s the water shaders, and there are object shaders. The latter may be a bit more difficult than just using an already existing implementation, as performance might be negatively impacted too severely to just plop it in and go, so some work on that is required. After the object *shaders* are done, work on object *shadows* can start, something that doesn’t seem all that significant, but it’s one of those touches that makes a ton of difference once you see it. Definitely more on that in a later version.

Disposing of bugs is, of course, also a staple of Morrowind releases. Counting only the bugs on the tracker – so not including all the bugs that have been fixed as soon as they were encountered – 149 bugs have been fixed so far for this release. The other 40 issues on the tracker that have been closed are things such as small optimizations, a scaleable GUI, and several OpenMW-CS features.

Doing so has left OpenMW with less than 100 issues until 1.0. Of course this amount fluctuates wildly and some issues are relatively small while others are huge. Still, it’s great to see the finish line drawing nearer and nearer.

I’m not going to lie to you, though: porting is a toughie and OpenMW-CS has come to that point where nearly all basic functionalities are in place. That means that the next version won’t be released next week or even the week after that. But still, the team is working hard: they are committed to pushing out the next release with terrain optimizations and a basic water shader for your enjoyment.

Troubling as the time since our last release may seem, know that the team is still busy and that the work put in the next version brings one of the most significant changes for players since the implementation of terrain and physics. Thanks for your patience and see you next time.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3131 "Want to leave a comment?")
