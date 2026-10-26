---
title: "OpenMW 0.30.0 Released"
date: 2014-05-28T11:29:39+02:00
lastmod: 2014-05-28T17:01:20Z
slug: "openmw-0-30-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=3647
---
The OpenMW team is proud to announce the release of version 0.30.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release includes ranged combat, and crime & punishment. OpenMW just got a whole lot shadier… Other new features include terrain threading, many fixes and improvements to save/load, and a laundry list of bug fixes.

Check out the release video by the pertinacious WeirdSexy:  

{{< youtube id="QhdSOGlHjqc" title="OpenMW 0.30 Release Commentary" >}}

**Known Issues:**

- Character generation can be skipped
- Some items can be stolen without raising an alarm
- Sound may be disabled on videos in Windows

**Changelog:**

- Implemented Ranged Combat
- Implemented Sneaking Skill icon
- Implemented Crime and Punishment
- Implemented correct trader gold handling
- Implemented AIFollow package on summoned creatures
- Implemented run stance in the AIFollow package
- Implemented all NPCs in the area attacking the player when the player attacks one
- Implemented terrain threading
- Implemented correct GUI save/load progress bars
- Implemented saving the weather state in save games
- Implemented class creation form remembering previous changes
- Implemented quicksave, quickload, and autosave
- Implemented deleting saves
- Implemented bribe gold being placed into the NPCs inventory
- Implemented saving quick key bindings
- Implemented NPCs returning to their default position after pursuing the player for a crime
- Implemented vertical axis navigation for flying and swimming creatures
- Implemented functionality for NPCs to evade each other when walking around
- Fixed extreme shaking that could occur during cell transitions while moving
- Fixed crash when a non-existent content file is added to openmw.cfg
- Fixed OpenMW allowing resting/using a bed while in combat
- Fixed crime punishment in the Census and Excise Office at the start of a new game
- Fixed evidence chests not re-locking after new evidence is put in them
- Fixed NPCs still attacking after punishment is served
- Fixed taking items from a corpse being considered a crime
- Fixed some creatures not being able to get close enough to attack
- Fixed dead creatures dying again each time the player enters the cell
- Fixed input manager state not being handled correctly when loading a save
- Fixed crash when trying to get LOS of disabled NPC
- Fixed incorrect inventory behavior before inventory is activated in a new game
- Fixed NPCs not equipping torches in dark interiors
- Fixed mouse wheel scrolling too fast in race selection
- Fixed doors being blocked by NPCs
- Fixed repair/charge indicators not updating
- Fixed scribs not defending themselves
- Fixed creatures life bar not always being empty when they are dead
- Fixed creature and hand to hand attacks not increasing armor skill
- Fixed undead and mechanical creatures bleeding red blood
- Fixed Tarhiel never falling
- Fixed script variables not being saved
- Fixed custom class names not being handled properly in save games
- Fixed NPCs stuttering when walking indoors
- Fixed menu appearing when trying to skip intro movie
- Fixed NPCs getting stuck when they run into each other
- Fixed health bar showing permanently when running BTB-Settings
- Fixed guard killing PC when Khajiit race is selected when running BTB-Character
- Fixed HUD weapon icon showing a fist after loading a save, when a weapon is equipped
- Fixed guild rank not showing in dialogue
- Fixed flash of blue when sneaking and opening a container or the inventory
- Fixed incorrect level-up class image when using a custom class
- Fixed mis-aligned buttons on quit menu
- Fixed an NPC stuck hovering in a jumping animation
- Fixed crash when loading the Big City esm file.
- Fixed mis-aligned dialogue topic list when scrolling
- Fixed certain faction memberships not storing in saved games
- Fixed pasting text always inserting at the end of a text box, instead of at the cursor
- Fixed conversation loop when asking about “specific place” in Vivec
- Fixed Caius not leaving at the start of the “Mehra Milo and the Lost Prophecies” quest
- Fixed map markers not being saved in save games
- Fixed “ring_keley” causing exception
- Fixed open dialogues not being closed when loading a game
- Fixed some collision geometry cleanup
- Fixed a special case script instruction for the Athyn Sarethi mission
- Fixed an improper handling of a special NIF format case that caused problems with the Pluginless Khajiit Head Pack
- OpenCS: Implemented region map context menu
- OpenCS: Implemented region map drag & drop
- OpenCS: Implemented scene subview drop
- OpenCS: Implemented preview subview
- OpenCS: Implemented OGRE integration
- OpenCS: Implemented Dialogue Sub-Views
- OpenCS: Implemented lighting modes
- OpenCS: Implemented different camera navigation modes
- OpenCS: Refactored user settings
- OpenCS: Fixed failure when dropping a region into the filter of a cell subview
- OpenCS: Fixed exception when loading files
