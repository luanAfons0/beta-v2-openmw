---
title: "OpenMW 0.48.0 Released!"
date: 2023-07-23T15:01:38+02:00
lastmod: 2025-06-28T04:47:37Z
slug: "openmw-0-48-0-released"
categories: ["Release"]
authors: ["lysol"]
guid: https://openmw.org/?p=6004
---
The OpenMW team is proud to announce the release of version 0.48.0 of our open-source game engine! Grab it from our [Downloads Page](/downloads) for all supported operating systems and Dwemer devices.

So what does another fruitful year of diligent work bring us this time? The two biggest improvements in this new version of OpenMW are the long-awaited post-processing shader framework and an early version of a brand-new Lua scripting API! Both of these features greatly expand what the engine can deliver in terms of visual fidelity and game logic.

As usual, we’ve also solved numerous problems major and minor, particularly pertaining to the newly overhauled magic system and character animations.

Unfortunately, this time you will not be able to watch a release video by his majesty Atahualpa and his excellency johnnyhostile since they are both heavily occupied by real-life matters. – But fear not! This release announcement post will cover the gist of what this new release brings in text form, so prepare for the read of your lifetime!

<!--more-->

## Of Post-Processing

As covered in our [feature highlight](/news/2022/shiny-new-things-are-coming) blog post from last May, 0.48.0 introduces support for post-processing shaders. With wazabear’s sweat, blood, and titanic effort, the new release takes a leap forward in eye candy and can now support advanced visual effects like bloom, godrays, ambient occlusion, and many more. Shader maestros from our community have been playing with the framework for a while, so while OpenMW’s built-in assortment of shaders might seem somewhat conservative, with a little digging around the community repositories you’ll be able to transform the way your game looks.

