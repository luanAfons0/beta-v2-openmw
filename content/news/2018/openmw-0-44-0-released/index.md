---
title: "OpenMW 0.44.0 Released!"
date: 2018-07-29T23:16:58+02:00
lastmod: 2018-07-30T16:27:54Z
slug: "openmw-0-44-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=5132
---
The OpenMW team is proud to announce the release of version 0.44.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release brings a slew of new features and bug fixes, including a search bar for spells, a tab for advanced settings in the launcher, and multiple quicksaves.

Check out the [release video](https://www.youtube.com/watch?v=abbQKIiqHDU) and the [OpenMW-CS release video](https://www.youtube.com/watch?v=0LJv5Orvs20) by the perspicacious Atahualpa, and see below for the full list of changes.

{{< youtube id="abbQKIiqHDU" title="OpenMW 0.44 Release Commentary" >}}

{{< youtube id="0LJv5Orvs20" title="OpenMW-CS 0.44 Release Commentary" >}}

**Known Issues:**

- Shadows are not re-implemented yet
- To use the Linux targz package binaries, Qt4 and libpng12 must be installed on your system
- On macOS, OpenMW-CS is able to launch OpenMW only if OpenMW.app and OpenMW-CS.app are siblings

**New Features:**

- Spell search bar implemented
- Launcher: Advanced settings tab added (#4054)
- Implemented option for fast travel services to charge for every companion (#4064)
- Added an option to have multiple quicksaves (#4174)
- Added an option to rebalance soul gem values based only on soul value, not soul times gem value (#4423)
- OpenMW-CS: Terrain Texture Brush button implemented (#3870)
- OpenMW-CS: Edit functions for terrain texture editing mode implemented (#3872)
- OpenMW-CS: New, and more complete, icon set added

**Bug Fixes:**

- Daedra are now summoned when picking up cursed items through the inventory, OnActivate is now triggered even with the inventory menu open (#1428, #3726)
- Similar glyphs are now used as fallbacks when unsupported glyphs are encountered (#1987)
- Magic effects active when a save is loaded are now rendered (#2254)
- Journal alphabetical indexing now works in Russian language versions (#2485)
- Declaring OnPCHitMe in an actor’s script now prevents the actor from attacking, even in self-defense, if his Fight is equal to zero (#2703)
- Content selector now places Morrowind.esm at the beginning of the mod list, if it is present (#2829)
- Undefined weather settings now fallback to middle grey instead of pure black (#2841)
- Mods are now found if the mod directory is a parent of the installation directory (#3557)
- Flying and swimming creatures no longer use the pathgrid (#3587)
- SetPos no longer skips weather transitions, fixing transitions in mods that use SetPos to travel the player, such as Boats Mod (#3603)
- ESM files with capital-case extensions now load correctly with the launcher (#3618)
- Fixed an issue where NPCs could get stuck inside terrain/objects when the player rests (#3638)
- Combat music is now updated in menu mode (#3664)
- Extraneous carriage returns are cut from dialog output (#3696)
- Fixes for controllers on macOS (#3708)
- SetPos can no longer place the target under terrain level (#3783)
- Fixed an issue where casting Calm Humanoid on a guard the player is resisting arrest from caused a dialog loop when trying to resist again (#3863)
- Enemies who are knocked out will no longer recover immediately (#3884)
- Imported content files are now sorted according to their dependencies, instead of just modified time (this fixes Bethesda ESMs broken by the Steam version of Morrowind) (#3926)
- Scripts now support period and hyphen characters in the script name, as long as it is not the first character (#4061)
- Soul gems with trapped souls of creatures from mods that have been removed will now be empty instead of crashing the game (#4111)
- Swim animation is no longer interrupted when attacking underwater (#4122)
- An empty battle music folder now results in explore music being played in combat (#4134)
- Added a vanilla absorb spell behavior option, which is enabled by default (#4135)
- Added vanilla enchanted weaponry behavior option, which is enabled by default (#4136)
- Centroid interpolation is now used for shader lighting, fixing some graphical artifacts when using antialiasing (#4143)
- NPC base skeleton files are not longer optimized, fixes some body replacer mods (#4159)
- To prevent animation flickering, the landing animation is no longer played when the player is turning as they are landing (#4177)
- Fighting actors now face their target instead of the nearest actor (#4179)
- Weapon switch sound is no longer played when no different weapon is present to switch to (#4180)
- Guards can no longer initiate dialog with the player when the player is far above the guard (#4184)
- The correct graphical effect is now applied to armor and clothes when changing them while chameleoned or invisible (#4190)
- “Screenshot Saved” message has been removed (#4191)
- Attack range for NPC archers and spellcasters now more accurately matches vanilla behavior (#4192)
- Dialog topics are now always highlighted when first encountered (#4210)
- Fixed an FPS drop after minimizing the game during rainy weather (#4211)
- Thrown weapon projectiles now all rotate when in the air (#4216)
- Spell casting chance now displays as zero if the player does not have enough magicka to cast it (#4223)
- Fixed double activation button presses when using a gamepad (#4225)
- The player’s current class and birthsign is now the default value in the class select and bithsign select menus, rather than the first item in the list (#4226)
- Tribunal and Bloodmoon summoned creatures no longer automatically fight other followers (#4229)
- Player movement from one directional key is now nullified if the opposite directional key is also pressed (#4233)
- Wireframe mode no longer affects the map (#4235)
- Fixed a crash when quick loading from the container screen (#4239)
- Greetings are no longer added to the journal topic list (#4242)
- Merchant NPCs no longer sell ingredients from containers that they own that have zero capacity, such as plants (#4245)
- Armor condition is now taken into account when calculating armor rating (#4246)
- Removed unintended jump cooldown (#4250)
- Fixed console spam when OpenMW encounters a non-music file in the Music folder (#4252)
- Magic effects from eaten ingredients now have the correct duration (#4261)
- Arrow position is now correct in third person view during attacks for beast races (#4263)
- Players in god mode are no longer affected by negative spell effects (#4264)
- Missing ‘sAnd’ GMST no longer causes a crash (#4269)
- Root node transformation is no longer incorrectly discarded, fixing characters in the mod The Black Mill (#4272)
- The map is now updated with explored cells correctly, instead of only when the map window is opened (#4279)
- MessageBoxes now appear over the chargen menu (#4298)
- Optimizer no longer breaks LOD nodes (#4301)
- PlaceAtMe now correctly inherits the scale of the calling object (#4308)
- Resistance to magic now affects all resistable magic effects (#4309)
- Opening doors is now restricted to bipedal actors (#4313)
- Rainy weather no longer slows down the game when changing from indoors to outdoors (#4314)
- Meshes with CollisionType=Node flag are no longer ignored (#4319)
- Activate and Move keys are no longer used for GUI navigation if they are bound to mouse buttons (#4320)
- NPC negative faction reaction modifier now works correctly (#4322)
- Taking owned items is no longer considered a crime if the owner is dead (#4328)
- Torch and shield equipping behavior now is more consistent with the original game (#4334)
- Installation wizard now appends “/Data Files” if needed when autodetecting path (#4336)
- “Interior” removed from cell not found message (#4343)
- Inventory item count for very high numbers no longer shows incorrect values due to truncation (#4346)
- Using AddSoulgem no longer fills all soul gems of the specified type (#4351)
- A message is displayed if the spell a player tries to select via quickkey is missing (#4391)
- Inventory filter is now reset to All when loading a game (#4392)
- Terrain is now rendered for empty cells (#4405)
- OpenMW now handles marker definitions correctly, fixing mod Arktwend (#4410)
- iniimporter no longer ignores data paths (#4412)
- Moving with zero strength no longer uses all of your fatigue (#4413)
- Camera no longer flickers when opening and closing menu while sneaking (#4420)
- Cursor now displays correctly when OpenMW is compiled against macOS 10.13 SDK (#4424)
- Item health is no longer considered a signed integer, it can no longer be negative (#4435)
- Adding items to currently disabled creatures will no longer crash the game (#4441)
- Encumbrance value is now rounded up (#1786)
- Werewolf health is now correctly calculated (#4142)
- NiLookAtController node is now ignored, like in vanilla (#4407)
- OpenMW-CS: “Original Creature” field renamed to “Parent Creature” (#2897)
- OpenMW-CS: Unchecking “Auto Calc” flag when editing an NPC record no longer causes unreasonable values to be filled in (#3278)
- OpenMW-CS: Fixed search and verification result tables to be case-insensitive when sorting (#3343)
- OpenMW-CS: “Model” column renamed to “Model/Animation” (#2694)

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=5323 "Want to leave a comment?")
