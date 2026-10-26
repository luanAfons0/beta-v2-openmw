---
title: "An ode to (unit) tests."
date: 2014-03-02T08:00:41+01:00
lastmod: 2024-01-05T16:53:31Z
slug: "ode-unit-tests"
categories: ["News"]
authors: ["Lukasz Gromanowski"]
guid: https://openmw.org/?p=3472
---
Version 0.29.0 will be released soon — momentary impediments are the bugs that were detected during the RC testing phase. I don’t want to delve into the details, but, if anyone needs to support the thesis that (unit) testing is critical, OpenMW is a perfect example. Fortunately, things are moving in the right direction.

Scrawl’s latest idea is to streamline the process of starting a new game — terrain data can be loaded in another thread, so we don’t have to watch another episode of “The Bold and the Beautiful” while waiting for the start of OpenMW.

Additionally, Pvdk is trying to please grumblers who can’t tolerate Wine on their system. Wine is very helpful with the installation of Morrowind, but I must admit that installing it just for this purpose seems over the top. After all, you can just unpack game archives (there is even a useful library for doing this).

As I’ve mentioned in previous weeks, Pvdk is creating a user-friendly installer for Morrowind. The installer will be enriched by new features as well as other minor improvements: it’ll verify what has already been installed and won’t install the Bloodmoon add-on before Tribunal. It will also properly save the morrowind.ini file.

SirHerrbatka has introduced the ability to automatically create filters using the drag’n’drop feature in OpenCS. The way the expression is created ensures that it can be adapted to the columns which hold corresponding records. For example, when dragging a faction record, let’s say, “the Fighter’s Guild”, into the Referencables’ filter field, it’ll automatically appear in the filter, so that the table will display only NPCs belonging to the Fighter’s Guild.

The new method is much more efficient — the filter creation process speeds up noticeably (even if you type very quickly). The possibilities of this function are a bit more expansive than the example above and eventually it’ll be described in much more detail in the OpenCS manual.

And last but not least [here you can read Raevol’s SCaLE 12x Talk Debrief](https://forum.openmw.org/viewtopic.php?f=4&t=2053 "SCaLE 12x Talk Debrief") and [here](http://downloads.openmw.org/presentations/SCaLE12x/OpenMW_SCaLE12x.odp "Slides from OpenMW SCaLE 12x Talk") you can download slides from SCaLE 12x Talk.

Till next time!
