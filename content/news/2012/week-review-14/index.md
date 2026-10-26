---
title: "The Week in Review"
date: 2012-07-10T21:12:29+02:00
lastmod: 2012-10-11T19:00:59Z
slug: "week-review-14"
categories: ["Infrastructure", "News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1422
---
As you probably noticed, the site was down. This was due to a sudden and sharp increase in page views that occurred when OpenMW made the news aggregating website slashdot.org. A veritable horde of readers clicked on the story, passed to our site, and soon all I could do as an admin was log into the server and watch with shock and awe as the heart of apache processes was torn out. Normally we get 10,000 page views a month, and because of slashdot we had 25,000 in one day.

However, we benefited as many new developers and contributors have discovered us and are now joining. So we’d like to say, Thank You Slashdot! And despite the setback of the site being down, the development team continued their work as usual.

**Zini** was working on the refactoring task when he found many unnecessary “includes” in the source code. Don’t worry readers about what includes are, all you need to know is that many were unnecessary and that translated to slow downs in compile times. Many users complain that it takes forever to compile and build OpenMW and while users could perhaps view compiling OpenMW as exercise in patience, they won’t have to as removing these “includes” improved build times by nearly half.

He also worked on proper skill development implementation. As of now, the only skill that can be seen in game is Alchemy (and even it’s not finished), but that will soon change.

**Scrawl** has been tinkering with shaders. Interestingly, he found that using GLSL shaders caused build time improvements twenty-one times. Since the number and complexity of shaders OpenMW uses can be described as “modest”, the impact on the total compile time is negligible, but it’s still intriguing.

**jhooks1** is still working with animations.

Figuring out Morrowind’s formulas has finally gained momentum. **Myckel** is bravely working on alchemy, and he has a couple new colleagues on the forums which include **Epsilon**. **Epsilon** is developing scripts to speed up the testing phase exponentially. It’s great work and we welcome them to the team.
