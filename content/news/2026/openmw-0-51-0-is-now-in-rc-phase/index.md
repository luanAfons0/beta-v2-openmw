---
title: "OpenMW 0.51.0 is now in RC-phase!"
date: 2026-04-24T23:25:27+02:00
lastmod: 2026-06-09T08:47:28Z
slug: "openmw-0-51-0-is-now-in-rc-phase"
categories: ["Release"]
authors: ["capo"]
guid: https://openmw.org/?p=6951
---
It’s been nearly half a year since [0.50.0 landed](/news/2025/openmw-0-50-0-released) back in early November, but we’ve almost reached Area 51, and we’re ready to share the first release candidate (RC) builds of the next release of our open-source engine! Grab one from our [GitHub releases page](https://github.com/OpenMW/openmw/releases).

0.51.0 introduces a new script context to our Lua scripting API, the **Load** context. Fabulous secret powers bestowed on Load scripts allow them to inject and modify game data right after it is loaded. Most notably, this includes spell effects—which allows mods to add spells that don’t rely on the built-in effects.

0.51.0 also fixes game-breaking dialogue issues in Russian and Polish Morrowind, introduces BC7 texture compression support for DDS files, adds terrain vertex painting to our editor, and more.

As usual, our intention for the RC period is to have you try to break it — run into any uncaught crashes, freezes, regressions, or other unexpected issues, and report them to us on [our issue tracker](https://gitlab.com/OpenMW/openmw/issues). If you *don’t* run into any issues, tell us too!

The RC1 prerelease description includes a preliminary list of changes. Do give it a read.

A few things to keep in mind before you jump in:

- **The saved game format has changed since 0.50.0.** Your existing 0.50.0 saves will load in 0.51.0, but once you save in 0.51.0, you cannot go back to 0.50.0 and load that newer save there. Consider keeping a “pre-RC” save around.
- The scripting API hasn’t had meaningful breaking changes, but asterisks apply: mods with a UI that were written in a suboptimal way may be an annoyance for the new widget validation. Double-check that all of those are up-to-date.
- Shader mods, including some post-processing shaders and those that replace the built-in forward pass shaders, must be updated due to certain texture handling changes.
- **Please read the known issues section** in the RC notes. Some issues you don’t, in fact, have to report, assuming you’re 100% sure it’s an issue listed there.

You install it like you would install a stable release: run the installer or unpack the archive into a new directory. If you were using a portable install, remember to set that up again for the new build; your configuration and saves are otherwise stored in their normal location.

If you’re not curious or brave, the current stable release 0.50.0 is, of course, still available from our [Downloads page](/downloads).

To join in on the forum discussion, head over to the [release topic.](https://forum.openmw.org/viewtopic.php?t=8403)

We’ll see you later—hopefully, on release day!
