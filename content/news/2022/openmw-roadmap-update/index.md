---
title: "OpenMW Roadmap Update"
date: 2022-04-01T12:06:26+02:00
lastmod: 2024-01-05T16:36:49Z
slug: "openmw-roadmap-update"
categories: ["News"]
authors: ["Atahualpa"]
guid: https://openmw.org/?p=5832
---
OpenMW has been in development for well over a decade now, and it has become a viable way to play Morrowind on almost every platform imaginable.

As a consequence, we have discussed possible future main goals for our engine but quickly realised that the current scope greatly limits both the engine’s potential and our developers’ creativity.

With the first iteration of Lua scripting support merged, we finally had our eureka moment: why not completely shift the focus of development to yet another class of games? This was a month ago, and today we – the former OpenMW team – are proud to announce the rebranding of our project to become a general-purpose engine for isometric RPGs the likes of Baldur’s Gate or Neverwinter Nights. OpenMW is no more, long live OpenNeverMind!

We have just released version 0.13.37 of our heavily altered engine. Grab it [from here](https://gitlab.com/ptmikheev/openmw/-/jobs/2262874420/artifacts/download) – but be aware that this version is still WIP and any savegames made using it won’t be compatible with 0.47.0 (you can, however, use 0.47.0 savegames with this version). For now, the movement controls are as follows:

- [LMB] — move to clicked ground or interact with clicked object
- [MMB] — scroll to change camera zoom
- [W], [S] — control camera pitch
- [A], [D] — control camera yaw
- [TAB] — enable/disable camera collision (key binding is equal to &lt;Toggle POV> in the settings menu)

Please also note that OpenNeverMind 0.13.37 still has built-in Morrowind support. This will be removed in future stable releases to avoid any copyright issues.

Check out our [official announcement video](https://www.youtube.com/watch?v=XpH05T7WtfE) by the always reliable Atahualpa and the forever faithful Johnnyhostile to see our improved defaults in action.

Thank you for your support and see you again for the next blog post which is going to detail our short-term and long-term plans for OpenNeverMind!

{{< youtube id="XpH05T7WtfE" title="OpenMW Roadmap Update" >}}

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?t=7715)
