---
title: "OpenMW 0.35.1 Released!"
date: 2015-03-15T23:26:40+01:00
lastmod: 2024-01-05T16:48:14Z
slug: "openmw-0-35-1-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4270
---
The OpenMW team is proud to announce the release of version 0.35.1! Grab it from our [Downloads Page](/downloads) for all operating systems. This maintenance release includes fixes for several crashes that users may be experiencing with the 0.35.0 version. Several features are also included in this release, such as corpse dressing and preliminary joystick support. Many bug fixes and improvements are also included, please see the full changelog below.

**Known Issues:**

- Crash when trying to view cell in render view in OpenMW-CS on OSX
- Crash when switching from full screen to windowed mode on D3D9

**Changelog:**

- Implemented being able to dress corpses (you weirdos)
- Implemented checking Cmake sets correct MSVC compiler settings for release build
- Implemented default values for mandatory global records
- Implemented basic joystick support
- Implemented a progress bar for Morrowind.ini import progress in the launcher
- Implemented passage of time indicator when training or serving jail time
- Fixed a crash caused by a land record without data
- Fixed creatures with no skeleton base causing a crash
- Fixed engine becoming unresponsive when trying to use equip next/previous with an empty inventory
- Fixed error caused by relying on subrecord order when reading content files
- Fixed sun trajectory
- Fixed stolen items handling to match vanilla Morrowind
- Fixed Divine Intervention sending the player to the wrong place in some cases
- Fixed telekinesis not working to avoid traps
- Fixed combat AI for unreachable enemies
- Fixed object scale being considered in the Move instruction
- Fixed multi-effect spells with different ranges not all applying
- Fixed launcher not responding to Ctrl+C command from the terminal
- Fixed drag-and-drop creating duplicate content files in the launcher when Alt is pressed
- Fixed addon files with no dependencies not showing in the launcher
- Fixed Detect Animal detecting dead creatures
- Fixed Cmake not respecting LIB_SUFFIX
- Fixed changing active magic holstering magic hands
- Fixed switching spells with next or previous while holding shift raising the delete spell dialog
- Fixed regression causing ignored clicks on the HUD mini-map
- Fixed instant restore effect behavior
- Fixed CE restore attribute items permanently boosting the stat they restore
- Fixed being able to fall off the prison ship
- Fixed wrong starting position in “Character Stuff Wonderland”
- Fixed plugin load order being sorted incorrectly when importing Morrowind settings
- OpenMW-CS: Fixed skills saving incorrectly
- OpenMW-CS: Fixed file extension inconsistency

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2814 "Want to leave a comment?")
