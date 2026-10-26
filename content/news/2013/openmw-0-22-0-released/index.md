---
title: "OpenMW 0.22.0 Released!"
date: 2013-03-27T18:38:00+01:00
lastmod: 2024-01-05T16:35:18Z
slug: "openmw-0-22-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2628
---
The OpenMW team is incredibly proud to announce the release of version 0.22.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw) and for Debian in our [Debian PPA](http://forum.openmw.org/viewtopic.php?f=20&t=1298). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This release introduces the long awaited animation feature, many thanks to everyone on the team who has worked to bring this to fruition. Another major feature implemented in this release is support for loading multiple ESM and ESP files. Prepare to travel to Mournhold, Bloodmoon, and beyond into Tamriel Rebuilt and other mods. Other features include the “Dispose of Corpse” button, lights that are more faithful to classic Morrowind, and working active spell icons. The bug fix list for this release is quite extensive, see below.

**PLEASE NOTE:** Starting with this release, you must run the ini importer at least once! This can be done automatically through the launcher.

**Known Issues:**

- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Launcher crash on OS X &lt; 10.8
- Polish version of Morrowind.esm makes OpenMW crash

Check out the release video by the inexorable WeirdSexy:  

{{< youtube id="a-i73Qb3KKw" title="OpenMW 0.22 Release Commentary" >}}

**Changelog:**

- Implemented Active Spell Icons
- Implemented walking, running, and swimming animation
- Implemented support for ESPs and multiple ESMs
- Implemented proper collision shapes for NPCs and creatures
- Implemented lights that behave more like vanilla Morrowind
- Implemented importing BSA files as part of the settings imported by the config importer
- Implemented zoom in vanity mode
- Implemented potion/ingredient effect stacking
- Implemented object movement between cells
- Implemented closing message boxes by pressing the activation key
- Implemented random persuasion responses
- Implemented closing message boxes when enter is pressed
- Use rendered object shape for physics raycasts
- Improved the race selection preview camera
- Class and Birthsign menus options are now preselected
- Disabled dialog window until character creation is finished
- Decoupled water animation speed from timescale
- Changed underwater rendering to more closely resemble vanilla Morrowind
- Hid potion effects until discovered
- Finished class selection-dialogue
- Re-factored Launcher ESX selector into a re-usable component
- Various fixes and implementations for the script compiler
- Fix for a keyboard repeat rate issue
- Fix for errant character outline on water in 3rd person
- Fix for duplicate player collision model at origin
- Fix for dialogue list jumping when a topic is clicked
- Fix to prevent attributes/skills going below zero
- Fix for global variables of type short being read incorrectly
- Fix for collision and tooltip on invisible meshes
- Fix for CG showing in Options when it is not available
- Fix for crash when Alt-tabbing with the console open
- Fix for pick up sound playing when object cannot be picked up
- Fix for moving left or right canceling auto-move
- Fix for gender being swapped (woops!)
- Fix for footless guards
- Fix for waterfalls not rendering at a certain distance
- Fix for crash in “Mournhold, Royal Palace”
- Fix for not finding non-DDS textures
- Fix for some meshes being invisible from above water in Bloodmoon
- Fix for Messagebox causing assert to fail
- Fixes for Launcher file path selection
- Fixes for missing/incorrect UI graphical elements
- Fixes for various transparency rendering issues
- Fixes fo various character generation UI issues
- Fixes for config import in Launcher
- Fixes for various new issues discovered when handling mod content
- Various code cleanup
