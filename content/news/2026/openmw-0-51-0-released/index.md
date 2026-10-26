---
title: "OpenMW 0.51.0 Released!"
date: 2026-06-19T23:08:48+02:00
lastmod: 2026-06-19T21:08:48Z
slug: "openmw-0-51-0-released"
categories: ["Release"]
authors: ["capo"]
guid: https://openmw.org/?p=6979
---
The OpenMW team is proud to announce the release of version 0.51.0 of our open-source engine! Grab it from our [Downloads Page](/downloads) for all supported operating systems.

This release allows modders to create magic effects through our scripting API and introduces terrain vertex painting to our content file editor. It also fixes many Lua-related crashes and addresses a few minor annoyances with gamepad menu navigation introduced in the previous release.

{{< youtube id="eZEYi7047pQ" title="OpenMW 0.51.0 Release Announcement" >}}

Check out the release video by the astounding [Gitshiver](https://www.youtube.com/@Gitshiver) (also [available on PeerTube](https://peertube.linuxrocks.online/w/2CjuRXQDyXatNDoDmQZaM2)), and keep reading to learn more about what we have in store for Morrowind’s 24th anniversary!

**Things to Keep in Mind**

- As always, it is generally safe to keep using your existing saves, configuration files, and mod setups in the new release.
- To avoid issues, please update any shader mods and mods that implement new UI widgets through OpenMW-Lua. If you still experience slowdowns or visual artifacts, try to narrow down the mods responsible and contact their authors.
- The saved game format has changed since version 0.50.0. You cannot load newer saves in older releases.
- Have a great time.

<!--more-->

**Known Issues**

- On macOS, launching OpenMW from OpenMW-CS requires OpenMW.app and OpenMW-CS.app to be siblings.
- [[#7511](https://gitlab.com/OpenMW/openmw/-/issues/7511)] On Windows, a freeze may be reported if engine startup takes too long; ignoring the message is usually harmless, as it should eventually disappear, but if it doesn’t, please share the freeze dump with us
- [[#8233](https://gitlab.com/OpenMW/openmw/-/issues/8233)] Hardware antialiasing may cause driver timeouts on AMD GPUs of the RX 6000 and 7000 series; this is a driver bug AMD has yet to address
- [[#8255](https://gitlab.com/OpenMW/openmw/-/issues/8255)] On Intel GPUs, the game may freeze visually while still responding to input. This is a driver bug; as a workaround, you may need to install an older version of the driver
- [[#8464](https://gitlab.com/OpenMW/openmw/-/issues/8464)] Red tint on macOS. Some of it can be mitigated by enabling per-pixel lighting

### **Dialogue**

*Contributions from* ***Capo***, ***Evil Eye*** *and* ***winklecrux***

**New Features**

- [[#7297](https://gitlab.com/OpenMW/openmw/-/issues/7297)] Support for topic marking (MRK) files from Russian Morrowind; they override the keywords used for implicit topic highlighting
- [[#8956](https://gitlab.com/OpenMW/openmw/-/issues/8956)] The iGreetDuration and fGreetDistanceReset game settings are now used in voiced greeting logic

**Fixes**

- [[#7340](https://gitlab.com/OpenMW/openmw/-/issues/7340)] The Should Attack filter now passes for actors that are already in combat; this concerns actors that are not normally hostile, like guards
- [[#8760](https://gitlab.com/OpenMW/openmw/-/issues/8760)] Implicit topic highlighting supports single-character topics
- [[#8978](https://gitlab.com/OpenMW/openmw/-/issues/8978)] Added support for custom word separators required for Polish Morrowind topic highlighting (brackets and parentheses)
- Mixed implicit/explicit topic highlighting is properly supported

### **Gameplay**

*Contributions from* ***Capo***, ***Dima Katashov***, ***Evil Eye***, ***Kuyondo*** *and* ***Riley Munro***

**New Features**

- [[#8731](https://gitlab.com/OpenMW/openmw/-/issues/8731)] Hand to Hand Hit 2 sound is now used
- [[#8801](https://gitlab.com/OpenMW/openmw/-/issues/8801)] More controller buttons can be used for actions

**Fixes**

- [[#7605](https://gitlab.com/OpenMW/openmw/-/issues/7605)] Creatures that cannot equip items can use enchanted items
- [[#8123](https://gitlab.com/OpenMW/openmw/-/issues/8123)] Various restrictions on equipping weapons during an attack were lifted (e.g., equipping ammunition)
- [[#8692](https://gitlab.com/OpenMW/openmw/-/issues/8692)] The above extends to switching between enchanted items while casting a spell
- [[#8765](https://gitlab.com/OpenMW/openmw/-/issues/8765)] Diseased actors may infect actors other than the player
- [[#8847](https://gitlab.com/OpenMW/openmw/-/issues/8847)] Stretched collision box detection is more accurate
- [[#8926](https://gitlab.com/OpenMW/openmw/-/issues/8926)] Weapon swish sound has been restored for thrown projectiles
- [[#8929](https://gitlab.com/OpenMW/openmw/-/issues/8929)] Old effects now stick around for a frame when they’re re-cast; this makes Weakness to Magicka increase its own magnitude
- [[#8949](https://gitlab.com/OpenMW/openmw/-/issues/8949)] Instant effects are no longer applied twice
- [[#8975](https://gitlab.com/OpenMW/openmw/-/issues/8975)] Stat modifiers are reset when werewolf modifiers are applied
- [[#9062](https://gitlab.com/OpenMW/openmw/-/issues/9062)] Staggering an actor when they’re unequipping a weapon and intend to re-equip it will no longer break their combat animation state
- [[#9078](https://gitlab.com/OpenMW/openmw/-/issues/9078)] Preview mode is disabled when the preview if stand still setting is disabled

### **Graphics**

*Contributions from* ***Capo***, ***Cédric Mocquillon***, ***elsid***, ***Evil Eye***, ***Kartoffels*** *and* ***wazabear***

- [[#9001](https://gitlab.com/OpenMW/openmw/-/issues/9001)] Exclusive fixed-function pipeline rendering mode and the legacy lighting method have been removed

**New Features**

- [[#6885](https://gitlab.com/OpenMW/openmw/-/issues/6885)] BC6H and BC7 compression are now supported for DDS files, as long as [our OpenSceneGraph fork](https://github.com/OpenMW/osg) is used; this requires driver support and may not apply to all platforms
- [[#8826](https://gitlab.com/OpenMW/openmw/-/issues/8826)] Sunlight direction is exposed to post-processing
- [[#9030](https://gitlab.com/OpenMW/openmw/-/issues/9030)] Camera projection offset is configurable through Lua, which allows implementing techniques such as temporal antialiasing

**Fixes**

- [[#6439](https://gitlab.com/OpenMW/openmw/-/issues/6439)] Fixed moon rendering: moon shadow colour and moon phase transparency are now used
- [[#8351](https://gitlab.com/OpenMW/openmw/-/issues/8351)] Malformed NIF models are much less likely to cause freezes or crashes and will instead be gracefully rejected
- [[#8657](https://gitlab.com/OpenMW/openmw/-/issues/8657)] Fixed a preloading-related crash on exit if startup was interrupted by non-graceful error handling (e.g., missing GUI layout files)
- [[#8820](https://gitlab.com/OpenMW/openmw/-/issues/8820)] Non-carriable light sources like the scripted Trueflame light are properly detected again (0.50.0 regression)
- [[#8854](https://gitlab.com/OpenMW/openmw/-/issues/8854)] Shaders from the post-processing chain that disable the sunglare will no longer disable it if post-processing is disabled
- [[#8864](https://gitlab.com/OpenMW/openmw/-/issues/8864)] At storm wind speed, rain and snow properly produce ripples and no longer follow the camera, while heavy wind no longer makes rain look chaotic
- [[#8884](https://gitlab.com/OpenMW/openmw/-/issues/8884)] Object paging no longer discards LOD centre data, making LOD level selection more reliable
- [[#8924](https://gitlab.com/OpenMW/openmw/-/issues/8924)] Unnecessary hand-to-hand transition is skipped when you run out of thrown ammunition
- [[#8930](https://gitlab.com/OpenMW/openmw/-/issues/8930)] Fixed a crash when a Gamebryo mesh has an extra data link that doesn’t point to anything
- [[#8983](https://gitlab.com/OpenMW/openmw/-/issues/8983)] Unequipping ammunition when preparing a ranged attack no longer cancels it immediately
- [[#8985](https://gitlab.com/OpenMW/openmw/-/issues/8985)] Visual effects no longer make objects that use their model non-interactable
- [[#8988](https://gitlab.com/OpenMW/openmw/-/issues/8988)] Particles are inverted vertically to match Morrowind
- [[#8996](https://gitlab.com/OpenMW/openmw/-/issues/8996)] Fixed a crash when skinning data references a vertex that does not exist (the mesh will be rejected)
- [[#9026](https://gitlab.com/OpenMW/openmw/-/issues/9026)] Thrown projectiles are rotated towards their movement direction again

### **Scripting: mwscript**

*Contributions from* ***Capo*** *and* ***Evil Eye***

**New Features**

- [[#7830](https://gitlab.com/OpenMW/openmw/-/issues/7830)] Global script targets that don’t come from a content file are now preserved (unlike Morrowind)

**Fixes**

- [[#6494](https://gitlab.com/OpenMW/openmw/-/issues/6494)] Global variable reading is more consistent between ARM and x86_64 platforms. This ensures Raven Rock buildings don’t show up earlier than intended on Android and macOS
- [[#8129](https://gitlab.com/OpenMW/openmw/-/issues/8129)] Parsing of unquoted string literals as MessageBox button arguments is more consistent with Morrowind
- [[#8732](https://gitlab.com/OpenMW/openmw/-/issues/8732)] MessageBox formatting supports more notation specifiers and flags

### **Scripting: OpenMW-Lua**

*Contributions from* ***akortunov***, ***Andrzej Głuszak***, ***Aussiemon***, ***Daisyhasacat***, ***ddbb07***, ***Evil Eye***, ***fallchildren***, ***Foal***, ***gbtb***, ***jrdwe***, ***Kuyondo***, ***Maars***, ***S3ctor***, ***Telvanni4Life*** *and* ***wolvman***

For a full overview of the current state of OpenMW-Lua, please consult [the scripting API reference](https://openmw.readthedocs.io/en/openmw-0.51.0/reference/lua-scripting/api.html).

**New Context**

- [[#8987](https://gitlab.com/OpenMW/openmw/-/issues/8987)] Load context

Scripts that use this work-in-progress context run once, immediately after all content files are loaded. It exposes the loaded records as mutable data. It is related to—but not to be confused with—the existing custom record creation functionality (world.createRecord). Records injected via the load context are not serialised into saves.

The API reference provides the full list of exposed types and the types createRecordDraft is implemented for. New in 0.51.0:

- [[#8791](https://gitlab.com/OpenMW/openmw/-/issues/8791)] Custom magic effect records (must be injected through the context)
- Custom ingredients are currently also exclusive to the context
- [[#8342](https://gitlab.com/OpenMW/openmw/-/issues/8342)] Custom spells and enchantments can be created both via the context and during runtime
- [[#8911](https://gitlab.com/OpenMW/openmw/-/issues/8911), [#8998](https://gitlab.com/OpenMW/openmw/-/issues/8998)] Custom container, creature, door, probe and static records can also be created during runtime
- Potion effect lists can be generated from a table

**New Bindings**

- [[#2903](https://gitlab.com/OpenMW/openmw/-/issues/2903)] Barter gold
- [[#8076](https://gitlab.com/OpenMW/openmw/-/issues/8076)] Dialogue filter conditions
- [[#8725](https://gitlab.com/OpenMW/openmw/-/issues/8725)] Localised cell names
- [[#8796](https://gitlab.com/OpenMW/openmw/-/issues/8796)] Potion autocalc flag
- [[#8816](https://gitlab.com/OpenMW/openmw/-/issues/8816)] Werewolf transformation
- [[#8841](https://gitlab.com/OpenMW/openmw/-/issues/8841)] Time advancement
- [[#8962](https://gitlab.com/OpenMW/openmw/-/issues/8962)] Various flags for magic effects, as well as projectile speed
- [[#9010](https://gitlab.com/OpenMW/openmw/-/issues/9010)] Object starting cell
- [[#9013](https://gitlab.com/OpenMW/openmw/-/issues/9013)] Actor reputation

**New Events and Handlers**

- [[#8966](https://gitlab.com/OpenMW/openmw/-/issues/8966)] Dialogue response
- [[#8979](https://gitlab.com/OpenMW/openmw/-/issues/8979)] Animation end

**Other New Features**

- [[#8644](https://gitlab.com/OpenMW/openmw/-/issues/8644)] Spawned visual effects that are not attached to an object can be referred to by name, looped, and removed
- [[#9002](https://gitlab.com/OpenMW/openmw/-/issues/9002)] Unrecognised widget and layout fields now trigger warnings to help prevent mistakes

**Fixes**

- [[#8110](https://gitlab.com/OpenMW/openmw/-/issues/8110)] sound.say respects the subtitles setting
- [[#8601](https://gitlab.com/OpenMW/openmw/-/issues/8601)] Very long script settings pages are no longer prone to crashes
- [[#8693](https://gitlab.com/OpenMW/openmw/-/issues/8693)] Extreme widget sizes and positions are now clamped to very large values to help prevent crashes
- [[#8699](https://gitlab.com/OpenMW/openmw/-/issues/8699)] Moving items should no longer produce orphan script references that cause crashes during processing
- [[#8718](https://gitlab.com/OpenMW/openmw/-/issues/8718)] Empty RefId fields are consistently exposed as nil
- [[#8769](https://gitlab.com/OpenMW/openmw/-/issues/8769)] Addressed more potential memory allocation crashes
- [[#8775](https://gitlab.com/OpenMW/openmw/-/issues/8775)] nearby.castRay will no longer crash when a table-like object is used as the ignore list
- [[#8779](https://gitlab.com/OpenMW/openmw/-/issues/8779)] Skill experience will no longer progress beyond 100% when the skill is maxed out and therefore cannot be increased
- [[#8789](https://gitlab.com/OpenMW/openmw/-/issues/8789)] Faction reputation requirement binding has been renamed from factionReaction to factionReputation; the old binding is deprecated
- [[#8802](https://gitlab.com/OpenMW/openmw/-/issues/8802)] Removing UI layout children will no longer leave orphan references in the layout that cause crashes upon reloading
- [[#8840](https://gitlab.com/OpenMW/openmw/-/issues/8840)] To prevent crashes, widgets will no longer accept table-like objects as properties
- [[#8917](https://gitlab.com/OpenMW/openmw/-/issues/8917)] Gold stacks are properly spawned
- [[#8955](https://gitlab.com/OpenMW/openmw/-/issues/8955)] Items moved from restocking stacks are properly turned into new stacks for the purposes of object identification
- [[#8980](https://gitlab.com/OpenMW/openmw/-/issues/8980)] Fixed a crash when the player is teleported while a menu is open
- [[#9018](https://gitlab.com/OpenMW/openmw/-/issues/9018)] Passing a thrust attack to actor controls no longer breaks the game
- [[#9048](https://gitlab.com/OpenMW/openmw/-/issues/9048)] Escort packages can be properly started through the AI interface
- [[#9085](https://gitlab.com/OpenMW/openmw/-/issues/9085)] Fixed a freeze when teleportation occurs while item unequipment is scheduled
- Unequip handler properly unequips slots

### **User Interface**

*Contributions from* ***akortunov***, ***Andrzej Głuszak***, ***Aussiemon***, ***Capo***, ***enoznal***, ***Evil Eye***, ***Noah Brie*** *and* ***thoth-33***

**New Features**

- [[#8705](https://gitlab.com/OpenMW/openmw/-/issues/8705)] Unexplored map colour palette is loaded from a texture that can be overridden
- [[#8774](https://gitlab.com/OpenMW/openmw/-/issues/8774)] Changing the active controller window in container views also changes the focused window
- [[#8788](https://gitlab.com/OpenMW/openmw/-/issues/8788)] Script settings window font and colours rely on relevant settings
- [[#8902](https://gitlab.com/OpenMW/openmw/-/issues/8902)] Controller navigation is now possible in the quick keys menu spell selection
- [[#8913](https://gitlab.com/OpenMW/openmw/-/issues/8913)] Gamma slider shows its value
- [[#8957](https://gitlab.com/OpenMW/openmw/-/issues/8957)] The iMaxInfoDist game setting is used as the menu mode activation distance

**Fixes**

- [[#8733](https://gitlab.com/OpenMW/openmw/-/issues/8733)] Controller trigger press thresholds for menu navigation are now configurable and lower by default to ensure compatibility with the Steam Deck
- [[#8770](https://gitlab.com/OpenMW/openmw/-/issues/8770)] When controller tooltips are visible for spells, the cursor is hidden
- [[#8771](https://gitlab.com/OpenMW/openmw/-/issues/8771)] Controller item focus is no longer reset inappropriately
- [[#8786](https://gitlab.com/OpenMW/openmw/-/issues/8786)] Fixed various issues with door marker update
- [[#8797](https://gitlab.com/OpenMW/openmw/-/issues/8797)] Equipping items with the relevant controller action will no longer cause two or three similar sounds to play at the same time
- [[#8799](https://gitlab.com/OpenMW/openmw/-/issues/8799)] Show Controller Tooltips By Default setting is now persistent: tooltips will always be enabled when you open a menu
- [[#8833](https://gitlab.com/OpenMW/openmw/-/issues/8833)] Resizing item and spell views when controller tooltips are on will no longer break the UI or crash the game
- [[#8946](https://gitlab.com/OpenMW/openmw/-/issues/8946)] Spell effect icon sorting and visibility is based on the earliest effect source

### **OpenMW-CS, Launcher and Tools**

*Contributions from* ***AnyOldName3***, ***Aussiemon***, ***Capo***, ***cykoder***, ***Evil Eye***, ***RacerBG***, ***wareya*** *and* ***wazabear***

*Translator (Bulgarian):* ***RacerBG***

**New Features**

- [[#721](https://gitlab.com/OpenMW/openmw/-/issues/721)] **Editor:** Right-to-left subview placement option
- [[#2316](https://gitlab.com/OpenMW/openmw/-/issues/2316)] **ESSImporter:** Script target conversion
- [[#5197](https://gitlab.com/OpenMW/openmw/-/issues/5197)] **Editor:** Terrain vertex painting
- [[#7152](https://gitlab.com/OpenMW/openmw/-/issues/7152)] **Editor:** Global search regular expression validation
- [[#7399](https://gitlab.com/OpenMW/openmw/-/issues/7399)] **Wizard:** Steam and GOG Galaxy installation auto-detection
- [[#7493](https://gitlab.com/OpenMW/openmw/-/issues/7493)] **Launcher:** Config directory list (Settings -> Miscellaneous)
- [[#8392](https://gitlab.com/OpenMW/openmw/-/issues/8392)] **Editor:** Selected objects are rotated around a shared centre
- [[#8874](https://gitlab.com/OpenMW/openmw/-/issues/8874)] **ESMTool:** Rotations for door destinations and cell references are printed
- [[#9027](https://gitlab.com/OpenMW/openmw/-/issues/9027)] **Launcher, Wizard:** Bulgarian translation

**Fixes**

- [[#4769](https://gitlab.com/OpenMW/openmw/-/issues/4769)] **Editor:** Edit ID action is disabled for IDs that don’t correspond to a record
- [[#7595](https://gitlab.com/OpenMW/openmw/-/issues/7595)] **Editor:** Bump-mapped objects are properly rendered in the scene view
- [[#8270](https://gitlab.com/OpenMW/openmw/-/issues/8270)] **Editor:** Scene view is no longer inappropriately transparent on Wayland and handles scaling better
- [[#8345](https://gitlab.com/OpenMW/openmw/-/issues/8345)] **Editor:** Operations like global search and saving are faster and should no longer randomly crash, especially on non-Windows systems
- [[#8842](https://gitlab.com/OpenMW/openmw/-/issues/8842)] When the –load-savegame command-line option is used, the save’s character profile and slot will be detected based on file equivalence rather than an exact path match
- [[#8999](https://gitlab.com/OpenMW/openmw/-/issues/8999)] The wizard no longer adds every directory in the installation list to the config file and properly avoids duplicating existing directories

Did you read this to the end, or did you just skim it? Either way, you’re awesome, and we hope to see you in the next release!
