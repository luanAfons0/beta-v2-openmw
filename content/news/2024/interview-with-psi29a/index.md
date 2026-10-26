---
title: "Interview with psi29a"
date: 2024-04-11T01:01:25+02:00
lastmod: 2024-04-11T12:28:07Z
slug: "interview-with-psi29a"
categories: ["Interview"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=6566
---
## Hello and **who are you?**

Resident cat herder, metaphorically speaking and a dad, literally speaking. I, in fact, have no cats but it seems that I’m in charge of 3 children, a few teams at work and other teams spread all around the planet who work on FOSS stuff. An ex-patriot who settled in Europe and rebuilt his life. When there is free time, I do in fact play games, but I like hacking, tinkering and travelling more.

## **When did you join the project and why?**

I’m a little fuzzy on the details, but it was likely around 2011, when 0.11 was released. I provided Debian and Ubuntu packages for the project. At this point, I was operating under the pseudonym BrotherBrick — to keep my work on OpenMW separate from my day job. I’ve had psi29a since the 90s, so once I talked to legal at my work to make sure everything was okay, I switched back to using my old handle. I had lurked around earlier of course because I was totally into finally completing the main quest while running Morrowind natively on Linux. So that was my overriding goal. Years passed, but I’m still putting off completing the main quest, which is probably why I’m still around.

[This](https://forum.openmw.org/viewtopic.php?p=1023#p1023) was my first post on the forum I think, in 2011.

## **I’ve been told that you’re the one currently wearing the “Benevolent Dictator for Life” hat, and that you’re the third hero to do so. Is that true? And if so, is it heavy?**

It is. Not all heroes wear capes. That being said, it’s more like being a glorified cat herder. FOSS developers will do what developers think is cool, neat or interesting to work on. As a hobby project, as Project Lead, one can only give guidance, make suggestions, propose solutions, represent the project to the outside world, remove roadblocks and in the end still get unanimously outvoted, which is fine because the OpenMW doesn’t really need a BDFL in the traditional [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) sense.

Much of the work comes down to coordination and communication between developers, with upstream libraries we use and downstream in distributions. We can and have provided fixes for many of the libraries we use and also provide patches downstreams to fix issues that would prevent OpenMW from running.

Sometimes I have to put on my dad hat or my therapist hat and help developers suffering from burn out or personal issues. I mean, I’ve known most of the developers for over a decade and bonds form. They are all welcome to the 1.0 release party at my house :)

## **So you do plan on continuing to lead the project for the foreseeable future?**

&lt;\_&lt;  >\_>

I’m not as involved as I would like to be for such a role. I think I only got here because of how long I’ve been active in the project, not necessarily a master of shadows or a master of lights. If new leadership wants to step forward, I’ll support them.

## **What have you been working on recently?**

Recently not so much; I had a small break with the project to focus on my family. I can’t express how much I value boundaries, setting them, having a good work life balance for one’s own mental wellness. A few months ago, I reconnected with OpenMW thanks to the positivity of the community and developers which I’d like to think I helped foster.

While away, I reconnected with an email penpal and worked on [vsgopenmw](https://github.com/vsgopenmw-dev/vsgopenmw): a fork of OpenMW that runs on Vulkan, specifically [VulkanSceneGraph](https://vsg-dev.github.io/vsg-dev.io/), the successor of [OpenSceneGraph](https://openscenegraph.github.io/openscenegraph.io/) which we use as our rendering middleware library. It was nice to collaborate again, even though it was slightly unorthodox. Many patches were sent upstream to VSG and vsgopenmw now also runs on macOS via MoltenVK and Linux.

I guess I’ll let the cat out of the bag here and mention that I’m currently working on the OpenMW 1.0 roadmap. It’s been going on for the past few months and the plan is to release this roadmap sometime after 0.49’s release. Its release will not mean that 0.50 will be the first 1.x release, but it will make it a point that OpenMW is taking a “1.0” release seriously and setting things up for getting the project across this threshold and beyond. It’ll also be the opportunity to make the fabled “1.0 release party” happen.

## **Has OpenMW lived up to what you expected when you first discovered the project so far?**

Absolutely, I feel like OpenMW reached “1.0” for me in 0.46, when it was mentioned to me that I could theoretically complete the main quest line with a reasonable approximation of the original spirit of Morrowind, just without the constant crashing. It’s gone now above and beyond with all sorts of graphical (object paging), scripting (Lua), physics (threaded) enhancements. That it does so on the three major systems is a bonus, because while emotionally I only care about Linux, in practice I have to care about Windows and macOS as well.

When I first discovered the project, Windows was more of a novelty and most developerss used Linux, no macOS work to speak of. I think I floated around T-posing in a cave for a long time, and exteriors only had buildings with no terrain. So we’ve come a long way.

## **What’s the current or the next big thing you’re hyped about?**

Seeing Lua support maturing is wonderful, however, the next “big thing” I’m hyped about is VSG support. For me, it’s a way of future-proofing Morrowind. OpenGL is dead, it’s not even being maintained and in some cases like macOS, it’s been abstracted away with another layer of bugs upon the existing ones.

There are many other things to be hyped about as well including VR that exists in another long-lived fork, and multiplayer, [TES3MP](https://tes3mp.com/). That being said, with the amount of work going into de-hardcoding for Lua, I’m waiting to see what cool stuff the community comes up with.

## **Speaking of Lua, what’s your opinion on [MWSE](https://mwse.github.io/MWSE/), and also [MGE XE](https://www.nexusmods.com/morrowind/mods/41102)? Shall we expect them to be ported one way or the other unto OpenMW?**

MWSE and MGE XE are a great bit of kit; it’s great for extending Morrowind.exe and giving modders an amazing amount of freedom. I believe there continues to be value in continuing work on MWSE, specifically in addressing the stability issues. Hooking into parts of Morrowind.exe that are prone to failure and rewriting it to be more failure resistant would go a long way in addressing one of the largest pain points of playing Morrowind on the original engine. Major thanks to all involved in these two projects, those who work on them have also indirectly helped OpenMW with research.

Saying that Lua is similar across MWSE and OpenMW is a misnomer; what’s been done is that we have a Domain Specific Language (DSL) tailored to each engine. There is no way to reconcile this as the underlying engines are not the same, which is good from a legal standpoint as it proves to Bethesda that OpenMW is a clean-room reverse engineering effort. This might not be a good thing to hear to end users who really don’t care, but this is very important to us to keep the project in a safe legal position.

Some of the work done for both MWSE and OpenMW can be bridged though, as we could sit down and define higher-level API that modders can use that in turn would make platform-specific calls to either MWSE or OpenMW. In theory a determined modder or group of modders can already build off what both projects have done and create the common API. I think both projects would support this endeavour and help provide support.

As the saying goes, don’t let your dreams be dreams.

## **Any favourite mods?**

Oh gosh, the original one that got me into OpenMW was [Zini](/news/2012/interview-zini)‘s ambitious [Ultima](https://en.wikipedia.org/wiki/Ultima_%28series%29) Total Convertion which originally used Morrowind.exe to remake Ultima 9 with the original script/ideas. [Ultima IX: Redemption](https://web.archive.org/web/20160902030238/http://www.titansofether.com/cfkasper/media.php) is what brought Zini to OpenMW as it was clear that Morrowind.exe couldn’t handle the vision. You can hear more about this with Zini’s interview with DarkElfGuy [here](https://www.youtube.com/watch?v=d8XSeMYgmU4). This was also why he was adamant about having OpenMW-CS, our editor.

So while the project was abandoned, the assets were released and I contacted as many modders as I could find and got their permission to release a ‘libre edition’ that allows anyone to use the assets based on the CC-BY or even CC0 licences. You can download them [here](https://github.com/OpenMW/UIX-R).

I also want to throw out how much I respect the Tamriel Rebuilt team and all the blood, sweat and tears they’ve poured into their labour of love. Same goes for the MWSE and MGE XE contributors.

## **If you could change one thing about OpenMW, what would it be?**

Nothing… really, well, maybe the ability to “play” other TES games and Fallout. ;)
