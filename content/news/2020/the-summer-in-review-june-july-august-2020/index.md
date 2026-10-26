---
title: "The Summer in Review: June-July-August 2020"
date: 2020-08-26T14:23:52+02:00
lastmod: 2024-01-05T16:37:37Z
slug: "the-summer-in-review-june-july-august-2020"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5460
---
Hello everyone.

Welcome to a review of the OpenMW developent during the summer of 2020. A very unusual summer period for most of us. Development has been as stable as anytime though, so let’s dig in.

The big thing for the month of June was the merging of Object Paging, covered in the last [“OpenMW Spotlight”](/news/2020/openmw-spotlight-turning-the-pages) post. We will not cover this feature any more today, since we already made an in-depth post about it. Without further ado, allow us to present the goodies!

- 3rd person view has seen [lots of improvements](https://gitlab.com/OpenMW/openmw/-/merge_requests/219) lately, including an “over-the-shoulder”-camera option, thanks to Petr Mikheev. During the last month he has continued to work on this feature, also including a more [modern vanity camera feature](https://gitlab.com/OpenMW/openmw/-/merge_requests/261) which includes an optional Skyrim-style variant. Have a look [here](https://forum.openmw.org/viewtopic.php?f=24&t=6955&start=10#p67964) for some example GIF-files of the 3rd person view improvements!  
    
  ![](https://s7.gifyu.com/images/movement1.gif)
  
- Capostrophic has been bug fixing as usual. He has also implemented some [nice shader fixes](https://github.com/OpenMW/openmw/pull/2901) and some [nif](https://github.com/OpenMW/openmw/pull/2883) [format](https://github.com/OpenMW/openmw/pull/2908) [improvements](https://github.com/OpenMW/openmw/pull/2987).
- akortunov has been bugfixing like crazy, especially during the month of June, and refactored quite a few parts of the codebase. Lately, he has been working on making his old [grass handling](https://github.com/OpenMW/openmw/pull/2665) more relevant by making it support animated grass. Hopefully, it can be made to play well with our new active grid paging feature too.
- elsid has, other than maintaining the AI navigation feature of the engine, been fixing various sound issues. He also has an open pull request which is supposed to make the engine load [sound files in a separate thread](https://github.com/OpenMW/openmw/pull/2928) to improve performance.
- unelsson and psi29a have been working together on making OpenMW support [animations when using the Dae/Collada 3d model format](https://gitlab.com/OpenMW/openmw/-/merge_requests/252). This is a very important task to be done if this engine is ever going to become the FLOSS RPG game engine it strives to be. Psi29a started doing the research on how the feature should be implemented, and nelsson continued his work. Moreover, we should mention that nelsson sent a few pull requests directly to OpenSceneGraph (our dependency used for rendering), to improve Dae/Collada support even more.
- fr3dz10’s old [merge request](https://gitlab.com/OpenMW/openmw/-/merge_requests/126) for color changes in keywords in dialogue window was merged in June. He has also been [experimenting with the physics engine](https://gitlab.com/OpenMW/openmw/-/merge_requests/248), trying to make the physics run in a separate thread instead of the main thread. Really interesting!
- wareya has been working on the movement solver for quite some time, trying to emulate the movement from vanilla Morrowind as much as possible. During the past months, he started doing a [rewrite](https://github.com/OpenMW/openmw/pull/2937) of his older pull request.
- Mads Buvik Sandvei, aka Foal, is working on a *very* interesting feature, namely support for VR. He has shown great progress already. You can follow his progress on his merge request [here](https://gitlab.com/OpenMW/openmw/-/merge_requests/251).
- Assumeru, aka Evil Eye, has been doing some under-the-hood changes to how scripting affects records in saves. This solved [two](https://gitlab.com/OpenMW/openmw/-/issues/2798) [issues](https://gitlab.com/OpenMW/openmw/-/issues/4055) we’ve had for a long time. No longer will you be able to wear Ordinator armor without concequence!

This is just a short review of what has been going on during the summer. There has been a lot more going on of course, but we tried to sum up the more interesting changes.

Thank you for reading, and see you next time!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7086 "Want to leave a comment?")
