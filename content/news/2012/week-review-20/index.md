---
title: "The week in review"
date: 2012-09-11T00:45:39+02:00
lastmod: 2012-10-11T15:11:12Z
slug: "week-review-20"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1758
---
Welcome again, here’s the news report.

Jhooks1 was so nice to describe what He is up to do. Great, since I’m actually ignorant in all technical related topics and in addition to this quite lazy so let’s just quote it:

> I am still working on the NPC/creature correct collision shapes task.
>
> I had the task done, but I decided instead of scrapping the PhysicActor class that I would redesign it (too much valuable code). The new class is going to incorporate the Rigid Bodies (based on box shapes) and use pmove to allow the creature/NPC to collide with the world around it. Right now only the player gets to collide with the world through pmove, so this work is essential to having NPCs and creatures running about.
>
> This is a lot to take in and change around though (and it seems like 3x the work of the original task I set out to do). I hope I can get a solution up and running soon.

In addition to this the fix, jhooks1’s work to smooth out the animations shortly before the 0.17.0 was finally merged to the master branch.

Zini worked on actiontarget branch to implement target handling in action class — solving issue number 370 on our bugtracker.

Eli2 made quite a lot commits for the editor. These mostly regard filters, since that’s was the subject of discussions on the forum recently. No surprise since it’s a crucial element of the whole concept.

Hrnchamd’s doing excellent work on finding and documenting internal Morrowind gameplay mechanics. For example, he nailed down the formula for training costs so Dgdiniz was able to progress with his task. The following picture shows OpenMW on the left and Vanilla Morrowind on the right.

[Pretty picture.](http://i649.photobucket.com/albums/uu212/dgdiniz3/trainingWindow.jpg "Cool!")

Scrawl pointed out that the scroll bar is not needed in OpenMW, because there is no need to scroll such short list.

Finally, I just learned about a feature OpenMW has over vanilla Morrowind. In Morrowind you cannot teleport the player to a cell while using variables as coordinates. This limitation is just painful! Although modders were able to bypass it partially thanks to script extenders and some really fancy tricks like those used in the tent mods but those ugly hacks tend to deliver a lot of problems. OpenMW does not have this limitation, so teleport away!
