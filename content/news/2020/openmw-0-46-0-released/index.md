---
title: "OpenMW 0.46.0 Released!"
date: 2020-06-15T08:06:15+02:00
lastmod: 2024-01-05T16:22:37Z
slug: "openmw-0-46-0-released"
categories: ["Release"]
authors: ["psi29a"]
guid: https://openmw.org/?p=5418
---
After over a year of development, the OpenMW team is proud to announce the release of version 0.46.0! Grab it from our [Downloads Page](/downloads) for all supported operating systems. This release, potentially the largest ever since the move to [OpenSceneGraph](/news/2015/openmw-0-36-0-released), finally reintroduces the long-awaited real-time shadows and also introduces a new improved navigation mesh-based AI pathfinding system based on [recastnavigation](https://github.com/recastnavigation/recastnavigation) library, among tons of other improvements.

Mod compatibility has been significantly improved in this release, and you can expect dozens of mods that worked poorly previously to become playable starting with this version.

Check out the [release video](https://youtu.be/kMGjf6ZONE8) by the splendiferous johnnyhostile and see below for the full list of changes. The corresponding OpenMW-CS release video is planned to follow soon.

{{< youtube id="kMGjf6ZONE8" title="OpenMW 0.46.0 Release Commentary" >}}

One more thing: one of our major contributors, [Capostrophic](https://www.patreon.com/capostrophic), has recently started a Patreon. [AnyOldName3](https://www.patreon.com/AnyOldName3) (our resident Master of Shadows) also has a Patreon and [psi29a](https://www.patreon.com/psi29a), OpenMW’s new project lead also has a Patreon. So consider supporting them if you want to help OpenMW grow. Other contributors accept donations as well: you can find links to their Patreon pages in our [FAQ](/faq). Don’t forget to support the software that helps make this all possible: OpenSceneGraph, OpenAL-Soft and SDL2 to name a few.

Known Issues:

- To use generic Linux binaries, Qt4 and libpng12 must be installed on your system
- On macOS, launching OpenMW from OpenMW-CS requires OpenMW.app and OpenMW-CS.app to be siblings
- Shadows and the new navigation system are not yet perfect and they will get further tuning and refining – particularly in the area of performance when it comes to the shadows – in the subsequent releases

0.45.0 Regression Fixes:

- Slowfall magic effect no longer erroneously resets the player jumping flag used for GetPCJumping script function (#4775) – Capostrophic
- Attacking and landing no longer causes issues with the idle animation (#4847) – akortunov
- Actors outside of the actor processing range are now invisible immediately upon loading (#4860) – akortunov
- AiTravel no longer ceases execution erroneously if the AI processing range too low (#4979) – akortunov
- Actors with their AI disabled, including those out of the AI processing range, can no longer drown (#4980) – akortunov
- Collision shapes of dead actors no longer prevent hitting a different actor through them (#4990) – akortunov
- Offered prices are now only capped in the barter window (#5028) – Capostrophic
- Ranged weapon critical hits are now vanilla-friendly (#5067) – Capostrophic
- Blocking unarmed creatures’ attacks degrades shield condition again (#5069) – Capostrophic
- Actors will only attempt to open a door when one really obstructs their path (#5073) – elsid
- Player’s creature followers killing enemies using spells triggers a crime event properly (#5206) – akortunov
- Windows: Logging can now be redirected into the command prompt again if you launch OpenMW from there – sthalik

Major New Features:

- Improved navigation mesh-based AI pathfinding system ([#2229](https://github.com/OpenMW/openmw/pull/2229)) – elsid
- Native weapon and shield sheathing support (#4673, #5193) – akortunov
- Support for NiPalette, NiRollController, NiTriStrips and NiSwitchNode NIF records (#4675, #4812, #4882, #5121) – akortunov & Capostrophic
- Native seamless container open/close animations support (#4730) – akortunov
- Real-time shadows (#4851) – AnyOldName3
- Support for loading the compressed BSA format from Oblivion, Fallout 3, Fallout: New Vegas and 2011 Skyrim games (#5000) – cc9cii & Azdul
- Native graphic herbalism support (#5010) – akortunov
- Support for custom attachment bones for different weapon types and custom bones in general (#5131) – akortunov
- Support for unique animations for different weapon types (#5132) – akortunov
- Environment-mapped bump-mapping support (#5304) – Capostrophic

Minor Feature Additions:

- Actors avoid walking on the children geometry of an AvoidNode ([#1724](https://github.com/OpenMW/openmw/pull/1724)) – elsid
- Gamepad player character movement is now analogue (#3025) – Perry Hugh
- The global/local openmw.cfg now provides somewhat sensible default config values, making it possible to play a game without Morrowind.ini (#3442) – psi29a
- Optionally, multiple projectiles can be enchanted at once (#3517) – akortunov
- Option to invert input X axis (#3610) – Capostrophic
- Local variables of the object selected in the console can be modified directly (#3893) – Capostrophic
- Controller input can now be disabled in-game (#3980) – Capostrophic
- Shift+Double Click shortcut maximises or restores the size of right-click menus (#3999) – akortunov
- “Toggle sneak” shortcut on gamepads (double-tap of the Sneak button) (#4001) – Perry Hugh
- BetaComment/ObjectReferenceInfo output is logged into openmw.log as well for convenience (#4129) – akortunov
- RepairedOnMe, which is broken in vanilla, is implemented and always returns zero (#4255) – Capostrophic
- RaiseRank/LowerRank instructions now work correctly and their rank changes are saved properly (#4316) – akortunov
- The default controller bindings now replicate those from Xbox version of Morrowind (#4360) – Perry Hugh
- Travelling, following and wandering actors can now properly decelerate before reaching their destination (#4544) – akortunov
- Optional: Fog’s intensity can be calculated based on the actual distance from the eye point (#4708) – akortunov
- “Clone Content List” button in the launcher which allows you to copy the current load order into a content list (#4784) – Capostrophic
- Search fields were added to the inventory, trading and companion share windows (#4831) – fr3dz10
- Support for switch nodes that change their state depending on the time of the day (e.g. Glow in the Dahrk mod) (#4836) – akortunov
- Water reflections have much more detail levels and can be disabled completely (#4859) – wareya & akortunov
- Random number generator seed command line argument (#4887) – elsid
- Various distant terrain settings (#4890) – bzzt
- Audio and video playback is paused when the game is minimised (#4944) – akortunov
- At least 8 supported blood types (like vanilla) instead of just 3 (#4958) – Capostrophic
- Optional: Enchanted item usage triggers a casting animation (#4962) – akortunov
- Most UI widget skins are now properly rescalable and can use a higher resolution texture (#4968) – akortunov
- Pinnable windows hiding is persistent (#4994) – akortunov
- GetWeaponType returns different values for tools which are consistent with those from a fix from Morrowind Code Patch (#5031) – Capostrophic
- Creatures can make use of magic armor mitigation (#5033) – Capostrophic
- Enchanting window stays open after a failed attempt to enchant an item, for the player’s convenience (#5034) – Capostrophic
- Characters can be removed from factions through scripting like the respective Morrowind Code Patch feature allows (#5036) – Capostrophic
- Gamepad emulated cursor speed setting (#5046) – jrivany
- Scroll bars now use separate replaceable textures (#5051) – akortunov
- Optional light source duration display is now human-readable (#5091) – Capostrophic
- Unix-like Ctrl+W and Ctrl+U shortcuts in the in-game console, which remove the last word and the entire line respectively (#5094) – Assumeru
- User controller bindings (#5098) – alexarice
- Refresh button in the launcher that allows you to reload the content files (#5114) – James Moore
- Enchanted arrows glow correctly (#5122) – akortunov
- Corpse disposal should be safe in most cases (#5146) – akortunov
- Spell magicka cost is shown in the tooltip of the spell in spell buying window (#5147) – James Stephens
- TestCells/TestInteriorCells debug instructions (#5219) – akortunov
- NiTriShape can now be controlled by NiKeyframeControllers (#5224) – akortunov
- Lighting can optionally be applied to environment maps like in Morrowind Code Patch, improving bump-mapped object appearance (#5304) – Capostrophic
- On devices that have a gyroscope, its movement will optionally rotate the camera (#5311) – akortunov
- Ingredients can be filtered by their name or their magic effects in the alchemy window (#5314) – fr3dz10

Editor Feature Additions:

- Terrain texture selection (#3871) – unelsson
- A more obvious way to reset key bindings to their defaults – a button (#4068) – Capostrophic
- Content files can now be opened directly as a file association on Windows and GNU/Linux (#4202) – Utopium
- Faction Ranks table (#4209) – akortunov
- Transient terrain change support (#4840) – unelsson
- Instance record editor can now be opened directly from the scene window (#5005) – Utopium
- Terrain shape selection and editing (#5170) – unelsson
- Object instances in the scene view can be deleted with a keypress (#5172) – unelsson
- Edit mode tool outlines are displayed in the scene view (#5201) – unelsson
- Keyboard shortcuts to drop objects to the ground in the scene view (#5274) – unelsson

Bug Fixes:

- The console window will no longer hide the other windows ([#1515](https://github.com/OpenMW/openmw/pull/1515)) – akortunov
- Items with differing redundant ownership information now stack ([#1933](https://github.com/OpenMW/openmw/pull/1933)) – akortunov
- Content file selector dialogues in the launcher and the editor only list one instance of a content file with a specific file name ([#2395](https://github.com/OpenMW/openmw/pull/2395)) – Capostrophic
- The mouse wheel can now be bound to most actions in the in-game Controls menu, e.g. Previous and Next Weapon shortcuts ([#2679](https://github.com/OpenMW/openmw/pull/2679)) – Stomy
- Scripted items no longer stack so as to avoid scripting issues (#2969) – Capostrophic
- Data folders listed in the global openmw.cfg configuration file will no longer be handled after those in the user configuration file (#2976) – Capostrophic
- Stray text following ‘else’ operator is now discarded, fixing scripting issues in Bloodmoon and mods like Sotha Sil Expanded (#3006) – Capostrophic
- SetPos/Position can now teleport actors into active exterior cells, allowing modded followers to correctly handle player teleportation (#3109) – Capostrophic
- Reserved F3, F4, F10 and Windows (on non-Apple platforms) keys can no longer be shortcuts for other actions (#3282) – Capostrophic
- Modded companions will no longer try to start combat with themselves (#3550) – Capostrophic
- Stealing items from the “evidence” chest is always considered to be a crime (#3609) – akortunov
- Windows: Display scaling no longer breaks in-game GUI mouse controls (#3623) – sthalik
- Script functions like OnActivate can be used in non-conditional expressions and still work as expected (#3725) – Capostrophic
- Normal maps are no longer inverted on mirrored UVs (#3733) – Capostrophic
- DisableTeleporting instruction no longer makes teleportation magic effects undetectable by scripting (#3765) – Capostrophic
- Melee and thrown weapons use absolute animation time for controllers, fixing issues in Improved Thrown Weapon Projectiles mod (#3778) – akortunov
- Multi-line tool-tips now have the correct width when they use word wrapping (#3812) – akortunov
- GetEffect script instruction no longer relies on outdated magic effect information (#3894) – Capostrophic
- Object and script IDs can now contain non-ASCII characters in various situations (#3977) – akortunov
- First run and missing game data dialogues of the launcher behave more consistently (#4009) – Capostrophic
- Enchanted items outside the player’s inventory are now recharged automatically as well (#4077) – akortunov
- PCSkipEquip and OnPCEquip hardcoded script variable behavior is much closer to vanilla, resolving issues with commonly used book script templates (#4141) – Capostrophic
- Hand shielding animation behavior is now consistent with vanilla (#4240) – Capostrophic
- Ash storm origin coordinates are now accurate to vanilla (#4240) – Capostrophic
- Various rain and snow settings normally included in Morrowind.ini are no longer hardcoded (#4262) – akortunov
- Door closing/opening sound effect is now stopped when the door is obstructed (#4270) – James Stephens
- Character stats window left pane now has a minimum width and height (#4276) – anikm21
- Actors that are currently playing a random idle will not combine this idle with the sneaking idle animation (#4284) – Capostrophic
- Removed birthsign abilities are no longer erroneously restored upon loading ensuring mod compatibility (#4329) – akortunov
- Previously confusing GDB detection error message now prints the value of PATH environment variable for convenience (#4341) – akortunov
- Pulled arrows are no longer off-center for the characters of races that are not scaled uniformly (#4383) – akortunov
- Either the ranged weapon or its ammunition can be magical for its damage to ignore normal weapons resistance effects, with the previous behavior available as an option (#4384) – Capostrophic
- Reloading a saved game where the player character was falling will no longer prevent the falling damage (#4411) – Capostrophic
- Wind speed returned by GetWindSpeed function is now accurate to vanilla (#4449) – akortunov
- AiActivate AI package now behaves mostly like in Morrowind (#4456, #5210) – akortunov
- ModCurrentFatigue script instruction will always correctly knockdown the actor when their Fatigue reaches 0 due to it (#4523) – Capostrophic
- The rain particles are no longer delayed when the camera emerges from the water (#4540) – sthalik
- Having a wander package is no longer necessary for actors to use greeting and idle voiceover (#4594) – Capostrophic, akortunov
- Script parser now fully supports non-ASCII characters, fixing scripting issues in Arktwend total conversion (#4598) – akortunov
- Disabling the audio no longer causes issues or crashes in some situations (#4600) – jlaumon
- Screen fading operations always correctly finish (#4639) – Capostrophic
- Pressing Escape in the saved game window dialogues no longer resets the keyboard navigation focus (#4650) – James Stephens
- Prison marker ESM record is now hardcoded as well to avoid issues in total conversions like Arktwend (#4701) – Capostrophic
- Loading a saved game while a message box is active should no longer cause issues (#4714) – akortunov
- Leaving the dialogue menu with Escape should no longer cause issues (#4715) – akortunov
- Shields and two-handed weapons can no longer be displayed simultaneously on the inventory paper doll (#4720) – akortunov
- ResetActors instruction now traces the affected actors down and no longer teleports them back to inactive cells (#4723) – akortunov
- Land texture ESM records can be properly replaced (#4736) – akortunov
- The player character can run and sneak when their collision shape is disabled by ToggleCollision instruction (#4746) – Capostrophic
- NPCs correctly use the skeleton from the model set in their ESM record (#4747) – Capostrophic
- The player character is no longer considered not sneaking when they are about to land an attack (#4750) – Capostrophic
- Vertex Array Objects from OpenSceneGraph 3.6.x libraries are no longer incompatible (#4756) – AnyOldName3
- openmw.cfg numeric fallback setting recovery handles invalid values more gracefully (#4768) – Capostrophic
- Interiors of Illusion puzzle in Sotha Sil Expanded mod is solvable (#4778) – Capostrophic
- Blizzard weather particles origin is no longer a direction perpendicular to Red Mountain (#4783) – Capostrophic
- First person sneaking animation is no longer very slow (#4787) – Capostrophic
- Sneaking and running stances are handled correctly when the player character is airborne (#4797) – Capostrophic
- Object collisions are updated correctly immediately after it is teleported if the cell didn’t change fixing issues in Sotha Sil Expanded mod (#4800) – Capostrophic
- The player character should no longer be able to rest before taking falling damage (#4802) – Capostrophic
- Stray special characters are allowed before a Begin statement in scripts (#4803) – Capostrophic
- Particle systems with no sizes defined in their models are valid (#4804) – akortunov
- Optional: NPC movement speed calculations take race Weight into account by default (#4805) – Utopium
- Nodes named Bip01 now have higher priority than nodes named Root Bone when the movement accumulator node is determined, fixing Raki creature movement in Skyrim: Home of the Nords (#4810) – Capostrophic
- Like in vanilla, but only as a last resort, creatures will try to use the sounds of their “model-sakes” that were loaded earlier (#4813) – Capostrophic
- Journal instruction now affects the quest status even if it sets the quest index to a lower value (#4815) – Capostrophic
- SetJournalIndex no longer changes the quest status (#4815) – Capostrophic
- Spell absorption effect absorbs both harmful and beneficial effects once again (#4820) – Capostrophic
- Jail progress bar’s behavior is more intuitive and has better performance (#4823) – akortunov
- NiUVController only updates the texture slots that use the defined UV set (#4827) – akortunov
- Looping VFX caused by potion effects are now shown for NPCs (#4828) – akortunov
- A NiLODNode can be the root node of a mesh with particles (#4837) – akortunov
- Russian Morrowind localization no longer ignores implicit topic keywords (#4841) – akortunov
- Arbitrary text after local variable declarations no longer breaks script compilation (#4867) – Capostrophic
- Actors with no AI data defined like the player character no longer have corrupted AI data (#4876) – Capostrophic
- Hello AI rating has 0-65535 range (#4876) – Capostrophic
- Startup script can execute if you load a specific save through a command line argument (#4877) – elsid
- SayDone script function no longer returns 0 on the frame Say instruction is executed (#4879) – Capostrophic
- Stray explicit reference calls of global variables and in expressions no longer break script compilation, fixing issues in Sotha Sil Expanded mod (#4888) – Capostrophic
- Title screen music is looped (#4896) – Capostrophic
- Invalid resolution changes are no longer queued and then applied when settings are changed in-game (infamously those with sliders) (#4902) – akortunov
- Specular power/shininess specular map channel is no longer ignored (#4916) – AnyOldName3
- Permanent spells always play looping VFX correctly when they are applied (#4918) – akortunov
- Combat AI checks Chameleon and Invisibility magic effects magnitude correctly (#4920) – akortunov
- Werewolves’ attack state is reset upon their transformation allowing them not to become helpless in combat (#4922) – akortunov
- Invalid skill and attribute arguments are now automatically cleared from spell effects that do not accept them instead of causing severe issues (#4927) – Capostrophic
- Instances with different base object IDs can no longer match when you are loading a saved game that depends on a plugin that was modified (#4932) – akortunov
- The default vertical field of view is now 60 degrees like in Morrowind and not 55 degrees (#4933) – Capostrophic
- ESM files can now contain both actually empty strings and zero-length null-terminated strings (#4938) – Capostrophic
- Hand-to-hand attack type is no longer chosen randomly when “always use best attack” is turned off (#4942) – Capostrophic
- Magic effect magnitude distribution now includes the maximum value in the range (#4945) – Capostrophic
- Player character’s 2D voiceover now uses lip animation (#4947) – Capostrophic
- Footstep sounds are disabled for flying characters (#4948) – Capostrophic
- Light source flickering and pulsing behavior now replicates vanilla calculations completely (#4952) – Capostrophic
- Flying and swimming creatures no longer take vertical distance to their enemies into account, increasing cliff racer attack range (#4961) – Capostrophic
- Enchant skill progression behaves like vanilla now (#4963) – akortunov
- Only one instance of a specific Bolt sound will play for spell projectiles, fixing the loudness of Dagoth Ur’s spell projectiles (#4964) – Capostrophic
- All global attenuation settings from Morrowind.ini are now used (#4965) – Capostrophic
- Light magic effect light source uses the global attenuation settings (#4965) – Capostrophic
- Miss sound now only plays for the player character (#4969) – Capostrophic
- Quick keys can no longer be used when DisablePlayerFighting script instruction is active (#4972) – terabyte25
- Only the player’s allies react to friendly hits as friendly hits (#4984) – akortunov
- Object dimension-dependent VFX scaling behavior is now consistent with vanilla (#4989) – Capostrophic
- Jumping mechanics are no longer framerate-dependent (#4991) – Capostrophic
- Drop script instruction now behaves much closer to vanilla (#4999) – Capostrophic
- Werewolves no longer shield their eyes during storm (#5004) – akortunov
- Taking all items from a container no longer generates multiple “Your crime has been reported” messages (#5012) – akortunov
- Spell tooltips now support negative magnitudes (#5018) – Capostrophic
- Self-enchanting success chance is now calculated like in vanilla (#5038) – Capostrophic
- Hash sign (#) in cell, region and object names no longer changes the color of a part of the name (#5047) – Capostrophic
- Invalid spell effects are now dropped from spell records upon loading (#5050) – Capostrophic
- Instant magic effects are now applied immediately if they’re removed through scripting during the frame they were added (#5055) – Capostrophic
- Player->Cast/Player->ExplodeSpell instruction calls make the player character equip the spell instead of casting it (#5056) – Capostrophic
- Actors will do and will only do damage randomly chosen from their weapon damage range if their weapon animations lack the wind up animation (#5059) – Capostrophic
- Most magic effect visuals stop when the death animation of an NPC ends instead of when it begins (#5060) – Alexander Perepechko
- NIF file shapes named “Tri Shadow” are always hidden (#5063) – Capostrophic
- Paralyzed actors can no longer greet the player (#5074) – Capostrophic
- Enchanting cast style can no longer be changed if there’s no object (#5075) – Capostrophic
- DisablePlayerLooking/EnablePlayerLooking now work correctly (#5078) – Capostrophic
- Scrolling with a controller in GUI is now possible (#5082) – jrivany
- Much more script keywords can be used as string arguments, allowing more valid script names to work properly (#5087) – Capostrophic
- Swimming actors are no longer traced down upon loading (#5089) – Capostrophic
- “Out of charge” enchanted item sound no longer plays for NPCs (#5092) – Capostrophic
- Hand-to-hand damage sound no longer plays on KO’ed enemies (#5093) – Capostrophic
- String arguments can be parsed as number literals in scripts, fixing some issues in Illuminated Order mod (#5097) – Capostrophic
- Non-swimming enemies will no longer enter water if the player is walking on water (#5099) – anikm21
- Levitating player character can no longer be considered sneaking in more cases (#5103) – Capostrophic
- Thrown weapons and ammunition now ignore their enchantment charge so they can always trigger their enchantment – like vanilla (#5104) – Capostrophic
- Being over-encumbered no longer allows you to “jump” with zero vertical velocity (#5106) – Capostrophic
- ModRegion accepts an additional numerical argument (#5110) – Capostrophic
- Current spell HUD icon bar now correctly reflects the zero chance to cast a spell you don’t have enough magicka to cast (#5112) – Capostrophic
- Unknown effect question mark is now centered (#5113) – James Stephens
- Local scripts will restart for respawned actors immediately (#5123) – Assumeru
- Arrows are detached from the actor if their pulling animation is cancelled (#5124) – akortunov
- Swimming creatures which lack RunForward animations but have WalkForward animations are no longer motionless (#5126) – Capostrophic
- Lock script instruction now always resets the door rotation like a normal door rotation would, fixing gates in The Doors mod series (#5134) – akortunov
- Textures that have tiling disabled are no longer too dark outside their boundaries (#5137) – Capostrophic
- Actors have a lower chance to get stuck in a door when it is being opened (#5138) – elsid
- Failing to pick a lock physically or magically is now a crime in all cases (#5149) – Capostrophic
- Natural containers like plants can’t be locked or unlocked using spells (#5155) – Assumeru
- Lock and Unlock scripting instructions work on any object (#5155) – Assumeru
- Objects can now use the ID as a substitution for their name in general case, allowing them to have tooltips and be activated (#5158) – Capostrophic
- NiMaterialColorController target color is no longer hardcoded (#5159) – Capostrophic
- Companions which use companion variable from Tribunal can always be activated (#5161) – Capostrophic
- Node transformation data should no longer be shared between objects in some situations incorrectly (#5163) – akortunov
- The player character will correctly get expelled from a faction upon an illegal interaction with an item owned by the faction (#5164) – akortunov
- Scripts are no longer stopped after the player character’s death (#5166) – akortunov
- The player is no longer able to select and cast spells before the spells window is enabled (#5167) – akortunov
- PCForce1stPerson/PCForce3rdPerson instructions now really force perspective changes (#5168) – akortunov
- Nested levelled item and creature spawning chance is now calculated correctly (#5169) – Capostrophic
- Random script function returns a floating point value (like 55.0) instead of an integer value (like 55) fixing math in scripts that rely on it (#5175) – Capostrophic
- OnPCEquip flag is now set on skipped beast race attempts to equip something that cannot be equipped (#5182) – Capostrophic
- Equipped item enchantments now affect creatures that can equip items (#5186) – Capostrophic
- Non-projectile ranged weapons can no longer be enchanted on-strike which breaks the original game balance (#5190) – Capostrophic
- On-strike enchantments cannot be used on non-projectile ranged weapons that were enchanted earlier (#5190) – Capostrophic
- Dwarven ghosts play their idle animations properly (#5196) – akortunov
- The launch position of spell projectiles takes the character’s height into account (#5209) – akortunov
- Excessive screen fading when a game saved in an interior cell is loaded first has been removed (#5211) – akortunov
- Travelling actors are handled outside of AI processing range to avoid oddities in some mods (#5212) – Capostrophic
- SameFaction script function is no longer broken (#5213) – Capostrophic
- Exiting the game while the debug cell borders are active should no longer lead to crashes or serious issues (#5218) – akortunov
- GetLineOfSight, GetDetected, StartCombat and Cast will no longer break scripts when they’re working with actors that aren’t present (#5220) – Capostrophic
- The previous arrow is properly reattached when a spell with Bound Bow magic effect active on the player character expires (#5223) – akortunov
- Actor reputation is now capped: it can no longer be above 255 or be negative (#5226) – akortunov
- NIF controllers will no longer try to work without data and cause issues (#5229) – Capostrophic
- On-self Absorb effect spells can be detected by scripting again (#5241) – Capostrophic
- ExplodeSpell instruction behaves closer to Cast instruction (#5242) – Capostrophic
- Water ripples will be correctly cleaned up when you enter a different cell again (#5246) – Capostrophic
- Wandering actors wait longer after their greeting before starting walking again (#5249) – akortunov
- Shields should always use the correct models when they are displayed on actors (#5250) – Capostrophic
- GetTarget function with Player as an argument will return 1 when the affected actor is greeting the player (#5255) – Capostrophic
- Wandering actors shouldn’t become stuck when they are crossing cell borders (#5261) – akortunov
- Absorb Fatigue effect will no longer bring Fatigue under 0 (#5264) – Capostrophic
- Damage Fatigue effect will bring Fatigue under 0 only as an option (#5264) – Capostrophic
- Show debug instruction will still show the value of relevant global variables even if the chosen object is not scripted or lacks a local variable with the given name (#5278) – Capostrophic
- Thanks to an inefficient copy operation being removed from explored map loading – among other reasons – saved game loading should be slightly faster (#5308) – akortunov
- NIF properties like NiAlphaProperty are always applied in the order they are listed, avoiding incorrect rendering when multiple properties of the same type are listed (#5313) – Capostrophic
- Settings writer preserves blank lines more sensibly and should cause much less settings.cfg formatting issues (#5326) – Capostrophic
- Skills of dead actors that were fortified or damaged are properly reset when their magic effects are cleared (#5328) – Capostrophic
- dopey Necromancy mod scripts should execute correctly (#5345) – Assumeru
- Magic bolts with invalid target direction should no longer cause issues (#5350) – akortunov
- Light items won’t use up their duration if the player character doesn’t actually hold them while they are equipped (#5352) – Capostrophic

Editor Bug Fixes:

- Various fields like probabilities and actor AI ratings can no longer overflow (#2987) – Capostrophic
- NPC records can be filtered by gender again (#4601) – Capostrophic
- It is no longer possible to “preview” levelled list records which obviously lack models (#4703) – jrivany
- Exterior cell views can be correctly opened from the Instances table (#4705) – unelsson
- Interior cell lighting field values are now displayed as colors (#4745) – Capostrophic
- Cloned, moved and added instances can no longer incorrectly reuse existing reference numbers (#4748) – Stomy
- Texture painting is possible with a duplicate of a base texture (#4904) – unelsson
- Rotations are now displayed as degrees and not radians (#4971) – Utopium
- “Alembic” apparatus type is no longer misspelled as “Albemic” (#5081) – Atahualpa
- Unexplored map tiles are no longer corrupted when a file with the relevant terrain record is resaved (#5177) – unelsson
- Empty cell name subrecords are now saved to improve vanilla ESM format compatibility (#5222) – Capostrophic
- Non-ASCII characters are supported in file paths (#5239) – akortunov
- Interior cell lighting should no longer be corrupted in cleaned content files that were resaved (#5269) – Capostrophic

Other Improvements:

- Media decoding has been updated to a FFmpeg 4-compatible API (#4686) – akortunov
- Serious distant terrain performance and memory usage optimisations (#4695) – bzzt
- NMake support in Windows pre-build script (#4721) – AnyOldName3
- Cell transition performance optimisations (#4789) – bzzt & akortunov

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=6973)
