---
title: "Interview with Capostrophic"
date: 2019-09-26T21:47:12+02:00
lastmod: 2024-01-05T16:22:46Z
slug: "interview-with-capostrophic"
categories: ["Interview"]
authors: ["lysol"]
guid: https://openmw.org/?p=5346
---
Hi everyone.

It is time for another interview. This time, I (again, Lysol) had a chat with Capostrophic, a guy many of you might already know of, him being one of the most active developers we have these days. Let’s get to the interview!

**Who are you?**

I’m Alexei, a high school student from Central Russia, planning to study and work in the software engineering field. I’m best known as “Capo”.

**When and how did you discover the project?**

My chat logs say this happened in mid-2015, shortly after I first had the joy of *really* discovering The Elder Scrolls series. Discovering OpenMW was a sudden thing, but I quickly became intrigued with it. I never had any contact with Ogre versions until much later and immediately started using 0.37.0 nightly builds. I was rather impressed by OpenMW’s functionality by then – albeit I was disappointed by the lack of the water shader which became a thing again some months later, and it was beautiful. Following GitHub development of OpenMW was a rather enjoyable experience, and although I couldn’t participate in it, I wished I could, to get some coding experience for the future’s sake and to help bring about 1.0.

**Sounds like you’re saying you didn’t really do much coding before OpenMW. How much experience did you have back when you discovered the project?**

In 2015 zero, hello world coding proficiency doesn’t count.  
  
 In 2017-2018, when I attempted to contribute in some way apart from disappointing Atahualpa with intense procrastination regarding Russian translation for release trailers, still zero, but at least I could read C++.

**I must say it is really impressive to go from subtitle translator with zero experience to one of the most active developers we have around. So tell us, what are you working on right now?**

In general I try to do bug fixes and implement minor features in parts of the code base I have a certain knowledge of. You may notice that my changesets are rarely large, but rather short and probably sweet. This may stop being the case in time.   
  
Right now my long term project is extending the NIF loader to support meshes from later Bethesda games. No, I’m not cc9cii, this is a separate effort, not based on a revision of OpenMW from 2015. It will take a lot of time, but it’s fun.  
  
No particular short term project apart from trying to get 0.46.0 to release sooner but not be too unfinished.

**Has OpenMW lived up to what you expected when you became involved with the project?**

Yes. Psych. No, or I wouldn’t have tried to contribute.  
  
I mean, yes, it’s not difficult to tell it has gone long ways to be what it is now (or what it was back then), but it still has long ways to go – or infinite ways, given that it has limitless potential – and you can’t judge something as a complete project if it isn’t finished.

**Indeed. So what kind of cool stuff do you expect OpenMW will give us in the future?**

We’ll finally get a multiplayer implementation for Fallout 76.  
  
But really, it’s having a cool free as in speech cross platform framework for Bethesda-like sandbox-with-RPG-elements games for which even non-programmers can make their own game without any coding knowledge.  
~~That somehow allows you to run Skyrim on Raspberry Pi.~~

**Any cool stuff you plan to implement in the future that you haven’t already started working on?**

A game for OpenMW. VulkanSceneGraph port. Extended ESM reader. Not in a particular order and it’s not the matter of coming years.  
  
More realistically, some NIF features that we’re currently missing.  
  
Also Morrowind-like bumpmapping, actually, with either MCP and vanilla behavior available. Lots of legacy assets require it even if we have normalmapping, I found it weird that *someone* would say everyone will just continue to make assets for Morrowind’s *[modded fake]* bumpmapping and nobody will care about *[real native]* normalmapping. That’s far-fetched and not true and also it didn’t happen.  
  
I don’t want to deal with the editor just yet.

[**Note to readers: That *someone* being yours truly, Lysol the speculator. I was wrong, I know. With legacy assets, Capo means the old bump mapped texture packs we’ve come to refer to “fake bump maps”, that currently appear shiny in OpenMW. When normal mapping was a new thing for OpenMW, Me and a few others were convinced that if we support the old, bad way of doing it, people will just continue to do bad normal maps and no one will bother to convert old mods to the newer native way of doing it. Capo did not believe this theory. Time eventually proved him right.**]

**Thanks for allowing me to take some of your time!**

So as we stated last time, there has been a lot going on at Git, so we will try to provide you with a news post later. Hopefully sooner than later.  
   
 Take care!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=6381 "Want to leave a comment?")
