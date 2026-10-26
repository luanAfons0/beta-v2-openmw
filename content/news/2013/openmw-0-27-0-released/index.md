---
title: "OpenMW 0.27.0 Released!"
date: 2013-11-29T03:22:33+01:00
lastmod: 2013-11-29T07:48:39Z
slug: "openmw-0-27-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=3236
---
The OpenMW team is proud to announce the release of version 0.27.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release brings the first official release of OpenCS, the OpenMW team’s efforts to bring an open source solution for editing content for OpenMW. OpenCS is in an early Alpha state, please take that into consideration when testing! See the full notes below.

Check out the release video by the indomitable WeirdSexy:

{{< youtube id="6ea8NPedKsk" title="OpenMW 0.27 Release Commentary" >}}

**Known Issues:**

- PLEASE NOTE! There have been changes to the OpenMW config files. The game will not run with old configurations, but your configuration can be updated by simply running the Launcher. If you normally run OpenMW directly from the executable, please re-run the Launcher once to update.
- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)

**Changelog:**

- Implemented Acrobatics
- Implemented God Mode
- Implemented torch extinguishing
- Implemented breath meter color change when it is running low
- Fixed polish language version of Morrowind crashing OpenMW
- Fixed decimal numbers not displaying correctly in the UI
- Fixed camera not lowering while sneaking
- Fixed ambient sounds playing while the game is paused
- Fixed being able to enter third person view with the mousewheel when it should be disabled
- Fixed some CDs not working correctly with Unshield installer
- Fixed a script instruction to allow the Quick Character Creation plugin to work
- Fixed fatigue not regenerating when jumping
- Fixed Laire dieing inexplicably in Beshara
- Merged the –master and –plugin switches
- OpenCS: Implemented a start dialogue
- OpenCS: Implemented handling file paths so that files are saved only to the local data cirectory, and only with OpenMW extensions: omwgame/omwaddon
- OpenCS: Implemented Saving
- OpenCS: Implemented new ESX selector
- OpenCS: Implemented enforcing single-instance mode since multiple projects can be open
- OpenCS: Implemented record filtering
- OpenCS: Implemented default record filters
- OpenCS: Proper compiler configuration (currently used only for syntax highlighting)
