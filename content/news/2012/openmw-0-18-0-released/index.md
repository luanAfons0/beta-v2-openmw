---
title: "OpenMW 0.18.0 Released!"
date: 2012-10-01T20:19:04+02:00
lastmod: 2024-01-05T16:31:17Z
slug: "openmw-0-18-0-released"
categories: ["Release"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1914
---
The OpenMW team is proud to announce the release of version 0.18.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This version introduces a myriad of new features, including Level-Up, Key re-binding, Spell buying, eating ingredients, using Keys to open things, and much more. Read on for the full changelog.

WeirdSexy stars again, in our 0.18.0 release video:  

{{< youtube id="LdEThh8efGs" title="OpenMW 0.18 Release Commentary" >}}

**Known Issues:**

- The launcher can crash on OS X versions &lt; 10.8, this will be fixed in version 0.19.0
- “Shaking screen effect” can occur on cell change

**Changelog:**

- Implemented Level-Up dialog
- Implemented Hide Marker, fixes big black blocks
- Implemented Hotkey dialog
- Implemented Keyboard and Mouse bindings, input system rewritten
- Implemented Spell Buying Window
- Added support for handling resources across multiple data directories
- Implemented Object Movement/Creation script instructions
- Initial AI framework implemented
- Implemented eating Ingredients
- Implemented Door markers on the local map
- Implemented using Keys to open doors/containers
- Implemented Loading screens
- Implemented Inventory avatar image and race selection head preview (note that only default Dunmer male displays at the moment)
- Fixed the size of Preferences menu buttons
- Fixed Hand-to-hand always being 100
- Fixes for NPC and character animation
- Fix for sound coordinates
- Fix for exception when drinking self-made potions
- Fix for clothes showing up in 1st person
- Fix for weird character on door tooltips
- Collision fixes
- Fix for “onOfferButtonClicked” crash
