---
title: "OpenMW 0.21.0 Released!"
date: 2013-03-01T01:17:38+01:00
lastmod: 2013-02-20T08:48:29Z
slug: "openmw-0-21-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=2494
---
The OpenMW team is proud to announce the release of version 0.21.0! Release packages for Ubuntu are now available via our [Launchpad PPA](https://launchpad.net/~openmw/+archive/openmw). Release packages for other platforms are available on our [Download page](https://code.google.com/p/openmw/downloads/list). This release introduces video playback, improvements to cell load time, and parsing for escape sequences in dialogue and message boxes.

Check out WeirdSexy’s release video:  

{{< youtube id="7FtIcIPogpQ" title="OpenMW 0.21 Release Commentary" >}}

**Known Issues:**

- No sound when playing videos on OS X
- Extreme shaking may occur during cell transitions for some users (enable anti-aliasing as a possible workaround)
- Launcher crash on OS X &lt; 10.8

**Changelog:**

- Various dialogue, trading, and disposition fixes and improvements
- Torch flickering improved to better match vanilla Morrowind
- Fix for attribute fluctuation when infected with Ash Woe Blight
- Adjusted activation range to better match vanilla Morrowind
- Fixes for the Journal UI
- Fixed crash caused by Golden Saint models
- Fix for beast races being able to wear shoes
- Fix for background music not playing
- Fix for meshes without certain node names not being loaded
- Fix for incorrect terrain shape on inital cell load
- Fix for MWGui::InventoryWindow creating a duplicate player actor at the origin
- Added video playback
- Added support for escape sequences in message box and dialogue text
- Added AI related script functions, note that AI is not functional yet
- Implemented fallbacks for necessary ini values in the importer, unused in OpenMW as of yet
- Implemented execution of scripts of objects in containers/inventories in active cells
- Cell loading performance improvements
- Removed broken GMST contamination fixing mechanism
