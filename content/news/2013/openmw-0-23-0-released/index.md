---
title: "OpenMW 0.23.0 Released!"
date: 2013-05-01T02:07:36+02:00
lastmod: 2024-01-05T16:19:43Z
slug: "openmw-0-23-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2737
---
The OpenMW team is proud to announce the release of version 0.23.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw) and for Debian in our [Debian PPA](http://forum.openmw.org/viewtopic.php?f=20&t=1298). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This release introduces the initial implementation of NPC movement AI, item repairing, enchanting, levelled items, texture animation, basic particles, and more, along with an extensive list of fixes and improvements. Also as a note, Morrowind’s 11th Anniversary is May 1st!

**Known Issues:**

- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Launcher crash on OS X &lt; 10.8
- Polish version of Morrowind.esm makes OpenMW crash
- The OS X package for this release will be delayed. Never fear, we still support OS X, our package maintainer is just away!

Check out the release video by the our very own WeirdSexy:  

{{< youtube id="aDuLCpltgoM" title="OpenMW 0.23 Release Commentary" >}}

**Changelog:**

- Implemented Item Repairing
- Implemented Enchanting
- Implemented NPC pathfinding
- Implemented NPC travelling AI Package
- Implemented levelled items
- Implemented texture animations
- Implemented fallback settings
- Implemented levelup description in levelup dialogue
- Implemented armor rating
- Implemented companion item UI
- Implemented basic particles
- Improved console object selection
- Fixed player colliding with placeable items.
- Fixed Jounal sounds playing when accessing the main menu with the Journal open.
- Fixed Bribing behavior
- Fixed rendering of bone boots
- Fixed NPCs not rendering according to race height
- Fixed inverted race detection in dialogue
- Fixed two-handed weapons being treated as one-handed
- Fixed crash when dropping objects without a collision shape
- Fixed handling for disabled/deleted objects
- Fixed merchants selling their keys
- Fixed game starting on Day 2
- Fixed “come unprepared” topic with Dagoth Ur
- Fixed Pickpocket “Grab all” taking items not listen in container window
- Fixed camera shaking when looking up or down too far
- Fixed player position at new game start
- Fixed the player not having the correct starting clothes
- Fixed merchant gold not changing when transacting
- Fixed starting fatigue
- Fixed incorrect coin stack behavior
- Fixed auto-equip ignoring equipment rules
- Fixed OpenMW not loading “loose file” texture packs
- Fixes for some NPC rendering issues
- Fixed a sail transparency issue
- Fixed a crash during character creation
- Fixed Tauryon growing in size every time the player enters/exits a nearby house
- Fixed NPC stats defaulting to 10
- Fixed talk and container dialogue not opening sometimes
- Fixed crash when trying to get Rank of NPC without a faction
- Various UI fixes
- Various scripting improvements
- Various mod compatibility improvements
- Various code cleanup
