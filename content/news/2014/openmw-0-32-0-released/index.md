---
title: "OpenMW 0.32.0 Released!"
date: 2014-09-17T08:04:31+02:00
lastmod: 2014-09-17T06:22:12Z
slug: "openmw-0-32-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=3969
---
The OpenMW team is proud to announce the release of version 0.32.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This is one of the more magical OpenMW releases, bringing completed implementation of all magic effects as well as NPC AI for casting spells, using potions, etc. in combat. The implementation of mouth movement, eye blinking, and several other NPC AI features breathe more life into NPCs in this release as well. Over 100 issues have been fixed in this release, as we steamroll towards 1.0!

The tiresome affairs of real life have prevented our beloved WeirdSexy from creating a video for this release. We wish him the best in everything, and have our fingers crossed that he will work his magic for a 1.0 release video when the time comes!

**Known Issues:**

- Switching from fullscreen to windowed mode on Windows 7 or 8.1 while using the D3D9 renderer causes a crash

**Changelog:**

- Finished implementing all magic effects, including Command, Elemental Shield, and Light
- Implemented NPC AI for combat magic
- Implemented NPC AI for friendly hits
- Implemented NPC AI for fighting for the player if they are following
- Implemented NPC mouth movement
- Implemented NPC eye blinking
- Implemented collision script instructions
- Implemented magic effect get/mod/set functions
- Implemented difficulty slider
- Implemented custom map markers
- Implemented script blacklisting
- Implemented including the git revision number from the “–version” command line switch
- Implemented mouse wheel scrolling for the journal
- Implemented NiBSPArrayController to emit particles on random child nodes
- Implemented sharing keyframe data
- Implemented ignoring extra arguments being given to very few certain script functions where the use of stray arguments is most prevalent
- Implemented double click on inventory window headers to close the window
- Implemented targeted scripts
- Fixed being unable to jump when facing a wall
- Fixed summoned creatures not immediately disappearing when killed
- Fixes for several script compilation issues
- Fixed NPCs equipping weapons prior to fighting
- Fixed Start Scripts which have been stopped not restarting on loading a game
- Fixed paralyzed NPC corpses exhibiting strange behavior
- Fixed abilities being depleted when interrupted during casting
- Fixed NPC behaviors when facing the player
- Fixed a missing French character
- Fixed a memory leak with MyGUI
- Fixed journal being inaccessible while in inventory
- Fixed PC randomly joining factions
- Fixed NPCs not switching weapons when exhausting ammunition
- Fixed guards detecting creatures from too far away
- Fixed several issues with The Siege of the Skaal Village quest in Bloodmoon
- Fixed quotation mark character in books
- Fixed doors colliding with dead bodies
- Fixed display issue with very high bounties
- Fixed NPC spell calculation formula
- Fixed boats standing vertically in Vivec
- Fixed issue with arrest dialogue when selecting “Go to jail”
- Fixed strange NPC follow behavior in Hlaalu Ancestral Vaults
- Fixed Persuasion dialog persisting after loading a game
- Fixed “Goodbye” dialog option not being escapable
- Fixed PC stats not updating immediately when changing equipment
- Fixed non-aggressive creatures
- Fixed crash when quick-loading with a container window open
- Fixed order of validity checks when placing items into a container
- Fixed item stacking for repaired weapons and armor
- Fixed saving attacked state of NPCs
- Fixed “Background” dialog topic ignoring rank condition
- Fixed game starting on day 2
- Fixed successful critical strikes on enemies who have spotted the player
- Fixed fatigue not decreasing by the correct amount when running
- Fixed a graphics issue with the minimap and local map
- Fixed wrong button title on travel menu
- Fixed criminal punishment for sleeping on a rented bed
- Fixed NPCs turning towards the player even if invisible/sneaking
- Fixed mouse still interacting with map when pinned and inventory closed
- Fixed spell absorption not absorbing shrine blessings
- Fixed journal topics sometimes displaying as quests
- Fixed scroll behavior in scrolls
- Fixed player enchanting requiring money and always being 100% successful
- Fixed custom made potions not applying all effects
- Fixed rain sound pausing in menus
- Fixed Remesa Othril being hostile to Hlaalu members
- Fixed a crash on load after death
- Fixed blind effect not covering the entire screen
- Fixed crash after load after creating an enchanted item
- Fixed Retrieve the Scrap Metal quest dialog script issue
- Fixed targets almost always resisting soultrap scrolls
- Fixed no message being displayed when casting soultrap on an invalid target
- Fixed chop attack not working when walking diagonally
- Fixed world map explored terrain issue when alt-tabbing on D3D9
- Fixed levitate causing the player to appear out of bounds when going through doors
- Fixed setting a variable on an NPC from another NPC’s dialog not working correctly
- Fixed wait dialog not blacking out the screen properly
- Fixed crash on sDifficulty GMST when using vanilla files without patches or expansions
- Fixed sky rendering issue in Skies version IV
- Fixed marksman weapons not degrading with use
- Fixed battle music playing constantly
- Fixed alt-tabbing while in inventory causing the paper doll to disappear temporarily
- Fixed cost of training not being added to merchant’s inventory
- Fixed disposition changes not persisting if the conversation meny is closed by purchasing training
- Fixed blight still being contractible after being cured of Corpus
- Fixed crash when trying to access fog of war buffer before it is loaded
- Fixed PC Magicka not recalculating when intelligence is boosted or drained
- Fixed equipped torches disappearing when game is reloaded
- Fixed soultrap fail message displaying when targetting NPCs
- Fixed an issue with magicka cost for custom spells
- Fixed Azura’s Star disappearing when used to recharge an item
- Fixed GetPCRank not handling ignored explicit references
- Fixed string table overflow when loading TheGloryRoad.esm
- Fixed Dagoth Uthol running in slow motion
- Fixed incorrect values in the spellmaking window
- Fixed icon for Master Propylon Index not being visible
- Fixed Tavynu Tedran’s corpse going invisible after being looted
- Fixed health calculation when levelling up
- Fixed some monsters blocking doors from behind
- Fixed Ma’Rakha location in Less Generic NPC Foreign Quater mod
- Fixed number of potion effects shown per Alchemy rank
- Fixed encumbrance not updating while bartering
- Fixed base Magicka multiplier
- Fixed a torch in Addamasartus burning when it shouldn’t
- Fixed aquatic creature movement speed
- Fixed “Rest until healed” showing with full Health and Magicka
- Fixed Recalling while falling in an exterior cell changing Mark location
- Fixed stutter caused by ActorId in AiFollow::getTarget not being cached
- Fixed Dremora next to Gothren not sticking up for each other
- Fixed button placement on the QuickChar mod
- Fixed value and weight showing for keys
- Fixed persuasion results not showing when using an unpatched Morrowind.esm
- Fixed issue with Falura Llervu follow quest when loading a save
- Fixed only guards reacting to theft
- Fixed on-target spells being rendered behind the water surface
- Fixed Galsa Gindu’s house appearing as if it is on fire
- Fixed an Ogre fatal exception on invalid parameters
- Fixed Guards trying to talk to players corpse after killing the player
- Fixed an infinite recursion in ActionTeleport
- Fixed followers teleporting with the player into new cells after they are done following the player
- Fixed typing “j” into the “Name” field opening the journal
- Fixed text pasting into the console twice
- Fixed “setfatigue 0” not rendering NPCs unconscious
- Fixed being able to talk to unconscious actors
- Fixed crash when player killed by own summoned creature
- Fixed memory leak when OpenMW window is minimized
- Fixed RefNum of objects not being reset when they are copied
- Removed defunct option for building without FFmpeg
- OpenCS: Implemented body part record verifier
- OpenCS: Implemented improved keyboard navigation for scene toolbar
- OpenCS: Implemented tooltips on all graphical buttons
- OpenCS: Implemented handling resources like regular records
- OpenCS: Implemented scene toolbar buttons for selecting element types to be rendered – most of the scene elements supported by these buttons are not implemented yet
- OpenCS: Fixed not saving projects when the defaultfilters file has the wrong permissions

##### [Want to leave a comment?](http://forum.openmw.org/viewtopic.php?f=38&t=2421)
