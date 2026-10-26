---
title: "What’s up?"
date: 2011-09-25T12:17:47+02:00
lastmod: 2012-10-13T09:53:16Z
slug: "whats-up"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=96
---
Welcome!

OpenMW 0.11.1 is coming, but the road is slow and painful. Since Linux builder vanished zini started to be “officially pissed off” and decided that there will be no binary for OpenMW 0.11.1. If you want to test OpenMW 0.11.1 on Linux you will have to build it on your own. Of course it’s possible that binary may pop-up later but lack of Linux builder won’t stop us anymore.

Among Linux world it’s common to distribute software in the form of deb, rpm, tar.gz and source code or just distribute source code and tell package maintainer “build it and upload to the repo”. Closed source apps (like softmaker office) are distributed without source code, just with binary packages, simply because they are closed source and you can’t build it yourself. We can just stick with the source code for now.

jhooks reached the point when everything related to the npc animations works (that includes robes and tails) but so slow that it’s not usable for video game. Now it’s time to figure out how to get better performance but the situation is rather complicated.

Zini was working on “cell handling improvements” and was able to get nice results. That should improve game saving and loading time.

Corristo is investigating terrain rendering, and I’m very happy to see this since OpenMW now definitely lacks terrain. It can take ages to implement, though.
