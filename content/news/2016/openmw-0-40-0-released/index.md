---
title: "OpenMW 0.40.0 Released!"
date: 2016-09-22T23:05:40+02:00
lastmod: 2016-12-09T21:56:33Z
slug: "openmw-0-40-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4693
---
The OpenMW team is proud to announce the release of version 0.40.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release brings some small new features, but mainly bug fixes and improvements. We’re winding down on implementable features, these are exciting times for OpenMW, even if releases have a little less user-visible changes. The game is basically fully playable, and future releases will bring mostly more fixes and optimizations.

Check out the [release video](http://www.youtube.com/watch?v=avPbctre9Qw) and the [OpenMW-CS release video](http://www.youtube.com/watch?v=izlm2CAnCpY) by the prodigious Atahualpa, and see below for the full list of changes.

{{< youtube id="avPbctre9Qw" title="OpenMW 0.40 Release Commentary" >}}

{{< youtube id="izlm2CAnCpY" title="OpenMW-CS 0.40 Release Commentary" >}}

**Known Issues:**

- Shadows are not re-implemented at this time, as well as distant land
- To use the Linux targz package binaries Qt4 and libpng12 must be installed on your system

**Changelog:**

- Implemented NPC “Face” function
- Implemented weather dependent sun/moon reflections
- Implemented effect removal for abilities, fixes locked player movement upon exiting portable house mods
- Implemented deletion of moved references
- Fixed possible reference duplication when a mod modifies the corresponding refID
- Fixed creatures in cells without pathgrids not wandering
- Fixed death events to trigger at the end of the death animation instead of the beginning
- Fixed timed effects not to be interrupted when resting
- Fixed constant effects not to be put on hold when resting
- Fixed some issues with how Magicka is calculated in regard to Fortify Magicka effect and Intelligence
- Fixed several issues with telekinesis interaction
- Fixed issues with how the “#” character was handled in directory names in the config
- Fixed Slowfall spell to now stop forward momentum when jumping
- Fixed not being able to replace parent cell references with a cell reference of different type
- Fixed Cliff Racers not being able to attack targets below them
- Fixed creatures and NPCs not being able to aim ranged attacks vertically
- Fixed the player spawning at the origin if the cell they saved in doesn’t exist anymore
- Fixed crash that could occur when using teleportation spells
- Fixed ESS-Importer not separating item stacks
- Fixed NPCs forgetting they had talked to the player before for their voiced dialog
- Fixed NPCs not looping their AiTravel assignments
- Fixed NPCs wandering to invalid locations after training
- Fixed NPCs wandering off their pathgrid when player waits
- Fixed “StopCombat” AI command not functioning correctly
- Fixed Larienna Macrina not correctly stopping combat after killing Hrelvesuu in the “Battle at Nchurdamz” quest
- Fixed monsters respawning when loading a quicksave
- Fixed a visual effect playing in Dagoth Ur’s chamber that shouldn’t be there
- Fixed blight weather still occurring after killing Dagoth Ur
- Fixed new dialog in a mod inheriting some data from the dialog it replaces
- Fixed actors that start the game dead always using the same death pose
- Fixed NPCs to not auto-equip ammunition
- Fixed NPCs not favoring ranged weapons
- Fixed NPCs detecting the player when they don’t have line of sight
- Fixed ashmire particles rendering outside of their pool
- Fixed AiWander start time resetting when saving/loading
- Fixed 1st and 3rd person camera not converting from .ess correctly with ESS-Importer
- Fixed issues caused by the idle camera when the player is paralyzed
- Fixed nearby monsters who have not detected the player not preventing the player from resting
- Fixed an issue with the victim of a pickpocket not always being alerted
- Fixed dead NPCs and creatures contributing to Sneak skill increases
- Fixed weather dependent dialog playing in interior cells
- Fixed effects cast by summons persisting after their death
- Fixed an issue with parallax map rendering
- Fixed level up graphic to match vanilla game behavior
- Fixed segfault in Atrayonis’s “Anthology Solstheim: Tomb of the Snow Prince” mod
- Fixed issues with invisibility not dispelling correctly
- Fixed the first couple of seconds of NPC speech being muted on some PCs
- Fixed being able to stack effects from identical magic scrolls
- Fixed 3rd person camera distance getting stuck
- Fixed AiFollow and AiEscort durations to be handled as in-game hours instead of seconds, as per the vanilla engine
- Fixed a couple of issues with how fatigue is displayed when the player has fortified strength
- OpenMW-CS: Implemented multiple deletion of subrecords
- OpenMW-CS: Reimplemented pathgrid rendering
- OpenMW-CS: Implemented configurable key bindings
- OpenMW-CS: Implemented pathgrid editing
- OpenMW-CS: Fixed Start Scripts table not updating when a script is added
- OpenMW-CS: Fixed tooltips not showing in scene view unless holding mouse button on them
- OpenMW-CS: Fixed tab width in Script Editor to be 4 characters instead of 4 pixels
- OpenMW-CS: Fixed being able to create duplicate pathgrid records
- OpenMW-CS: Fixed data in Weapon records not being properly set
- OpenMW-CS: Fixed Regions table to show weather options and allow editing them

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3754 "Want to leave a comment?")
