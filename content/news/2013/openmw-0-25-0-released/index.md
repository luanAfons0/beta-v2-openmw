---
title: "OpenMW 0.25.0 Released!"
date: 2013-08-05T11:55:12+02:00
lastmod: 2013-08-03T16:06:23Z
slug: "openmw-0-25-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2973
---
The OpenMW team is proud to announce the release of version 0.25.0! Grab it from our [Downloads Page](/downloads) for all operating systems. With the implementation of SoundGen records and the Wander AI Package, this release introduces stomping NPCs. Note that AI Wander must still be called from the console. SoundGen implementation also means that Creatures make noises. Prepare for squealing scrib nostalgia. SDL2 has also been implemented, which stomps out a lot of mouse focus and other UI bugs. Check over the changelog for the rest of the changes in this release.

**Known Issues:**

- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Polish version of Morrowind.esm makes OpenMW crash
- Pressing ‘j’ key during startup freezes the game

Check out the release video by the spectacular WeirdSexy:  

{{< youtube id="fTKQaXibMTA" title="OpenMW 0.25 Release Commentary" >}}

**Changelog:**

- Implemented SoundGen for NPCs and creatures
- Implemented AI Package: Wander
- Implemented 64-bit compatibility for OS X
- Implemented Hardware mouse cursors
- Implemented first person animations
- Implemented mouse wheel zoom in third person mode
- Implemented Autorepeat for slider buttons
- Launcher will not start OpenMW when no esm/esp files are selected
- Fixed launcher crash on OS X &lt; 10.8
- Fixed a performance drop in the Census and Excise Office
- Fixed SSCR records not starting correctly
- Fixed handling script names with hyphen characters
- Fixed handling the repeat parameter for AIWander
- Fixed enchanting window to include weapons
- Fixed character being able to move while over-encumbered
- Fixed dead keys
- Fixed mouse not being confined to window when the game is un-tabbed, and other mouse focus issues
- Fixed ini Importer aborting when there is no existing cfg file
- Fixed Dead NPC and Creature collision boxes
- Fixed incorrect sorting of answers in dialogue
- Fixed ini Importrt core dump when given an unknown parameter
- Fixed getting stuck in some doors
- Fix for journal/book rendering
- Fix for draw weapon sound playing when weapon is readied and cell border is crossed
