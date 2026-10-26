---
title: "Week in review"
date: 2013-04-15T11:41:23+02:00
lastmod: 2024-01-05T16:24:48Z
slug: "week-review-47"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2667
---
Welcome again,

This week was very good for OpenMW and we got plenty of new features.

First off: scrawl added leveled items handling to OpenMW, so crates around Balmora are now a lot more interesting.

Terrain possibly can be more interesting as well, since scrawl also worked on getting option to have more texture layers than in vanilla morrowind. At the moment OpenMW supports infinite number of texture layers and this potentially allows us to get a lot more detailed landscapes! Making use of this feature may require a new data file format ─ no big deal since we need a new data files format for other things as well.

We also integrated basic pathfinding and the implementation of AiTravel.

Lgro returned to the old plan of setting up a continuous integration platform with a full success. From now on we use the Travis CI platform for autobuilding OpenMW. This gives us two main advantages. First off, we will see if committed code compiles without errors. Does not sound like a big thing, but this can reduce the amount of compilation needed on our part and…

![Xkcd will make us even more cool.](http://imgs.xkcd.com/comics/compiling.png)

We can now also add some unit tests to it. Unit testing is not that useful for video games, but there are areas when it can help and besides: We also work on the editor…

In fact, OpenCS progressed really good this week. Script, region and sound tables have been added, along with the script editor. Zini worked really hard to make it happen.

And as usual, the OpenMW team fixed many bugs. Big hug for Glorf, scrawl, gus, wheybags, pvdk and others for that!
