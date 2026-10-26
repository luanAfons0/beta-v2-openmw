---
title: "The brand new website of OpenMW"
date: 2011-08-14T16:05:59+02:00
lastmod: 2022-09-04T10:15:24Z
slug: "the-brand-new-website-of-openmw"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=58
---
Good day and welcome on our brand new website in brand new [openmw.org](https://openmw.org) domain!

Since Lordrea went MIA and our wiki was still dead we had no choice but create new site, with new administrator.

Wiki is partly restored and we hope that we will be able to rewrite some parts.

All credits goes to [Lgro](https://github.com/lgromanowski) who did this excellent job on his own. Currently he is importing all posts from the old forum to [archive them on the new forum](https://forum.openmw.org/viewforum.php?f=12).

The look of both openmw.org and openmw.org/forum may be altered in future but odds are that you’ll notice it when the time will come.

The old forum is closed? We can’t make redirection to openmw.org or ban posting on old forum, so please: just forget about it.

When it comes to coding? As usual [jhooks](https://github.com/jhooks1) rules the universe: the performance killing bug was fixed and fps are now ok. Actually it took less time than I thought. The hopefully last problems to fix:

> NPCs are positioned higher than normal. This has to do with the npc positioning code, which is composed of one track of the bip01 transformations applied to standard ogre animation.
>
> Gauntlets aren’t positioned correctly. Normal body part hands are though. If I change the translation and rotation offsets for gauntlets it should fix this.
>
> … and robes

I must admit that jhooks is our official MW animations guru.

MWrender refactoring turned into debugging? Since man is not a machine and makes errors every code written by human probably have errors. The real problem is that it’s easier to look for a bug in smaller portion of code so If bug shows up after making any change in code it’s better to fix it first to save time later.

And yes: inventory GUI is progressing again. I forgot about it but this is the big thing indeed. It should reach usable state soon.

OpenMW 0.11.0 is coming but I have no idea how much time it may take to finally release this version.

I guess that this is it. See you next week.
