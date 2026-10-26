---
title: "OpenMW 0.35.0 Released!"
date: 2015-02-16T22:40:49+01:00
lastmod: 2015-03-10T10:21:12Z
slug: "openmw-0-35-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4214
---
The OpenMW team is proud to announce the release of version 0.35.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release includes over 100 bug fixes and improvements, and brings our “1.0” release much closer. Some notable features include the beginnings of an ess-Importer command line tool to import save games from vanilla Morrowind, proper handling of the Calm effect, and AI fast-forward functionality. Read the full changelog and bask in the glory of the huge amount of work that has gone into this release… Two more things: several OpenMW utilities have been renamed as of this release, including OpenCS being renamed to OpenMW-CS. And we would really appreciate any feedback on the launcher’s Data File selection UI. Enjoy!

**Known Issues:**

- Crash when trying to view cell in render view in OpenMW-CS on OSX
- Crash when switching from full screen to windowed mode on D3D9

**Changelog:**

- Implemented Calm effect removing combat packages
- Implemented first stages of ess-Importer, an importer for vanilla Morrowind save games, this feature is not complete
- Implemented previous/next weapon and spell equipping hotkeys
- Implemented XYZ rotation keys support
- Implemented AI fast-forward
- Implemented NPC drowning while knocked out
- Implemented setting for exterior cell grid size
- Implemented some leveled list script functions
- Implemented testing dialog scripts with –script-all
- Implemented NPC lookAt controller
- Implemented handling initial state of particle system
- Implemented a warning when loading a savegame that depends on non-existent content files
- Implemented conversion of global map exploration overlay for ess-Importer
- Implemented command line option to load a save game
- Implemented new display of load order problems in the Data Files tab of the launcher
- Fixed some sound effects playing at very loud levels
- Fixed transparency issues with some UI elements
- Fixed launcher handling of master and plugin selections loaded from openmw.cfg
- Fixed water display issue on AMD cards
- Fixed a text display issue when highlighting words in dialog
- Fixed a launcher crash when a content file is locked
- Fixed being able to stand on top of hostile creatures
- Fixed creatures climbing on top of the player
- Fixed AITravel to more accurately emulate vanilla
- Fixed some moon display issues
- Fixed place-able items having collision
- Fixed AIFollow distance for groups of multiple followers
- Fixed some staircase climbing issues in Vivec
- Fixed permanent magic effects not being saved in savegames
- Fixed crash due to zero-sized particles
- Fixed a model scaling issue
- Fixed activated enchanted item magic not being saved in savegames
- Fixed a crash caused by Ogre shadow handling
- Fixed not being able to equip a shield with a two-handed weapon
- Fixed an issue with player fall height when stepping down
- Fixed an error-handling issue preventing the Sword of Perithia mod from loading
- Fixed launcher reseting alterations made to the mod list order
- Fixed some issues with NPC idle voices
- Fixed vampire corpses standing up when being looted
- Fixed spell cost not highlighting on mouseover
- Fixed tooltips still showing when menu is toggled off
- Fixed rain effect showing while underwater
- Fixed extreme framedrop when running into certain corners
- Fixed mod “Shrines – Restore Health and Cancel Options” restore health option not working
- Fixed animation groups for light and door objects
- Fixed slaughterfish not attacking partially submerged enemies
- Fixed air movement mechanics
- Fixed handling of NPCs with missing hair/head models
- Fixed position flicker after an animation ends
- Fixed supporting region names in cell dialog filter for mod “Julan Ashlander Companion”
- Fixed issues with animated collision shape
- Fixed mod “Morrowind Rebirth 2.81” causing Balmora bridges to not have collision
- Fixed summons to reset when the spell is recast
- Fixed equipment update when unequipping non-related items removing ammunition
- Fixed not falling back to the top-level directory when looking for resources
- Fixed mod pathgrids not overwriting the existing pathgrid
- Fixed a gameplay stopper with the Russian version of the ChaosHeart mod
- Fixed the resurrect function to work correctly
- Fixed functionality to allow mods to overwrite existing records in the IndexedStore
- Fixed an issue with extra bytes to fix an error with the mod “Animated Morrowind – Expanded”
- Fixed multi-character comparison operators to allow spaces
- Fixed handling deleted references to fix the “Gateway Ghost” quest
- Fixed summoning to allow multiple instances of the same creature by using different spells
- Fixed pathgrid in the (0, 0) exterior cell not loading
- Fixed actor original position not being saved with the wander package
- Fixed creatures not receiving fall damage (shouts to this [amazing bug description](http://bugs.openmw.org/issues/2201) )
- Fixed enchant cost issue
- Fixed handling of missing spells and factions to be more graceful
- Fixed several book display issues
- Fixed some script compilation issues
- Fixed scale field for creatures not being handled
- Fixed being able to use enchantments from items that failed to equip
- Fixed handling names for helmet models
- Fixed some NPCs not attacking when they are pickpocketed
- Fixed chargen race preview head default orientation
- Fixed animations with no loop keys being looped
- Fixed spell making to allow adding multiple attribute/skill effects
- Fixed crash when northmarker has been disabled
- Fixed area effect on touch spell behavior
- Fixed dwarven crossbow clipping through the ground when dropped
- Fixed torch animation playing when torch is hidden
- Fixed sneak re-applying after attacking an NPC
- Fixed handling for bipedal creatures without weapons
- Fixed conflict resolution for conflicting dialog topics
- Fixed tab completion for exterior cell names
- Fixed third person view being preserved in save games
- Fixed save/load progress bar behavior
- Fixed TogglePOV not being bindable to the Alt key
- Fixed exception for empty dialog topics
- Fixed PlaceAt function’s count behavior
- Fixed map notes to display on the door marker leading to the cell with that note
- Fixed some UI issues to be better compatible with UI overhaul mods
- Fixed an issue with leveled item arguments
- Fixed enchanted arrows being added to the victim
- Fixed missing sound for drawing throwing weapons
- Fixed guards detecting invisible players
- Fixed camera not being attached properly when player becomes a vampire
- Fixed visual effects showing on the overhead map
- Fixed health modifier not resetting when an actor dies
- Fixed God Mode to not require magicka when casting spells
- Fixed attachArrow exception when changing weapon
- Fixed error when disabled objects are moved between cells
- Fixed scripts with names starting with digits failing to compile
- Fixed click activate and de-activate behavior in the Data Files list
- Renamed “profile” to “content list” in the launcher
- Added comments to the local/global openmw.cfg files to clarify their identity
- OpenMW-CS: Implemented clicking on a script error in the report window to set the cursor in the script editor to the respective line/column
- OpenMW-CS: Implemented deleting selected rows from result windows
- OpenMW-CS: Fixed window opening issue when the config file doesn’t exist
- OpenMW-CS: Fixed skills to allow values other than 0 through 99
- OpenMW-CS: Fixed an issue with not launching when another instance was falsely detected as running
- OpenMW-CS: Fixed a crash on launch when OpenMW is not installed as well
- OpenMW-CS: Cleanup for the Opening Window and User Settings Window

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2758 "Want to leave a comment?")
