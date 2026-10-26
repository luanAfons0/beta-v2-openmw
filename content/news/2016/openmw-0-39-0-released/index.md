---
title: "OpenMW 0.39.0 Released!"
date: 2016-05-28T21:59:40+02:00
lastmod: 2016-12-09T21:58:30Z
slug: "openmw-0-39-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4663
---
The OpenMW team is proud to announce the release of version 0.39.0! Grab it from our Downloads Page for all operating systems. This release brings background cell loading and caching, which is a feature not to be missed. Initial support for object shaders has found its way back into our engine, and a host of bugs have been smashed. See below for the full list of changes.

The venerable Atahualpa has bravely stepped up to fill WeirdSexy’s boundless shoes as our video producer, check out the video for [this release](https://youtu.be/6SIz0LYWJzQ) and [OpenMW-CS 0.39.0](https://youtu.be/IthswdFkyss). Check our blog or [Youtube channel](https://www.youtube.com/channel/UC7ELKFxvLAWktmUsaFR004g) if you missed his videos for versions 0.36, 0.37, or 0.38.

{{< youtube id="6SIz0LYWJzQ" title="OpenMW 0.39 Release Commentary" >}}

{{< youtube id="IthswdFkyss" title="OpenMW-CS 0.39 Release Commentary" >}}

**Known Issues:**

- Shadows are not re-implemented at this time, as well as distant land

**Changelog:**

- Implemented background cell loading and caching of loaded cells
- Implemented support for object shaders in OSG
- Implemented interpolation for physics simulation, smoothing rendering of statics and fixing some collision issues
- Implemented support for sphere map NiTextureEffects
- Implemented the FixMe script instruction
- Implemented support for RGB and RGBA embedded textures in NIF files
- Implemented corpse clear delay
- Implemented per-creature respawn time tracking
- Fixed Dark Brotherhood Assassins, ghosts in Ibar-Dad, and other creatures spawned with PlaceAt spawning inside world geometry
- Fixed Activate / OnActivate script instruction to match vanilla behavior
- Fixed player spawning underwater when loading a game saved while swimming
- Fixed NPCs not using correct animations with Animated Morrowind mod
- Fixed Riekling raider pig screaming continuously
- Fixed Vivec’s hands in the Psymoniser Vivec God Replacement mod
- Fixed NPCs spamming restoration spells instead of defending themself
- Fixed a crash caused by local script iteration
- Fixed AI packages to not stack when duplicates are added
- Fixed actor animations not being rebuilt on resurrection
- Fixed dialog boxes for non-standard NPCs not scrolling correctly
- Fixed wandering NPCs disappearing or getting teleported to strange places
- Fixed missing NPC name in journal entry when given Pilgrimages of the Seven Graces quest
- Fixed bounding box used for items when dropping them from the inventory
- Fixed spells exploding on an actor being applied twice
- Fixed Azura’s missing head
- Fixed potion effect showing when ingredient effects are not known
- Fixed hands turning partially invisible when chopping with a spear
- Fixed fast travel breaking save files made afterwards
- Fixed crash after casting recall spell
- Fixed constant effect enchantment animation playing on dead bodies
- Fixed spell effects to not persist after the caster dies
- Fixed corpses that are submerged at the beginning of the game to stay submerged
- Fixed “when strikes” enchantments to not launch a projectile from the attacker when they apply
- Fixed camera snapping to straight up or down after teleporting
- Fixed alchemy window ingredient count not decrementing when combining ingredients that don’t share effects
- Fixed mods corrupting the hasWater() flag for exterior cells
- Fixed a crash with mods that define bip01 spine1 but not bip01 spine2
- Fixed class image display when an image for the class is not found
- Fixed possible infinite disposition through exploit
- Fixed glitch causing removed clothing to still be rendered on the character on the inventory paper doll
- Fixed statics and activators not being able to cast spell effects on the player
- Fixed cells not loading when using Poorly Placed Object Fix mod
- Fixed female characters incorrectly using the male base animation skeleton
- Fixed “use best attack” punches to match vanilla behavior
- Fixed crash when clicking through the class selection menu a specific way
- Fixed save list jumping to the top when deleting a saved game
- Fixed the selected class and race not being cleared when starting a new game
- Fixed crash when water normal map is missing
- Fixed an issue with handling stray arguments in scripts
- Fixed Drop script instruction to match vanilla behavior
- OpenMW-CS: Implemented GMST verifier
- OpenMW-CS: Implemented info record verifier
- OpenMW-CS: Implemented rendering cell border markers in Scene view
- OpenMW-CS: Implemented point lighting in Scene view
- OpenMW-CS: Implemented optional line wrapping in script editor
- OpenMW-CS: Reimplemented 3D scene camera system
- OpenMW-CS: Implemented scenes being a drop target for referenceables
- OpenMW-CS: Implemented rendering cell markers in Scene view
- OpenMW-CS: Implemented Instance selection menu in Scene view
- OpenMW-CS: Implemented Move sub mode for Instance editing mode in Scene view
- OpenMW-CS: Implemented behavior for changing water level of interiors to match exteriors
- OpenMW-CS: Implemented using “Enter” key instead of clicking “Create” button to confirm ID input in Creator Bar
- OpenMW-CS: Fixed objects dropped in the scene not always saving
- OpenMW-CS: Fixed objects added to the scene not rendering until the scene is reloaded
- OpenMW-CS: Fixed land data being written twice
- OpenMW-CS: Fixed GMST ID named sMake Enchantment being named sMake when making new game from scratch
- OpenMW-CS: Fixed creator bar in Start Scripts subview not accepting script ID drops
- OpenMW-CS: Fixed using the “Next Script” and “Previous Script” buttons changes the record status to “Modified”

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=3479)
