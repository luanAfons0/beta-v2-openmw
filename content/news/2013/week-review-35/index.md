---
title: "The week in review"
date: 2013-01-22T04:13:44+01:00
lastmod: 2024-01-05T16:34:24Z
slug: "week-review-35"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2391
---
Welcome again. There has been progress is some areas and snags in others.

Well, there’s been some nice progress thanks to Chris. He is working on animations again and, well, now idle animations are played on npcs as well as on silt striders. There was also an experiment on playing the walking animation, but there are issues with it. To make long story short, it revealed that pmove is bad for morrowind and using it is a mistake.

Pmove was imported from Quake 3 Arena. As you may have guessed, it includes loads of functions for implementing Quake like movement, which is suitable for multiplayer deathmatch games (yes, you were able to do bunny and strafe jumping in OpenMW). The Pmove code is over two thousand lines long and overly complicated  for our needs.

It appears that using pmove could be a good option, but We are not sure what the consequences can be. There is a prototyped alternative called MovementSolver but it lacks of some features ─ the question is whether it will be easier to extend MovementSolver or stick with pmove. Nopoe thinks that MovementSolver is the way to move forward (pun intended).

Work on SDL mouse input is going nicely… for linux. Unfortunately, SDL 2.0 is still very buggy on Windows and it means we can’t use it yet. Sticking with SDL 1.2 would not give us any of the benefits we are after. So, for now we are going use a modified OIS. This is disappointing, but maybe in the future we’ll try SDL again. It was still good work Angelbracket. :)

Meanwhile blunted2night is going for journal features. We now have keywords, index and more.

At the same time, PotatoesMaster is working improvements for dialogs.

Scrawl as usual works in his very own graphics branch on, well, graphics. ;-)

Now We also have something for Debian Wheezy users. Visit <https://forum.openmw.org/viewtopic.php?t=1298&p=13216#p13216>
