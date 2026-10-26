---
title: "OpenMW 0.33.0 Released!"
date: 2014-10-29T01:47:43+01:00
lastmod: 2014-10-30T18:50:53Z
slug: "openmw-0-33-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4069
---
The OpenMW team is proud to announce the release of version 0.33.0! Grab it from our [Downloads Page](/downloads) for all operating systems. We are moving closer and closer to our vaunted “1.0” release, and as such, the list of unimplemented features has run excitingly low. This release brings almost 100 fixes, as well as many exciting advancements for OpenCS. Stay tuned!

![10704293_552836551483115_1408266491942342058_o](https://openmw.org/wp-content/uploads/2014/10/10704293_552836551483115_1408266491942342058_o.jpg)

**Known Issues:**

- Switching from fullscreen to windowed mode on Windows 7 or 8.1 while using the D3D9 renderer causes a crash

**Changelog:**

- Implemented font colors importing from fallback settings
- Implemented Death and LevelUp music
- Implemented console targetting on player
- Implemented red pain effect when hit
- Implemented spellcasting for non-biped creatures
- Implemented the RA (Reset Actors) console command
- Fixed extraneous characters from keypresses showing in console when console is bound to a character key
- Fixed issues with book and scroll content display
- Fixed NPCs reacting from too far away
- Fixed PC spawning on top of followers when going through doors
- Fixed tall PCs getting stuck in staircases
- Fixed how the spawn point is determined for certain problematic doors and areas
- Fixed executable icon in Windows
- Fixed third person Eeyore rain effect
- Fixed thunder and lightning still playing while the game is paused
- Fixed jump behavior to better match vanilla
- Fixed being able to rest on water while water walking
- Fixed Cancel button consistency issues
- Fixed compile error in Less Generic Nerevarine mod
- Fixed unhandled ffmpeg sample formats
- Fixed resizing the map not staying centered
- Fixed attacking NPCs already in combat being reported as a crime
- Fixed a crash on load with Morrowind Acoustic Overhaul
- Fixed knocked out actors still colliding and speaking
- Fixed soul trap success sound not playing
- Fixed missing sound effect for enchanted items with an empty charge
- Fixed handling the “MagicItems” vendor category
- Fixed Launcher not starting if a file listed in launcher.cfg has the wrong case
- Fixed goblins killed while knocked down remaining in the knocked down pose
- Fixed CellChanged events triggering when crossing an exterior cell border
- Fixed Spriggans being killed instantly if hit while regenerating
- Fixed Magic Menu text not dimming when going from a spell to item as the active magic
- Fixed unlit torches procuding a burning sound
- Fixed being able to type text into the price field in the barter window
- Fixed equipped items not emitting sounds
- Fixed Draugr Lord Aesliip remaining non-hostile when attacking
- Fixed bounty and crime not resetting immediately when going to jail
- Fixed getdistance behavior for targets in an inactive cell
- Fixed potential infinite recursion when an area effect spell is reflected
- Fixed bound gear equipping behavior
- Fixed followers on the Establish The Mine quest
- Fixed exceptions with adding local scripts
- Fixed a crash caused by teleportation spells
- Fixed bound item checks not using GMSTs
- Fixed NPCs moving load doors
- Fixed Attacked flag being set when the actor is already in combat with the attacker
- Fixed AiTravel accepting destinations further than 7168 units away, to match vanilla
- Fixed world map arrow not adjusting to interior player facing
- Fixed Ulyne Henim disappearing when game is loaded inside Vas
- Fixed alchemy not correctly handling effects with zero magnitude/duration
- Fixed levitation permissions not being saved in save games
- Fixed NPCs not using magic
- Fixed named cells that overlap with Morrowind.esm not showing, for Tamriel Rebuilt
- Fixed magic effects not being overwritten by mods that change magic effects
- Fixed stacks of items being worth more when sold individually
- Fixed Launcher not listing addon files if the base game file is renamed to a different case
- Fixed incorrect reading of global map state in some cases when the map size changed
- Fixed Mercantile skill gain
- Fixed OnPcHitMe triggering for friendly hits
- Fixed considering actors as followers if they are also in combat with the follow target
- Fixed Journal scrolling indefinitely with the mouse wheel
- Fixed followers not leaving the party when a quest ends
- Fixed unbound input action behavior
- Fixed spell merchants selling racial bonus spells
- Fixed a segfault when loading saves
- Fixed jump sound to be controlled by footstep volume slider
- Fixed player suffering silently when taking damage from lava
- Fixed Dwarven Sceptre collision area not being removed after being killed
- Fixed indirect followers not being teleported when using a door
- Fixed East Empire Company faction rank after completing the questline
- Fixed zero strength causing the player to be permanently overencumbered, even with no weight
- Fixed shrine blessings in Maar Gan
- Fixed enchanted items not recharging
- Fixed Dagoth Ur dying from Ash Vampire deaths
- Fixed a dialog loop in The Code Book quest for the Fighter’s Guild
- Fixed “root bone” to be treated as the animation root if it exists
- Fixed number of Alchemy ingredients not removing from potion window
- Fixed mouse-over text not showing for spells the player can’t afford
- Fixed crash when entering Ruinous Keep, Great Hall in Tamriel Rebuilt
- Fixed extra string arguments to ShowMap breaking script compilation
- OpenCS: Implemented a special case for top-level windows with a single sub-window
- OpenCS: Implemented sub-windows reusing settings
- OpenCS: Implemented opening sub-views in a new top-level window
- OpenCS: Implemented magic effect table
- OpenCS: Implemented path grid table
- OpenCS: Implemented sound gen table
- OpenCS: Implemented requesting UniversalId editing from table columns
- OpenCS: Implemented terrain rendering
- OpenCS: Implemented CellRef global variable column
- OpenCS: Implemented using ESM::Cell’s RefNum counter
- OpenCS: Implemented running OpenMW with the currently edited content list
- OpenCS: Fixed subviews being deleted on shutdown instead of when they are closed
- OpenCS: Fixed ReferenceableID behavior when dragging to references record filter
- OpenCS: Fixed content files being able to be opened multiple times from the same dialog
- OpenCS: Fixed “Edit Record” context menu button not opening subview for journal infos
- OpenCS: Fixed record edits resulting in duplicate entries
- OpenCS: Fixed some characters not being able to be used in addon names
- OpenCS: Fixed preferences window appearing off screen
- OpenCS: Fixed record filter title position
- OpenCS: Fixed region field for cell record in dialogue subview not working
- OpenCS: Fixed label “Musics” to be “Music”
- OpenCS: Fixed status bar not updating when record filter is changed
- OpenCS: Fixed documents not being removed when closing the last view
- OpenCS: Fixed File->Exit only checking the document it was issued from
- OpenCS: Fixed script compiler member variable access

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2549 "Want to leave a comment?")