Pressing F2 will open the in-game post-processing HUD where you can toggle any installed pretty effects on or off, or tweak their settings. To learn more about this new shader system, please take a deep dive into the [extensive documentation](https://openmw.readthedocs.io/en/latest/reference/postprocessing/index.html) wazabear has written.

## Distant Objects and Distant Objects

As we speak of graphic improvements coming in the new release, you might think post-processing would overshadow everything else – but that’s not true at all! The Lord of Lights and others also managed to get rid of two major long-standing issues with distant object rendering.

Every 3D game uses a so-called depth buffer during rendering. As objects are drawn, the depth of every sample of every object is written into that depth buffer. This way objects closer to the camera can properly cover objects farther away from the camera. That’s all fine and dandy, however, the traditional implementation of a depth buffer distributes the possible depth values very poorly. With floating point numbers from 0 to 1 being used, the scale is very imbalanced towards the buffer’s near end, or the value of 0, while numbers closer to 1, that is, the viewing distance limit, are much more sparse. The visual consequences are violent flickering, and Z-fighting of distant objects, terrain, and water when the depth buffer just couldn’t keep up with the detail. This problem was even more apparent with low values of near clipping distance OpenMW requires for compatibility with Morrowind rendering.

And, well, 0.48.0 remedies this. The reverse-Z depth buffer wazabear added heavily improves depth buffer precision at large distances without sacrificing the precision of the rendering of closer objects. This effectively eliminates the pesky flickering with no perceivable performance impact. Nice!

![](https://i.imgur.com/grTjjsQ.jpg)

Now, there are still caveats when you take this seemingly magical pill. While it doesn’t require bleeding edge hardware, some platform and video driver combinations might have trouble supporting this feature. If you encounter any problems, please report them to our [issue tracker](https://gitlab.com/OpenMW/openmw/-/issues), IRC, or Discord.

As for the second woe, if you ever tried a province mod from [Project Tamriel](https://www.project-tamriel.com/), you might have noticed the unpleasant vibration of objects and characters. While this is an inevitable consequence of how computers work when floating point numbers are rounded, OpenMW now uses double precision floating point numbers for physics interpolation and object transformation matrices. This should reduce the severity of flickering by around 4 billion times at a somewhat minor performance cost and greatly extend the vibration-free playable area for any province mods released up to the year 2090.

## Better Fog? Better Fog!

There’s actually another unscheduled extra batch of Halloween eye candy distant objects receive: 0.48.0 brings a couple of optional visual tweaks to help improve fog rendering. You can now let fogged objects blend nicely with the sky on the horizon and toggle an alternative exponential formula for the distribution of the fog. See for yourself!

{{< youtube id="-ftgfyPGv3w" title="OpenMW 0.48.0 Fog Before" >}}

{{< youtube id="vr2lbK75x5Q" title="OpenMW 0.48.0 Fog After" >}}

## Of Rain Ripples and Pliable Particles

Anything else when it comes to visuals? Indeed there is. Rain ripples have been added a few releases ago, but their artificial appearance might have seemed underwhelming. Thanks to wareya, this release contains a much needed visual overhaul for these ripples – though not yet the generic water ripples, sorry! In the in-game settings, you may choose between multiple levels of detail for rain ripples depending on how well your system handles them.

![](https://i.imgur.com/WO0TRRS.jpg)

wazabear just couldn’t stop on what has already been mentioned: he implemented a new rendering technique, so-called soft rendering, which smoothens the rendering of object intersections. This is particularly interesting for particles, which often clip through other objects. Enabling soft rendering for all particle systems is an option you can enable, and model artists can also enable soft rendering for other geometry using NiStringExtraData ([see our documentation](https://openmw.readthedocs.io/en/latest/reference/modding/custom-shader-effects.html)).

{{< youtube id="TxsI3NpVdVQ" title="OpenMW 0.48.0 Soft Particles" >}}

{{< youtube id="LGaoVWV4uiA" title="OpenMW 0.48.0 Rain Ripples" >}}

Finally, 0.48.0 contains some fixes for particle and shader lighting, making some magic effect VFX less dull and preventing snow blindness on Solstheim.

## Reanimating Animations

Not yet straying too far from visuals, are we? Animations are also a major part of any game’s visual experience, and 0.48.0 brings a few corrections to the painfully produced implementation of Morrowind’s state machine. Most of them are the work of Capo and lay the groundwork for further improvements coming in 0.49.0.

Some of the most notable changes are those to blocking and spellcasting behaviour. Blocking no longer prevents movement and while there are still differences that a subsequent release will take care of, this makes the use of shields significantly more comfortable.

Spellcasting animation is now played even when the character has no Magicka to cast the spell. Curiously, Morrowind doesn’t play it when you fail to cast an already used power. You might remember that there was an option to play it when an enchanted item is used – well, in another curious case, Morrowind actually has an “animation” playing when you use an enchanted item in first person view! It is just a split-second change of the hands’ position to the direction you look at… Well, OpenMW now does that “animation” too.

Something that might or might not seem like a controversial decision, we discovered that Morrowind assets define some unused animations for equipping and unequipping spells for non-bipedal creatures. Sometimes they seem clearly unfinished, but sometimes they’re actually really interesting. We decided that benefits outweigh the negatives and enabled their use. When you play Morrowind, various spellcasting creatures like the Atronachs, Dwarven Spectres and Dagoth Ur himself will use these animations. Come to them through fire and war, see them for yourself and decide what you think!

## Obligatory Mention of NIF

While we’re going through the visuals, we can’t forget about NetImmerse and Gamebryo’s NIF format, which is still the main format for use with OpenMW. We’ve added the support for a few records and features Morrowind modders discovered relatively recently and found useful, to keep up with the active modding scene.

Two new record types Morrowind NIF format contains have been implemented in this release: NiSortAdjustNode and NiFltAnimationNode. NiSortAdjustNode is a kind of node that lets its children, either all of them or the transparent ones, be drawn in an artist-defined order, which is useful to work around transparency sorting issues. NiFltAnimationNode is a special kind of a switch node that switches between its children automatically based on a timer, which can be useful to create complex animations.

While OpenMW had NiStencilProperty implemented for a while for its primary purpose of enabling double-sided rendering, clever stencil buffer manipulations it allows in NetImmerse never worked quite right in OpenMW. Stencil buffer is another data buffer like the depth buffer, and manipulating the stencil test and stencil buffer write allows artists to make the engine draw different geometry depending on the way the player looks at the object, make objects that look like indents in walls which will be rendered “over” the walls and so on. Thanks to wazabear, this functionality is now supported.

Another record that up to now wasn’t fully implemented is NiPlanarCollider, a particle collider. OpenMW will now respect the dimensions of the collision plane it defines.

The final NIF addition of note is the support of geometry-based particle emitters. When a geometry node is used as an emitter and a special flag is set in NiBSPArrayController, it will emit particles as if the geometry’s surface was the particles’ origin. This also allows producing very interesting VFX.

## This is Where the Magic Happens

That should be it regarding the visuals. We were giving spellcasting animations a look, so now we’ll look into the magic system itself. Basically, Evil Eye fixed everything. No, seriously. All of it just works.

…

Well, actually not all of it, but it’s really close now! Evil Eye overhauled the entire spell and magic effect processing system to be much more flexible and easy to work with, fixing plenty of old flaws in the process.

We’ll start with birthsigns, of course. One of the most popular birthsigns for a Morrowind player to pick is the Lady, which gives the Nerevarine a hefty bonus to Personality and Endurance. Personality affects how much the people you meet like you, while Endurance is supposed to influence the health bonus you get every time you level up. Except it didn’t in OpenMW. You see, previously abilities would act as magical fortifications for your stats instead of affecting the base stats like they would in Morrowind. And since health gain per level is based on the base Endurance, the Lady-induced Endurance fortification could only grant the character a bit of extra Fatigue. This has been corrected. Of course, this also means that you can’t get your Personality to 125 thanks to the Lady anymore… unless if you were to convert Lady’s Favor into a Curse. Curses are a different type of a permanent spell and will magically fortify your stats like before.

When it comes to magic effects, we’ve finally made Morrowind playable in OpenMW by making the expiry of the secret EXTRA SPELL magic effect, which is intended to undress its target, make the target re-equip their equipment instead of staying naked forever. As for spell effects of lesser importance, there’s a few to cover.

First, the visual effects for Calm, Frenzy, and Rally Creature/Humanoid won’t play on actors of the wrong type. The same is true for Turn Undead. Additionally, the effects intended for creatures now apply to all creatures, even undead and daedric ones.

Thanks to the research received from Hrnchamd, the author of the Morrowind Code Patch, the position and scaling of magic VFX playing on actors has been made much more accurate to Morrowind, and in fact, better in a way: we did not replicate Morrowind’s bug where, to calculate the scale, it deems some creatures two times smaller than they should be.

Reflect now mirrors Spell Absorption in that it is multiplicative. This means that each Reflect effect source produces a distinct success roll. Reflect can now also reflect non-harmful effects, doesn’t reflect scripted spells, and properly stacks with Spell Absorption effects depending on casting order.

Some not that invisible Invisibility quirks had to be taken care of too. You will stop being invisible when you actually release an attack, not when you initiate one, and NPCs will no longer seem to be able to observe you while you’re invisible – that is, they won’t greet you or look at you.

Paralysis is obviously supposed to prevent you from picking up things. And it did – but not when you picked up things with your mouse. This has been fixed. This also concerns the state of knockout and death, if you could somehow manage to open the inventory while, well, dead.

Restore effects will now properly restore stats Drain effects damaged and when you hit a target with an enchanted projectile, the projectile’s on-self enchantments will affect the target instead of the caster.

You might know about the quirk Morrowind has where the character’s Weight affects the horizontal velocity of that character. Well, Weight is also apparently supposed to affect the velocity of any magic projectiles the character casts for some reason. Starting with 0.48.0, this behaviour is replicated if the “normalise race speed” setting is disabled.

Aside from fixing magic, there were some other fixes to game mechanics of note, particularly AI. The player’s allies won’t react to the player’s crimes anymore, weapon-wielding creatures can now open doors again ([does this remind you of anything?](https://www.youtube.com/watch?v=abbQKIiqHDU&t=353s)) and all creatures can equip portable light sources during the night. Equipped light sources also won’t be extinguished underwater if they’re not actively being held.

## The Sounds of Loudness

Alright, audio. Sounds are prone to get cut off in Morrowind. OpenMW 0.48.0 improves upon this so when you get too far from a sound that is still audible, the sound will quickly fade out instead of immediately going silent. This added transition makes the audible experience of flying away from the very loud Ghostfence noticeably less jarring.

In addition, to improve consistency with Morrowind, we had to allow sounds to continue playing even when their sources are gone from the worldspace they started playing in. This is done by using the sources’ new position in any worldspace they’re currently in as the sound source in the current worldspace. An interior cell is considered a distinct worldspace, sounds still won’t play if they’re too far from you, and these still playing sounds will also stop playing when you leave the current cell.

## Finger Snap

Then there’s physics, of course. For all its primitiveness in the original 2002 engine, there are many gotchas to consider. For example, in Morrowind – for whatever reason – scripted object spawning doesn’t automatically make the object physically there until its state is updated through other means or tricks, so you can walk right through it. Of course some mods and the Bloodmoon expansion of all things rely on this behaviour, so we had to replicate it.

But there’s also something we overlooked ourselves: the momentum you carry was not reset upon teleporting and entering a new location. Wearing the Boots of Blinding Speed and jumping into a canton’s doors doesn’t allow you to smash into the other side of the canton at Mach 1 anymore.

There’s this commonly known issue in Morrowind where actors standing on tall platforms don’t tend to stay put and may end up on the ground way below. It’s an animation issue, but apparently OpenMW had a completely unrelated issue with very similar symptoms: when cells were loaded, it would snap actors down before loading all the objects in the cell, sometimes causing them to be snapped down right to the terrain level, which it was especially prone to in the rare case the object the NPC is standing on is actually from a different cell. This should no longer be a problem.

There was also a case where OpenMW wouldn’t have snapped down actors when it should have done so. When actors, including the player, are teleported, they are typically snapped down to the ground level, as spawn points tend to be notoriously inaccurate. However, flying and swimming actors were exempt from this. It was discovered that this is incorrect, so we fixed this – teleporting to inactive cells will snap down these actors as well. One problematic situation was the player’s teleportation from Magas Volar back to Tel Fyr while levitating.

## INTERFACING [Legendary: Success]

The UI has also received some improvements. It’s the little things. The effect list of spells and enchanted items is now aligned left, like in Morrowind, and, if you enable the option, you can zoom the world map using the mouse’s scroll wheel.

![](https://i.imgur.com/kXlA7Hm.jpg)

{{< youtube id="A_sBrVJBYXg" title="OpenMW 0.48.0 Map Zoom" >}}

But there are also big things. The layout and skin files our MyGUI-based interface uses are now a part of the virtual file system, which means that files from other data directories can override them. This also concerns fonts: while Morrowind’s bitmap fonts were always a part of the game’s assets, TrueType fonts OpenMW supports could not be. In fact, standard distributions of OpenMW now include TrueType fonts to be used by default. These TrueType fonts are based on the open source fonts [Ayembedt](https://github.com/georgd/OpenMW-Fonts) and [Pelagiad](https://isaskar.github.io/Pelagiad/). While your game can of course rely on the bitmap font setup imported from Morrowind.ini instead, there is a good reason to offer these fonts as an alternative, which is as follows…

OpenMW-specific UI additions that aren’t already covered by your content files’ game setting records can now be localised! With the newly introduced YAML-based localisation support, the in-game UI was painstakingly translated to the languages our contributors speak, including Russian, German, French and Swedish. To use the translated lines, you need to change the locale using the in-game settings. Localisation files are also a part of the VFS, to be used in… ahem, let’s not jump too far ahead. Now, where were we… Ah. The TrueType fonts are offered because the original bitmap fonts may not include the glyphs necessary to display the text: for example, the fonts from the original American English release of Morrowind do not include Russian Cyrillic characters. If you’re interested in learning how the localisation works in-depth, give [the documentation](https://openmw.readthedocs.io/en/latest/reference/modding/localisation.html) a look.

## Setting Everything Up

If you’re a modding enthusiast, one addition you should love is the introduction of data directory and BSA archive configuration directly in the launcher. You will not need to manually edit openmw.cfg anymore to register archives or work with the data directory order.

![](https://i.imgur.com/PkPcfs6.jpg)

That aside, the paths to configuration files OpenMW uses can now be redefined, meaning your OpenMW installation can become somewhat portable, though you can’t quite use multiple distinct OpenMW installations on the same device yet.

## Font Settings, Yo!

Font size and TTF resolution can now be set from the launcher for quickly setting up the crispiest font imaginable for your desired screen resolution.

## Red Paint

We know people like things to be fast. Navigation meshes were added in 0.46.0, and for all the AI improvement they bring, generating them takes quite some time on some setups. In 0.48.0, generated navigation meshes are cached to the disk, improving loading times in locations that have already been visited in a previous session. You can also generate navmeshes for your load order using the launcher, so that going through every single location in the game to do the same isn’t necessary.

![](https://i.imgur.com/ikar8QQ.jpg)

## Making Things Just Work

Of course, this release contains a great multitude of stability fixes that are too technical to explain in this overview. Them aside, there are also many, many mod compatibility improvements, and while we’re not going to cover all of them in this overview, you might still want to know that the following Morrowind mods, to our knowledge, should work in OpenMW slightly or much better than before.

- [Arktwend](https://sureai.net/games/arktwend/?lang=en)
- [Avis Dorsey Mage Companion](https://www.nexusmods.com/morrowind/mods/44494)
- [The Black Mill](https://forum.openmw.org/viewtopic.php?p=73992)
- [Galsiah’s Character Development](https://www.moddb.com/games/morrowind/addons/galsiahs-character-development)
- [Laura Craft Romance and Adventure](https://www.nexusmods.com/morrowind/mods/1427), [Thief Companion Constance](https://www.nexusmods.com/morrowind/mods/1457) and other companion mods by [Emma](https://lovkullen.net/Emma/morrowindbyemma.htm) and [Grumpy](https://lovkullen.net/Emma/grumpy.htm)
- [Vurt Mournhold Dead trees](https://www.nexusmods.com/morrowind/mods/45770/)
- [The Mysterious Hunter](https://www.nexusmods.com/morrowind/mods/44336)
- [OAAB_Data](https://www.nexusmods.com/morrowind/mods/49042)
- [Project Tamriel](https://www.project-tamriel.com/welcome) subprojects and [Tamriel Rebuilt](https://www.tamriel-rebuilt.org/)
- [Ravenloft](https://web.archive.org/web/20161103120112/http://mw.modhistory.com/download-44-10678)
- [Reign of Fire](https://www.nexusmods.com/morrowind/mods/52185)
- [Remiros’ Groundcover](https://www.nexusmods.com/morrowind/mods/46733), [Vurt’s Groundcover](https://www.nexusmods.com/morrowind/mods/31051) and other MGE XE-compatible groundcover mods
- [Robert’s Bodies](https://www.nexusmods.com/morrowind/mods/43138)
- [Smokable Pipes](https://www.nexusmods.com/morrowind/mods/22788)
- [Special Slave Companions](https://www.nexusmods.com/morrowind/mods/43111)
- [Traveling Merchants](https://forum.openmw.org/viewtopic.php?p=73992)
- [Wyrmhaven](https://www.nexusmods.com/morrowind/mods/42933)

…and potentially many others.

[Great House Dagoth](https://www.nexusmods.com/morrowind/mods/48200), [The Underground](https://web.archive.org/web/20220805191814/https://mw.modhistory.com/download-35-11514) and [Welcome to the Arena](https://www.nexusmods.com/morrowind/mods/22002) mods have also received significant improvements, and [Morrowland](https://archive.org/details/morrowland) some improvements, but they still can’t quite be called supported yet.

## But What of OpenMW-CS?

There’s work on that front as well. cc9cii, a person with the nickname that might ring a Sixth House bell, did some magic, so OpenMW-CS, our editor, should load content files much, much faster now. unelsson has also made some changes here and there, greatly improving terrain editing performance and addressing a few problems.

It can also properly handle Persistent and Blocked record flags now. A newcomer, VidiAquam, has added an instance editing grid and the ability to snap instances to that grid in the various edit modes. This should make creating content much easier in OpenMW-CS.

Alright, alright, now that we’re done with all the interesting stuff, we can move on to the known issues and extended changelog and- what? There’s something else? Oh, right, there is…

## Lua Scripting

Yes, OpenMW has its very own Lua scripting API now, dubbed OpenMW-Lua! The Great De-hardcoding is starting ahead of schedule, and Petr Mikheev and Anton Uramer are its pioneers.

Before covering what it currently offers, we’ll have to start with an honest disclaimer: you will not be able to run MWSE-Lua mods in this release. MWSE-Lua often acts as a light wrapper over the very guts of Morrowind’s executable. Unfortunately, while OpenMW might appear very similar to Morrowind on the surface, it does not resemble Morrowind internally, and trying to replicate every single little detail of Morrowind’s data structures, architecture and the way everything is tied together for the purpose would be counterproductive and frankly, take forever.

However, OpenMW-Lua *is* built with the prospect of supporting multiplayer and reaching parity with MWSE in mind, so we can only hope modders will be open to the idea of porting their mods to an OpenMW-compatible API at some point in the future.

But anyway, what does 0.48.0 Lua offer? Well, it’s not much, but it’s honest work! This early revision of the API gives scripts control over the camera as well as the means to create new GUI widgets, work with post-processing shaders, and some limited access to the game world. Of course, future releases will expand on this greatly as more parts of the engine are dehardcoded.

Mods that rely on OpenMW-Lua will need to include .omwscripts extension files, which are effectively text files that list the scripts and state what they’re going to run on. Aside from these files, mods must of course contain the scripts themselves. They can also include localization files – the same ones that are used for the UI strings and can be accessed through the API. Of course, there’s a settings API mods can work with to permanently store settings to be used across multiple game sessions.

For more information about the features of OpenMW-Lua and how to work with it, please consult the [extensive documentation](https://openmw.readthedocs.io/en/stable/reference/lua-scripting/).

We should give some practical examples of the functionality the API can already offer. All the camera settings introduced in 0.47.0 are now configurable through the in-game settings menu. Some new mods that make use of 0.48.0 superpowers have also already been released:

- Remember [OpenNeverMind](/news/2022/openmw-roadmap-update)? While ultimately we decided against removing Morrowind support, the classic isometric gameplay has since [become available](https://modding-openmw.gitlab.io/opennevermind/) as an OpenMW-Lua mod.
- [Protective Guards](https://www.nexusmods.com/morrowind/mods/46992), not to be confused with the eponymous MWSE mod, makes guards protect the populace from all hostile actors – not just creatures and the player character.
- [Pursuit](https://www.nexusmods.com/morrowind/mods/50271) allows hostiles to follow you through teleporting doors.
- [Attend Me](https://www.nexusmods.com/morrowind/mods/51232) adds a follower HUD and automatic follower teleportation.

So that’s it for Lua in this release, with many more API improvements still to come in future releases. This is also the conclusion of 0.48.0 feature overview. Thank you for having interest in OpenMW and reading all of this, and consider also reading the full list of changes below!

**Known Issues:**

- On macOS, launching OpenMW from OpenMW-CS requires ‘OpenMW.app’ and ‘OpenMW-CS.app’ to be siblings
- Performance of enchanted ranged weapons (e.g., darts) isn’t as good as other projectiles’ performance
- [[#7354](https://gitlab.com/OpenMW/openmw/-/issues/7354)] If reverse Z depth buffer and soft particles are off or unsupported, disabling all post-processing in-game will trigger a crash
- Rarely, quitting the game may crash it on some setups for an unclear reason. If you encounter such an issue, please send us feedback regarding its circumstances

**New Engine Features:**

- *by ptmikheev, uramer and others*
  - [[#5996](https://gitlab.com/OpenMW/openmw/-/issues/5996)] Lua scripting API
- *by akortunov*
  - [[#4974](https://gitlab.com/OpenMW/openmw/-/issues/4974)] Fonts and GUI layout files are now overridable through the VFS
  - [[#4975](https://gitlab.com/OpenMW/openmw/-/issues/4975)] TrueType font replacements are now included by default to avoid missing glyphs with OpenMW-specific GUI localisation
  - [[#6867](https://gitlab.com/OpenMW/openmw/-/issues/6867)] GUI localisation support. Most of the previously hardcoded strings have been localised in French, German, Russian and Swedish
  - [[#6925](https://gitlab.com/OpenMW/openmw/-/issues/6925)] In the character creation widget, the character’s head can be rotated in the preview area using the mouse wheel, as if you scrolled the slider below it
  - [[#6941](https://gitlab.com/OpenMW/openmw/-/issues/6941)] Allow users to easily change font size and ttf resolution
- *by Assumeru/Evil Eye*
  - [[#1465](https://gitlab.com/OpenMW/openmw/-/issues/1465), [#6177](https://gitlab.com/OpenMW/openmw/-/issues/6177)] ‘Repeat’ flag is supported for AI package script commands.
  - [[#2780](https://gitlab.com/OpenMW/openmw/-/issues/2780)] ‘Help’ console command, which prints OpenMW’s version string and every available command
  - [[#4297](https://gitlab.com/OpenMW/openmw/-/issues/4297)] The remnants of ‘APPLIED_ONCE’ spell effect flag have been properly implemented
  - [[#4414](https://gitlab.com/OpenMW/openmw/-/issues/4414)] EXTRA SPELL spell effect expiry now triggers re-equipment
  - [[#5198](https://gitlab.com/OpenMW/openmw/-/issues/5198)] Spell effect expiry is now tracked
  - [[#5454](https://gitlab.com/OpenMW/openmw/-/issues/5454)] Active spell effects are cleared from actors that are removed from the scene for any reason
  - [[#5489](https://gitlab.com/OpenMW/openmw/-/issues/5489)] Telekinesis also extends the activation range of activators, like in Morrowind Code Patch
  - [[#6380](https://gitlab.com/OpenMW/openmw/-/issues/6380)] Commas are treated as whitespace in scripts, heavily loosening the restrictions on their use
  - [[#6699](https://gitlab.com/OpenMW/openmw/-/issues/6699)] ‘Ignored’ ESM record flag is now respected
- *by Capo*
  - [[#6541](https://gitlab.com/OpenMW/openmw/-/issues/6541)] Gloss-mapping support
- *by Cédric Mocquillon*
  - [[#3616](https://gitlab.com/OpenMW/openmw/-/issues/3616)] Optional: You can now zoom the in-game map in and out
  - [[#6248](https://gitlab.com/OpenMW/openmw/-/issues/6248)] A default error marker model is now embedded into the engine
- *by Dominique Martinet*
  - [[#6631](https://gitlab.com/OpenMW/openmw/-/issues/6631)] FFmpeg 5 support
- *by elsid*
  - [[#6189](https://gitlab.com/OpenMW/openmw/-/issues/6189)] Generated navigation meshes are now cached on your storage device
- *by Eris Caffee*
  - [[#2766](https://gitlab.com/OpenMW/openmw/-/issues/2766)] Wizard will warn the user if the used version of Morrowind is unrecognised and potentially too old using the known size of English Morrowind BSA
  - [[#6706](https://gitlab.com/OpenMW/openmw/-/issues/6706)] The dimensions of the in-game settings window are saved and loaded
- *by fr3dz10*
  - [[#2858](https://gitlab.com/OpenMW/openmw/-/issues/2858)] Data directories can be set up and BSA archives can be registered through the launcher
  - [[#6496](https://gitlab.com/OpenMW/openmw/-/issues/6496)] ‘No Camera Collision’ flag is properly implemented for NIF nodes
- *by myrix*
  - [[#6419](https://gitlab.com/OpenMW/openmw/-/issues/6419)] Topics will not be considered exhausted if they can produce a hyperlink to a new topic
  - [[#6888](https://gitlab.com/OpenMW/openmw/-/issues/6888)] Optional: Creature damage damages armour
- *by ptmikheev*
  - [[#2491](https://gitlab.com/OpenMW/openmw/-/issues/2491)] The directory configuration files are read from can be specified manually, allowing you to produce portable OpenMW distributions
  - [[#4595](https://gitlab.com/OpenMW/openmw/-/issues/4595)] Every object instance in the game can now be uniquely identified
  - [[#6161](https://gitlab.com/OpenMW/openmw/-/issues/6161)] In-game log viewer (assigned to F10)
  - [[#7434](https://gitlab.com/OpenMW/openmw/-/issues/7434)] Exponential fog
  - [[#7435](https://gitlab.com/OpenMW/openmw/-/issues/7435)] Sky blending
- *by unelsson*
  - [[#5701](https://gitlab.com/OpenMW/openmw/-/issues/5701)] Optimised Collada model skinning
  - [[#6249](https://gitlab.com/OpenMW/openmw/-/issues/6249)] Alpha testing support for Collada models
  - [[#6823](https://gitlab.com/OpenMW/openmw/-/issues/6823)] Animation layering support for Collada models
- *by uramer*
  - [[#6557](https://gitlab.com/OpenMW/openmw/-/issues/6557)] Controller gyroscope support
- *by Vulpen*
  - [[#6019](https://gitlab.com/OpenMW/openmw/-/issues/6019)] Alpha-to-coverage can be toggled on through the launcher
- *by wareya*
  - [[#6360](https://gitlab.com/OpenMW/openmw/-/issues/6360)] Raindrop ripples have been visually revamped
- *by wazabear*
  - [[#4067](https://gitlab.com/OpenMW/openmw/-/issues/4067)] Post-processing shader support
  - [[#5928](https://gitlab.com/OpenMW/openmw/-/issues/5928)] Time of day-dependent node switching can be disabled
  - [[#6032](https://gitlab.com/OpenMW/openmw/-/issues/6032)] Support of reverse-Z depth buffer, which reduces the flickering of distant objects tremendously
  - [[#6078](https://gitlab.com/OpenMW/openmw/-/issues/6078)] The depth buffer is no longer cleared before rendering first-person models
  - [[#6128](https://gitlab.com/OpenMW/openmw/-/issues/6128)] Support for soft particles
  - [[#6199](https://gitlab.com/OpenMW/openmw/-/issues/6199)] FBO rendering support
  - [[#6443](https://gitlab.com/OpenMW/openmw/-/issues/6443)] NIF stencil buffer manipulations are supported, completing NiStencilProperty support
  - [[#6534](https://gitlab.com/OpenMW/openmw/-/issues/6534)] Decal texture blending using vertex/material colours is now simulated in shader pipeline
  - [[#6592](https://gitlab.com/OpenMW/openmw/-/issues/6592)] Geometry-based particle emission support
  - [[#6600](https://gitlab.com/OpenMW/openmw/-/issues/6600)] NiSortAdjustNode record type support
  - [[#6700](https://gitlab.com/OpenMW/openmw/-/issues/6700)] Windowed fullscreen support. In this mode, the game is played in a borderless window that matches the display resolution
- *by Wolfgang Lieff*
  - [[#6684](https://gitlab.com/OpenMW/openmw/-/issues/6684)] Support of NiFltAnimationNode NIF record type, which represents an animated sequence of nodes.
- *by AnyOldName3 and Capo*
  - With the bump of the minimum required version of OpenSceneGraph to 3.6.5, the following older improvements of OSG are brought over to every possible build of OpenMW:
    - [[#3180](https://gitlab.com/OpenMW/openmw/-/issues/3180)] Support of uncompressed colour-mapped TGA files
    - [[#3668](https://gitlab.com/OpenMW/openmw/-/issues/3668)] Support of palettised DDS files

**New Editor Features:**

- *by cc9cii*
  - [[#2554](https://gitlab.com/OpenMW/openmw/-/issues/2554)] Modifying an instance in the scene widget will scroll the instances table to that instance
  - [[#5737](https://gitlab.com/OpenMW/openmw/-/issues/5737)] Moved instances are properly deleted from their original cell
  - [[#6017](https://gitlab.com/OpenMW/openmw/-/issues/6017)] Persistent and temporary instances are properly distinguished upon saving a file to improve compatibility with the original ESM format
  - [[#6288](https://gitlab.com/OpenMW/openmw/-/issues/6288)] ‘Blocked’ record flag support
- *by pi03k*
  - [[#890](https://gitlab.com/OpenMW/openmw/-/issues/890)] Table columns can now be hidden using a new menu or with a middle-click
- *by SaintMercury*
  - [[#6721](https://gitlab.com/OpenMW/openmw/-/issues/6721)] Record subviews can be opened in an exclusive window as an option
- *by unelsson*
  - [[#6251](https://gitlab.com/OpenMW/openmw/-/issues/6251)] Instance movement now follows the mouse cursor
- *by VidiAquam*
  - [[#3245](https://gitlab.com/OpenMW/openmw/-/issues/3245)] Instance editing grid and snapping

**Engine Bug Fixes:**

- *by akortunov*
  - [[#5913](https://gitlab.com/OpenMW/openmw/-/issues/5913)] Self-targeted line-of-sight checks no longer cause issues
  - [[#6276](https://gitlab.com/OpenMW/openmw/-/issues/6276)] ‘Deleted’ flag is properly supported for groundcover instance records
  - [[#6347](https://gitlab.com/OpenMW/openmw/-/issues/6347)] Scripts can now spawn levelled creatures
  - [[#6519](https://gitlab.com/OpenMW/openmw/-/issues/6519)] Duration is no longer displayed for ingredient magic effects
- *by Andreas Stöckel*
  - [[#6129](https://gitlab.com/OpenMW/openmw/-/issues/6129), [#6131](https://gitlab.com/OpenMW/openmw/-/issues/6131)] Character doll coordinates are properly calculated for large window sizes and non-1.0 UI scaling factor
  - [[#6354](https://gitlab.com/OpenMW/openmw/-/issues/6354)] Sounds that are being culled due to being too far away will fade out instead of getting cut off
  - [[#6386](https://gitlab.com/OpenMW/openmw/-/issues/6386)] Fixed screen-space coordinate computations for water reflections, preventing them from becoming a pixelated mess as you get close to the water surface on some video cards
- *by andrew-app*
  - [[#5434](https://gitlab.com/OpenMW/openmw/-/issues/5434)] Pinned windows no longer cover the remaining breath bar
- *by anikm21*
  - [[#6303](https://gitlab.com/OpenMW/openmw/-/issues/6303)] Going to jail makes the player cancel their current attack and sheathe their weapon
- *by AnyOldName3*
  - [[#6718](https://gitlab.com/OpenMW/openmw/-/issues/6718)] Throwable weapons’ enchantments will no longer break the rendering of their target in unpredictable ways
  - [[#7251](https://gitlab.com/OpenMW/openmw/-/issues/7251)] Shader rendering is properly enabled for nodes that don’t have any rendering state set
- *by Assumeru/Evil Eye*
  - [[#1751](https://gitlab.com/OpenMW/openmw/-/issues/1751)] Birthsign abilities increase base stat values
  - [[#1930](https://gitlab.com/OpenMW/openmw/-/issues/1930)] When an actor stops fighting a target, the actor’s allies stop fighting that target as well
  - [[#2036](https://gitlab.com/OpenMW/openmw/-/issues/2036)] ‘SetStat’ and ‘ModStat’ group instructions behave much more like Morrowind, which allows Galsiah’s Character Development to increase stats beyond the cap of 100
  - [[#3488](https://gitlab.com/OpenMW/openmw/-/issues/3488)] AI will not attempt to attack before finishing aiming
  - [[#3737](https://gitlab.com/OpenMW/openmw/-/issues/3737)] If a script’s execution fails on one target, it will still run on other targets, as it could have failed due to target-specific factors
  - [[#3737](https://gitlab.com/OpenMW/openmw/-/issues/3737)] ‘Equip’’s behaviour of implicitly adding an item if it’s missing will no longer make the actor equip anything else
  - [[#3792](https://gitlab.com/OpenMW/openmw/-/issues/3792)] Magicka is recalculated immediately after Intelligence is changed instead of doing so a frame later
  - [[#3846](https://gitlab.com/OpenMW/openmw/-/issues/3846)] Scripts now support unquoted string literals that start with a hyphen
  - [[#3855](https://gitlab.com/OpenMW/openmw/-/issues/3855)] AI will avoid casting identical Bound item effects
  - [[#3855](https://gitlab.com/OpenMW/openmw/-/issues/3855)] AI will also avoid casting Bound Shield if it can’t make use of the shield
  - [[#3867](https://gitlab.com/OpenMW/openmw/-/issues/3867), [#5318](https://gitlab.com/OpenMW/openmw/-/issues/5318)] An actor’s allies that are already in combat will not join combat with the actor’s potential new targets
  - [[#3905](https://gitlab.com/OpenMW/openmw/-/issues/3905)] ‘GetDistance’ that has no target will still “work”, preventing a problem in Great House Dagoth
  - [[#4203](https://gitlab.com/OpenMW/openmw/-/issues/4203)] Overriding an object’s inventory will close that object’s looting window, preventing issues or crashes if an actor is resurrected during looting
  - [[#4376](https://gitlab.com/OpenMW/openmw/-/issues/4376)] Levelled creatures that moved out of their original cell will properly respawn in their original cell, instead of being duplicated
  - [[#5054](https://gitlab.com/OpenMW/openmw/-/issues/5054)] Spellcast equip/unequip animations are supported for non-bipedal creatures
  - [[#5100](https://gitlab.com/OpenMW/openmw/-/issues/5100)] Temporary disposition changes can no longer bring an actor’s disposition below zero
  - [[#5120](https://gitlab.com/OpenMW/openmw/-/issues/5120)] Scripted object spawning no longer automatically inserts the object’s physics model – it will be inserted when the scene is reloaded, when the object is enabled or when any object in the scene is disabled
  - [[#5207](https://gitlab.com/OpenMW/openmw/-/issues/5207)] Summoned creatures are properly cleared if their caster is removed from the scene
  - [[#5377](https://gitlab.com/OpenMW/openmw/-/issues/5377)] Keyboard focus is only restored to widgets with visible parents, preventing MenuTest from messing with the console input field focus
  - [[#5596](https://gitlab.com/OpenMW/openmw/-/issues/5596)] Using multiple identical Summon effects in permanent spells can summon multiple creatures of the same type like temporary spells can
  - [[#5621](https://gitlab.com/OpenMW/openmw/-/issues/5621)] Restore effects can restore drained stats
  - [[#5801](https://gitlab.com/OpenMW/openmw/-/issues/5801)] The order of teleportation effects in a single spell matters; the last effect will take priority
  - [[#5842](https://gitlab.com/OpenMW/openmw/-/issues/5842)] Temporary disposition change from the currently active dialogue will not affect GetDisposition result for any other actor
  - [[#5842](https://gitlab.com/OpenMW/openmw/-/issues/5842)] ‘ForceGreeting’ updates disposition change target
  - [[#5842](https://gitlab.com/OpenMW/openmw/-/issues/5842)] ‘SetDisposition’/‘ModDisposition’ applies the current temporary disposition change permanently
  - [[#5863](https://gitlab.com/OpenMW/openmw/-/issues/5863)] ‘GetEffect’ returns 1 for teleportation spell effects only after the teleportation is complete
  - [[#5937](https://gitlab.com/OpenMW/openmw/-/issues/5937)] All portable light sources are rotated by 90 degrees when they’re attached to the character, while body parts that have a BoneOffset node are not
  - [[#6051](https://gitlab.com/OpenMW/openmw/-/issues/6051)] Invalid water levels are handled more gracefully
  - [[#6066](https://gitlab.com/OpenMW/openmw/-/issues/6066)] Quoted keywords can be used as string literals
  - [[#6087](https://gitlab.com/OpenMW/openmw/-/issues/6087)] Manually added bound items no longer conflict with bound item effects and won’t disappear when they end
  - [[#6107](https://gitlab.com/OpenMW/openmw/-/issues/6107)] Fatigue recalculation after attributes are updated can properly bring its current value above the maximum, like Magicka recalculation, if necessary
  - [[#6123](https://gitlab.com/OpenMW/openmw/-/issues/6123)] Script that cannot be compiled no longer break the game when NPCs try to say hello as the script’s local variables are cached, fixing problems in Traveling Merchants
  - [[#6172](https://gitlab.com/OpenMW/openmw/-/issues/6172)] All weapon-wielding creatures can open doors
  - [[#6184](https://gitlab.com/OpenMW/openmw/-/issues/6184), [#6255](https://gitlab.com/OpenMW/openmw/-/issues/6255)] Illusion school and Reflect effects work more like vanilla (see explanation in the overview)
  - [[#6197](https://gitlab.com/OpenMW/openmw/-/issues/6197)] Scripted spellcasting commands will no longer stack, and instead either override the previous packages (if casting hasn’t started yet) or do nothing (if casting is in progress)
  - [[#6253](https://gitlab.com/OpenMW/openmw/-/issues/6253)] Reflect effects are now multiplicative
  - [[#6273](https://gitlab.com/OpenMW/openmw/-/issues/6273)] The rotation of actors that have been respawned is reset to the original rotation
  - [[#6282](https://gitlab.com/OpenMW/openmw/-/issues/6282)] Fixed parsing of unquoted string literals that start with a digit
  - [[#6283](https://gitlab.com/OpenMW/openmw/-/issues/6283)] ‘GetCurrentAIPackage’ returns -1 for non-actors and dead actors
  - [[#6291](https://gitlab.com/OpenMW/openmw/-/issues/6291)] Local variables that are named the same as a script command will be used instead of that command
  - [[#6302](https://gitlab.com/OpenMW/openmw/-/issues/6302)] Only enabled objects are added to the scene after teleportation
  - [[#6321](https://gitlab.com/OpenMW/openmw/-/issues/6321)] On-self projectile enchantments are applied to the projectile’s target instead of the caster
  - [[#6323](https://gitlab.com/OpenMW/openmw/-/issues/6323)] ‘StayOutside’ script variable now only blocks a follower’s teleportation from an exterior to an interior
  - [[#6324](https://gitlab.com/OpenMW/openmw/-/issues/6324)] ‘Rotate’ script instruction always rotates the player on the Z axis regardless of the axis argument
  - [[#6326](https://gitlab.com/OpenMW/openmw/-/issues/6326)] Detect Enchantment/Key effects can detect items in containers the contents of which weren’t resolved yet
  - [[#6333](https://gitlab.com/OpenMW/openmw/-/issues/6333)] Werewolf stat bonuses are now considered magical in nature instead of affecting the base stats
  - [[#6363](https://gitlab.com/OpenMW/openmw/-/issues/6363)] Integer arguments can be passed as string arguments and treated as names in unambiguous contexts
  - [[#6376](https://gitlab.com/OpenMW/openmw/-/issues/6376)] All creatures can equip portable light sources at night
  - [[#6396](https://gitlab.com/OpenMW/openmw/-/issues/6396)] Various instances of non-ASCII character handling have been made more reliable
  - [[#6493](https://gitlab.com/OpenMW/openmw/-/issues/6493)] Magically unlocking owned containers and doors that have never been locked is no longer illegal
  - [[#6493](https://gitlab.com/OpenMW/openmw/-/issues/6493)] However, magically unlocking owned doors that have already been unlocked is now illegal as was the case for containers
  - [[#6523](https://gitlab.com/OpenMW/openmw/-/issues/6523)] Disintegrate Weapon effect is resisted by Sanctuary instead of Resist Magicka
  - [[#6606](https://gitlab.com/OpenMW/openmw/-/issues/6606)] All quests with the same name are restarted when one of them is restarted
  - [[#6670](https://gitlab.com/OpenMW/openmw/-/issues/6670)] Dialogue ordering matches Morrowind behaviour more closely
  - [[#6682](https://gitlab.com/OpenMW/openmw/-/issues/6682)] ‘HitOnMe’ script function will only reset the hit object if there was a match
  - [[#6717](https://gitlab.com/OpenMW/openmw/-/issues/6717)] Broken scripts should no longer cause interpreter stack corruption
  - [[#6655](https://gitlab.com/OpenMW/openmw/-/issues/6655)] Creating constant effect Absorb Attribute/Skill enchantments no longer breaks the game
  - [[#6730](https://gitlab.com/OpenMW/openmw/-/issues/6730)] Scripted animations will no longer prevent wandering actors from playing idle animations after the animations finish
  - [[#6753](https://gitlab.com/OpenMW/openmw/-/issues/6753)] Dialogue response records without a DATA subrecord are loaded properly
  - [[#6799](https://gitlab.com/OpenMW/openmw/-/issues/6799)] Class-less NPCs fall back to the default class instead of causing crashes
  - [[#6913](https://gitlab.com/OpenMW/openmw/-/issues/6913)] Equipping constant effect enchanted items cancels invisibility
  - [[#6923](https://gitlab.com/OpenMW/openmw/-/issues/6923)] Loading a save where a corpse was disposed no longer prevents the actor’s respawning
- *by Bo Svensson*
  - [[#4602](https://gitlab.com/OpenMW/openmw/-/issues/4602)] Attaching a non-skinned body part that is potentially shared between multiple instances of a model always copies it, preventing crashes with Robert’s Bodies
  - [[#6142](https://gitlab.com/OpenMW/openmw/-/issues/6142)] Groundcover mods no longer override cell flags
- *by Capo*
  - [[#4227](https://gitlab.com/OpenMW/openmw/-/issues/4227)] Spellcasting animation will still play even if the casting fails due to insufficient Magicka
  - [[#4310](https://gitlab.com/OpenMW/openmw/-/issues/4310)] Spell and enchanted item effect list is aligned left instead of centre
  - [[#4374](https://gitlab.com/OpenMW/openmw/-/issues/4374)] Mouse movement events happening during a loading screen are discarded
  - [[#4389](https://gitlab.com/OpenMW/openmw/-/issues/4389)] Lip animation timer source will override any other timer source in the head model, fixing the animation of head models that have Autoplay animation flag set on the root node
  - [[#4744](https://gitlab.com/OpenMW/openmw/-/issues/4744)] Invisible particles are always processed to prevent visual glitches with some creature animations
  - [[#5192](https://gitlab.com/OpenMW/openmw/-/issues/5192)] Base actor turning speed is about 57% faster, increased from 10 radians (\~573 degrees) per second to the original value of 900 degrees per second
  - [[#5453](https://gitlab.com/OpenMW/openmw/-/issues/5453)] Fixed magic effect VFX position and scale calculations to be in-line with Morrowind
  - [[#5592](https://gitlab.com/OpenMW/openmw/-/issues/5592)] Fixed many instances of idle animation seemingly restarting at the wrong time
  - [[#5976](https://gitlab.com/OpenMW/openmw/-/issues/5976)] An attack will cancel invisibility when it’s released, not when it’s started
  - [[#5978](https://gitlab.com/OpenMW/openmw/-/issues/5978)] Actors will not talk with or look at a magically invisible player character
  - [[#6049](https://gitlab.com/OpenMW/openmw/-/issues/6049)] Pre-menu video audio will play at the same time as the title music, like in Morrowind, making Arktwend intro – which has a silent audio stream which would previously prevent the title music from playing – behave as expected
  - [[#6054](https://gitlab.com/OpenMW/openmw/-/issues/6054)] All quick keys actions will be delayed while an important animation is playing, not just weapon equipment
  - [[#6109](https://gitlab.com/OpenMW/openmw/-/issues/6109)] Multiple videos playing at the same time will no longer crash the game
  - [[#6115](https://gitlab.com/OpenMW/openmw/-/issues/6115)] ‘ShowMap’ script instruction will enable map markers for all locations whose names start from its argument, not just those that match the argument
  - [[#6118](https://gitlab.com/OpenMW/openmw/-/issues/6118)] Creature landing sound is considered an Effect type sound, not a Footstep type sound
  - [[#6154](https://gitlab.com/OpenMW/openmw/-/issues/6154)] Levitating/swimming actors will be snapped down upon teleportation into an inactive cell
  - [[#6174](https://gitlab.com/OpenMW/openmw/-/issues/6174)] Clicking on the free area in spell effect creation sliders increments the values instead of shifting the sliders to an unpredictable position
  - [[#6307](https://gitlab.com/OpenMW/openmw/-/issues/6307)] Actors with a Travel package will stop if they have been close enough to the destination for a bit of time like in Morrowind, preventing them from getting stuck on their destination if they can’t quite reach the final position and fixing Infidelities quest in Tribunal expansion
  - [[#6327](https://gitlab.com/OpenMW/openmw/-/issues/6327)] Blocking no longer prevents movement
  - [[#6343](https://gitlab.com/OpenMW/openmw/-/issues/6343)] Magic projectile velocity is affected by NPC casters’ Weight
  - [[#6416](https://gitlab.com/OpenMW/openmw/-/issues/6416)] In morph geometry, morph target zero is considered to be the target geometry instead of being ignored
  - [[#6417](https://gitlab.com/OpenMW/openmw/-/issues/6417)]: Movement accumulation node choice now takes into account whether the animation source references either of the possible nodes
  - [[#6429](https://gitlab.com/OpenMW/openmw/-/issues/6429)] Any AI script commands are no-op on non-actors instead of stopping script execution
  - [[#6473](https://gitlab.com/OpenMW/openmw/-/issues/6473)] NIF strings are only parsed up to their first null terminator
  - [[#6517](https://gitlab.com/OpenMW/openmw/-/issues/6517)] Empty Euler/XYZ rotation key groups are properly read
  - Alternative Euler rotation orders are now supported
  - [[#6545](https://gitlab.com/OpenMW/openmw/-/issues/6545)] Actor momentums are discarded upon worldspace changes
  - [[#6559](https://gitlab.com/OpenMW/openmw/-/issues/6559)] Weapon condition is consistently damaged before damage bonuses are applied
  - [[#6579](https://gitlab.com/OpenMW/openmw/-/issues/6579)] OSG builds with double precision bounding sphere type are supported
  - [[#6653](https://gitlab.com/OpenMW/openmw/-/issues/6653)] Console and maximised window dimensions are closer to Morrowind’s
  - [[#6869](https://gitlab.com/OpenMW/openmw/-/issues/6869)] Stagger animation is cancelled when an attack animation is completed
  - [[#6890](https://gitlab.com/OpenMW/openmw/-/issues/6890)] SDL input event errors are properly handled
  - [[#6895](https://gitlab.com/OpenMW/openmw/-/issues/6895)] ‘RemoveItem’ with a negative count argument will overflow like ‘AddItem’ instead of stopping script execution
  - [[#6896](https://gitlab.com/OpenMW/openmw/-/issues/6896)] Sounds are no longer stopped when their emitter leaves the worldspace, until the player leaves the cell
  - [[#6898](https://gitlab.com/OpenMW/openmw/-/issues/6898)] Quick keys menu can be opened when a different GUI window is active
  - [[#6909](https://gitlab.com/OpenMW/openmw/-/issues/6909)] Enchanted items casting aligns the first person character model to the direction of the casting for a single frame
  - [[#6910](https://gitlab.com/OpenMW/openmw/-/issues/6910)] Portable light sources are no longer extinguished under water when they are not held
- *by cc9cii*
  - [[#3246](https://gitlab.com/OpenMW/openmw/-/issues/3246)]: Various actor stats potentially not included in converted ESS files will be loaded from the ESM file, preventing actors from being dead for no apparent reason
  - [[#6067](https://gitlab.com/OpenMW/openmw/-/issues/6067)] Moved instances can now be loaded from any point in the instances list of a cell record
- *by elsid*
  - [[#5508](https://gitlab.com/OpenMW/openmw/-/issues/5508)] Binaries that don’t depend on Qt won’t be linked to Qt
  - [[#5858](https://gitlab.com/OpenMW/openmw/-/issues/5858)] Giant objects no longer cause the navigation meshes to be generated based on everything within such objects’ bounds
  - [[#6143](https://gitlab.com/OpenMW/openmw/-/issues/6143)] Screenshot capturing no longer freezes the game while it’s in progress
  - [[#6143](https://gitlab.com/OpenMW/openmw/-/issues/6143)] Optional: Screenshot saved message can be shown again
  - [[#6256](https://gitlab.com/OpenMW/openmw/-/issues/6256)] Enabling shadows should no longer cause a crash on exit with a statically linked OSG
  - [[#6711](https://gitlab.com/OpenMW/openmw/-/issues/6711)] Log time always matches the real time
  - [[#6849](https://gitlab.com/OpenMW/openmw/-/issues/6849)] The textures of textured buttons are properly scaled if their height is not a multiple of the original height
  - [[#6860](https://gitlab.com/OpenMW/openmw/-/issues/6860)] Actors may no longer try to evade an obstacle when there isn’t an obstacle due to their destination position changing
  - [[#6937](https://gitlab.com/OpenMW/openmw/-/issues/6937)] Wander package destination can no longer be outside of the Wander radius, fixing ‘Divided by Nix Hounds’ quest
  - [[#7008](https://gitlab.com/OpenMW/openmw/-/issues/7008)] Reserved node name list handling is now thread-safe
  - [[#7121](https://gitlab.com/OpenMW/openmw/-/issues/7121)] Making the game time settings invalid will no longer cause instability
- *by Eris Caffee*
  - [[#5279](https://gitlab.com/OpenMW/openmw/-/issues/5279)] Console text selection no longer breaks auto-scrolling
  - [[#6667](https://gitlab.com/OpenMW/openmw/-/issues/6667)] Pressing Escape during waiting properly cleans up the wait dialogue
- *by Kindi*
  - [[#6191](https://gitlab.com/OpenMW/openmw/-/issues/6191)] Encumbrance messagebox works more like in Morrowind, with only one message appearing at a time and with the semi-broken delay removed
  - [[#6258](https://gitlab.com/OpenMW/openmw/-/issues/6258)] Changing the offered price in the barter window may no longer cause the UI to confuse the seller and the buyer
  - [[#6322](https://gitlab.com/OpenMW/openmw/-/issues/6322)] Barter offer price is properly reset when no items are getting exchanged
  - [[#6358](https://gitlab.com/OpenMW/openmw/-/issues/6358)] ‘ChangeWeather’ script instruction will report a warning if the used region doesn’t exist
  - [[#6433](https://gitlab.com/OpenMW/openmw/-/issues/6433)] Items assigned to quick keys are updated when their quick key is activated in case they become unavailable to prevent them from becoming unavailable until the quick keys menu is reopened
  - [[#6451](https://gitlab.com/OpenMW/openmw/-/issues/6451)] Weapons summoned by Cast When Used enchantments will have their name set in the HUD properly
- *by Léo Peltier*
  - [[#5483](https://gitlab.com/OpenMW/openmw/-/issues/5483)] Spells that have ‘Autocalc’ flag set have their cost calculated automatically
- *by myrix*
  - [[#6901](https://gitlab.com/OpenMW/openmw/-/issues/6901)] Equip instruction prefers equipping filled soul gems
  - [[#6901](https://gitlab.com/OpenMW/openmw/-/issues/6901)] Trying to use an empty soul gem shows a message
- *by NeveHanter*
  - [[#6133](https://gitlab.com/OpenMW/openmw/-/issues/6133)] The player’s allies no longer react to the crimes the player commits
- *by Nuri*
  - [[#6165](https://gitlab.com/OpenMW/openmw/-/issues/6165)] Paralysis, knockout and death prevent the player from picking up items from the ground through the inventory window
- *by psi29a*
  - [[#4175](https://gitlab.com/OpenMW/openmw/-/issues/4175)] OSGoS: Double precision transformation matrix type is used by default again, preventing objects far from the world origin from vibrating
  - [[#4526](https://gitlab.com/OpenMW/openmw/-/issues/4526)] Bumping the minimum required OSG version to 3.6.5 prevents crashes when out-of-bounds UV sets are used for multitexturing
  - [[#5379](https://gitlab.com/OpenMW/openmw/-/issues/5379)] Loaded actors are no longer snapped down until all objects in the scene are loaded
  - [[#5766](https://gitlab.com/OpenMW/openmw/-/issues/5766)] Fixed an object paging culling issue, preventing some objects in the active grid from disappearing
- *by Simon Meulenbeek*
  - [[#6037](https://gitlab.com/OpenMW/openmw/-/issues/6037)] The choice of the content language in the launcher properly replaces the previous choice
- *by Skeevert*
  - [[#6101](https://gitlab.com/OpenMW/openmw/-/issues/6101)] Disarming trapped unlocked owned objects is considered illegal
- *by Tetramir*
  - [[#6289](https://gitlab.com/OpenMW/openmw/-/issues/6289)] Keyword highlighting no longer assumes all the text is ASCII
  - [[#6395](https://gitlab.com/OpenMW/openmw/-/issues/6395)] Long in-game setting tab titles will cause the window’s minimum size to be recalculated
- *by unelsson*
  - [[#6680](https://gitlab.com/OpenMW/openmw/-/issues/6680)] Objects with malformed root nodes should no longer cause memory corruption
- *by uramer*
  - [[#6395](https://gitlab.com/OpenMW/openmw/-/issues/6395)] Left and right arrow skins were added to tab control widget, allowing you to scroll in-game settings tabs if their titles get too long
- *by wazabear*
  - [[#4949](https://gitlab.com/OpenMW/openmw/-/issues/4949)] Spell VFX now have a white light attached like in Morrowind, fixing the dullness of some VFX when shaders are used
  - [[#5088](https://gitlab.com/OpenMW/openmw/-/issues/5088)] During weather transitions, sky rotation is separate for each weather
  - [[#5394](https://gitlab.com/OpenMW/openmw/-/issues/5394)] Windows Aero snap works properly with a borderless window
  - [[#5989](https://gitlab.com/OpenMW/openmw/-/issues/5989)] Simple water respects texture filtering settings
  - [[#6168](https://gitlab.com/OpenMW/openmw/-/issues/6168)] Weather particles will no longer briefly disappear at the beginning of their animation
  - [[#6389](https://gitlab.com/OpenMW/openmw/-/issues/6389)] Maximum light distance setting now affects water reflections
  - [[#6544](https://gitlab.com/OpenMW/openmw/-/issues/6544)] Physics interpolation no longer causes objects to vibrate while the camera is still
  - [[#6697](https://gitlab.com/OpenMW/openmw/-/issues/6697)] Per-vertex lighting clamping works properly again
  - [[#6794](https://gitlab.com/OpenMW/openmw/-/issues/6794)] When ‘AttachLight’ node is missing, light sources are attached to the mesh origin instead of the centre of the object’s bounds

**Editor Bug Fixes:**

- *by Capo*
  - [[#6705](https://gitlab.com/OpenMW/openmw/-/issues/6705)] Improved nested table column naming for levelled list subviews
- *by cc9cii*
  - [[#3514](https://gitlab.com/OpenMW/openmw/-/issues/3514)] Moved instances should no longer disappear for no reason
- *by unelsson*
  - [[#4700](https://gitlab.com/OpenMW/openmw/-/issues/4700)] Undo command implementation should be more reliable
  - [[#5788](https://gitlab.com/OpenMW/openmw/-/issues/5788)] Fixed various problems with the parsing of land texture indices
  - [[#6285](https://gitlab.com/OpenMW/openmw/-/issues/6285)] Optimised terrain editing and selection

**Miscellaneous:**

- *by psi29a*
  - [[#5534](https://gitlab.com/OpenMW/openmw/-/issues/5534)] As mentioned, the minimum required version of OpenSceneGraph has been bumped from to 3.6.5 and the support for OpenSceneGraph 3.4 has been dropped
- *by SaintMercury*
  - [[#6435](https://gitlab.com/OpenMW/openmw/-/issues/6435)] Visual Studio 2022 support has been added
- *by wazabear*
  - [[#6161](https://gitlab.com/OpenMW/openmw/-/issues/6161), [#6162](https://gitlab.com/OpenMW/openmw/-/issues/6162)] Sky and GUI can now be rendered using shaders

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?p=73992)
