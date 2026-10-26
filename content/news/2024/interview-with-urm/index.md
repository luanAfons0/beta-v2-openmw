---
title: "Interview with Urm"
date: 2024-02-23T21:27:01+01:00
lastmod: 2024-02-25T22:22:55Z
slug: "interview-with-urm"
categories: ["Interview"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=6514
---
## Who are you, and why do you have such a cool nickname? **Does it stand for Universal Reimplementation of Morrowind?**

I’ve had this nickname for quite a long time, probably since I was 11 or so. As you might have noticed from my GitLab account, my surname is [Uramer](https://gitlab.com/uramer). Urm is a shortened version of that.

My avatar has a somewhat more interesting story. It’s the character [Urm the Mad](https://www.google.com/search?hl=en&q=Urm%20le%20fou) from a comic book by [Philippe Druillet](https://en.wikipedia.org/wiki/Philippe_Druillet), which I’ve only become aware of after having the nickname for over a decade. He’s wearing the Papal Tiara, which was photoshopped on by a member of the Mortal Online forums. I’m still not sure why, but I rolled with it.

## When did you join the project and why?

This is surprisingly difficult to answer. Technically, my first merged PR was in February 2018, 5 years go – but it was a small fix entirely guided by [Greatness7](https://github.com/Greatness7) mesh research. I’ve been added to AUTHORS.md for some minor contribution in March 2019, but at that time I was more interested in TES3MP.  I would say I properly joined the OpenMW team with the Lua UI API merge 3 years ago.

Originally I got interested in contributing through playing [TES3MP](https://tes3mp.com/) — with its many rough edges — and wanting to improve the experience. In some sense that’s still ultimately my goal – to arrive at a more polished multiplayer experience, but currently I mostly see OpenMW as a great learning experience. OpenMW has a strong review culture, and I’ve become a much better programmer through it.

## You’re mentioning Lua, and I think you’re one of the members of the OpenMW Cabal. Why contribute to this area instead of some other?

I might even be its current mastermind, hence the Papal Tiara obviously, but don’t tell anyone I said that.

Initially, I saw Lua as a natural step in the long road of merging TES3MP into OpenMW. However now it’s the most exciting and feature-rich part of OpenMW’s development, and the answer to many of the project’s goals. It is also the area of the engine where my skillset is most directly applicable.

## What’s your opinion on MWSE? Any plans to have some kind of Lua-powered OpenMWSE implementation?

I’ve not really used MWSE much myself, so I can’t say I have an opinion. It seems to meet most of its goals, meaning it’s good :) OpenMW Lua design goals are quite different, meaning that an OpenMWSE of some kind is rather unlikely. Many fundamental parts of both MWSE and OpenMW Lua designs make it impossible. MWSE exposes too much of the original engine’s internals – which OpenMW could not feasibly replicate, while OpenMW Lua is designed with multiplayer compatibility in mind, which is not compatible with the highly synchronous design of the MWSE API.

Ironically, implementing a subset of OpenMW Lua in MWSE would be more doable, although there are limitations there too. For example, OpenMW has the navigation mesh, and some API related to that – that would be very challenging to add to MWSE. UI implementation is also radically different between MWSE and OpenMW, and so on.

One idea that’s been tossed around is some kind of simple common Lua API, similar to MWScript (but less *cursed*) to make it easier for modders to pick up. That’s definitely possible, just needs design and implementation work put into it. Of course, you’re more than welcome to come help make this happen :)

## What have you been working on recently?

Recently I’ve been finishing menu scripts, started by [ptmikheev](https://gitlab.com/ptmikheev). They enable lots of cool features, like autosave scripts, meta-mods that affect multiple game saves, and so on. The long term plan is to dehardcode the main menu almost entirely, which will enable elaborate main menu mods, or complete replacements for games made with OpenMW.

## Any cool things you plan to implement that you haven’t already started working on?

The next step for me probably going to be a Lua input binding menu. For now we just have a simple single-button key binder available. I would like to replace it with something very ambitious, [Steam Input](https://partner.steamgames.com/doc/features/steam_controller) style. That would allow players to create control schemes as complicated (or simple) as they like, and for Lua scripts to support all input methods that OpenMW supports now and in the future – keyboard, mouse, controllers – including touchpads and gyro, and eventually touchscreens, maybe even natively support Steam Deck controls. Another important input type are VR controllers – it would be a shame if Lua mods didn’t **just work** out of the box when VR is finally merged.

## Has OpenMW lived up to what you expected when you first discovered the project so far?

My first experience with OpenMW was between 0.44 and 0.45 releases. At the time the only real expectation I had was to be a more stable and easy to use vanilla experience, and OpenMW mostly delivered that even back then. Nowadays I have massively more ambitious expectations of OpenMW – but now it is also up to me if it will live up to such.

## What’s the current or next big thing you’re hyped about?

I’m excited about [spellcasting dehardcoding](https://gitlab.com/OpenMW/openmw/-/merge_requests/3029): that will allow many cool mods on its own, and it paves the way for combat dehardcoding, which will enable so many amazing mods! I feel like this is an area where OpenMW Lua could achieve much more than MWSE mods have so far.

## If you could change one thing about OpenMW, what would it be?

This is a somewhat unfair question – one should strive to be the change they want to see in the world. However, if I could magically change one thing – it would be the CS part of OpenMW getting more contributor attention.

## Any cool things you’re working on that *aren’t* OpenMW-related?

In the last half a year I’ve picked up a new hobby – music, specifically playing Ocarina (no, I’m not a Zelda fan). I’m working on a related mod for Morrowind, but I don’t have anything specific to announce yet.

## So what you’re saying is that you working on making it possible to use an ocarina as a controller in OpenMW?

That would be a funny mod, and it’s [been done for Zelda](https://www.youtube.com/watch?v=UtJl7hivQCs), so time to work on the microphone Lua API I guess! However, what I had in mind was writing some music to the in-game book lyrics, to be played when the player reads one of those books.

## Anything else you’d like to add?

I would like to encourage anyone interested to try their hand at contributing to OpenMW. We have lots of [low hanging fruit with the Lua API](https://gitlab.com/OpenMW/openmw/-/issues/?label_name%5B%5D=Lua) rapidly advancing, and it’s very satisfying to see a change you’ve made for a game you love.
