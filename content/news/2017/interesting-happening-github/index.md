---
title: "Interesting things are happening on GitHub"
date: 2017-10-10T22:13:58+02:00
lastmod: 2024-01-05T16:44:06Z
slug: "interesting-happening-github"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5019
---
Another month has passed since we last updated you all with OpenMW’s latest news. Much has happened since, and I’m not going to let you wait any longer for more news.

As you might remember from the previous news post, the last release (0.42) attracted a couple of new developers to help out with the engine and the editor. We are really starting to see the effect of this now.

### Recently added features & features being worked on right now:

**Akortunov**, a relatively new developer still, is smashing bugs like a pro. He has also been working on quite a few really interesting features. One of them includes an overhaul to the pickpocket system. The old broken vanilla system will still be available for those who want a pure vanilla experience, but with akortunovs new changes, the engine will calculate the success of the pickpocketing based on weight instead of value, and you will also be able to do “reverse pickpocketing”, or in other words, place things in a victim’s inventory. Note that it is not merged into master yet, which means that the feature might end up not exactly as described above.

**Crassel** (or crussel187 on github), another newer developer, has been working on implementing an “over the shoulder” 3rd person perspective option. **[He has a successful prototype working](https://www.youtube.com/watch?v=_7xBR2rQL7s)**, and only details left to do until it’s ready to hit master. He is also working on making animation support available to our graphics engine’s native 3d model format osgb/osgt. This feature might open up a ton of new possibilities for OpenMW. It is a quite big project, so time will tell if he can make it work.

**Drummyfish**, yet another new developer, has improved the water shader by reducing some white line artifacts seen on coastlines and implemented a **[raindrop water ripple effect](https://www.youtube.com/watch?v=vJMNW58Yhy0)**. This feature is already merged, so you can try it already with a recent nightly or build from the master branch. And as if this wasn’t enough, drummyfish is continuing his path on mastering digital water by working on an overhaul of the rain and snow particle effects. As of now, rain in OpenMW has a fixed position above the player’s camera, like a small cloud that awkwardly follows you. But when drummyfish is done with his new implementation, we will no longer be stalked by rain and snow. There are some technical issues still to be solved until it can be merged however.

**Thunderforge** is no longer a new member here. When he joined the forums, he came like a prophet, carrying uncomfortable truths that needed to be told. Truths about ~~a community needing to repent~~ a launcher that needs to become **[more friendly to new users](https://forum.openmw.org/viewtopic.php?f=20&t=4372)**. He has begun working on this, and in a not too distant future, we might be directed places to buy Morrowind directly from the launcher if you do not have Morrowind installed already. How and if this should be done is still a matter of debate, so this feature could take some time before it is done.

**AnyOldName3** should no longer be considered new here either. You know him from the last news post. He is still working on his shadows implementation. It may be looking a bit funky still, but he is getting closer and closer. So far, the performance impact is impressively small.

**[Here is a video](https://www.youtube.com/watch?v=aDr7o-Ft4R4)** showing AnyOldName3’s shadows in a less-funky situation. With “less-funky”, I mean a situation where they work unusually well. In other situations, it can still look rather strange sometimes. But he’s really getting there, isn’t he?

**Chris/kcat** is a veteran in the community. He has been working on building further upon the glorious foundation of distant land that scrawl gave us. He wants to add functions to be able to more easily adjust the fog distance and make it look better with distant land. This will hopefully make our already great looking distant land look even better. There are still more to do to this feature, but if we are lucky, we can play with it in the next release.

As mentioned in the last post, **Aesylwinn** is back in action to do work on the CS. He and **PlutonicOverkill** teams up for the ultimate goal of full terrain mesh editing. Although this goal is not fully met yet, Aesylwinn has quite recently gotten his [**land texture editing feature**](https://github.com/OpenMW/openmw/pull/1427) merged into master, which means it will be available in version 0.43! Great news right? The mesh editing will probably take some time to finish, but hey – not too long ago, no one was working on this feature at all.

And one last thing. The almighty **scrawl** got so sick of the old implementation of the window manager (controlling the GUI in the game engine) that he completely overhauled it, adding new features as a nice bonus for us mere peasants. What kind of features you say? Well how about being able to navigate more or less all the menus with your keyboard? Bam! Grab the latest nightly or wait until 0.43 to test this out.

### Want to contribute?

Even though we have gotten quite a few more developers recently, it never hurts with even more. If you think you have the programming experience to help out, but don’t know where to start learning our code base, have a look at some of these wiki pages for some code documentation:

**[Developer reference](https://wiki.openmw.org/index.php?title=Developer_Reference)**

You might be extra interested in the pages about the engine’s **[architecture](https://wiki.openmw.org/index.php?title=Architecture)**, including info about the [**GUI (MyGUI)**](https://wiki.openmw.org/index.php?title=GUI_Architecture) and [**rendering engine (OpenSceneGraph)**](https://wiki.openmw.org/index.php?title=Rendering_Architecture).

But what if you’re not a programmer? We always need help with more bug testing. Run the game and [**report bugs**](https://wiki.openmw.org/index.php?title=Bug_Reporting_Guidelines).

We also need help with sorting these bug reports, aka “triaging” them. This is suitable if you’ve been here for a while and you’re familiar with how the project is organized. **[The work of a bug triager is described here](https://wiki.openmw.org/index.php?title=Bug_Triaging_Guidelines)**.

That’s it for today. If all goes well, our eminent video editor will return from doing his exams in a week or so. This means that 0.43 is not too far away now. Stay tuned!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=4688 "Want to leave a comment?")
