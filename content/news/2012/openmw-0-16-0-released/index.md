---
title: "OpenMW 0.16.0 released!"
date: 2012-07-10T17:26:39+02:00
lastmod: 2024-01-05T16:29:31Z
slug: "openmw-0-16-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=1391
---
The OpenMW team is proud to announce the release of version 0.16.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](http://code.google.com/p/openmw/downloads/list).This version includes the Spell Window, Alchemy Window, and a myriad of fixes and improvements.

A release video by our very own WeirdSexy can be viewed here:

{{< youtube id="ThfZrNVp5kQ" title="OpenMW 0.16 Release Commentary" >}}

Please review the following:

**Known Issues:**

- Some objects/models show up with completely black textures. Use OpenGL as your renderer or disable shaders under [Objects] in the config file.
- Inputting player -> addspell -NonExistingSpell- makes the command window throw “Error in framelistener: object -NonExistingSpell- not found” continuously. It will also prevent you from moving.

**Changelog:**

- Added Spell Window
- Added Alchemy Window
- Added support for x.y script sytax
- Weapon and spell icons now update to reflect the selected weapon and spell
- Added in-game settings window
- Launcher now saves user-set renderer settings
- Fixed a crash on OSX due to underwater effets
- Fixed auto-equipping not working in some cells
- Fix for container GUI ignoring disabled inventory menuBug #294: Container GUI ignores disabled inventory menu
- Fix for stats review dialog showing all skills and attribute values as 0
- Fixes for several crashes
- Implemented game modes as a stack to prevent erratic behavior
- Added tooltips to class creation dialog
- Added support for show/hiding windows by clicking HUD elements
- Added support for corect player direction after using a Teleport Door
- Added support for selecting objects in the console by clicking them in the scene
- Added support the use of = as a synonym for ==
- Sped up script object access
- Restructured enabling/disabling of objects by script instruction
- Integrated ogre.cfg file in settings file
- Auto-close windows if a related MW-reference is no longer available
- Fix for bonuses in the character creation process
