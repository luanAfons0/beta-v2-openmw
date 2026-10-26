---
title: "OpenMW 0.41.0 Released!"
date: 2016-12-27T03:58:25+01:00
lastmod: 2017-01-21T07:46:14Z
slug: "openmw-0-41-0-released"
categories: ["Release"]
authors: ["raevol"]
guid: https://openmw.org/?p=4801
---
The OpenMW team is proud to announce the release of version 0.41.0! Grab it from our [Downloads Page](/downloads) for all operating systems. This release brings an assortment of small new features, such as a handful of graphical magical effects, and some new NPC AI behavior. We continue to plod along to a 1.0 release, stay tuned!

Check out the engine release video and the OpenMW-CS release video by the irrepressible Atahualpa:

{{< youtube id="Wntey5M5kvc" title="OpenMW 0.41 Release Commentary" >}}

{{< youtube id="KDlLxs87u4I" title="OpenMW-CS 0.41 Release Commentary" >}}

**Known Issues:**

- Shadows are not re-implemented at this time, as well as distant land
- To use the Linux targz package binaries Qt4 and libpng12 must be installed on your system
- On OSX, OpenMW-CS is able to launch OpenMW only if OpenMW.app and OpenMW-CS.app are siblings
- On OSX, some users may experience the beginning of acted voice clips cut off

**New Features:**

- Implemented zero-weight boots playing light armor boot footsteps
- Implemented playing audio and visual effects for every effect in a spell
- Implemented doubling the size of spell explosions
- Implemented particle textures for spell effects
- Implemented NPCs using opponent’s weapon range to decide whether to dodge
- Implemented dodging for creatures with the “biped” flag
- Implemented drop shadow for items in the menu
- Implemented correct range for “on touch” spells
- Implemented using telekinesis with on touch spells on objects
- Implemented AI Combat: Flee
- Implemented player glow for non-portable lights added to the inventory
- OpenMW-CS: Implemented rotate and scale sub modes for instance editing mode
- OpenMW-CS: Implemented water rendering
- ESS-Importer: Implemented player control flags

**Bug Fixes:**

- Almsivi and Divine intervention now display the correct spell effect
- Instant spell effects now show an effect indicator
- Fixed playback of weapon idle animation to include a part previously omitted
- Stat review window at character creation now shows starting spells, powers, and abilities
- Repair and recharge interfaces no longer cause a performance drop under certain circumstances
- Fullscreen can now be disabled again after enabling it in-game on OSX
- Disabled door markers no longer show up on the map
- Fixed an issue when the equip script instruction is used on an NPC without the item, fixing mods Romance 3.7 and Vampire Embrace
- Banners now show random animations during stormy weather
- Inventory tooltip for zero-weight armor no longer displays weight info
- Idle animations now always loop
- Spark showers near Sotha Sil now appear at the right time
- The type of an NPC’s melee attack (chop, slash, thrust) no longer depends on their movement direction
- Fix for freeze when the cell was changed immediately after dying
- Unalerted slaughterfish in the same cell as the player no longer prevent resting
- Blood effects no longer occur when the hit is resisted
- Todwendy can now be interacted with in the German version of the game
- Fix for crash when opening the journal with missing fonts
- SetInvisible command no longer applies a graphic effect
- Non-hostile NPCs can no longer be disarmed by pickpocketing their weapons
- Hidden inventory items, such as the light source for Trueflame’s light effect, are no longer shown
- Corrected the order in which alembics and retorts are used
- Animation replacer no longer hangs after one animation cycle
- Corrected sounds and skill increases for bound armor and shields
- Corky can now be sold to Drulene Falen
- NPC disposition can no longer be lowered below zero
- NPC autoequip behavior now better matches vanilla
- State of enabled/disabled player controls is now correctly saved
- Moved references are now properly handled in respawning code
- Water ripples are now shown when walking on water
- Argonian NPCs no longer swim like Khajiits
- Spells with the “always succeed” flag can now be deleted from the spellbook
- Bound equipment spells can no longer be recast
- Fixed some objects added by Morrowind Rebirth not properly displaying their texture
- Fixed OSX not being able to find settings-default.cfg
- Fixed dialogue/journal links being unclickable on certain platforms due to undefined behavior
- Attacking with a stacked enchanted thrown weapon no longer reduces the charge of items remaining in that stack
- Fixed an issue with the water surface transparency when viewed from certain angles using non-shader water
- Fixed animation state to be saved upon cell-changing or save & load; fixes several traps as well as the metal doors in Sotha Sil
- “Can’t Cast” message now displayed when water walking is cast from too great of a depth
- Player is now moved out of the water when casting water walking from a shallow enough depth
- Levelled items in merchant inventory are no longer re-added every time the trade window is reopened
- Weather manager now handles weather for regions added by plugins after a save game was created
- Fix to more gracefully handle cases where an object refers to an enchantment ID which does not exist
- Fixed how NPCs react to hostile spell effects being cast on them (for now, see: https://forum.openmw.org/viewtopic.php?f=2&p=43942#p43942)
- Player/NPC skeleton’s bone cache is now cleared when a node is added/removed, fixing a crash that could happen whenever player/NPC equipment is updated
- OpenMW-CS: Globals are now initialized with a valid type
- OpenMW-CS: The nested tables for NPC skills and attributes are now hidden when the auto-calc flag is checked
- OpenMW-CS: Fixed verification for “Not Local” info condition
- OpenMW-CS: Fixed verification for special faction ID “FFFF”
- OpenMW-CS: Changes from omwaddon are now loaded in [New Addon] mode
- OpenMW-CS: Objects moved in interior cells in the scene editor will no longer be teleported outside
- OpenMW-CS: Fixed not being able to find the project file when launching the game
- OpenMW-CS: Deleted instances will no longer reappear
- OpenMW-CS: Using “Extend Selection to Instances” will no longer cause duplicates

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=4037&p=44652#p44652)
