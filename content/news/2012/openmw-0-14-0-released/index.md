---
title: "OpenMW 0.14.0 released!"
date: 2012-04-30T01:00:39+02:00
lastmod: 2024-01-05T16:30:00Z
slug: "openmw-0-14-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=821
---
The OpenMW team is proud to announce the release of version 0.14.0! This release precedes Morrowind’s 10th Anniversary by 2 days! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This release brings many notable features, including terrain and water rendering! A video highlighting many of the new changes in this release made by our very own WeirdSexy can be found [here](https://www.youtube.com/watch?v=wNjlgg8yRe4).

**Please note:**

- There is a regression in the Launcher in this release, from which you will observe that the rendering subsystem will default to OpenGL regardless of what was previously selected. This will be fixed in the next release. This can be overcome by setting the rendering system explicitly from the launcher each time, or running the OpenMW binary directly from the command line, which will select the renderer that has been set in your config file.
- There is a known issue where a crash may occur underwater with the underwater effect enabled on OS X

**Changelog:**

- Fix for meshes rendering with the wrong orientation
- Fix for better grabbing of small objects
- Fix to enable toggling of collision rendering
- Updates to be compatible with Ogre 1.8.0 RC1
- Fix for Wireframe mode applying to HUD and Console
- Fix for terrain crashing when moving away from predefined cells
- Fix to allow OS X Launcher to handle spaces in the binary path
- Fix to support TGA textures
- Fix to support wireframe mode in water
- Added water rendering
- Added terrain rendering
- Added ability to render Path Grid
- Added Factions support
- Added Local Map
- Added Compass/Mini-Map
- Added Clothing/Armour redering
- Added Window Pinning
- Added Auto-Equip.
- Added support for containers tracking changes to their contents
- Added several NPC Dialogue Window improvements
- Added backend for a game settings manager
- Added backend for a Spell List and selected spell
- Added backend for NPC holstered/drawn state
- Added a Morrowind.ini Importer (not yet included in the binary packages)
- Refactored the Sound code
- MyGUI updated to version 3.2.0
