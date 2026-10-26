---
title: "OpenMW 0.42.0"
date: 2017-08-02T20:53:56+02:00
lastmod: 2024-01-05T16:23:58Z
slug: "openmw-0-42-0-2"
categories: ["Release"]
authors: ["Vedyimyn"]
guid: https://openmw.org/?p=4990
---
Zespół OpenMW ma zaszczyt ogłosić wydanie wersji 0.42.0! Do pobrania, jak zwykle, na zakładce [Do ściągnięcia](/downloads), dla wszystkich systemów operacyjnych. Przepraszamy za opóźnione wydanie, ale chcieliśmy, by wszystko było możliwie najlepiej uporządkowane. W tej wersji do OpenMW powraca funkcja odległego lądu! DestinedToDie napisał [instrukcję](https://openmw.org/2017/odlegly-lad/) jej uruchamiania w jednym z poprzednich wpisów. Poniżej znajduje się w minimalnym stopniu przetłumaczona lista nowości i poprawek.

Zobacz także filmiki dokumentujące nowe wydania OpenMW i OpenMW-CS, autorstwa czcigodnego Atahualpy

{{< youtube id="YKhfdOxkafo" title="OpenMW 0.42 Release Commentary" >}}

{{< youtube id="exWbXBAJYtY" title="OpenMW-CS 0.42 Release Commentary" >}}

**Znane problemy:**

- cienie nie zostały ponownie zaimplementowane,.
- by móc używać Linuksowych binarek z targz, należy mieć zainstalowane Qt4 i libpng12,.
- na macOS, OpenMW-CS może uruchomić OpenMW tylko, jeśli OpenMW.app i OpenMW-CS.app są w jednym folderze..

**Nowe funkcje:**

- Implemented water sound effects.
- Implemented light particles showing in inventory character preview.
- Implemented magic projectiles emitting light.
- Implemented NiSphericalCollider.
- OpenMW-CS: Implemented “Book Type” combo box replacing “Scroll” check box in Book records.
- OpenMW-CS: Implemented “Blood Type” combo box replacing blood check boxes in NPC and Creature records.
- OpenMW-CS: Implemented “Emitter Type” combo box replacing emitter check boxes in Light records.
- OpenMW-CS: Implemented “Gender” combo box replacing “Female” check box in NPC and Body Part records.
- ess-Importer: Implemented converting mark location.
- ess-Importer: Implemented converting last known exterior cell.

**Poprawki błędów:**

- Falling leaves in Vurt’s tree mods now render correctly.
- Actors now use capsular collision shapes (solves issues with characters getting stuck or floating above the ground).
- Collision handling has been improved (better performance and overall behaviour).
- Collision is now not disabled for actors until their death animation has finished playing.
- Players can no longer climb sheer terrain by jumping and then moving forwards in the air.
- Doors no longer stutter when colliding with the player.
- Dialog boxes now appear in the center of the screen after the window is resized.
- Weapon and spell cycling is now disabled while in GUI mode.
- Weapon and spell cycling can now be bound to a gamepad.
- Gamepad and mouse/keyboard may now be used at the same time.
- Inventory window titles are now centered vertically.
- Changed name tooltips’ behavior on enemies to match vanilla behavior.
- The maximum width of a tooltip is no longer set to a fixed value.
- The drowning widget now more accurately matches the vanilla one.
- Fall height is now reset when the player teleports.
- Changed Slowfall spell effect to better match vanilla behavior while jumping.
- Combat with water creatures now ends when leaving the water.
- AI actors no longer hit unintended targets.
- Changed NPC wander and idle behavior to better match vanilla.
- Fixed some summoned creatures not engaging underwater creatures in combat.
- Enemies now initiate combat with player followers on sight.
- Creatures now auto-equip their shields on creation.
- Changed combat engagement logic to better match vanilla behavior.
- The Command spell effect now brings enemies out of combat.
- Followers now continue to follow after resting and saving and reloading the game.
- Light prioritization on objects now takes the light sources’ intensity into account (fixes issues with light sources popping up).
- Icon shadows no longer persist in GUI windows.
- Disintegrate Armor/Weapon spell effects are no longer bound to the framerate.
- Enchanted arrows now explode when they hit the ground or a static object.
- Fixed a crash that occurred while using a container and the console at the same time.
- Fixed the beginning of NPC speech being cut off on macOS.
- Nodes named “bounding box” are now ignored by the nifloader making corresponding meshes render correctly.
- The correct swish sound is now played for NPC weapon attacks.
- The player now has to pay for their followers when using fast travel.
- Fixed a regression with Dispel; it now is an instant spell effect again.
- Corrected greetings in Antares’ Big Mod.
- The ProjectileManager no longer crashes when a sound ID fails to play or is not found.
- Fixed behavior of Activate and OnActivate commands (fixes freeze when opening “Hammers” container in Aanumuran Reclaimed mod).
- Fixed possible game-breaking exception caused by trying to access NPC stats on a creature.
- Identification papers can now be picked back up after they are dropped.
- Fixed the interpreter to properly handle a reference change caused by an Activate command.
- Changed behavior of stat script commands to better handle stats above 100.
- Fixed gun sounds in Clean Hunter Rifles mod.
- Fixed selling success chance when bartering.
- Fixed objects doubling when loading a save game after editing the used game files.
- Silenced SDL events of types 0x302 and 0x304.
- Fixed a rare crash that occurred on cell loading.
- Activation flags are now reset when an object is copied.
- Removed the possibility to implicitly call GetJournalIndex by simply stating a script ID (solves issues with objects using the same ID as a script in Emma’s Lokken mod).
- Blacklisted some unused scripts from the Bloodmoon expansion pack which relied upon the abovementioned implicit function call.
- Fixed the ResourceHelpers to allow the simultaneous use of forward and backward slashes in a model path.
- Fixed handling of enchantments’ spell effects to correctly display these effects in the GUI.
- OpenMW-CS: New or cloned Body Part records may now use the “.1st” suffix.
- OpenMW-CS: Fixed sorting verification results by Record Type.
- OpenMW-CS: Cloned and added pathgrids are no longer lost after reopening an omwgame file.
- OpenMW-CS: Camera position is now re-centered when changing interior cells via drag & drop.
- OpenMW-CS: Added missing Text field to allow editing a book’s actual text.
- OpenMW-CS: Skill books now show associated skill IDs instead of attribute IDs.

##### Zapraszamy do komentowania [tutaj](https://forum.openmw.org/viewtopic.php?f=38&t=4489).
