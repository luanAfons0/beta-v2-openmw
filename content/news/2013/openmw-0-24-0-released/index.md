---
title: "OpenMW 0.24.0 Released!"
date: 2013-06-18T02:44:17+02:00
lastmod: 2013-06-16T20:57:51Z
slug: "openmw-0-24-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2868
---
The OpenMW team is proud to announce the release of version 0.24.0! Mosey on over to our newfangled [Downloads Page](/downloads) to find releases for all operating systems. This release brings the much-anticipated animation layering feature, Athletics, Security, Night-Eye and Blind, along with a plethora of other fixes and changes. Oh, and **openable doors**! GO OPEN SOME DOORS!!

**Known Issues:**

- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Launcher crash on OS X &lt; 10.8
- Polish version of Morrowind.esm makes OpenMW crash

Check out the release video by the unstoppable WeirdSexy:  

{{< youtube id="WNN1Fi_Jk1Q" title="OpenMW 0.24 Release Commentary" >}}

**Changelog:**

- Implemented Athletics
- Implemented Security
- Implemented opening non-load doors
- Implemented AI Escort and EscortCell packages
- Implemented Advanced Journal UI, some features still in progress
- Implemented several trade features
- Implemented New Game in the menu
- Implemented highlighting dialogue topic links
- Implemented animation layering
- Implemented Night Eye/Blind magic effects
- Implemented Move and MoveWorld script instructions
- Implemented non-removable corpses
- Implemented weapon and shield rendering for 3rd person
- Implemented OnDeath script instruction for explicit references
- Various fixes for text display in books
- Various fixes for wait/rest
- Various code cleanup
- Various fixes for script parsing/compiling
- Various fixes for issues having to do with binding keys in the settings menu
- Fixed an issue where the camera would clip below the floor/terrain
- Fixed a seam in the terrain on Red Mountain
- Fixed an issue with journal buttons
- Fixed arrow buttons in the settings menu
- Fixed unclickable dialogue topics
- Fixed changeweather console command
- Fixed not being able to un-select objects while in the console
- Fixed duplicate spawning of AddItem message boxes
- Fixed moddisposition to be able to alter NPCs in a different cell
- Fixed Launcher writing duplicate lines into settings.cfg
- Fixed second quest in Mage’s Guild
- Fixed enchantment cast cost
- Fixed display of Take and Close buttons on scroll UI
- Fixed AIWander not being sent values correctly
- Fixed journal being accessible while in character generation
- Fixed Divayth Fyr starting dead
- Fixed detailed FPS display
- Fixed chargen scroll display
