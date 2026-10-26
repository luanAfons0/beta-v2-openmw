---
title: "This. Is. The. Title."
date: 2012-02-12T15:26:34+01:00
lastmod: 2012-10-13T09:13:54Z
slug: "202"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=202
---
About openmw 0.12.0 (almost) straight from zini (The Coder Supreme):

**Regression #1** (back and okay button in race window): The bug went away after the window manager refactoring. Slightly suboptimal, since we still don’t know what has caused it, but since the code that caused the bug is probably not in the codebase anymore, this is acceptable as a fix.  
Can’t get it into 0.12.0 though (merging it into 0.13.0 was nightmarish enough). It looks like we will have an unfixed regression for this release.

**Regression #2:** (Crash when activating collisions after cell change) Very suspicious workaround. Shouldn’t work, but it does. Not entirely happy, but it seems we have no other choice than going along with it for now.

**Regression #3:** ( Running with –new-game will teleport to a strange location when leaving the initial location (imperial prison ship) Fixed. A slight oversight on my part during my work on cell handling; with disastrous results though.

**Regression #4:** (After exiting an interior and re-entering it light coming from light type objects is not rendered.) Fixed recently.

We also have 3 new (non critical) regressions:

- ASCII 16 character added to console on it’s activation on Mac OS X
- Case Folding fails with music files
- Taking screenshot causes crash when running installed (already fixed).

Most of the configuration system is finished now too thanks to **lgro**. Since all major problems are now fixed I can say: **The last commits before openmw 0.12.0!** (?)

Besides:  
**Jhooks1** says that He might found **the solution for the problem with falling trough floor**. That would be awesome but needs a little more insight.

**GUS** is still on dialogue GUI task. **addTopic script instruction now works as well as greetings**. Still much to do, like executing scripts in dialogs.

**BrotherBrick** created **wikipage with instructions about testing for novice**, I hope that It can be filled with more info soon. Here is the link: [http://openmw.org/wiki/index.php?title=Testing](http://openmw.org/wiki/index.php?title=Testing "Testing on wiki")

PS  
Did you visited [http://crystalscrolls.sourceforge.net](http://crystalscrolls.sourceforge.net "CrystalScrolls") webpage? There is a new version released!
