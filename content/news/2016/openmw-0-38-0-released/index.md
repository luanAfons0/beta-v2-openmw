---
title: "OpenMW 0.38.0 Released!"
date: 2016-01-22T21:56:40+01:00
lastmod: 2016-03-05T18:06:19Z
slug: "openmw-0-38-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4594
---
The OpenMW team is proud to announce the release of version 0.38.0! Grab it from our [Downloads Page](/downloads) for all operating systems. Hot on the heels of the previous one, this release brings many fixes and improvements, notably movement of objects between cells, and support for the OSG native model format.

**Known Issues:**

- Shadows are not re-implemented at this time, as well as distant land and object shaders
- Features are missing from OpenMW-CS as well: only basic camera controls are implemented, pathgrid and cell marker rendering is missing, as well as instance moving

**Changelog:**

- Implemented werewolf field of view
- Implemented movement of objects between cells, fixes several issues
- Implemented handling OSG native model format
- Implemented separate field of view settings for hands and game world
- Implemented isInCell checks on PlaceAt and PlaceItem
- Implemented handling NiLODNode and NiPointLight
- Implemented notification to indicate when a game is saved
- Fixed player object being deletable
- Fixed AiCombat distance check to take into account collision box
- Fixed saw in Dome of Kasia not hurting a stationary player
- Fixed rats floating when killed near a door
- Fixed kwama eggsacks pulsing too fast
- Fixed NPC voice sound source not being placed at their head
- Fixed crash with OpenMW install wizard
- Fixed reseting delete flag when loading a reference from a save game
- Fixed issues with clicking on unexpected inventory items on character doll
- Fixed spell absorption to apply once per effect
- Fixed enchantment merchant items reshuffling every time barter is clicked
- Fixed not being able to resurrect the player through the console if health is zero
- Fixed projectile weapon behavior when underwater
- Fixed not being able to use keywords in strings for message boxes
- Fixed items not sinking when dropped underwater
- Fixed crash when onPcEquip script removes the equipped item
- Fixed dialog not triggering correctly in Julan Ashlander Companion mod
- Fixed tooltips for Health, Magicka, and Fatigue showing in the Options menu when bars aren’t visible
- Fixed guards accepting gold for crimes even when you don’t have enough
- Fixed Show Owned option affecting tooltips that are not objects
- Fixed player sound source being at the feet
- Fixed not being able to replace interactive message boxes
- Fixed fatal error on OpGetTarget when the target has disappeared
- Fixed first person rendering glitches with high field of view
- Fixed crash on new game at character class selection
- Fixed RigGeometry bone references to be case-insensitive
- Fixed NPCs using wrong sound when landing
- Fixed missing journal textures without Tribunal and Bloodmoon installed
- Fixed multiple AiFollow packages causing the distance to stack
- Fixed creature dialogs not being handled correctly
- Fixed crash when entering Holamayan Monastery with mesh replacer installed
- Fixed dreamers spawning too soon
- Fixed Next/Previous Weapon/Spell and Ready Spell working as a werewolf
- Fixed being able to soultrap a creature more than once
- Fixed summoned creatures and objects disappearing at midnight
- Fixed gamecontrollerdb file being created as a txt instead of a cfg
- Fixed “same race” dialog functions never triggering
- Fixed dialog choice condition issue
- Fixed body part rendering when in a pose
- Fixed reversed sneak awareness check
- Fixed positional sound acceleration issue
- Fixed fatal error when LandTexture is missing
- OpenMW-CS: Implemented choosing colors for syntax highlighting
- OpenMW-CS: Implemented hiding script error list when there are no errors
- OpenMW-CS: Implemented ability to create omwaddons with periods in the filename
- OpenMW-CS: Implemented configurable size for scipt error panel
- OpenMW-CS: Implemented tooltips in the 3D scene
- OpenMW-CS: Fixed issue with handling of DELE subrecords
- OpenMW-CS: Fixed Verify not checking if given item ID for a container exists

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3338 "Want to leave a comment?")
