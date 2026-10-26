---
title: "A solution to the AI problems?"
date: 2018-03-26T19:34:58+02:00
lastmod: 2024-01-05T16:42:30Z
slug: "solution-ai-problems"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5093
---
Ever since the AI was implemented, OpenMW has been plagued with a few irritating bugs. [Guards running against walls](https://bugs.openmw.org/issues/3524) and [people randomly walking off cliffs](https://bugs.openmw.org/issues/1997), among other things. All of these seem to boil down to this: The pathfinding AI needs to be [improved](https://bugs.openmw.org/issues/2229). There has been some attempts to do this, but none of them has come very far. Until now.

Elsid, who previously had just started on a few pull requests in november last year and then wasn’t really heard from, suddenly posted [this](https://github.com/OpenMW/openmw/pull/1633) massive pull request. Why is it massive, you say?

Well basically, elsid is implementing Detour from a navigation mesh toolset called [recastnavigation](https://github.com/recastnavigation/recastnavigation). You can read details about it in the link, but to summarize, recastnavigation calculates where the AI can and can’t walk, and then creates a navigation mesh for the AI to use.  
People have already built OpenMW with elsid’s latest commits to try it out, and it seems to work great.

{{< youtube id="BYuGEsScpf0" title="Navmeshes for OpenMW" >}}

In the above video, user Gluka tried it out in the Tamriel Rebuilt town of Kragen Mar because that town does not have a path grid yet. The NPC’s are still able to navigate the town without problems.

So *if* elsid manages to get this to work well without too much of a performance hit (remember, this feature isn’t done and there is still a chance that there are problems that he can’t solve), then this will surely revolutionize OpenMW.

In other news, the shadow branch is still moving forward in a steady pace and there has been a lot of small neat bug fixes and feature implementations merged that will further enhance the experience in the upcoming version 0.44.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=5058 "Want to leave a comment?")
