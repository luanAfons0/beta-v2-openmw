---
title: "Interview!"
date: 2012-06-04T17:18:21+02:00
lastmod: 2024-01-05T16:29:48Z
slug: "interview-zini"
categories: ["Interview"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=959
---
Since our [last interview](http://freegamer.blogspot.fr/2009/09/openmw-interview-with-nicolay-korslund.html) is 3 years old, time has come for new one with some of our developers: zini, scrawl and Ace.

**Hello, who are you?**

> **Zini**
>
> Zini. More mundanely know as Marc Zinnschlag. Lead Developer of OpenMW a.k.a. the Benevolent Dictator.

> **Scrawl**
>
> I’m a hobby programmer mainly interested in graphics programming and [shader](https://en.wikipedia.org/wiki/Shader "shader") development.

> **Ace**
>
> I happen to be Ace, the resident Windows builder.

**How did you discover the project?**

> **Zini**
>
> I honestly don’t remember. Been a long time ago. I guess I read about it in some forum. OGRE maybe?

> **Scrawl**
>
> Initially I discovered it a long time ago (some time in 2009 or so when the mailing list was created). Don’t remember where I saw it, probably a blogpost or article. Since then I always followed the news updates and was very excited about it (Morrowind being my favorite RPG and disappointment with the newer Bethesda games), but I never felt I had the skills to contributing. Back then all I knew was a little web development, I didn’t know C++ (or even D)

> **Ace**
>
> I think I was discussing open-source remakes with a couple of friends when I found it, it was still in D back then.

**Why are you contributing ?**

> **zini**
>
> I am one of the developers of a Morrowind-TC (total conversion), namely [U9: Redemption](http://cfkasper.de/ultima/index.php). That obviously made OpenMW interesting to me. While we were working on Redemption we ran into more and more problems, because of the inherent bugginess of Morrowind. It was manageable at first, but got worse over time.
>
> I started by doing some bug reporting and privately providing an internal snapshot of Redemption to Nico (the previous lead developer) for testing. Later I started to help with coding.
>
> And then we ran into one big disastrous bug in Morrowind, that we somehow did not notice before :  
> In Morrowind, if you move a NPC to a different cell via a script instruction and the NPC’s original cell wasn’t loaded, the NPC will be loaded only partially. That will result in odd behaviour and a crash, if you talk to the NPC.
>
> We honestly did not know that and it didn’t show up in the (small scale) test setups we had. Broke at least a dozen features.  
> At this point it became clear, that we wouldn’t be able to release the game with the features and at the quality level we had planned. So I shifted a lot of free time from Redemption to OpenMW and even took over leadership when Nico dropped out.

> **scrawl**
>
> In the meantime I had gathered quite some knowledge about game development in C++ (I started making some small games in python and then moved on to C++ as I got interested in 3D graphics). I have also worked a lot with the OGRE engine which is used by OpenMW (and I think is a pretty cool engine).
>
> I have started contributing to OpenMW a few months ago because I felt someone with an expertise on graphics was missing – most easily supported by the fact that in 4 years of development, no one even bothered to make a simple sky renderer (which was one of my first contributions).

> **Ace**
>
> The project needed a windows package and at the time I happened to have a fully working build environment.

**What are you currently working on?**

> **Zini**
>
> [Planning](http://openmw.org/forum/viewtopic.php?f=20&t=711&p=6261&hilit=release#p6261), scheming, giving directions and assistance, [worrying](http://openmw.org/forum/viewtopic.php?f=7&t=720&p=5760), [swearing](http://openmw.org/forum/viewtopic.php?f=6&t=625) and occasionally cleaning up other people’s garbage. The usual thing a lead developer does.
>
> On the coding side of the job I am currently busy with sorting out the last bits of fallout from a rendering-subsystem refactoring we had a couple of releases ago.

> **scrawl**
>
> I will have to hold my horses with implementing kick-ass graphics until OpenMW 1.0 is released (more below). So currently I’m mostly working on GUI tasks. I’m quite familiar with [MyGUI](http://mygui.info/ "MyGUI") (the GUI engine used by OpenMW) and have only recently cleared up a big amount of incomplete or non-optimal things in the GUI. Now I want to implement all missing GUI windows completely and in all detail (currently working on the alchemy window)

> **Ace**  
> I’m working on getting the loaded ESM records to save again, haven’t had much progress in a while (I blame university) but I’m hoping to have it done before the 0.16 release.

**What’s the weirdest bug you’ve encountered so far?**

> **Zini**
>
> Nothing major. As bugs go, OpenMW has been pretty tame so far.
>
> Well, it is a bug in Morrowind and not in OpenMW, so it doesn’t really matches the question but anyway: In Morrowind, if you move a NPC to a different cell via a script instruction and the NPC’s original cell wasn’t loaded, the NPC will be loaded only partially. That will result in odd behaviour and a crash, if you talk to the NPC.  
> We honestly did not know that and it didn’t show up in the (small scale) test setups we had. Broke at least a dozen features.

> **scrawl**
>
> Can’t answer this one really, nothing big that i’ve encountered. The code base is pretty well organized thanks to our pragmatic leader which apparently has saved us from a lot of trouble.

> **Ace**
>
> I happened upon a weird one related to windows building around the time the audio refactoring happened, maybe a bit later. At the time the project built without a single error but still failed to link because of a supposedly missing function. I dug through the file in question for a while, checking and double checking that the function in question did in-fact exists.
>
> In the end, after testing everything I could think of (Including renaming the function, moving it, changing arguments), I decided to try switching the forward declaration of the argument type from a struct to a class.  
> And lo and behold, suddenly the linker can find the function and successfully link the executable.

**What do you dislike about openmw?**

> **Zini**
>
> Nothing major again. The project had a somewhat messy start, but we have that under control now and its nothing more than a minor annoyance.  
> I don’t like how the work on the [planned editor is delayed](http://openmw.org/forum/viewtopic.php?f=7&t=720&p=5760) again and again. Everything else looks reasonably good.

> **scrawl**
>
> The lack of progress, overall. A wrong programming language being chosen following a rewrite in another language causing a huge slowdown. Developers going MIA and not coming back. Of course you can’t demand anything like that from an open source project, but I still find it a bit disappointing that after 4 years there is still no playable version. Luckily there’s been a substantial increase of development speed in the last months, so I’m very optimistic that OpenMW will eventually be released (but of course, never finished).

> **Ace**
>
> The fact that it’s not in a fully playable state yet.

**How do you see a future of the project?**

> **Zini**
>
> Finishing OpenMW 1.0 obviously, which will be a functionally complete replacement for Morrowind. After that we need to focus on a new editor, because having a construction set replacement available at source level is a requirement for almost any substantial improvement we are going to do after 1.0.
>
> Then I would like to gradually improve OpenMW beyond what Morrowind can do. Extending existing features, moving away from hardcoded functionality, removing limits. That kind of stuff.

> **scrawl**
>
> The future.. I guess that’s the part we’re all most excited about and keeps us motivated to work on OpenMW. After OpenMW 1.0 is released, I want to bring the technical graphics in line with newer games such as Skyrim. Some people might think that improving graphics is not possible without providing better assets, but there’s a lot of stuff to go with. Some inspirations can be found in the [MGE](http://sourceforge.net/apps/mediawiki/morrgraphext/index.php?title=Main_Page) (Morrowind Graphics Extender) project.
>
> But, from a developers point of view MGE totally SUCKS. Being able to design the whole rendering backend from the ground-up enables us a lot more possibilities. Only to mention a few things, that are all easily possible with OGRE and that I’m most excited about:
>
> - Seamless and infinite world [LOD](https://en.wikipedia.org/wiki/Level_of_detail)
> - Realtime soft shadows, deferred lighting with point light shadows, [Ambient occlusion](https://en.wikipedia.org/wiki/Ambient_occlusion)
> - Volumetric sunlight scattering ([Godrays](https://en.wikipedia.org/wiki/Crepuscular_rays))
> - True High Dynamic Range ([HDR](https://en.wikipedia.org/wiki/High_dynamic_range_imaging))
> - High quality water rendering with real, moving geometry
>
> Once these basic things are done, it really depends on the modders if the graphics will be improved further. Supporting newer mapping techniques (e.g. normal/parallax/specular maps) is no big deal at all, but there have to be some modders who actually produce these assets.  
> Being able to bring OpenMW to state-of-the-art graphics will not only increase immersion with the game world, I also think that it might lower the “entry barrier” to play morrowind and attract more players who didn’t discover morrowind for themselves yet (“Ugh, that looks like 2002… I’m not playing that”)

> **Ace**
>
> Hopefully breathing more life into the Morrowind modding scene, I’ve had a lot of fun in there. Even though none of my mods have ever been released to the public.

**If you could change anything about Morrowind, what would it be?**

> **Zini**
>
> If you mean Morrowind as a game: Everything or nothing. I often hear people saying that Morrowind is a great game. I don’t agree with that. I think Morrowind is coming damn close to being a great game in every aspect, but it just doesn’t manage to make the final couple of steps, in literally every aspect (okay, almost; the UI sucks and the lore rocks).
>
> If you mean Morrowind as a modding/development platform: The whole implementation and the editor (which is actually what we are doing with OpenMW).

> **scrawl**
>
> Making it open-source. There are so many things wrong about morrowind that it can’t simply be fixed by changing “one” thing. If Bethesda released the sources that would simplify our work a lot (also considering all the game mechanics formulae that we have to [reverse-engineer](http://openmw.org/forum/viewtopic.php?f=2&t=766&start=20))

> **Ace**
>
> I would change their rendering engine so the game doesn’t run slower than Skyrim on my high-end desktop.

**One more thing to say?**

> **Ace**  
> Avoid angering the gazebo gods.

**Thank you for your time.**
