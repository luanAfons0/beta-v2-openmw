---
title: "OpenMW Spotlight: Turning the Pages"
date: 2020-06-26T16:21:51+02:00
lastmod: 2024-01-05T16:37:17Z
slug: "openmw-spotlight-turning-the-pages"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5436
---
Hello again,

we hope you are all having a pleasant time with the new release! While you’re busy killing vicious cliff racers, our team is busy with further improving the engine and the editor.

There is one particular feature that recently got merged that we want to bring to your attention: object paging. What’s that, you ask? Well, object paging is a system developed by bzzt, the man behind the improved distant-land feature introduced in the latest release. This system takes several objects that are close to each other and merges them into a single object. This is done in real time during gameplay and shouldn’t be noticeable to the end user. But we can hear you thinking: why should I care about this? – Because it reduces draw calls! – Okay, and …? – Because draw calls are the main bottleneck if you want to display statics (buildings, rocks, trees, etc.) over a larger distance. – Wait! Are you saying … distant land with distant statics? – [Yes, we are.](https://imgur.com/a/XT4s0DM)

One feature that was developed in the same merge request as object paging is the “active-grid object paging”. It is basically the same feature, but applied to the player’s active cell(s). This means that the system will not only merge objects in distant cells, but also those in the cells your character is located in. This increases performance, especially in draw-heavy areas like cities and towns. Yay!

[2020-05-01 20-53-49](https://streamable.com/t4kots)

Watch “2020-05-01 20-53-49” on Streamable.

There is an issue with this feature as of now however, which is why we decided to set the “active-grid object paging” setting to “false” by default. The issue is that OpenMW still has a hard limit of 8 lights per object, a limitation inherent in the old fixed-function pipeline of Morrowind that OpenMW faithfully supports for legacy reasons. The limitation is sometimes an issue even without object paging, but you don’t generally notice it with vanilla Morrowind’s assets. If you start to merge several objects into a single one however, the limitation really starts to show: Lights will pop up and disappear frequently which simply looks bad. Once the light limit is removed (for which there exists a sizeable work in progress), active-grid object paging will become a lot more interesting.

[2020-05-09 13-37-58](https://streamable.com/3lfx2v)

Watch “2020-05-09 13-37-58” on Streamable.

The feature can now be tested in all freshly baked nightly builds in your neighbourhood. There are still things that need to be addressed in future merge requests. For example, we still don’t have a system to generate lower-detail meshes from high-detail ones to be used in the distance. This isn’t really an issue if you’re mostly using vanilla assets as they are very low in detail for modern standards anyway. For mods that use high-detail assets, however, this might be an issue. Work will continue on this. In any case, please help us out by installing the latest nightly build for your operating system and putting object paging to the acid test!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7014 "Want to leave a comment?")
