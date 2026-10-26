---
title: "OpenMW 0.36.0 Released!"
date: 2015-05-29T22:52:39+02:00
lastmod: 2015-07-28T13:18:01Z
slug: "openmw-0-36-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4341
---
The OpenMW team is proud to announce the release of version 0.36.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release is relatively small as we eagerly await scrawl’s rendering port to OSG. There are a multitude of important fixes for OpenMW-CS, which is progressing at a healthy pace. See below for the full changelog.

**Known Issues:**

- Crash when trying to view cell in render view in OpenMW-CS on OSX
- Crash when switching from full screen to windowed mode on D3D9

**Changelog:**

- Implemented hotkey for hand-to-hand
- Implemented key bind for always sneaking
- Implemented multiselection of entries in the data files list of the launcher
- Implemented using application support directory as the user data path on OS X
- Fixed Erene Lleni not wandering correctly
- Fixed installer not detecting default directory correctly in 64-bit Windows registry
- Fixed issue where cloning the player would prevent player movement
- Fixed casting bound weapon spell not switching to “ready weapon” mode
- Fixed enchanted item charges not updating in the spell list window if it is pinned open
- Fixed behavior when fatigue falls below zero due to the drain effect
- Fixed error on startup with Uvirith’s Legacy enabled
- Fixed sex, race, and hair sliders not initializing properly in chargen
- Fixed minor issues with terrain clipping through statics
- Fixed invisible sound mark having collision in Sandus Ancestral Tomb
- Fixed tooltip display on stolen gold stack
- Fixed persuasion mechanics using player stats instead of NPC’s
- Fixed not defaulting to world origin when an unknown cell is encountered
- Fixed NPCs not reacting to theft when player has the inventory open
- Fixed water z-fighting issue
- Fixed GetSpellEffects to better emulate vanilla behavior
- Fixed a dialog choice in mod Rise of House Telvanni not exiting out of dialog
- Fixed Detect Spell returning false positives
- Fixed the map icons used by Detect spells
- Fixed a crash on first launch after choosing “Run installation wizard”
- OpenMW-CS: Implemented global search & replace
- OpenMW-CS: Implemented dialog mode only columns
- OpenMW-CS: Implemented optionally showing a line number column in the script editor
- OpenMW-CS: Implemented optionally using monospace fonts in the script editor
- OpenMW-CS: Implemented focusing on ID input field on clone/add
- OpenMW-CS: Implemented handling moved instances
- OpenMW-CS: Implemented a start script table
- OpenMW-CS: Implemented a start script record verifier
- OpenMW-CS: Fixed changed entries in the objects window not\*? showing as changed
- OpenMW-CS: Fixed changing certain entries not being saved in the omwaddon file
- OpenMW-CS: Fixed terrain information not saving
- OpenMW-CS: Fixed files with accented characters not being listed
- OpenMW-CS: Fixed cloning/creating new container class resulting in an invalid omwaddon file
- OpenMW-CS: Fixed cloning omitting some values
- OpenMW-CS: Fixed crash when issuing undo command after the table subview is closed
- OpenMW-CS: Fixed being unable to undo a record deletion in the object table
- OpenMW-CS: Fixed multithreading for operations
- OpenMW-CS: Changed References/Referenceables terminology to Instance/Object

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2910 "Want to leave a comment?")
