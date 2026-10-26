---
title: "The week in review"
date: 2013-01-14T08:08:37+01:00
lastmod: 2024-01-05T16:34:17Z
slug: "week-review-34"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2376
---
Hi, I’m back. Did you missed me?

We had a nice year. Although we didn’t reach version 1.0.0 (codename “Answer to everything”), we still had major progress in many areas, especially (but not only) those related to the GUI. OpenMW now feels much more complete than a year ago. This also means that 2013 could be the “make or break” moment for OpenMW after these 4+ years of development.

The challenges are clear, with the largest areas needing work being: AI (this is the first time I’m actually glad Morrowind’s AI is so primitive), multiple game files (it’ll take a long time to finish for sure) and the super-ultra-hyper-critical animation/physics/player control system integration.

The physics/animation/player control integration stands in the way of implementing combat, spell casting, sneaking and countless other gameplay elements. Currently Chris and nopoe are working on it, and doing a fine job despite the complexity and cryptic nature of the task.

There is still a lot to be done in the animations area, but surely less then a week ago, as animations can now move npcs. Additionally, there have been improvements to skeletons and chris is planning to make a brand new character controller. We also have LizTail, from Niftools, to help us understand how the gamebryo engine works.

We saw other major changes to OpenMW this week. The decision was finally made to throw out OIS and replace it with SDL to solve issues with moving the cursor outside the game window. AngleBracket has already made the new cursor work. SDL is available on almost all operating systems and very attractive, because it can be used as an optional audio decoder along with ffmpeg. FFmpeg is easily the better option for the audio decoder player since it allows us to play bink videos but the problem is that it’s a major pain to build on windows with MSVC (no support for C99, thank you very much dear Microsoft).

potatoesmaster corrected GetDisposition so it will return actual value, and not base value.

wheybags annoys reported a bug: you cannot wear boots in openmw. ;-) That’s okay, because we still lack the multiple ESM support so there is no bloodmoon (where boots are a necessity.)

OpenMW should work now with Ogre 1.9 thanks to the mighty scrawl. Also: alchemical effects should hide depending on the player alchemy skill level. Scrawl also had a large number of other commits.

blunted2night (nice nickname btw) has improved the startup performance by a factor 2. Awesome!  
potatoesmaster (even better nickname) started a UTF8 component rewrite. It’s getting better.

And Sir_Herrbatka feels more and more lost in the track of openmw development… :(
