---
title: "OpenMW 0.12.0 Released"
date: 2012-03-06T00:23:52+01:00
lastmod: 2012-10-13T08:29:07Z
slug: "openmw-0-12-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=272
---
The OpenMW team is proud to announce the release of version 0.12.0! Release packages are available on our [Download page](http://code.google.com/p/openmw/downloads/list). This release notably includes NPC and Creature animation, though no A.I. has been implemented, so animations must be activated through console commands. Please review the following:

Regressions:

- Sounds other than music not working
- Scroll and button background graphics in launcher not working in Linux package

Important notes:

- You must remove all old openmw.cfg files in order for the automatic detection of Morrowind installations to work.
- If the data path is set manually and it contains spaces, it needs to be put inside quotation marks.

Changelog:

- Various rendering fixes and optimizations
- Refactored engine class
- Automatic package building
- Various build fixes and cleanup
- Various configuration fixes and cleanup, including detection of existing Morrowind installations
- Basic NPC/Creature animation support added, must be activated from console
- Basic implementation of Journal Window added
- Fix for local scripts continuing to run if associated object is deleted
- Fix for crash when taking screenshots
- Fix for crash when visiting Akulakhan’s Chamber
- Added catching of exceptions thrown in input handling functions
- Fix for NPC Activation not working properly
- Allow the player to move away from pre-defined cells
