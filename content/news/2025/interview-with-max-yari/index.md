---
title: "Interview with Max Yari"
date: 2025-06-27T22:44:37+02:00
lastmod: 2025-06-29T13:26:05Z
slug: "interview-with-max-yari"
categories: ["Interview"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=6791
---
### Good morning, who are you, and how are you today?

Hi! Name’s Maksim, also known as Max Yari.

I currently live and study in Germany. I have a past professional background in web development and a long-running semi-passive interest in game design. My current professional interests lay in the vague direction of some weird interdisciplinary scientific research in Biology, Psychology and Arts.

For the past few years I’ve mostly been busy squinting hard at the question of “So, what do I really want to do with my life?” as well as coding, making music, and wasting time.

How am I doing? Well… not too bad, actually.

<!--more-->

### When did you join the project and why?

Probably around 2–2.5 years ago. Despite only having a surface-level understanding of C++, somehow an idea of bashing my head against the OpenMW codebase tickled my fancy.
Weirdly enough, I have no nostalgia for The Elder Scrolls III, and [Gothic II](https://en.wikipedia.org/wiki/Gothic_II) and [Oblivion](https://en.wikipedia.org/wiki/The_Elder_Scrolls_IV:_Oblivion) were the RPGs of my childhood, but… there’s some very special combination of jank and possibilities contained within Morrowind and OpenMW.

Really what attracted me was specifically the prospect of introducing something new into an existing project with its own community. Something that will make the game feel and look better, will be appreciated, and will tickle a narcissistic part of me. One of the ideas I had at a time was animation blending—something that would improve the jarring (and non-existent) vanilla Morrowind animation transitions.

My C++ knowledge is certainly not on the level that I could truly feel comfortable in such a leviathan of a codebase, but to an extent that fact also provided some thrill of a challenge.

In the end, however, I essentially abandoned it, hoping someone would pick it up. And that’s exactly what happened – it was later picked up and polished by [cykoder](https://gitlab.com/cykoder) and became part of OpenMW 0.49!

Apart from that, my contributions to the engine are mostly minor Lua API bindings (i.e. new functions for Lua modding), which I usually add when I need them for my own mod ideas, as well as a few bigger experiments, such as rigid body physics and inverse kinematics for those lo-o-ong NPC legs, both merely very unpolished experiments. No plans on getting them into a mergeable form – they are more of a proof of concept for some other programmer to hopefully pick up and reuse.

### So you’re making mods for OpenMW?

Yes, at the moment I enjoy it more than working with the engine code. I enjoy having no one to answer to and the freedom to do cool things and introduce atrocious bugs. I also really like OpenMW’s Lua API: it’s not overly complex, and it’s reasonably easy to add new features engine-side. On top of that, people of the Lua community are quite supportive and excited about the things they do.

All the mods I make are based around some vague aesthetic ideas, vibes and gameplay mechanics. Most often I make mods that fill a gap in the existing game mechanics, something that completes or expands upon existing systems — makes combat feel better, makes movement and animations more fun; in short, replaces that what was rigid and lacking with something smooth, neat and flowing!

### Has OpenMW lived up to what you expected when you first discovered the project?

Both yes and no.

The sheer field of possibilities both in-engine and in Lua modding is quite astounding, and the possibility to create things which can be used right away and appreciated by the community is quite exciting and flattering.

But on the other hand, I was expecting more collaboration and excitement within the engine development part of the community. Contributors at large prefer to keep to their own areas of interest, and it’s fairly rare to see anyone joining forces to work on a singular feature. On top of that, the codebase is sometimes hilariously intimidating.

That was my initial impression, and to an extent that deterred me from the engine side of things.

In reality, though, there are good reasons for all of that, but currently I don’t feel as excited about doing big engine contributions and mostly stick to smaller edits and Lua.

Although I want to be frank with my impressions: I also don’t want to paint an unfairly negative picture. The community is rich with quite a few great people, people willing to bounce ideas, share and help. I certainly don’t want this to intimidate anyone looking to contribute or start modding!

### What’s your backstory as a creative? You mentioned early on that you had some experience as an animator.

Although my education background is (or rather was) mostly of a technical/engineering kind, I’m often attracted to things creative, well, as most people really are I guess. My introduction and attraction to coding comes from fooling around with programmable chips in [Garry’s Mod](https://en.wikipedia.org/wiki/Garry%27s_Mod) in my teens. It’s essentially a Source Engine physics sandbox where player can spawn items, attach them to each other and do some light visual programming or even scripting to make them do various things. I was following a tutorial on how to code a simple force application script to make objects chase other players. I was in an absolute awe that it’s possible to write a bunch of text into a text window and then see that text just do things for you… and even annoy other players for you! In fact, that pushed me towards frontend web development, where I worked plenty on simple interactive 2D animations, motion design, and even some light game dev. My introduction to 3D animation was making a rapier combat moveset for [The Returning](https://www.gamepressure.com/download/gothic-ii-night-of-the-raven-the-returning-v20-mod/z1c365), a mod for a beloved game of my childhood, Gothic II. The original “Returning” moveset for rapiers was quite sad and broken, practically non-existent, so it was a great opportunity to try my hand in 3D animation. I was quite proud of the result – it turned out to be this very simple yet quite stylish, almost “Princess Bride”-like, fencing moveset. It’s probably still a part of The Returning.

In the past… maybe five years… I also started a few Unity game projects with friends of mine. Some of them might be finished one day, others are completely abandoned. My only project that saw the light of day is this short game jam game called [sustenance](https://madelinevisconte.itch.io/sustenance). Try it if you have time. It’s probably around 20 minutes long and has a fairly interesting ethereal vibe to it.
But honestly, I don’t have a lot of professional game dev aspirations. I certainly don’t want to work in a big studio, as most of the game industry (or the industry of anything really) is way too commercialised and crooked. I like game design for the purity of excitement it can bring both to a designer and player, for sharing of ideas, vibes and emotions, but it also has a lot of complications and takes a lot of time. That’s probably one of the reasons I was drawn to OpenMW modding – one can implement something fun rather quickly and doesn’t need to build a whole game around it before it can be used and abused.

Overall, with time, it seems that I’m drifting more and more towards pure creative endeavours. Last year, I found myself composing music. I was interested in that for a very long time, but never got the guts to finish and release anything.
But it’s very lovely when one can overcome the ever-present desire to chase the “proper” ways and the “right quality” of things—the flow of simply being and expressing something intangible, although fairly rare, is simply magical. I would love to share my music, of course. You can find it all on my YouTube channel, but here’s a [playlist](https://www.youtube.com/watch?v=6H9CQNAq6ts&list=PLLMazvb2sGBNjBARAFaVNIf3NtWTF-sd4) that contains most of it. It is most likely very unfitting as mindless background noise, but if you are willing to give it proper attention, I’m certain there are some interesting things in there \~.

### You’ve made quite the rounds on the Internet (80.lv, PC Gamer…) with your Lua-powered physics mod. Can you tell us a bit more about it?

Sure!

I feel like in my previous responses I brought up some sensitive topics, so let me try and be light about this one.

It’s “kind of” physics! Ha!

If you understand basic Newtonian physics–gravitational force, acceleration, velocity—you already understand what 50% of this engine does. Add simple collision detection on top of that and use some basic trigonometry to bounce objects off of surfaces, and you got yourself a very rudimentary Quake I age physics engine! Lua Physics mod is slightly more complex than that, but only slightly. It can (or should be able to) handle a dozen (or a few) objects bouncing around without much of any performance impact, but it can’t do anything “complex”. It can’t do ragdolls or cloth physics, it can’t even precisely collide simple boxes—for Lua Physics everything is a ball. But it doesn’t need to be complex to be fun. It doesn’t need to be complex to, for example, drive projectiles, or visual effect debris, or meat gibs! And the good thing about it is that it exposes physics functions to other developers, so other mods can implement practical or fun things on top of that physics framework.

I also like how the sound effects turned out. They were recorded and edited by my friend [Nimlos](https://nimsound.ru/) and me, as well as scavenged from [freesound.org](https://freesound.org/). Sound effects in general are often underappreciated—it is usually them, and not the visual effects, creating the bulk of the vibe. In Lua Physics, there’s sometimes an almost ASMR-like quality to the sound effects, which I’m really happy about. And it’s just a giddy feeling to know that some of those were made by me and my friend dropping, crumbling, shuffling, hitting and tapping things.

On the subject of my mod being picked up by some publications: the write-ups gave me an impression of being fairly uninspired, but it was indeed quite flattering and unexpected nonetheless.

### Besides just your physics mods, you’ve used OpenMW’s Lua API in ways nobody else has dreamed to do yet, with ReAnimationV2 and MercyCAO. What’s the next wall for you to break down, OpenMW or no?

Oh yes, ReAnimation does some fairly weird things to allow those alternate attack animations to play. The engine gets upset if an attack animation gets fully replaced, so instead of doing that, ReAnimation jumps through some hoops to hide the original animation without actually removing it.

Mercy is also fairly interesting, but more on the side of the tech behind it. I scavenged some open-source projects, polished them and brought them together to create an [OpenMW-Lua-compatible behaviour tree framework](https://www.nexusmods.com/morrowind/mods/55062?tab=description) with a [visual editor](https://github.com/MaxYari/behavior3editorplus). Behaviour trees are one of the staples of an NPC behaviour design in game dev: they avoid piles of spaghetti code and provides some visual ways of designing NPC actions and decision-making. And of course the editor and the library can now be used for other Lua things – OpenMW, MWSE or anything else. Maybe one day there’ll be people bold enough to use it. But for now it only powers my Mercy shenanigans.

So far, I’m not planning to break down any walls. I usually make mods during bursts of motivation/inspiration, and for now I’ve largely had enough and my latest burst just ended. Although when/if I feel like it again, and if the Lua API allows for it, it might be interesting to look into some advanced movement mechanics: wall runs, wall jumps, slides and other ways to make the world traversal a bit more fun. Maybe I’ll even come back and add some animations to ReAnimation or otherwise… time will tell.

### What’s the next big OpenMW thing you’re super excited about?

0.49 release! Currently, 0.49 is preparing for the release, so no new features are getting added, and only bugs are getting fixed. But once it’s out, the floodgates for new features will be open again and the age of 0.50 development will begin!
To name a few, I’m quite excited about:

- [Mads Buvik Sandvei](https://gitlab.com/madsbuvi)’s spellcasting and combat dehardcoding, which will allow proper modding of combat and spellcasting.
- [cykoder](https://gitlab.com/cykoder)’s [rewrite of physics in Jolt](https://gitlab.com/OpenMW/openmw/-/merge_requests/3919), a modern alternative to Bullet Physics, which will eventually allow for cloth physics and ragdolls.
- Eventual optimisations to the rendering pipeline and Lua that are slowly being worked on. There’s still potential for a significant performance boost, as far as I know!
- Oh, and I’m quite excited to see point light shadows implemented in OpenMW at some point!

### If you could change one thing about OpenMW, what would it be?

For people to have less daily life troubles and therefore more space to simply be excited about making fun things. Slightly less strict code standards would also be nice!

### Any favourite mods?

I, uhh, honestly spend more time making mods than playing. I like Morrowind modding scene for its great diversity, and on every playthrough attempt (I haven’t finished the game even once) I try to go for a different vibe with a different set of mods and shaders. For example, currently I’m running and enjoying [Wareya’s PBR](https://github.com/wareya/OpenMW-PBR), [Rafael’s Shader Pack](https://www.nexusmods.com/morrowind/mods/53667) for beautiful volumetrics, and pretty much all of [SaintJ](https://next.nexusmods.com/profile/SMO1992/mods?gameId=100) PBR mods. Together, with some tweaking, they create a unique visual style somewhat reminiscent of 90s-00s pre-rendered CGI, the kind of CGI used for game box arts or in CGI series like Beast Wars or ReBoot.
[Vurt’s](https://next.nexusmods.com/profile/vurt/mods?gameId=100) animated trees are also a very recent addition to my list, but I will probably only leave it if there will be another solution for animated foliage. Practically anything animated makes the world feel more alive.

I also run all of my own mods, but that comes with the territory – I often create something that I really like to play myself.

And these animation mods will probably never leave my mod list: [MCAR](https://www.nexusmods.com/morrowind/mods/48628?tab=description), [Animation Compilation](https://www.nexusmods.com/morrowind/mods/43982) and the fresh [Third Person Alt Attack](https://gitlab.com/fallchildren/openmw-third-person-alt-attacks). All of my animation mods require, or are built upon, or are required by these mods.

There are many, many more mods that I like, and I can’t really say that some are my absolute favourites. But I really want to stress it – the OpenMW (and Morrowind in general) modding community is absolutely amazing. It often feels to me like the game is merely an engine for people to express their ideas – be that a thing of a visual nature, a quest, an animation, a house, a character or a sound – all of it is of a great aesthetic value just being poured out there for everyone to share and enjoy. In a sense it’s a community-driven art really, it’s wild!

### Anything you’d like to add?

Not much!
Thanks for inviting me for the interview.
If someone finished reading this, well, that’s impressive! Thanks for your attention!
Have a great and lovely… everything.
And [give my music a listen](https://www.youtube.com/watch?v=6H9CQNAq6ts&list=PLLMazvb2sGBNjBARAFaVNIf3NtWTF-sd4) :)
