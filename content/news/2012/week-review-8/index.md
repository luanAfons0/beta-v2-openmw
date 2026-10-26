---
title: "The week in review"
date: 2012-05-20T19:31:38+02:00
lastmod: 2012-10-12T17:03:53Z
slug: "week-review-8"
categories: ["News"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=922
---
This week’s theme is either *“The Inventory: barter window, inventory, item stacking and tooltips”* or maybe “Thank You **scrawl** and **gus**“. Although inventory and barter windows are not 100% ready they are working and will soon be perfected. Zini has done the backend, and scrawl rely on it to implement visible functionalities: collaboration and teamwork are what makes openmw move forward!

**gus** fixed a bug in collision detection (since his task was stolen by **scrawl** ;) ) which caused invisible barriers under Vivec’s lanterns that blocked player movement.

**zini**

- Various fixes
- More background technical stuff, this time related to magical effects!
- Ho, we’ve never mentioned this in a post, but **zini** is our [BDFL](https://en.wikipedia.org/wiki/Benevolent_Dictator_For_Life). He manages branches and merging them into the master branch, he accepts or refuses patches, and prioritizes feature development, and offers technical advice to developers… **zini** is **The Guardian of OpenMw**. Thanks to him, the code is (mostly) clean and efficient, and the project is moving forward! If you like the project, then you may want to give a quick [thank you](http://openmw.org/forum/viewtopic.php?f=2&t=531) to **zini** for making it possible.

**scrawl**:

- Thanks to **gus’s** preliminary work, you can now drop item on the ground! WOOOOOOO!
- [Drag’n’drop](http://openmw.org/wiki/index.php?title=File:015-5.png) from/to the inventory.
- The inventory [works](http://openmw.org/wiki/index.php?title=File:015-4.png) (also thanks to **gus** too) : Items stacking, tooltips, filtering, …
- Item count selection dialog
- Many gold related features (eg. You can’t sell gold anymore !)
- Implementation of [trading](http://openmw.org/wiki/index.php?title=File:015-6.png) with NPC ( in 3 fuckin’ days !).
- You can now talk with the [mudcrab merchant](http://www.uesp.net/wiki/Morrowind:Mudcrab_Merchant) !
- You can’t put your items in “organic” stuff anymore.
- Max capacity for containers
- You can now see faction and birth-sign in the stat window

**jhooks** and **chris** are still working on animations. They are currently [experimenting](http://openmw.org/forum/viewtopic.php?f=6&t=655&start=60#p6092) with various strategies to get robes and skirts to render correctly through Ogre3d.
