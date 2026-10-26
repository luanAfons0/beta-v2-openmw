---
title: "Power failure? pffffffffff! That won’t stop us."
date: 2012-01-15T17:01:58+01:00
lastmod: 2012-10-13T08:23:47Z
slug: "power-failure-pffffffffff-that-wont-stop-us"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=183
---
It seems that the only task left for new release openmw is configuration/directory handling. lgro is currently on it so It looks like we will see new version on the loose soon with basic journal, properer character rendering and animations finally working (to mention the most spectacular features).

Actually work for 0.13.0 already started. Yaccoby is taken over terrain rendering task and jhooks1 is working on water rendering.

Short reminder here: yaccoby is the guy behind old terrain rendering in old openmw. It was totally custom implementation, since the current ogre3d lib did not exist at the time and available solutions sucked a bit. Currently there is no reason to write custom terrain rendering since:

- new lib does the job good enough
- more code in separate libs = less code in openmw = less work on code maintaining
- this code should get improvements over a time from ogre3d community that we could use

And yaccoby seems to excited to work on feature that can make pretty pictures

While Yaccoby is doing element of earth jhooks1 started element of water (sadly We dropped codenames so We can’t name 0.12.0 “It moves” and 0.13.0 “ElementalWind”). No hydratex here: It requires decent hardware to run smoothly and that’s not really acceptable for openmw.

Although openmw will require better hardware than morrowind It shouldn’t need newest graphic cards to run at all. For example yaccoby wants to use shader model 2 for terrain, and although Morrowind did not require that kind of hardware today it’s unusual to find less capable PC. Even my crappy, old Geforce 7300 GT is a shader model 3.

Oh, my geforce is doing what I want and I’m not complaining at all. It’s just old. I don’t think that anyone uses older graphic card than this.
