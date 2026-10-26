---
title: "The last days of summer"
date: 2011-09-18T13:53:53+02:00
lastmod: 2012-10-13T09:54:53Z
slug: "the-last-days-of-summer"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=97
---
jhooks was able to make hands open and close. And it’s the good news. The bad news is that with all this animation stuff performance is quite poor.

Solving performance problems is not strait forward but in theory It looks quite simple: find the bottleneck, part of procedure that runs slowest; then try to fix it. If needed: repeat. GUS already demonstrated this tactic. The worst thing that we can discover is the bottleneck function that can’t run faster but investigation just started and nothing like that must happen.

But at least It works! Keep this in the mind all the time.

Bullet optimisation also slowly moves forward. K1ll still suffers poor performance on his system and helps GUS to find the problem. The situation is not clear at the moment, this can be bug in the bullet itself.

OpenMW 0.11.1 is late because We lack linux builder. There are no word to express what I think about it.
