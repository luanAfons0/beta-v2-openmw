---
title: "OpenMW 0.52.0 is now in RC-phase!"
date: 2026-11-02T10:46:23+01:00
lastmod: 2026-11-02T10:56:41Z
slug: "openmw-0-52-0-is-now-in-rc-phase"
categories: ["Release"]
authors: ["capo"]
guid: https://openmw.org/?p=7076
---
Hello! How have you been? We are treating (or tricking?) you with the start of Release Candidate (RC) testing for the next stable release of our open-source engine. You can grab a build from the latest round of releases [on GitHub](https://github.com/OpenMW/openmw/releases).  
  
This upcoming edition of OpenMW expands the **Load** context from the last release—allowing modders to create custom skills, attributes, and weather—and introduces **clustered lighting**, which removes the standard per-object light limit without tanking your performance. It also fixes a number of water and transparency rendering issues and brings slight improvements to combat AI.  
  
It *also* fixes gravity being 0.01% off. Become friends with the full preliminary changelog in [the description of the first RC round](https://github.com/OpenMW/openmw/releases/tag/openmw-52-rc1).  
  
These public builds help us catch crashes, freezes and regressions before launch so the final release is as stable as possible. Please report anything that seems off [on our issue tracker](https://gitlab.com/OpenMW/openmw/-/work_items), or let us know if it’s running smoothly for you.  
  
**A few things to keep in mind before you jump in:**

- **Please read the known issues section** in the RC notes. If you’re certain it’s an issue listed there, there’s no need to report it again.
- **The saved game format has changed since 0.51.0.** Your existing 0.51.0 saves will load in 0.52.0, but once you save in 0.52.0, you cannot go back to 0.51.0 and load that newer save there. Keep a “pre-RC” save around just in case.
- Breaking changes to the scripting API are very minor, but double-check that your Lua mods are updated.
- Forward-pass shader replacements **must be** updated (we removed some more remnants of the fixed-function pipeline). Post-processing shaders, however, should be fine.
- HUD mods need updates to support the new gamepad mouse-emulation cursor.
- The new generic Linux builds should theoretically work on older systems like Ubuntu 22.04 and Debian 12, but may not like certain older CPUs. Let us know if this ends up being a dealbreaker for your setup.

Install it like a standard release via the installer or unpacking into a new folder. Your configuration and saves will stay in their normal location, though if you are using a portable install, remember to set that up again for the new build.  
  
If you’re too spooked to dial into Mexico (+52), the current stable release (0.51.0) is still available from [our Downloads page](/downloads).  
  
To join in on the forum discussion, head over to the [release topic](https://forum.openmw.org/viewtopic.php?p=75971) on our forums.

See you on release day!
