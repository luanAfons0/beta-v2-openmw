---
title: "OpenMW 0.47.0 Released!"
date: 2021-11-04T18:49:23+01:00
lastmod: 2024-01-05T16:22:19Z
slug: "openmw-0-47-0-released"
categories: ["Release"]
authors: ["Atahualpa"]
guid: https://openmw.org/?p=5656
---
Another year of busy and fruitful development lies behind us — and the OpenMW team is proud to announce the release of version 0.47.0 of our open-source engine! Grab it from our [Downloads Page](/downloads) for all supported operating systems.

With over 180 solved issues and a plethora of new features, this release is on par with the enormous 0.46.0 release we had last year. Brace yourself for object paging which allows OpenMW to finally display distant statics, proper support for groundcover mods, an improved lighting system, more efficient and robust physics, the new, optional over-the-shoulder camera, and much, much more!

In addition, countless bugs have been solved — both for the vanilla game and for a variety of mods to ensure even better mod compatibility in the new version.

Check out the [release announcement video](https://www.youtube.com/watch?v=_9sUhduT-K4) by the hacking Atahualpa and the slashing johnnyhostile, and see below for the full list of changes. There are also a [German release video](https://www.youtube.com/watch?v=9Cwdf7fwO6k) and a [German changelog](https://openmw.org/2021/openmw-0-47-0-veroffentlicht/) available.

{{< youtube id="_9sUhduT-K4" title="OpenMW 0.47.0 Release Announcement" >}}

{{< youtube id="9Cwdf7fwO6k" title="OpenMW 0.47.0: Release-Ankündigung (Deutsch/German)" >}}

**Known Issues:**

- On macOS, launching OpenMW from OpenMW-CS requires ‘OpenMW.app’ and ‘OpenMW-CS.app’ to be siblings
- Lighting of spellcasting particles looks dull
- Pathfinding during the “Tribunal” expansion quest “Infidelities” is broken and the journal may not get updated because Taren Andoren hasn’t yet reached his target spot; as a workaround, waiting for one hour will allow Taren to reach his target spot and the journal to be correctly updated
- Performance of enchanted ranged weapons (e.g., darts) isn’t as good as other projectiles’ performance

**New Engine Features:**

- *by akortunov*
  - [[#5524](https://gitlab.com/OpenMW/openmw/-/issues/5524)] Failed scripts are flagged as ‘inactive’ and ignored rather than being removed — until the game is reloaded or restarted
  - [[#5580](https://gitlab.com/OpenMW/openmw/-/issues/5580)] An NPC’s service refusal (e.g., for training, trading, or enchanting) can be filtered by service type to allow more complex NPC reactions instead of the vanilla “all or nothing” behaviour
  - [[#5642](https://gitlab.com/OpenMW/openmw/-/issues/5642)] Arrows can be attached to an actor’s skeleton instead of the bow mesh to allow implementing left-handed bows and actor-dependent shooting animations
  - [[#5813](https://gitlab.com/OpenMW/openmw/-/issues/5813)] Improved handling of groundcover mods via grass instancing
- *by AnyOldName3*
  - [[#4899](https://gitlab.com/OpenMW/openmw/-/issues/4899)] Alpha-to-coverage anti-aliasing — this improves the look of alpha-tested objects, e.g., foliage from “Morrowind Optimization Patch”
  - [[#4977](https://gitlab.com/OpenMW/openmw/-/issues/4977)] Show default icon if an item’s icon is not found
- *by Assumeru*
  - [[#2404](https://gitlab.com/OpenMW/openmw/-/issues/2404)] Levelled lists can be placed in containers
  - [[#2798](https://gitlab.com/OpenMW/openmw/-/issues/2798)] Base records are mutable, i.e., modifying an instance of a base record (e.g., a guard NPC) will now affect all instances sharing the same base record (e.g., all other clones of that guard NPC)
  - [[#5730](https://gitlab.com/OpenMW/openmw/-/issues/5730)] Add option to support graphic herbalism to ‘Advanced’ tab in the launcher
  - [[#5771](https://gitlab.com/OpenMW/openmw/-/issues/5771)] ‘ori’ console command displays the mesh’s data source as well as whether the x-prefixed version is used
- *by bzzt*
  - Proper underwater shadows when refraction is enabled; disabled if ‘refraction scale’ setting is not 1.0 *[additions by AnyOldName3 and madsbuvi]*
  - [[#2386](https://gitlab.com/OpenMW/openmw/-/issues/2386)] Optional: Render distant static objects via object paging, i.e., by merging objects which are close to each other; ON by default but ‘Distant land’ needs to be enabled *[corrections and polishing by psi29a]*
  - [[#2386](https://gitlab.com/OpenMW/openmw/-/issues/2386)] Optional: Object paging in active cells (3×3 grid around player character); ON by default *[corrections and polishing by psi29a]*
- *by Capostrophic*
  - [[#5362](https://gitlab.com/OpenMW/openmw/-/issues/5362)] Dialogue for splitting item stacks displays the name of the trapped soul for stacks of soul gems
  - [[#5445](https://gitlab.com/OpenMW/openmw/-/issues/5445)] Handle ‘NiLines’ property of NIF meshes
  - [[#5545](https://gitlab.com/OpenMW/openmw/-/issues/5545)] Optional: Allow the player character to steal from unconscious (knocked-down) NPCs during combat; OFF by default
  - [[#5579](https://gitlab.com/OpenMW/openmw/-/issues/5579)] Support for inverse-order rotation (z, y, x) in ‘SetAngle’ function
  - [[#5649](https://gitlab.com/OpenMW/openmw/-/issues/5649)] Support Skyrim SE’s compressed BSA format
  - [[#5672](https://gitlab.com/OpenMW/openmw/-/issues/5672)] Setting ‘Stretch menu background’ which makes background images fit the full screen is also available in the launcher
- *by CedricMocquillon*
  - [[#1536](https://gitlab.com/OpenMW/openmw/-/issues/1536)] Show current level-up attribute multipliers in ‘Level’ tooltip
  - [[#4486](https://gitlab.com/OpenMW/openmw/-/issues/4486)] Handling and logging of crashes on Windows
  - [[#5297](https://gitlab.com/OpenMW/openmw/-/issues/5297)] Search bar in the launcher’s ‘Data Files’ tab
  - [[#5486](https://gitlab.com/OpenMW/openmw/-/issues/5486)] Optional: Determine a trainer’s offered skills and their respective limits by evaluating base values instead of modified ones; OFF by default
  - [[#5519](https://gitlab.com/OpenMW/openmw/-/issues/5519)] Reorganised and expanded ‘Advanced’ tab in the launcher to integrate most MCP-like settings
  - [[#5814](https://gitlab.com/OpenMW/openmw/-/issues/5814)] ‘bsatool’ can add to or create new BSA archives (supports all BSA types)
- *by elsid*
  - [[#4917](https://gitlab.com/OpenMW/openmw/-/issues/4917)] Objects too small to change the navigation mesh no longer trigger updates of that mesh which improves performance
  - [[#5500](https://gitlab.com/OpenMW/openmw/-/issues/5500)] Scene loading ends only when enough navigation mesh tiles around the player character have been generated
  - [[#6033](https://gitlab.com/OpenMW/openmw/-/issues/6033)] Automatically add existing path grid to navigation mesh to further improve pathfinding
  - [[#6033](https://gitlab.com/OpenMW/openmw/-/issues/6033)] Partially remove fallbacks to old pathfinding to avoid, e.g., actors following other enemies into lava
  - [[#6034](https://gitlab.com/OpenMW/openmw/-/issues/6034)] Calculate optimal navigation paths based on an actor’s individual movement speed on land and in water
- *by fr3dz10*
  - [[#2159](https://gitlab.com/OpenMW/openmw/-/issues/2159)] Optional: Grey out dialogue topics which are — at least in that moment — exhausted and highlight newly added topics; OFF by default (colours are customisable)
  - [[#4201](https://gitlab.com/OpenMW/openmw/-/issues/4201)] Projectile-projectile collision, including targeted spells (a successful hit cancels both projectiles); emulates vanilla behaviour
  - [[#5563](https://gitlab.com/OpenMW/openmw/-/issues/5563)] Optional: Physics are run in one or several background threads to improve performance; OFF by default
- *by glassmancody.info*
  - [[#5828](https://gitlab.com/OpenMW/openmw/-/issues/5828)] New, shader-based, customisable lighting system which removes the limit of eight light sources per object
- *by jefetienne*
  - [[#5692](https://gitlab.com/OpenMW/openmw/-/issues/5692)] Filter in the spell window also displays items and spells with matching magic effects — not only those with matching names
- *by ptmikheev*
  - Improved vanity mode in third-person view
  - [[#390](https://gitlab.com/OpenMW/openmw/-/issues/390)] Optional: New over-the-shoulder look in 3rd-person view; OFF by default
  - [[#390](https://gitlab.com/OpenMW/openmw/-/issues/390)] Optional: Auto-switch shoulder in narrow passages; ON by default but ‘View over the shoulder’ needs to be enabled
  - [[#2686](https://gitlab.com/OpenMW/openmw/-/issues/2686)] Logged info in ‘openmw.log’ displays timestamps
  - [[#4894](https://gitlab.com/OpenMW/openmw/-/issues/4894)] Optional: NPCs avoid collisions when moving; OFF by default
  - [[#4894](https://gitlab.com/OpenMW/openmw/-/issues/4894)] Optional: NPCs give way to moving actors if they are idle; ON by default but ‘NPCs avoid collisions’ needs to be enabled
  - [[#5043](https://gitlab.com/OpenMW/openmw/-/issues/5043)] Optional: Customisable head bobbing in first-person mode; OFF by default
  - [[#5457](https://gitlab.com/OpenMW/openmw/-/issues/5457)] Optional: More realistic diagonal character movement; OFF by default
  - [[#5610](https://gitlab.com/OpenMW/openmw/-/issues/5610)] Optional: Actors move and turn smoother; OFF by default
- *by simonmeulenbeek*
  - [[#5511](https://gitlab.com/OpenMW/openmw/-/issues/5511)] Add audio settings to ‘Advanced’ tab in the launcher
- *by TescoShoppah*
  - [[#3983](https://gitlab.com/OpenMW/openmw/-/issues/3983)] Installation wizard provides link to FAQ section regarding buying Morrowind.
- *by unelsson*
  - [[#5456](https://gitlab.com/OpenMW/openmw/-/issues/5456)] Basic support for ‘Collada’ animation format
- *by wareya*
  - [[#5762](https://gitlab.com/OpenMW/openmw/-/issues/5762)] ‘Movement solver’ is now much more robust
  - [[#5910](https://gitlab.com/OpenMW/openmw/-/issues/5910)] Fall back to true delta time if needed to prevent physics death spirals in game

**New Editor Features:**

- *by Atahualpa*
  - [[#6024](https://gitlab.com/OpenMW/openmw/-/issues/6024)] Customisable primary and secondary selection modes for ‘terrain land editing’ mode (see [#3171](https://gitlab.com/OpenMW/openmw/-/issues/3171))
- *by olcoal*
  - [[#5199](https://gitlab.com/OpenMW/openmw/-/issues/5199)] Improved and configurable colours in 3D view
- *by unelsson*
  - [[#832](https://gitlab.com/OpenMW/openmw/-/issues/832)] Proper handling of deleted references
  - [[#3171](https://gitlab.com/OpenMW/openmw/-/issues/3171)] Instance drag selection with the following modes: ‘centred cube’, ‘cube corner to corner’, ‘centred sphere’
  - [[#3171](https://gitlab.com/OpenMW/openmw/-/issues/3171)] Configurable actions for instance drag selection: ‘select only’, ‘add to selection’, ‘remove from selection’, ‘invert selection’

**Engine Bug Fixes:**

- *by akortunov*
  - [[#3714](https://gitlab.com/OpenMW/openmw/-/issues/3714)] Resolved conflicts between ‘SpellState’ and ‘MagicEffects’ functionality of the engine
  - [[#3789](https://gitlab.com/OpenMW/openmw/-/issues/3789)] Fixed a crash which could occur when updating active magic effects
  - [[#4021](https://gitlab.com/OpenMW/openmw/-/issues/4021)] Attributes and skills are now stored as floating-point values
  - [[#4623](https://gitlab.com/OpenMW/openmw/-/issues/4623)] Improved implementation of the Corprus disease
  - [[#5108](https://gitlab.com/OpenMW/openmw/-/issues/5108)] Prevent save-game bloating by using an appropriate fog texture format
  - [[#5165](https://gitlab.com/OpenMW/openmw/-/issues/5165)] Active spell effects now use real-time updates instead of timestamps to avoid problems with time scale and scripted daytime changes
  - [[#5387](https://gitlab.com/OpenMW/openmw/-/issues/5387)] ‘Move’ and ‘MoveWorld’ commands now correctly update the moved object’s cell
  - [[#5499](https://gitlab.com/OpenMW/openmw/-/issues/5499)] Game logic for rank advancement now properly considers the two favoured skills of a faction
  - [[#5502](https://gitlab.com/OpenMW/openmw/-/issues/5502)] Dead zone of analogue sticks can now be configured in the ‘openmw.cfg’ file
  - [[#5619](https://gitlab.com/OpenMW/openmw/-/issues/5619)] Key presses are now ignored during savegame loading
  - [[#5975](https://gitlab.com/OpenMW/openmw/-/issues/5975)] Controllers for “sheath” meshes (used by weapon sheathing mods) are now disabled to prevent, e.g., accidentally playing shooting animations for bows in “HQ Arsenal” mod
  - [[#6043](https://gitlab.com/OpenMW/openmw/-/issues/6043)] An NPC’s ‘shield’ animation is now cancelled when a light source is equipped instead of a shield
  - [[#6047](https://gitlab.com/OpenMW/openmw/-/issues/6047)] In-game mouse bindings can no longer be triggered when controls are disabled, e.g., when loading a savegame
- *by AnyOldName3*
  - [[#2069](https://gitlab.com/OpenMW/openmw/-/issues/2069)] ‘NiFlipControllers’ now only affect the base texture which, e.g., solves issues with the fireflies in the “Fireflies Invade Morrowind” mod
  - [[#2976](https://gitlab.com/OpenMW/openmw/-/issues/2976)] Fixed issues with the priority of OpenMW’s local and global config files
  - [[#4631](https://gitlab.com/OpenMW/openmw/-/issues/4631)] GPUs which don’t support an anti-aliasing value of 16 now always fall back to a lower value if ’16’ is set in the settings
  - [[#5391](https://gitlab.com/OpenMW/openmw/-/issues/5391)] Bodies from “Races Redone” mod are now correctly shown on the inventory’s paper doll
  - [[#5688](https://gitlab.com/OpenMW/openmw/-/issues/5688)] Water shader no longer breaks in interior cells when indoor shadows are disabled
  - [[#5906](https://gitlab.com/OpenMW/openmw/-/issues/5906)] Sun-glare effect now works with ‘Mesa’ drivers and AMD GPUs
- *by Assumeru*
  - [[#2311](https://gitlab.com/OpenMW/openmw/-/issues/2311)] Targeting non-unique actors in scripts is now supported
  - [[#2473](https://gitlab.com/OpenMW/openmw/-/issues/2473)] Selling respawning items to vendors now increases the amount that respawns
  - [[#3862](https://gitlab.com/OpenMW/openmw/-/issues/3862)] Random contents of containers are now determined in a similar way as in the original engine
  - [[#3929](https://gitlab.com/OpenMW/openmw/-/issues/3929)] Random loot in a container no longer respawns when the player character takes the loot and trades with the container’s owner afterwards
  - [[#4039](https://gitlab.com/OpenMW/openmw/-/issues/4039)] Followers no longer form a train of actors but rather follow their leader at the same distance
  - [[#4055](https://gitlab.com/OpenMW/openmw/-/issues/4055)] If a script is running as a global script, newly triggered local instances of that script will now be initialised with the global script’s variable state
  - [[#5300](https://gitlab.com/OpenMW/openmw/-/issues/5300)] NPCs carrying torches now switch to using a shield when they enter combat *[inspired by Capostrophic’s work]*
  - [[#5423](https://gitlab.com/OpenMW/openmw/-/issues/5423)] Bigger creature followers — e.g., Guars — no longer bump into their leader
  - [[#5469](https://gitlab.com/OpenMW/openmw/-/issues/5469)] Scripted rotations or displacements of large objects no longer reset the local map’s fog of war
  - [[#5661](https://gitlab.com/OpenMW/openmw/-/issues/5661)] Region sounds now use fallback values to determine the minimum and maximum time between sounds
  - [[#5661](https://gitlab.com/OpenMW/openmw/-/issues/5661)] There now is a chance to play no region sound at all if the sum of all sound chances for the current region is below 100 %
  - [[#5687](https://gitlab.com/OpenMW/openmw/-/issues/5687)] Bound items covering the same equipment slot no longer freeze the game if they expire at the same time, e.g., while resting
  - [[#5835](https://gitlab.com/OpenMW/openmw/-/issues/5835)] Scripts can now set AI values (‘AI Hello’, ‘AI Alarm’, ‘AI Fight’, ‘AI Flee’) to negative numbers
  - [[#5836](https://gitlab.com/OpenMW/openmw/-/issues/5836)] Dialogue conditions containing negative AI values now work
  - [[#5838](https://gitlab.com/OpenMW/openmw/-/issues/5838)] Teleport doors to non-existent wilderness cells no longer break the local map
  - [[#5840](https://gitlab.com/OpenMW/openmw/-/issues/5840)] NPCs being hit due to attacking an enemy with an active ‘fire/frost/shock shield’ effect now trigger the corresponding damage sound effect
  - [[#5841](https://gitlab.com/OpenMW/openmw/-/issues/5841)] Free spells can now be cast even if the caster has no magicka left
  - [[#5871](https://gitlab.com/OpenMW/openmw/-/issues/5871)] Users with Russian keyboard layout can now use ‘Ё’ in input fields without opening the console
  - [[#5912](https://gitlab.com/OpenMW/openmw/-/issues/5912)] ‘Summon’ effects that failed to summon anything are no longer removed
  - [[#5923](https://gitlab.com/OpenMW/openmw/-/issues/5923)] Clicking on blank spaces in the journal can no longer open topics on the next page
  - [[#5934](https://gitlab.com/OpenMW/openmw/-/issues/5934)] Morrowind legacy madness: The item count in ‘AddItem’ commands is now transformed into an unsigned value, i.e., negative numbers will overflow and result in a positive number of items being added
  - [[#5991](https://gitlab.com/OpenMW/openmw/-/issues/5991)] Scripts can now open books and scrolls in the inventory
  - [[#6007](https://gitlab.com/OpenMW/openmw/-/issues/6007)] Corrupt video files no longer crash the game
  - [[#6016](https://gitlab.com/OpenMW/openmw/-/issues/6016)] Sneaking or jumping NPCs no longer stop and turn to greet the player character
- *by Capostrophic*
  - [[#4774](https://gitlab.com/OpenMW/openmw/-/issues/4774)] Guards no longer ignore attacks of invisible player characters but rather initiate dialogue and flee if the player resists being arrested
  - [[#5358](https://gitlab.com/OpenMW/openmw/-/issues/5358)] Initiating dialogue with another actor without closing the dialogue window no longer clears the dialogue history in order to allow, e.g., emulation of three-way dialogue via ‘ForceGreeting’ command
  - [[#5363](https://gitlab.com/OpenMW/openmw/-/issues/5363)] ‘Auto Calc’ flag for enchantments is now properly treated as flag in OpenMW-CS and in OpenMW’s ‘esmtool’
  - [[#5364](https://gitlab.com/OpenMW/openmw/-/issues/5364)] Scripts which try to start a non-existent global script now skip that step and continue execution instead of breaking
  - [[#5367](https://gitlab.com/OpenMW/openmw/-/issues/5367)] Selecting already equipped spells or magic items via hotkey no longer triggers the ‘equip’ sound to play
  - [[#5369](https://gitlab.com/OpenMW/openmw/-/issues/5369)] ‘Scale’ argument in levelled creature lists is now considered when spawning creatures from such lists
  - [[#5370](https://gitlab.com/OpenMW/openmw/-/issues/5370)] Morrowind legacy madness II: Using a key on a trapped door/container now only disarms the trap if the door/container is actually locked
  - [[#5397](https://gitlab.com/OpenMW/openmw/-/issues/5397)] NPC greetings are now properly reset when leaving and re-entering an area
  - [[#5403](https://gitlab.com/OpenMW/openmw/-/issues/5403)] Visual spell effects affecting an actor now also play during that actor’s death animation
  - [[#5415](https://gitlab.com/OpenMW/openmw/-/issues/5415)] Environment maps now properly work for equipped items, e.g., those of the “HiRez Armors” mod
  - [[#5416](https://gitlab.com/OpenMW/openmw/-/issues/5416)] Junk non-node root records in NIF meshes are now handled more gracefully to allow certain modded assets to be loaded
  - [[#5424](https://gitlab.com/OpenMW/openmw/-/issues/5424)] Creatures now head-track the player character
  - [[#5425](https://gitlab.com/OpenMW/openmw/-/issues/5425)] Magic effects which are not applied once now have a minimum duration of 1 second
  - [[#5427](https://gitlab.com/OpenMW/openmw/-/issues/5427)] ‘GetDistance’ function no longer stops script execution when there is no object found for the given ID
  - [[#5427](https://gitlab.com/OpenMW/openmw/-/issues/5427)] ‘GetDistance’ function and the engine’s object search now log improved warning messages regarding missing objects of a given ID
  - [[#5435](https://gitlab.com/OpenMW/openmw/-/issues/5435)] Enemy attacks can now hit the player character when collision is disabled
  - [[#5441](https://gitlab.com/OpenMW/openmw/-/issues/5441)] Fixed the priority of certain animations to allow enemies to push the player character in first-person view if the player just holds the attack button
  - [[#5451](https://gitlab.com/OpenMW/openmw/-/issues/5451)] Magic projectiles now instantly disappear when their caster vanishes or dies
  - [[#5452](https://gitlab.com/OpenMW/openmw/-/issues/5452)] Auto-walking is no longer included in savegames, i.e., the player character will stand still again after loading
  - [[#5484](https://gitlab.com/OpenMW/openmw/-/issues/5484)] Items with a base value of 0 can no longer be sold for 1 gold
  - [[#5485](https://gitlab.com/OpenMW/openmw/-/issues/5485)] Successful intimidation attempts now always increase an NPC’s disposition by at least a minimum margin
  - [[#5490](https://gitlab.com/OpenMW/openmw/-/issues/5490)] Hits to the ‘left carry’ slot are now redistributed to the ‘left pauldron’ slot or the ‘cuirass’ slot if the actor has no shield equipped
  - [[#5525](https://gitlab.com/OpenMW/openmw/-/issues/5525)] Case-insensitive search in the inventory window now also works for non-ASCII characters
  - [[#5603](https://gitlab.com/OpenMW/openmw/-/issues/5603)] When switching to constant-effect enchanting in the enchantment window, all effect ranges are now reset to ‘self’ if possible and incompatible effects are removed
  - [[#5604](https://gitlab.com/OpenMW/openmw/-/issues/5604)] OpenMW’s NIF loaders can now correctly handle NIF files with multiple root nodes
  - [[#5611](https://gitlab.com/OpenMW/openmw/-/issues/5611)] Repair hammers with 0 uses can now be used only once before they break, while lockpicks and probes with 0 uses do nothing at all — thanks, Bethesda!
  - [[#5622](https://gitlab.com/OpenMW/openmw/-/issues/5622)] Fixed the priority of the main-menu window to prevent the in-game console from becoming unresponsive
  - [[#5627](https://gitlab.com/OpenMW/openmw/-/issues/5627)] Book parser now considers images and formatting tags after the last ‘end of line’ tag to correctly display certain in-game books and scrolls added by mods
  - [[#5633](https://gitlab.com/OpenMW/openmw/-/issues/5633)] Negative spell effects received before switching to god mode no longer continue to harm the player character
  - [[#5639](https://gitlab.com/OpenMW/openmw/-/issues/5639)] Tooltips no longer cover message boxes
  - [[#5644](https://gitlab.com/OpenMW/openmw/-/issues/5644)] Active summon effects on the player character no longer cause crashes during game initialisation
  - [[#5656](https://gitlab.com/OpenMW/openmw/-/issues/5656)] Characters no longer use the standing animation when blocking attacks in sneak mode
  - [[#5695](https://gitlab.com/OpenMW/openmw/-/issues/5695)] Actors casting a target spell at themselves via script now aim for their feet rather than casting the spell in their current target’s direction
  - [[#5706](https://gitlab.com/OpenMW/openmw/-/issues/5706)] AI sequences — e.g., for patrolling NPCs — no longer stop looping when a savegame is reloaded
  - [[#5758](https://gitlab.com/OpenMW/openmw/-/issues/5758)] Paralysed actors who are underwater now float to the surface
  - [[#5758](https://gitlab.com/OpenMW/openmw/-/issues/5758)] Levitating actors who get paralysed now fall to the ground
  - [[#5869](https://gitlab.com/OpenMW/openmw/-/issues/5869)] Guards now only initiate the arrest dialogue if the player character is in line of sight
  - [[#5877](https://gitlab.com/OpenMW/openmw/-/issues/5877)] Transparency of magic-effect icons is now properly reset to prevent “empty” icons from appearing in certain situations
  - [[#5902](https://gitlab.com/OpenMW/openmw/-/issues/5902)] ‘NiZBufferProperty’ now handles ‘depth test’ flag
  - [[#5995](https://gitlab.com/OpenMW/openmw/-/issues/5995)] UV offset in ‘NiUVController’ — which is used in vanilla Morrowind to simulate liquid movement — is now properly calculated
- *by ccalhoun1999*
  - [[#5101](https://gitlab.com/OpenMW/openmw/-/issues/5101)] Hostile followers no longer follow the player character through teleport doors or when they use travel services
- *by davidcernat*
  - [[#5422](https://gitlab.com/OpenMW/openmw/-/issues/5422)] The player character no longer loses all spells if resurrected via the ‘resurrect’ console command
- *by elsid*
  - [[#4764](https://gitlab.com/OpenMW/openmw/-/issues/4764)] Synchronise main thread and rendering thread to avoid errors with particles, e.g., in the water-ripple effect
  - [[#5479](https://gitlab.com/OpenMW/openmw/-/issues/5479)] Fixed an issue with pathfinding that led to NPCs standing rooted to the ground instead of wandering about
  - [[#5507](https://gitlab.com/OpenMW/openmw/-/issues/5507)] Sound volume settings are now always restricted to the range [0.0, 1.0] and are no longer potentially unclamped in response to in-game volume changes.
  - [[#5531](https://gitlab.com/OpenMW/openmw/-/issues/5531)] Fleeing actors are now correctly rotated which, e.g., prevents cliff racers from diving underwater when fleeing
  - [[#5914](https://gitlab.com/OpenMW/openmw/-/issues/5914)] ‘Navigator’ now builds “limited” paths for actors with far-away destinations to ensure pathfinding even over greater distances (outside the navigation mesh)
  - [[#6294](https://gitlab.com/OpenMW/openmw/-/issues/6294)] Fixed a crash caused by an empty path grid
- *by fr3dz10*
  - [[#3372](https://gitlab.com/OpenMW/openmw/-/issues/3372)] Magic bolts and projectiles now always collide with moving targets
  - [[#4083](https://gitlab.com/OpenMW/openmw/-/issues/4083)] Doors now mimic vanilla Morrowind’s behaviour when colliding with an actor during their open/close animation *[partially fixed by elsid]*
  - [[#5472](https://gitlab.com/OpenMW/openmw/-/issues/5472)] Zero-lifetime particles are now handled properly and a related potential zero division in ‘NiParticleColorModifier’ that caused crashes on non-PC platforms, e.g., when using Melchior Dahrk’s “Mistify” mod, has been fixed
  - [[#5548](https://gitlab.com/OpenMW/openmw/-/issues/5548)] ‘ClearInfoActor’ script function now removes the correct topic from an actor
  - [[#5739](https://gitlab.com/OpenMW/openmw/-/issues/5739)] Saving and reloading the savegame prior to hitting the ground no longer prevents fall damage
- *by glassmancody.info*
  - [[#5899](https://gitlab.com/OpenMW/openmw/-/issues/5899)] Exiting the game without having closed all modal windows no longer leads to a crash
  - [[#6028](https://gitlab.com/OpenMW/openmw/-/issues/6028)] NIF particle systems now properly inherit the particle count from their ‘NiParticleData’ record which, e.g., solves issues with the “I Lava Good Mesh Replacer” mod
- *by kyleshrader*
  - [[#5588](https://gitlab.com/OpenMW/openmw/-/issues/5588)] Clicking on an empty journal page no longer triggers topic entries to show
- *by madsbuvi*
  - [[#5539](https://gitlab.com/OpenMW/openmw/-/issues/5539)] Resizing of the game window no longer breaks when switching from lower resolution to full-screen resolution
- *by mp3butcher*
  - [[#1952](https://gitlab.com/OpenMW/openmw/-/issues/1952), [#3676](https://gitlab.com/OpenMW/openmw/-/issues/3676)] ‘NiParticleColorModifier’ in NIF files is now properly handled which solves issues regarding particle effects, e.g., smoke and fire
- *by ptmikheev*
  - [[#5557](https://gitlab.com/OpenMW/openmw/-/issues/5557)] Moving diagonally using a controller’s analogue stick no longer results in slower movement speed compared to keyboard input
  - [[#5821](https://gitlab.com/OpenMW/openmw/-/issues/5821)] OpenMW now properly keeps track of NPCs which were added by a mod and moved to another cell, even if the mod’s load-order position is changed
- *by SaintMercury*
  - [[#5680](https://gitlab.com/OpenMW/openmw/-/issues/5680)] Actors now properly aim magic projectiles which, e.g., prevents bull netches from shooting over the player character’s head
- *by Tankinfrank*
  - [[#5800](https://gitlab.com/OpenMW/openmw/-/issues/5800)] Equipping a constant-effect ring no longer unequips a cast-on-use ring which is currently selected in the spell window
- *by wareya*
  - [[#1901](https://gitlab.com/OpenMW/openmw/-/issues/1901)] Actors’ collision behaviour now more closely replicates vanilla Morrowind’s behaviour
  - [[#3137](https://gitlab.com/OpenMW/openmw/-/issues/3137)] Walking into a wall no longer prevents the player character from jumping
  - [[#4247](https://gitlab.com/OpenMW/openmw/-/issues/4247)] Actors can now walk up certain steep stairs thanks to the usage of AABB (“axis-aligned bounding box”) collision shapes
  - [[#4447](https://gitlab.com/OpenMW/openmw/-/issues/4447)] Switching to AABB collision shapes also prevents the player character from looking through certain walls
  - [[#4465](https://gitlab.com/OpenMW/openmw/-/issues/4465)] Overlapping collision shapes no longer cause NPCs to twitch
  - [[#4476](https://gitlab.com/OpenMW/openmw/-/issues/4476)] Player character no longer floats in the air during scenic travel in abot’s “Gondoliers” mod
  - [[#4568](https://gitlab.com/OpenMW/openmw/-/issues/4568)] Actors can no longer push each other out of level boundaries when there are too many of them in one spot
  - [[#5431](https://gitlab.com/OpenMW/openmw/-/issues/5431)] Prevent physics death spirals in scenes with a huge amount of actors
  - [[#5681](https://gitlab.com/OpenMW/openmw/-/issues/5681)] Player characters now properly collide with wooden bridges instead of getting stuck or passing through them

**Editor Bug Fixes:**

- *by akortunov*
  - [[#1662](https://gitlab.com/OpenMW/openmw/-/issues/1662)] OpenMW-CS no longer crashes if there are non-ASCII characters in a file path or in a configuration path
- *by Atahualpa*
  - [[#5473](https://gitlab.com/OpenMW/openmw/-/issues/5473)] Cell borders are now properly redrawn when undoing/redoing changes made to the terrain
  - [[#6022](https://gitlab.com/OpenMW/openmw/-/issues/6022)] Terrain selection grid is now properly redrawn when undoing/redoing changes made to the terrain
  - [[#6023](https://gitlab.com/OpenMW/openmw/-/issues/6023)] Objects no longer block terrain selection in ‘terrain land editing’ mode
  - [[#6035](https://gitlab.com/OpenMW/openmw/-/issues/6035)] Circle brush no longer selects terrain vertices outside its perimeter
  - [[#6036](https://gitlab.com/OpenMW/openmw/-/issues/6036)] Brushes no longer ignore vertices at NE and SW corners of a cell
- *by Capostrophic*
  - [[#5400](https://gitlab.com/OpenMW/openmw/-/issues/5400)] Verifier no longer checks for alleged ‘race’ entries in non-skin body parts
  - [[#5731](https://gitlab.com/OpenMW/openmw/-/issues/5731)] Skirts worn by NPCs are now properly displayed in 3D view
- *by unelsson*
  - [[#4357](https://gitlab.com/OpenMW/openmw/-/issues/4357)] Sorting in ‘Journal Infos’ and ‘Topic Infos’ tables is now disabled; you may adjust the order of records manually
  - [[#4363](https://gitlab.com/OpenMW/openmw/-/issues/4363)] Clone function for ‘Journal Infos’ and ‘Topic Infos’ records now allows you to edit the new record’s ‘ID’ respectively
  - [[#5675](https://gitlab.com/OpenMW/openmw/-/issues/5675)] Object instances are now loaded and saved with the correct master index to prevent overwritten objects from appearing in game
  - [[#5703](https://gitlab.com/OpenMW/openmw/-/issues/5703)] OpenMW-CS will no longer flicker and crash on XFCE desktop environments
  - [[#5713](https://gitlab.com/OpenMW/openmw/-/issues/5713)] OpenMW-CS now properly renders ‘Collada’ models
  - [[#6235](https://gitlab.com/OpenMW/openmw/-/issues/6235)] OpenMW-CS no longer crashes when changes to the terrain height are undone and then redone
- *by Yoae*
  - [[#5384](https://gitlab.com/OpenMW/openmw/-/issues/5384)] Deleting an instance in 3D view now correctly updates all active 3D views

**Miscellaneous:**

- *by akortunov*
  - [[#5026](https://gitlab.com/OpenMW/openmw/-/issues/5026)] Prevent data races with ‘rain intensity uniforms’
  - [[#5480](https://gitlab.com/OpenMW/openmw/-/issues/5480)] Drop Qt4 support in favour of Qt 5.12 or later
- *by AnyOldName3*
  - [[#4765](https://gitlab.com/OpenMW/openmw/-/issues/4765)] Avoid binding an OSG array from multiple threads in OpenMW’s ‘ChunkManager’
  - [[#5551](https://gitlab.com/OpenMW/openmw/-/issues/5551)] Windows: OpenMW no longer forces a reboot during installation
  - [[#5904](https://gitlab.com/OpenMW/openmw/-/issues/5904)] Mesa: Fixed OpenSceneGraph issue regarding RTT method (“render-to-texture”)
- *by CedricMocquillon*
  - [[#5520](https://gitlab.com/OpenMW/openmw/-/issues/5520)] Improved handling of combo box ‘Start default character at’ in the launcher to avoid warning messages and possible memory leaks
- *by fr3dz10*
  - [[#5980](https://gitlab.com/OpenMW/openmw/-/issues/5980)] Check for and enforce double-precision ‘Bullet’ during configuration *[addition by akortunov]*
- *by glebm*
  - [[#5807](https://gitlab.com/OpenMW/openmw/-/issues/5807)] Fixed crash on ARM machines caused by incorrect handling of frame allocation in ‘osg-ffmpeg-videoplayer’
  - [[#5897](https://gitlab.com/OpenMW/openmw/-/issues/5897)] Updated ‘MyGUI’ to prevent errors when dynamically linking it

[Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7588)
