---
title: "OpenMW 0.19.0 Released!"
date: 2012-11-10T18:52:15+01:00
lastmod: 2012-11-10T13:06:27Z
slug: "openmw-0-19-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2123
---
The OpenMW team is proud to announce the release of version 0.19.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This version introduces Sleeping, Potions, DEATH!!, Spell Creation, Travel, and many other features.

Check out our release video by WeirdSexy:  

{{< youtube id="yw2ITfTzzg4" title="OpenMW 0.19 Release Commentary" >}}

**Known Issues:**

- Launcher crashes on OS X &lt; 10.8
- Extreme shaking can occur during exterior cell transitions for some users

**Changelog:**

- Implemented sleep/wait
- Further implementation for alchemy/potions
- Implemented death
- Implemented spell creation and spell creation window
- Implemented travel and travel dialogue
- Implemented first layer of global map
- Implemented trainer window
- Implemented skill increase from skill books
- Implemented ESM/ESP record saving
- Fix for Character shaking in 3rd person mode near the origin
- Implemented gamma correct rendering (does not work without shaders)
- Fix for fortify attribute effects on the last 3 attributes
- Fix for NCC flag handling, fixes some collision issues
- Sort birthsign menu alphabetically
- Various fixes/cleanup for the launcher
- Fix for sound listener position updating incorrectly
- Implemented dynamically generating splash image list
- Fix for markers interfering with raycasting
- Fix for crash after picking up items from an NPC
