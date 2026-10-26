---
title: Google Summer of Code
toc: true
---

The [Google Summer of Code](https://summerofcode.withgoogle.com/) is basically Google paying students to contribute to open-source projects during their Summer holidays. Many open-source projects have already been a part of that event in the past, incl. [0 A.D.](https://play0ad.com/) which is another game engine.

## Development methodology

We’re making use of [Gitlab](https://gitlab.com/OpenMW/openmw) to host our git repository, track [issues and bugs](https://gitlab.com/OpenMW/openmw/-/issues), and to run the [continuous integration](https://gitlab.com/OpenMW/openmw/-/pipelines) on various platforms. For documentation, we’re mainly using [our wiki](https://wiki.openmw.org) and [readthedocs](https://openmw.readthedocs.io/en/stable/). For communication, we bridged together [discord](https://discord.gg/YegsVV3aRb), [IRC](irc://irc.libera.chat/#openmw) and [matrix](https://matrix.to/#/#openmw-space:matrix.org). We’re also making use of [our forum](https://forum.openmw.org/) for conversations that should happen in the open and leave a trace.

For those who want to get introduced to the OpenMW codebase and practices, we recommend to pick one of the [easy issues](https://gitlab.com/OpenMW/openmw/-/issues?label_name%5B%5D=Beginner) to start with.

## Programming languages

Most of OpenMW is written in C++ and hence we expect students to be familiar with it. We’re currently in the process of dehardcoding a lot of mechanics into lua, so knowing a bit of it might help for some tasks.

## Recommended steps

- Read Google’s instructions for participating
- Grab any of the project from list of ideas that you’re interested in (or propose your own).
- Submit a small merge request for one of the [beginner-friendly issues](https://gitlab.com/OpenMW/openmw/-/issues?label_name%5B%5D=Beginner). You can also choose [any of the issues on Gitlab issues](https://gitlab.com/OpenMW/openmw/-/issues) if they are big enough to be a qualification task, and still small enough to be finished no more than in a couple of days/weeks.
- Write a first draft proposal (feel free to use [this template](https://docs.google.com/document/d/1kDPGgr_D5tQuYLQi_gEGlkuQ-DlU8GH5kDBqZbVSC7I/edit)) and ask one of the mentors to review it with you.
- Submit it using Google’s web interface.

## Student proposal guidelines

- Keep it simple enough to fit in no more than a couple of pages. Try to be clear and concise in your writing.
- Try to split GSoC period into tasks, and each task into week-fitting subtasks. It helps us to understand how you plan to accomplish your goals, but more importantly, it’ll help you to understand the task deep enough before starting, and prioritize important things to do first.
- Please tell us:
  - How much time a day/week you are able to spend on this project.
  - As mentors and project coordinators, how can we get the best out of you?
  - Is there anything that you’ll be studying or working on whilst working alongside us?
  - Are there any techniques and tools which you use to keep yourself organized?
  - Your timezone, since so we can assign you a mentor in the same one, to ease communication.
- Submit your proposal early, not in the last minute!
- Be sure to choose a “backup” idea (the second task you want to do), so that conflicts (two students for one task) can be resolved.

## Suggestions for topics/projects

The list of suggested tasks can be found [here](https://gitlab.com/OpenMW/openmw/-/issues?scope=all&state=opened&label_name%5B%5D=GSoC)

### Inverse Kinematics [#5503](https://gitlab.com/OpenMW/openmw/-/issues/5503)

Issue [#5409](https://gitlab.com/OpenMW/openmw/-/issues/5409) makes clear that vanilla’s unorthodox actor collision on terrain will not be replicated, so unpleasantly conspicuous floaty actors compared to Morrowind are here to stay. Likewise, a move away from capsules to AABBs as part of [#4247](https://gitlab.com/OpenMW/openmw/-/issues/4247) will mean visible “snapping” of actors as they’re stepped up or down, which would be something of a visual regression compared to current behavior. Inverse Kinematics with interpolation would resolve both these issues, to say nothing about being a major enhancement to actor skeletal system in its own right, and a big ticket item to more realistic animation and support for later titles.

No extra data is needed from actor skeletons; all IK is applied to appropriately named bone chains through the engine itself, as is the norm for games iirc.

#### Expected duration

- 350h

#### Skills

- Some C++.
- A bit of physic simulation and animations would help as well.

#### Difficulty

- Medium

#### Benefits for the GSoC contributor

- Gain a deep understanding of modern physic simulation systems.
- Gain a deep understanding of classic animation systems.

#### Assess requirements for midterm/final evaluation

- 1st term: Proof of concept for bipeds
- Final term: Inverse kinematic working for all actors in scope.

#### Mentors

- [@AnyOldName3](https://gitlab.com/AnyOldName3)
- [@Capostrophic](https://gitlab.com/Capostrophic)

#### Links/Resources

- [Wikipedia](https://en.wikipedia.org/wiki/Inverse_kinematics)

### Shaders improvements

Albeit OpenMW does have pretty water shaders, some people are missing the vanilla-style ones ([#4661](https://gitlab.com/OpenMW/openmw/-/issues/4661),
so it would be nice to re-implement them, but since this task shouldn’t last more than a couple of weeks,
we do have more shaders that we’d like to have implemented/enhanced: fog, godrays, …

#### Expected duration

- 175h or 350h

#### Skills

- The GSoC contributor should be familiar with shaders programming.

#### Difficulty

- Easy

#### Benefits for the GSoC contributor

- The GSoC contributor will learn how to write modern shaders, and how to adapt them to work with outdated assets.

#### Assess requirements for midterm/final evaluation

- 1st term: Vanilla water shaders implemented
- Final term: A couple other shaders, chosen by the contributor, implemented.

#### Mentors

- [@AnyOldName3](https://gitlab.com/AnyOldName3)
- [@Capostrophic](https://gitlab.com/Capostrophic)

#### Links/Resources

- [External implementation of shaders in Morrowind](https://www.nexusmods.com/morrowind/mods/41102/), as well as [some related shader samples](https://wiki.nexusmods.com/index.php/MGE_shaders)
- [Wikipedia article](https://en.wikipedia.org/wiki/Shader)

### Soft shadows ([#4852](https://gitlab.com/OpenMW/openmw/-/issues/4852))

Right now, shadows just use the 2×2 PCF filter provided by `sampler2DShadow`, so they’re fairly hard and sometimes pixelated. Shadows aren’t always hard in real life, and are very, very rarely pixelated.

Possible approaches include:

- Using a bigger PCF (Percentage Closer Filtering) filter. GLSL 1.2 doesn’t offer any especially nice ways of doing this, and using a bigger filter might cause shadow acne issues. This would also soften shadows that would be hard in real life.
- Using a statistical shadow sampling approach, such as Variance Shadow Maps or Exponential Shadow Maps. These allow standard texture filtering techniques to work with shadow maps, so can make shadows soft without as much of a performance hit as PCF, but need tuning to avoid artifacts like light bleed. Also, softening affects everything, not just shadows that need softening.
- Using PCSS (Percentage-Closer Soft Shadows). This allows soft shadows where they’d be soft in real life and hard shadows where they’d be hard. However, it’s likely to be much slower – the implementation suggested in the original paper does 100 shadow map lookups per fragment instead of the four we’re doing now. It’s also likely to need tweaking to still be accurate when combined with LiSPSM, which OpenMW uses.
- Using a hybrid of a statistical approach and PCSS. I’ve seen evidence of it being done, and it’s not as slow as PCSS of the same quality, but looks a lot harder to implement.

#### Expected duration

- 350h

#### Skills

- The GSoC contributor should be fluent in C++, and have at least *some* knowledge about 3D rendering.

#### Difficulty

- Hard

#### Benefits for the GSoC contributor

- The GSoC contributor will learn a lot about shadow rendering and performances optimizations.

#### Assess requirements for midterm/final evaluation

- Final term: Soft shadows implemented.

#### Mentors

- [@AnyOldName3](https://gitlab.com/AnyOldName3)

### Configure Lua scripts in OpenMW-CS ([#6622](https://gitlab.com/OpenMW/openmw/-/issues/6622))

At the moment the only way to configure Lua scripts is to use
[omwscripts](https://openmw.readthedocs.io/en/latest/reference/lua-scripting/overview.html#how-to-run-a-script) text file. Omwaddon format already has some initial support of Lua scripts, but OpenMW-CS can not create such omwaddons yet.

Implementation steps:

1. Add to `openmw-cs` a new view “Mechanics/Lua scripts” that represents `ESM::LuaScriptsCfg`. The view should allow editing Lua configuration of the current omwaddon and view Lua configuration of its master files. At this point functionality is equivalent to the functionality of `.omwscripts`.
2. Add new view in openmw-cs for editing Lua tables and attaching them as initialization data to Lua scripts. Table can include Lua primitives, vectors, 3d tranforms, colors, and links to objects and records in the current omwaddon or its master files.
3. Add ability to attach scripts to specific objects and records (it also requires some changes in omwaddon format).

#### Expected duration

- 175h or 350h

#### Skills

- Required: C++
- Recommended: Qt

#### Difficulty

- Medium

#### Assess requirements for midterm/final evaluation

- Midterm: implement step 1
- Final term: implement steps 2, 3

#### Mentors

- [@lamoot](https://gitlab.com/lamoot)
- [@ptmikheev](https://gitlab.com/ptmikheev)

### Oblivion/Skyrim/Fallout asset support ([issues](https://gitlab.com/OpenMW/openmw/-/issues?label_name%5B%5D=Oblivion))

There have been a growing interest in supporting assets not only from Morrowind, but also from Oblivion, Skyrim and Fallout. We know it’s possible, thanks to [the work of cc9cii](https://www.youtube.com/watch?v=9FcD7SxNzUg), and some recent progress made on our own.

#### Expected duration

- 175h or 350h

#### Skills

- The GSoC contributor should be fluent in C++, and know a bit about file format reverse-engineering.

#### Difficulty

- Easy

#### Benefits for the GSoC contributor

- The GSoC contributor will learn a lot about reverse engineering file format, assets manipulation, and fundamental changes that occurred in this area during the last 10 years.

#### Assess requirements for midterm/final evaluation

- First Term: Assets loading
- Final Term: Scripting or Animations support.

#### Mentors

- [@Capostrophic](https://gitlab.com/Capostrophic)
- [@jvoisin](https://gitlab.com/jvoisin)
- [@psi29a](https://gitlab.com/psi29a)

#### Links/Resources

- [Preliminary implementation](https://github.com/cc9cii/openmw) by @cc9cii

### Editor Usability Improvements

While it’s possible to author content using OpenMW-CS, the editor’s usability is lacking in terms of polish and supported features. The goal of this project is to improve usability in various parts of the editor when using the 3D view, when managing and filtering records, when accessing tools, and to fix an assortment of bugs that noticeably affect the user’s experience. Hopefully by the end of the project the editor could be considered less of an alpha release and closer to beta.

#### Expected duration

- 175h or 350h

#### Skills

- Fluent in Qt
- Proficient in C++

#### Difficulty

- Medium

#### Benefits for the GSoC contributor

- The contributor will learn about UX/UI design of non-trivial workflows

#### Assess requirements for midterm/final evaluation

- 1st term: Addressing papercuts like harmonizing icons, adding the region map, simplifying search filters, …
- Final term: Improved 3D view

#### Mentors

- @Lamoot

#### Links/Resources

- For the 3D view: [#6615](https://gitlab.com/OpenMW/openmw/-/issues/6615), [#6314](https://gitlab.com/OpenMW/openmw/-/issues/6314), [#5402](https://gitlab.com/OpenMW/openmw/-/issues/5402), [#5410](https://gitlab.com/OpenMW/openmw/-/issues/5402)
- For the region map: [#5426](https://gitlab.com/OpenMW/openmw/-/issues/5426).
- For the search filters [#6407](https://gitlab.com/OpenMW/openmw/-/issues/6407).

### Lua dehardcoding

OpenMW is currently undergoing a dehardcoding phase, with most of its behaviour modifiable at runtime via the lua API, granting more freedom than the usual [mwscript](https://en.uesp.net/wiki/Morrowind_Mod:Scripting_Basics) to moders. It also reduce the amount of C++ in the engine as a nice side-effect.

#### Expected duration

- 175h or 350h

#### Skills

- Fluent in C++
- Proficient in Lua

#### Difficulty

- Hard

#### Benefits for the GSoC contributor

- Gaining deep knowledge of how to tightly integrate a scripting language in a game engine

#### Mentors

- [@psi29a](https://gitlab.com/psi29a) — `psi29a` on the chat
- [@ptmikheev](https://gitlab.com/ptmikheev) — `ptmikheev` on the chat

## Mentors

Members of OpenMW core team have volunteered to guide students for GSoC’25. They’re all veterans of the projects, and pretty friendly. Please feel free to reach out to any of them in case you need any help in selecting a project.

- [@AnyOldName3](https://gitlab.com/AnyOldName3) — `AnyOldName3` on the chat
- [@Capostrophic](https://gitlab.com/Capostrophic) — `Capostrophic` on the chat
- [@jvoisin](https://gitlab.com/jvoisin) — `jvoisin` on the chat
- [@lamoot](https://gitlab.com/lamoot) — `Lamoot` on the chat
- [@psi29a](https://gitlab.com/psi29a) — `psi29a` on the chat
- [@ptmikheev](https://gitlab.com/ptmikheev) — `ptmikheev` on the chat

## Info and links

- [OpenMW page on the GSoC](https://openmw.org/google-summer-of-code/)
- [GSoC page on our issue tracker](https://openmw.org/google-summer-of-code/)
- The [official GSoC page](https://summerofcode.withgoogle.com)
- The [GSoC Timeline](https://developers.google.com/open-source/gsoc/timeline)
- [GSoC page on the forum](https://forum.openmw.org/viewtopic.php?f=20&t=7550)
