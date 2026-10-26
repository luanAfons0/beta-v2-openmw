---
title: "The Week in review"
date: 2012-08-05T14:26:58+02:00
lastmod: 2012-10-11T15:50:45Z
slug: "week-review-16"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1555
---
Another week — once again brings things that moves our project toward playability and full compatibility with Morrowind. It’s true that we are once again progressing with nice speed.

Since animation task is closed both jhooks1 and Chris was left without a task, but happily not for long…

Jhooks1 currently returned to physics implementation — you probably noticed that collision with npc is flawed: It’s very easy to get stuck and in general behavior is very different then in Morrowind. This is not surprising at all since the way collision with npc works is itself not like in Morrowind. To make story short: while player character has it’s own collision capsule (sphere that replaces the actually body mesh for the collision) npc are still half baked and use the body mesh for physics. That’s the source of problems.

Jhooks1 is now busy with enabling the collision capsule also for npcs. That should solve most (if not all) problems in this area.

Meanwhile Chris is researching the morrowind feature not actually present in the vanilla game but often used in mod enthusiasts content: Billboard nodes. Most of you seen only billboard trees that adds a lot of eye-candy to the game, especially when compared with plain flora — but yet, the billboard nodes itself are more universal. Currently it’s hard to tell if this feature will be present in OpenMW any time soon since experiments didn’t brought ultimate insight.

greye continues being awesome. Dropping related job is finished and this week He is actually working on two branches. First off He started (and made a nice progress with it) task of player control. That’s a big road blocker for a few… sorry Did I wrote “a few”? For a countless other tasks and features that are yet to come!

gus is back! And He is programming again! I missed him a lot — He is a really friendly guy… and developing openmw makes him super cool.

gus works on Object_movement_creation branch to add new script instructions related to object movement and creations. In theory, objects should be able to cross cell borders. Although It’s not tested, now we have script instructions to test it… effects will be known next week.

This branch attacks roadblocker at least as large as player control. We must finish it before adding another large features.

Eli2 works on editor. Not just this week, but now it’s time to say that actually this is a really good job. Although a lot of it is actually mostly provisional It already looks pretty good: The filters are working, the list displays items. Personally I see the beginning of the editor I would like to work with: very simple approach, very minimal yet ergonomic design, more then just enough of planning.

We need the editor, sooner or later, and it would be better to have it sooner — before OpenMW 1.0.0 so We won’t need to hold work on long awaited modding features in the game data format only because there is no editor to work on this format in the first place. Everybody would love to have multiple exteriors and other goodies, right?

Although our multiple esm and esp support is still in embryonic state mark76 helps to test it a little. After returning from India and sharing the experience about it. He created a few small test plugins to expose complications in the current implementation. It can take a long time before issues will be solved and this long awaited feature will debut in the release.

Zini decided to add a brand new options “–script-console” and “–script-run”. The first one enables additional console only commands that are intended to test our engine (currently none) while –script-run allows to point a file containing script instruction that are about to be run on game start.

Sorcerer, a new developer that joined us recently works now on task of importing configuration from morrowind.ini to openmw.cfg file. The importer is functional right now and soon should be complete.

Scrawl does not work on OpenMW at the moment, but instead He focused on the shiny lib, supporting us this way. He implemented LOD material generator and although we are not going to use it before OpenMW 1.0.0 at some point it may become a really handy tool for us.
