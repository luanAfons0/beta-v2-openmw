---
title: "Slice of OpenMW (1)"
date: 2016-10-20T06:23:24+02:00
lastmod: 2024-01-05T16:45:15Z
slug: "4709"
categories: ["News"]
authors: ["DestinedToDie"]
guid: https://openmw.org/?p=4723
---
Recently a feature regarding [non-portable lights in player inventory](https://bugs.openmw.org/issues/2042) was closed.

If you’ve never heard of this before, that might be due to the curious fact that this is used only once in the entire game of Morrowind – with Trueflame, the legendary sword of Nerevar Indoril.

[![n9rfc3p](https://openmw.org/wp-content/uploads/2016/10/N9rFc3P-300x169.jpg)](https://openmw.org/wp-content/uploads/2016/10/N9rFc3P.jpg)

As you can see, having the sword equipped lights up a small area around the player. The blade itself isn’t the actual source of light. It has a script attatched that adds an invisible light item into the player’s inventory, which then makes the player glow.

This got me thinking. In many games a radius of light surrounds the player. If one were to make a mod or an entirely new game, they could use the abovementioned mechanic for exactly that purpose. So I did. But what I saw was not what I expected…

[![tvouomq](https://openmw.org/wp-content/uploads/2016/10/TvoUoMq-300x169.jpg)](https://openmw.org/wp-content/uploads/2016/10/TvoUoMq.jpg)

I found a bug. Seemingly anything that uses a normal map gets lit up to full brightness, achieving an albino look. The bug report is filed [here](https://bugs.openmw.org/issues/3597) and will hopefully get a fix some time in the future.

3 hours later Scrawl has already fixed it! I retry my experiment and go for a small pink aura for my invisible character.

[![wqdudzf](https://openmw.org/wp-content/uploads/2016/10/WqdudZF-300x169.jpg)](https://openmw.org/wp-content/uploads/2016/10/WqdudZF.jpg)

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3863)
