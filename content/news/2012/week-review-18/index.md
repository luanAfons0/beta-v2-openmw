---
title: "The week in review"
date: 2012-08-20T17:34:32+02:00
lastmod: 2024-01-05T16:29:03Z
slug: "week-review-18"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1654
---
Guess what, 0.17.0 is very close to release.

**Zini** completed the mw-refactoring task. This Herculean work improves the readability of the source code for new developers. This week Zini changed his Linux distribution from Ubuntu to Mint, we don’t know if he changed his desktop wallpaper from Ubuntu-orange to Mint-green, but speculation is rampant.

You will be finally able to see your character! The 0.17.0 release  for the finishing touches on player control. This includes the new camera which allows not only “[First Person Perspective](http://en.wikipedia.org/wiki/First-person_perspective)” and “[Third Person Perspective](http://www.giantbomb.com/third-person-perspective/92-464/)” view, but “Vanity Mode” will turn on automatically when the player is idle. I couldn’t find a nice link about vanity mode, but it allows you to (or the game to automatically) rotate the camera while moving or stationary. You have **\_greye** to thank for this awesome new feature!

That’s all for 0.17.0. Let’s move on to the OpenMW Example Suite.

OpenMW is getting close to playable and the OpenMW team needs the help of modding community to creating the **OpenMW Example Suite**. This suite will allow anyone, including those who don’t not yet own Morrowind, to test OpenMW. Therefore it cannot contain any Bethesda/ZeniMax owned art assets. We believe this suite will boost our user and developer base, resulting in people purchasing Morrowind and putting OpenMW to the test of running the original game. Our engine will provide greater modding capabilities to the mod community once completed, bring native support to Linux and Mac OS X, help out the project will be mutually beneficial.

***Location and Setting***  
The suite will take place on a small island with a fishing village. There will be a dungeon and a crypt (which is already built, and has been the entirety of this project up till now). In addition, there will be a few wilderness areas like a pine forest and some small fields. The player will be a resident of the tiny island village who goes off to kill some monster, fetch some pretty object from the dungeon, or escort someone from the crypt.

***Purpose***  
It’s called OpenMW Example Suite as opposed to OpenMW Tech Demo, because we don’t want a jumble of unrelated rooms strung together to display all of the engine’s abilities, like some tech demoes. Instead, it will be a micro-game that, aside from exhibiting the engine’s functionalities, is aesthetically pleasing and coherent. Through our small island, with its basic kill and fetch quests, we’ll be able to display the functionality of a tech demo. Additional quests and dialogue can be implemented until we have exhausted the feature showcase. Once each feature has been demonstrated at least once, we can consider the OpenMW Example Suite complete, with any future additions to it as icing on the cake.

***Getting Involved***  
If you are willing to help, please visit [this forum thread](http://forum.openmw.org/viewforum.php?f=25) and acquaint yourself with the task, what’s already done, who can be of help to you. Thanks for your time. Cheers to keeping Morrowind alive! Below is a description of the tasks that need to be completed.

Up next is news on 0.18.0, which has already begun development.

**Scrawl** is making progress on the GUI and input system rewrite. We now have mouse sensitivity sliders: one for the GUI mode and one for the game itself (there is only one, but x and y axis can be adjusted through editing a file). Warning! The GUI sensitivity is updated in real time (meaning it does not need OpenMW to restart) so think twice before pulling slider to the very far left…

**jhooks1’s** work enables the use of set angle instructions for NPCs. He also fixed the jittery animations bug in 0.17.0 making them smooth as butter. You’ll have to wait until 0.18.0 to try it out.

**Eli2’s** work on editor has past the experimental phase. We want more developers to get involved, because it’s currently a one man project, but there is no need to rush… yet. We won’t really need the editor before OpenMW 1.0.0, because it’s only at that point that we will add new script instructions. However, a better designed editor would be an invaluable tool to the modding community even now

And thanks to all the users who reported bugs. Your help is invaluable to us making a superior and stable engine. If you find something wonky in OpenMW check our bugtracker to see if it’s been reported. If it hasn’t, either register on our bug tracker or let us know on the forum that something is going wrong.
