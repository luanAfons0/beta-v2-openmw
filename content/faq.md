---
title: FAQ
toc: true
---

## General

### What is OpenMW/OpenMW-CS? {id="whatis"}

**OpenMW** is a free, open source, and modern engine which re-implements and extends the 2002 NetImmerse engine for the open-world role-playing game [*The Elder Scrolls III: Morrowind*](http://www.uesp.net/wiki/Morrowind:Morrowind). Like the Construction Set for the original *Morrowind* engine, OpenMW comes with its own editor, called **OpenMW-CS**, which allows the user to edit or create their own mods or original games. Both OpenMW and OpenMW-CS are written from scratch, and aren’t made to support any third party programs that have been added to the original *Morrowind* engine to improve its functionality.

OpenMW is not a “mod” to *Morrowind*. It is an entirely different game engine that does not use the original executable file in any way.

### Do I need *Morrowind* to use OpenMW? {id="do_i_need_morrowind"}

***Yes***, if you wish to play *Morrowind* and its expansions. You must legally own *Morrowind* before you can use OpenMW to play *Morrowind*. OpenMW is a [game engine recreation](http://en.wikipedia.org/wiki/Game_engine_recreation) and only replaces the program. OpenMW does not come with any “content” or “asset” – namely the art, game data, and other copyrighted material that you need to play the game as designed by [Bethesda Softworks](http://www.bethsoft.com/). You have to provide this content yourself by installing Morrowind and then configuring OpenMW to use the existing installation.

If you don’t currently own *Morrowind*, seriously consider buying it! It’s worth every penny, even if it’s no longer a “new” game. You can buy **The Elder Scrolls III: Morrowind GOTY Edition** online from the usual places (sometimes in sales):

- **[GOG](http://www.gog.com/game/the_elder_scrolls_iii_morrowind_goty_edition)**
- **[Steam](http://store.steampowered.com/app/22320/)**

***No***, if you wish to play original games created with OpenMW-CS. Our official, work-in-progress [Example Suite](https://gitlab.com/OpenMW/example-suite) is an example of a “game” with everything necessary to run OpenMW, eventually meant to show off its capabilities. The Template it is based on can be extended, improved and further developed into a proper game using OpenMW-CS.

### How is OpenMW/OpenMW-CS different from the original *Morrowind* engine? {id="different"}

- Native support for macOS, Linux, and Windows
- Improved physics and AI
- [Distant terrain](https://openmw.org/2017/distant-terrain/)
- Save/Load dialogs organized by character
- Quality of life UI improvements, such as being able to search for spells
- Multiple quicksaves
- World map adjusts automatically to fit new landmass from mods such as [Tamriel Rebuilt](https://www.tamriel-rebuilt.org)
- Support for up to 2147483646 loaded mods (up from 255 in the original *Morrowind* engine)
- Since it was made from scratch, virtually no engine bugs from the original *Morrowind*
- [And much more](https://wiki.openmw.org/index.php?title=Features)

Additionally, OpenMW can be used for running entirely new games created with OpenMW-CS.

### Is OpenMW a mod? {id="isOpenmwAMod"}

No, OpenMW is an entirely new engine, which extends beyond the scope of a typical game modification.

As a game, *Morrowind* is made up of two components:

- The game content, which contains the files that make up what you see, hear, and do in the game. Game content mods would be the typical ESP/ESM plugin-based mod or mesh/texture replacers.
- The game engine, which reads and interprets the game content for the player to interact with. Engine mods would be things like Morrowind Script Extender (MWSE), Morrowind Graphics Extender (MGE), and Morrowind Code Patch (MCP) that directly modify Morrowind.exe

OpenMW does not modify game content and is a completely different game engine, not a modification to the original Morrowind.exe game engine. It has a different goal and scope than game content or engine mods. Moreover, OpenMW is designed to also run game content other than *Morrowind*.

### Can OpenMW run mods built for the original *Morrowind* engine? {id="mods"}

Yes! If the mod is a game content mod compatible with the original *Morrowind* engine, then it is highly likely to work perfectly. If you have trouble getting a mod to work, contact us on Discord/IRC or the forums and we can help.

However, mods that require MWSE, MGE XE, or MCP are incompatible. These tools modify the original *Morrowind* executable file, which OpenMW replaces entirely. The primary goal of OpenMW is to implement the functionality of the original *Morrowind* engine, not third-party functionality extensions that modders have created over the years.

Fortunately, OpenMW natively includes many features provided by these extensions, such as:

- A post-processing shader API
- A “distant land” system via object paging
- MGE-compatible groundcover support
- A native Lua scripting API

While original MWSE mods and MGE XE shaders will not work, OpenMW has its own dedicated modding scene.

### Why is the version number less than 1.0? Is OpenMW incomplete? {id="versionNumber"}

Don’t let the version number being less than 1.0 fool you: OpenMW is more stable and less buggy than the original *Morrowind* game engine, and only lacks a few minor features.

Reaching version 1.0 signals that it has achieved feature parity with the original *Morrowind* game engine. After that, we will continue dehardcoding all *Morrowind* game mechanics, improving the CS, and may shift focus toward multiplayer support and parity with later iterations of the Creation Engine.

### When will OpenMW and OpenMW-CS reach version 1.0? {id="when1.0"}

There are still a number of issues that need to be addressed before we believe that we have reached parity with the original *Morrowind* game engine and *Construction Set*. In particular, there are some AI inconsistencies, missing NIF model format features and visual shortcomings remaining.

The best way to make sure that OpenMW and OpenMW-CS reach version 1.0 faster is to [help the project](#help) however you can. We can certainly use your help writing code, testing, or generally just providing feedback.


## Installation

### How do I install OpenMW and load *Morrowind* game files? {id="install"}

See [this guide](https://openmw.readthedocs.io/en/latest/manuals/installation/index.html).

### Does OpenMW work on Windows XP or is there a 32-bit version? {id="xp32"}

Windows XP is considered by Microsoft to be “End of Life” as of April 8, 2014 and in addition to this, all tooling around Windows XP has been removed as of Microsoft Visual Studio (MSVC) 2017. Since Windows XP was the only reason for keeping 32-bit releases around, we’ve officially decided to drop 32-bit support. Our last release to officially support 32-bit on Windows was 0.46 and all future releases will be 64-bit only. No more need to worry about a 4GiB RAM limit like the original Morrowind.

### Can I use the assets from the Xbox or Xbox 360 version of *Morrowind* with OpenMW? {id="xbox"}

No support is planned for the Xbox version of *Morrowind*. Bethesda has asked us not to mix platforms in this regard, so there will be no Xbox *Morrowind* on the PC or any other non-Xbox platform, except for the Xbox itself and the Xbox 360.

### What is the “official” status of OpenMW on alternative platforms? {id="alternative_platforms"}

The primary target platforms will always be GNU/Linux, macOS, and Windows. There are, however, various stages of support for Android, FreeBSD (and variants), Raspberry Pi and others. They will likely never be “first class citizens” unless more than one developer is actively working to maintain support.

In general, you can run OpenMW on devices that support at least OpenGL 2.0 with ARVv7 and above. This means OpenMW can run on a Raspberry Pi 2 provided that VC4 kernel module and userland support is there. It should be mainlined into Linux kernel 4.5 and available in Xorg as of 11.1. OpenMW will compile on Raspberry Pi B+ or earlier, getting it running will be more difficult. Feel free to experiment.


## Project

### Who made all this cool stuff? {id="team"}

See the [“The Team”]({{< relref "the-team" >}}) page!

### Will the main branch of OpenMW support multiplayer? {id="multiplayer"}

OpenMW contributors are currently directing all of their focus towards feature parity with the original *Morrowind* game engine, which does not include multiplayer. However, another project called [TES3MP](https://tes3mp.com) has forked OpenMW’s code in order to implement multiplayer, and is keeping up to date with changes in the official OpenMW branch. It is conceivable that the multiplayer fork could be merged back into the main branch when both projects are in a suitable state for it. This would allow for a single app that can run both singleplayer and multiplayer *Morrowind*.

### Does Bethesda Softworks approve of this project? Won’t you guys have legal problems? {id="bethesda_legal"}

Bethesda Softworks is well aware of OpenMW and has given us approval to continue working on it, so long as certain conditions are followed.

We had a long email conversation with Matt Grandstaff which can be read on the [wiki](https://wiki.openmw.org/index.php?title=Bethesda_Emails). There was a misunderstanding as to what OpenMW is (a new game engine) and isn’t (a *Morrowind* port) that was cleared up. Bethesda Softworks has asked us to not promote any images or videos of OpenMW running *Morrowind* on Android or other mobile platforms, and we agreed to comply with this request. Anything else, is fair game, such as displaying videos of OpenMW running the OpenMW-Template on Android on the blog.

We do not condone, nor are responsible, for other websites that show (in images or video) *Morrowind* running on an Android device.

### How can I help? {id="help"}

If you have suggestions, ideas, comments, or if you want to contribute code, visit [our GitLab repository](https://gitlab.com/OpenMW/openmw). You are very welcome to also join OpenMW’s [Discord](https://discord.gg/YegsVV3aRb)/[IRC](https://web.libera.chat/#openmw) community and [forums](https://forum.openmw.org/).

### Do you accept donations? Where can I send the money? {id="donations"}

OpenMW itself won’t accept monetary donations, but you’re welcome to donate to individual developers who keep the project going. Here are some of the developers you can support:

- [AnyOldName3](https://www.patreon.com/AnyOldName3) — graphics developer (“Master of Shadows”) and Windows maintainer
- [Capo](https://www.patreon.com/capostrophic) — project leader, Discord contact preferred
- [DaisyHasACat](https://ko-fi.com/zackhasacat) — OpenMW-Lua contributor
- [Foal](https://ko-fi.com/madsbuvi) — OpenMW-VR developer and OpenMW-Lua contributor
- [psi29a](https://www.patreon.com/psi29a) — Ubuntu/Debian maintainer, covers hosting costs for OpenMW and does work on other open-source software
- [S3ctor](https://ko-fi.com/magicaldave) — community tooling, OpenMW-CS and OpenMW-Lua contributor
- [Wazabear](https://www.patreon.com/wazabear) — graphics developer (“Master of Lights”, post-processing)


## Technical

### What technologies does OpenMW/OpenMW-CS use? {id="technologies"}

OpenMW is written in C++. It is built with various open-source tools and libraries, a list of which you can find [here](http://wiki.openmw.org/index.php?title=Development_Environment_Setup#Third-Party_Libraries_and_Tools).

Morrowind’s scripting engine was reimplemented and improved.

The ESM/ESP and BSA loading code was written from scratch, but with much help from available community-generated documentation. Likewise, the NIF (proprietary 3D mesh) loading code was written with the help of available online information. Special thanks to the [NIFLA / NifTools](http://niftools.sourceforge.net/wiki/NifTools) gang!

### Performance and why isn’t my GPU being fully utilised? {id="performance"}

Morrowind is notoriously CPU-limited. That is, the CPU sending instructions of what to draw to the GPU. As a game made in 2002, Morrowind’s assets are rather dated not just visually but also from a performance point of view. Morrowind designers didn’t have to worry about real time shadows, or reflections, or seeing for kilometres in all directions. The first TES game to do what OpenMW is doing (real time shadows on everything) was TES:V Skyrim, which has super efficient assets in comparison. Take trees as an example; what takes 2 draw calls in Skyrim might take 50 in Morrowind, or even more, just because of the way it was built. In OpenMW, at max settings, each of those individual “drawables” need an additional 1 draw call for reflection, 1 for refraction, and 1 for each shadow map. You can see how these things add up. A complex scene in Skyrim might cost about 3000 draw calls per frame; a comparatively barren scene in Morrowind can soar over 8000.

Even cutting edge games like Star Citizen aim for an average draw count of 2500 max. Assets were painstakingly made and remade to use less and less draw calls. Even though OpenMW will continue to be optimised as time goes on, there’s only so much a game engine can do with inefficient assets. But for what it’s worth, there are ways for the engine to merge a lot of these drawables together at runtime, and that’s what OpenMW is going to do more and more in the future. In the meantime, some mod authors actually have painstakingly optimised a lot of meshes to make them more draw efficient. Look for Morrowind Optimisation Patch and Project Atlas and you should see a substantial fps boost for many scenes.

### License and legal stuff {id="legal_stuff"}

This website, its author, and OpenMW are not in any way associated with or supported by Bethesda Softworks or ZeniMax Media Inc. OpenMW is a completely hobbyist project.

This website does NOT distribute any game data or other copyrighted content not owned by the author. You MUST own a legal copy of Morrowind before you can use OpenMW to play Morrowind. We absolutely do NOT support nor condone pirated versions of the game. All source code is written from scratch and is released under the [GNU General Public License version 3](http://www.gnu.org/licenses/gpl-3.0.html).

All fonts, shaders and other assets shipped with OpenMW are licensed under separate terms. Details can be found in the Readme file or in the [Wiki](https://wiki.openmw.org/index.php?title=Category:Font_Licenses).

Morrowind, Tribunal, Bloodmoon, The Elder Scrolls, Bethesda Softworks, ZeniMax and their respective logos are registered trademarks of ZeniMax Media Inc. All Rights Reserved. All other trademarks are properties of their respective owners.

All textures, models, designs, sounds and music reproduced in screenshots and videos are the property of ZeniMax Media Inc. unless otherwise specified.
