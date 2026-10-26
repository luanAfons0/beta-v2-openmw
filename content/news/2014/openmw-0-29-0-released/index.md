---
title: "OpenMW 0.29.0 Released"
date: 2014-03-13T00:21:36+01:00
lastmod: 2014-03-13T20:44:58Z
slug: "openmw-0-29-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=3499
---
The OpenMW team is proud to announce the release of version 0.29.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release includes the first implementation of the Save/Load feature, which catapults OpenMW closer to being completely playable. Please bear in mind that **the save file format is not yet finalized** and we cannot guarantee forward compatibility of save files until OpenMW 1.0. Some aspects of the game state, such as player controls being enabled/disabled, weather, some creature state including all magic (also used by NPCs), movement of objects between cells (except for the player), and fog of war are not currently saved. Other new features include more combat AI, blocking, area magic, and disease. OpenMW is becoming a hazardous place to be!

Check out the release video by the irrepressible WeirdSexy:  

{{< youtube id="VoeIaYkc0Do" title="OpenMW 0.29 Release Commentary" >}}

**Known Issues:**

- Issue #416 Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Slaughterfish fly. You read that right.

**Changelog:**

- Implemented most of the Load/Save GUI
- Implemented Knockdown
- Implemented fatigue decrease when doing physical activities
- Implemented melee blocking
- Implemented area magic
- Implemented combat and combat AI for creatures
- Implemented Damage/Restore Skill/Attribute magic effects
- Implemented Resistance/Weakness to normal weapons magic effect
- Implemented Slow Fall magic effect
- Implemented auto-calculating NPC spell list
- Implemented Disease contraction
- Implemented blood particles
- Implemented the rest of the player death feature
- Implemented sleep/rest being interrupted
- Implemented inventory equip scripts
- Implemented display of the version/build number in the launcher window
- Implemented a large portion of the Save/Load feature
- Implemented AI Packages:Activate, Follow, FollowCell
- Implemented levelled creatures
- Implemented missing journal backend features
- Improved handling of creature Weapons/Shields
- Linked movie volume to Master instead of Music volume control
- Fix for excess vram usage
- Fix for footsteps in first person
- Fix for Ascended Sleeper animation issues, related to determining the root animation node
- Fix for AI related FPS drop
- Fix for music issues on OS X >= 10.9
- Fix for inventory paperdoll obscuring armour rating and rating text display when window is shrunk
- Fix for 0/0 charge stat bar display
- Fix for werewolf change handling
- Fix for NIF filters not working properly with some mods
- Fix for invalid orientation crash
- Fix for invisible weapons when re-entering an area with NPCs engaged in combat
- Fix for magicka depleting when casting an uncastable spell
- Fix for creatures not being able to run
- Fix for activators working as collision objects
- Fix to not reset water level when loading a plugin with no water level record
- Fix for AI packages growing exponentially when adding an AI package
- Fix for Vivec Informants quest
- Fix for bug allowing the player to get unlimited gold
- Fix for bug of only receiving 1 gold when picking up stacks of gold
- Fix for Dwemer crossbows not being held correctly
- Fix for quick keys being able to be configured during character generation
- Fix for a crash when equipping the lockpick in the Census & Excise Office
- Fixes for errors in .desktop files
- Various fixes for script instructions
- Various message box fixes
- OpenCS: Implemented a referenceable record verifier
- OpenCS: Implemented script verifier
- OpenCS: Implemented Drag & Drop
- OpenCS: Implemented record cloning
- OpenCS: Fixed broken code for loading objects
- OpenCS: Fixed tables to sort case-insensitively
