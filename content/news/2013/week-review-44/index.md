---
title: "week in review"
date: 2013-03-27T11:51:28+01:00
lastmod: 2024-01-05T16:35:24Z
slug: "week-review-44"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2603
---
Version 0.22.0 is here! (It was’t that simple, there were bugs to fix for pvdk and packages to fix for K1ll during the release candidate phase) and it’s time to think (and write) about 0.23.0.

Well, 0.23.0 has potential to be great, but it entirely depends on the programmers activity. Last month was rather intensive with the work on features and many bugfixes coming to OpenMW. Now we are ready to implement a large portion of new features, mainly skills. In fact majority of skills are targeted for 0.23.0 and scrawl is first to work on item repairing (both by PC and as NPC service) and enchanting. Zini added basic skill support in our editor. Sadly we still lack some bits of Morrowind formulas that control gameplay mechanics. If you want to help you are very welcome.

Zini wants to solve as many bugs as possible for 0.23.0. In 0.22.0 the number of solved bugs was very high and I’m afraid that we can’t count on beating this top score, especially since we have so many exciting features to implement, that can effectively consume manpower. We shall see.

At the moment OpenMW is doing just fine. The next branch is already full of new commits. We recently added a new fallback system thanks to a new developer called Glorf. He continues to work on other tasks. Shadows can be casted on water thanks to scrawl, who also solved a crash triggered by dropping items without collision shapes, along with multiple non-crash bugs and, thanks to aforementioned Glorf’s work, enabled Bloodmoon weather (snow!).

Zini currently works with graffy on our editor but he also added a new onDeath script function with related tasks and solved a few bugs.
