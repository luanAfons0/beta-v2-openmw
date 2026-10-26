---
title: "The week in review"
date: 2012-08-12T16:26:45+02:00
lastmod: 2012-10-11T17:11:13Z
slug: "week-review-17"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=1624
---
Hi all.

We’re celebrating an anniversary on the site. It was exactly one year ago today, that we moved to our current forums. The forum migration involved moving all the archives from google cache and amazon to the new forum “archive section”, but we had no choice. Thanks go to Lgro, our website admin! You gave OpenMW something essential to its current progress. The old website and forum had been left without any administrator, were invaded by spam bots and suffering from frequent periods of down time. In fact, we still can’t close the old forum properly; it’s still out there somewhere, dark and gloomy. Like the inside of a dead snail’s shell… or the city of Moria. Readers, if you decide to go looking in the old forums… remember not to dig too deep.

Despite the departure of the creator and lead developer of OpenMW, the remaining team members decided not to give up. They started this new website, the new forums, and reorganized the project. And here we are, in what will hopefully prove the most productive year yet for OpenMW. So raise some glasses, “To new life… to our phoenix! Santé! Mazel tov! Prost! Skål! Na zdorovie! Salud! And cheers!”

Speaking of new life, here’s what’s happened since we last talked:

Edmondo, the maintainer of OpenMW for gentoo, fixed a few recent problems that were preventing OpenMW from running on Gentoo (We are once again using submodules). Gentoo users can once again install OpenMW.

There’s been progress on our editor, thanks to Eli2. Auto completion was added and filters can now be imported from files. Lgro also pushed some bugfixes and added support for different types of encoding.

\_greye is halfway finished with the player control task (a rather large task composed of five sub tasks). He’s got movement and turning working, but camera nodes still need to be completed. Right now \_greye is working on fixing bugs related to objects crossing cell borders.

Corristo implemented the correct Ogre main loop for OS X, so Mac’s enjoy the speed of the cursor being freed from the tyranny of FPS.

Gus is working on moving and creating objects.

Scrawl added the basic features of the main menu. It has Return, Options, and Exit buttons.

Jhooks1 got the new ~~capsule~~ box shapes collision method working on creatures.

Zini is working on yet another refactoring task, this time in the mw-subsystem. Refactoring code helps make it more organized, readable, and even efficient.

We are merging all the finished 0.17.0 features and fixes into the main branch of the engine and beginning preparations for our next release. Though thin in terms of new gameplay features, 0.17.0 includes major changes under the hood. For instance, the Shiny shader library makes shader development easier by allowing the same shaders to be run regardless of a user’s choice of the OpenGL or Direct3d rendering subsystems, graphics card, and OS. While, the new animations system that’s now in place improves performance.

If you have been following OpenMW, then you know what a picture like this means.

[Picture](https://dl.dropbox.com/u/2899105/127.png)

Here’s a link to the blog post the picture references that [explains its meaning](https://github.com/blog/39-say-hello-to-the-network-graph-visualizer)

We need a lot of testing this version. You can help out OpenMW by reporting bugs.
