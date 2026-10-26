---
title: "The week in review"
date: 2012-09-02T19:28:39+02:00
lastmod: 2012-10-11T15:09:58Z
slug: "week-review-19"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1722
---
Have you tried the new version of OpenMW? Did you liked it?

There wasn’t much in terms of shiny new features, but as usual a lot of work on engine basics took place and that paves the way for version 0.18.0. There are a lot of really cool tasks open on the [roadmap](http://bugs.openmw.org/projects/openmw/roadmap), something for everyone. We can implement long awaited features (or prerequisites that are necessary for those features).

If progress remained stable, then we could bring large chunks of gameplay with each new version. The project’s at an amazing point. **Want to implement a new skill?** Go for it. The code is ready. We may need the formulas first, but **Hrnchamd** (famous for making the Morrowind Code Patch) is helping discover them. You can look on wiki page to see what formulas he and those other reverse engineers have figured out.

**Maybe you’d prefer to implement level-up?** Sure get on it, skills (the ones we’ve implemented) can now improve.

**Would you rather implement sleeping and resting?** OK, they are ready to be worked on.

**GUI tasks are often neglected, so maybe take the trainer window or spell buying window tasks?**

We can finally we can support the walking animation. **It “just” needs to be finished first.**

Developers solved a number of smaller issues this week.

For example **Scrawl** fixed many bugs, added the ability to hide GUI elements by pressing F12, and added a new GUI window for quick keys.

**Greye** is our AI specialist, but since we weren’t ready to implement it he worked on other features. This week, **Greye** started to loading AI packages into the engine. We can’t do anything with them yet, but that’s another first step that’s been taken.

**Dgdiniz** is a new developer who recently finished his first task (moved Sounds into Action). It was a typical beginner refactoring task and he behaved like a gentleman on the forums. ;-) **Dgdiniz** praised our clean and readable code. He is not the first person to notice it. This is due in part to **zini’s** endless struggle to refactor and control things like a general in battle. It makes quite a lot of difference!

Now **Dgidiniz** has moved on to working on getting the training window to work. MyGUI does not have the best documentation, but we have some experts in our team that have worked with it before, including **scrawl**, **gus**.

**Zini** currently is merging branches and making sure that everything works as it should. While also solving bugs.

**jhooks1** wants to merge collision shapes into the master branch. Before that can happen the old kinematic controller and actor physics code needs to be removed so he is focusing on making all stairs climbable with the current system.
