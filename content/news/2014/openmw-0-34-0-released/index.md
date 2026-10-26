---
title: "OpenMW 0.34.0 Released!"
date: 2014-12-22T00:41:41+01:00
lastmod: 2024-01-05T16:49:33Z
slug: "openmw-0-34-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4137
---
The OpenMW team is proud to announce the release of version 0.34.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release features many bug fixes, improvements to installation and the launcher, and exciting updates to OpenCS. Our “1.0” release remains excitingly close!

![OpenMW v0.34](https://openmw.org/wp-content/uploads/2014/12/10750237_574294209337349_7419861345504652452_o.jpg)

**Known Issues:**

- Crash when trying to view cell in render view in OpenCS on OSX
- Crash when switching from full screen to windowed mode on D3D9

**Changelog:**

- Implemented ClampMode in NiTexturingProperty, fixes some floating plant textures
- Implemented INI-importer for the launcher
- Implemented “encoding” option in the launcher
- Disabled third-person zoom by default due to usability issues (can be re-enabled in settings file)
- Fixed several launcher and installation issues
- Fixed issue with BIK video/audio playback sync
- Fixed NPCs ignoring player invisibility when engaged in combat
- Fixed long class names being cut off in the UI
- Fixed running while levitating draining fatigue
- Fixed handling of disabled plugins
- Fixed ToggleMenus not closing dialog windows
- Fixed crash when calling getDistance on items in the player’s inventory
- Fixed the Buglamp tooltip showing the item weight
- Fixed slave crime reaction to PC picking up slave’s bracers
- Fixed Dremora death animation
- Fixed Mansilamat Vabdas’s floating corpse
- Fixed bounty not being completely removed after the Larius Varro Tells A Little Story quest
- Fixed silenced enemies attempting to cast spells
- Fixed The Warlords quest
- Fixed sneak attacks on hostiles causing a bounty
- Fixed a crash caused by incorrect handling of getPcRank and similar defines
- Fixed pause in Storm Atronach animation
- Fixed a bug in TerrainGrid::getWorldBoundingBox
- Fixed crash on exceptions while adding startup scripts
- Fixed AiWander path finder hang when quickly changing cells
- Fixed crash when playing OGG files
- Fixed Dagoth Gares talking to the player even when he is not there
- Fixed overflow exploit in bartering
- Fixed a crash when maximizing the window with the race selection dialog open on D3D9
- Fixed script command “Activate, player” not working
- Fixed buttons only lighting on hover over their label
- Fixed Slowfall effect being too weak
- Fixed several skeleton/bone model and animation issues
- Fixed script handling to treat the [ character as whitespace
- Fixed a crash in character preview for non-existing meshes
- Fixed abrupt transition when ash storms end
- Fixed mouse movements being tracked during video playback
- Fixed a crash on exit
- Fixed being able to attack Almalexia during her final monologue
- Fixed the frame time cap not being applied to Ogre’s ControllerManager
- Fixed recalculation of Magicka to be less aggressive
- Fixed Azura’s spirit fading away too fast
- Fixed Magicka becoming negative
- Fixed health so it drops to 0 if it goes below 1.
- Fixed floating hairs in Westly’s Pluginless Head And Hair Replacer
- Fixed some issues with mods that use conversation scripts to update the PC
- Fixed graphical issues with Morrowind Grass Mod
- Fixed issues with renaming profiles in the launcher
- OpenCS: Implemented rendering cell markers
- OpenCS: Implemented double-click functionality in tables
- OpenCS: Implemented user settings dialog grouping, labeling, and tooltips
- OpenCS: Implemented editing positions of references in the 3D scene
- OpenCS: Implemented edit mode button on the scene toolbar
- OpenCS: Implemented user setting for showing the status bar
- OpenCS: Improved the layout of the user settings dialog
- OpenCS: Fixed script compiler sometimes failing to find IDs
- OpenCS: Fixed verifier not handling Windows-specific path issues when dealing with resources
- OpenCS: Fixed display of combat/magic/stealth values
- OpenCS: Fixed saving
- OpenCS: Fixed exception caused by following the Creature column of a SoundGen record
- OpenCS: Fixed MDL subrecord error
- OpenCS: Fixed coordinate and rotation editing
- OpenCS: Fixed several window and view handling issues
- OpenCS: Fixed loading plugins with moved references, implementation of moved references still pending
- OpenCS: Fixed a crash when closing cell render window on OSX

**[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2663)**
