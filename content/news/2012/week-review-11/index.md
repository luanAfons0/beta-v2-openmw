---
title: "Week in Review"
date: 2012-07-22T18:49:08+02:00
lastmod: 2012-10-11T16:55:48Z
slug: "week-review-11"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1411
---
Another week, another post for you, dear readers. This summary includes the most significant changes by our veteran developers, but there are some folks doing important work that is not credited here. So thank you to all our contributors.

Last week, I wrote about the shaders used in terrain rendering. This week **scrawl**, using shaders, reduced the amount of code for terrain implementation by 75%. THREE CHEERS FOR EFFICIENCY!!!

OpenMW employs shaders for our skybox, water, and soft shadows. **Scrawl** has worked on refining the first two, resulting in marked visual improvements over the original Morrowind. The process of refining shaders will continue, so expect many perty pictures and videos. Great work **Scrawl!**

Speaking of great work, **Chris** pushed a large number of code revisions (50!) towards integrating .nif animations into Ogre3d’s animation system. Once complete, this will prove to be a more efficient method for animations and boost OpenMW’s frames per second. It works… to some extent. Currently, animations are lacking integration with the physics system, some meshes (for unknown reasons) are not animated, and other meshes occasionally ( and seemingly randomly) are not animated. However, clothes (including robes) are working, as well as the majority of creatures. We cannot give you an exact date when it will be finished, but what needs to be done to get physics integration working is mostly understood. The other issues are cryptic and it is difficult to tease out their causes.

Meanwhile **Zini**, our fearless leader, finished the magical effects *drain* and *fortify*. Also, the bug in the auto-equip logic was fixed, as well as a few other bugs in various areas. **Zini** also refactored the code for dynamic statistics and merged a lot of branches into the main development branch.

Reverse engineering formulas is going well.  The ingredient eating formula appears close to completion (some things still need to checked and verified) thanks to **Lazaroth**. The acrobatics task is also progressing nicely, **BrotherBrick** is using his powerful server to calculate data points and **Epsilon** is a very dedicated worker, designing formulas to test. It may be finished as early as next week.
