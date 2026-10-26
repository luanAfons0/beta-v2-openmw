---
title: "OpenMW 0.28.0 Released!"
date: 2014-01-13T16:27:48+01:00
lastmod: 2024-01-05T16:54:00Z
slug: "openmw-0-28-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=3380
---
The OpenMW team is proud to announce the release of version 0.28.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This behemoth of a release includes many large features, such as Combat AI, Magic, Vampirism, terrain bump/specular/parallax mapping, and many other things. There’s also a heap of bug fixes, many thanks to our relentless developers!

Check out the release video by the prodigious WeirdSexy:  

{{< youtube id="x9lTWjXAi9s" title="OpenMW 0.28 Release Commentary" >}}

**Known Issues:**

- Issue #416 Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Issue #1041 Music playback doesn’t work on OS X 10.9

**Changelog:**

- Implemented Combat AI
- Implemented spell casting, ranged, self, and touch magic
- Implemented visual magic effects
- Implemented Vampirism
- Implemented terrain bump, specular, & parallax mapping
- Implemented NIF record NiFlipController
- Implemented soul gem recharging
- Implemented enchanted item glow
- Implemented Invisibility/Chameleon magic effects
- Implemented Resist Magicka magic effect
- Implemented GetLOS, so NPCs can calculate Line Of Sight
- Implemented material controllers
- Implemented mouse unlocking when in any menu
- Implemented Vertex morph animation (NiGeomMorpherController)
- Implemented NiBillboardNode handling
- Implemented NIF texture slot DarkTexture
- Various fixes for equipped torches and candles
- Fixes for torches and shields being visible when casting spells
- Fix for equipped items not updating right away, on characters and in the inventory
- Fix for weather not changing correctly when changing areas
- Fix for global map position marker not updating when changing interior cells, eg: Mages Guild teleport
- Fix for some textures rendering black in Tamriel Rebuilt
- Fix for activation distance to be from the player head instead of the camera
- Fix for NPCs holding torches during the day
- Fix for some hairs from Vvardenfell Visages Volume I not rendering
- Fix for heads of Maormer race in mod by Mac Kom
- Fix for walk key release not being handled during cell load
- Fix for equipped inventory items not being updated on the HUD when they are changed in dialog
- Fix for Launcher writing merged openmw.cfg files
- Fix to enable discrete magnitudes for spells with multiple random magnitude effects
- Fix to allow negative fatigue level
- Fix for particle systems to handle the world space flag
- Fix for crash caused by trying to update a model that is not rendered
- Fix to not override dynamic stats set via console commands
- Fix for equipped inventory icon not appearing immediately when equipped with a keyboard shortcut
- Fix for crash when equipping light source with new character
- Fix for segmentation fault when starting at Bal Isra
- Fix for down arrow console history behavior
- Fix for tooltip disappearing when clicking in the inventory
- Fix for barter window item category not resetting to All correctly
- Fix for replacement model in Graphic Herbalism mod having the wrong orientation
- Fix for addon unchecking not being saved in the Launcher
- Fix for controllers not affecting all objects in the hierarchy
- Fix for being able to talk to NPCs who are in combat
- Fix for crash when trying to load a mod with a capital .ESP filename extension
- Fix for skills/attributes being capped when set via console
- Fix for setting max health through the console to also set the current health
- Fix for gameplay keyboard input echoing to the console input box
- Fix for fall damage sometimes not applying immediately or correctly
- Fix for persuasion window not showing in correct location after maximizing the game in windowed mode
- Fix for player skill list forgetting scroll location when increasing experience
- Fix for notification window not being large enough for skill level ups with long names
- Fix for windows not scaling properly on resolution change
- Fix for notification windows staying on screen permanently if too many are activated
- Fix for used torches stacking with unused ones
- Fix for crash on pickup of jug in Unexplored Shipwreck, Upper level
- Fix for quick key menu not picking suitable replacement tool when it is used up
- Fix for loading TES3 header data: convert characters to UTF8
- Fix for damaged weapon value
- Fix for being able to talk to characters with “locked” dialogue
- Fix for water effects obscuring spell effects
- Fix for animation playing when casting exhausted once-per-day abilities
- Fix for Cure Disease potion removing all effects from the player, not just disease
- Fix for OpenMW binaries linking to unnecessary libraries
- Fix for water not negating fall damage
- Fix for drawing a weapon increasing torch brightness
- Fix for merchants selling stacks of gold
- Fix for incorrect handling of color codes in character names
- Fix for NPCs spawning with 0 skill values instead of calculated values
- Fix for particles rendering too large
- Fix for crash caused by AIWander
- Fix for crash when revisiting dock where the starting ship was
- Fix for scripts on items in inventory stopping when the containing object crossed a cell border
- Fix for merchants equipping items with negative enchantments
- Disallowed view mode switching while performing an action due to animation constraints
- Code maintenance to unify OGRE initialization
- OpenCS: Implemented Info-Record tables
- OpenCS: Fix for not being able to open Journal table from the main menu
