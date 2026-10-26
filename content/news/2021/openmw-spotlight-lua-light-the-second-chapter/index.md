---
title: "OpenMW Spotlight: Lua & Light, the second chapter"
date: 2021-03-17T16:25:00+01:00
lastmod: 2024-01-05T16:37:25Z
slug: "openmw-spotlight-lua-light-the-second-chapter"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5509
---
As if the last post wasn’t long enough! We need to share some updates regarding Lua and the upcoming lighting improvements. Welcome!

## Lua

Petr Mikheev just reached a major milestone with the upcoming Lua scripting system: The first playable Lua test mod is *live*! Note the word “test” here of course; this is nothing of interest for you guys that just want to have fun and play a great RPG from the early 2000s enhanced with cool mods. But while the mod in itself might not be too exciting, it still proves that things are actually moving forward and that we are getting closer and closer to a world where OpenMW has *greatly* enhanced modding capabilities compared to today. [Here](https://forum.openmw.org/viewtopic.php?f=6&t=7149) is the link to the forum topic, and [here](https://gitlab.com/OpenMW/openmw/-/merge_requests/430) is the one to the merge-request.

## Lighting

In the last post, we talked about how Cody Glassman is working on support for more than 8 lights per object. Well, his merge request has evolved into something even more. As it is right now, the fixed-function math used for Morrowind’s light attenuation, which is faithfully identical in OpenMW, do not actually allow for good attenuation at all. This manifests in light seams, visible popping, and mismatched object lighting, which you may have noticed in previous builds or the original Morrowind engine. With the arrival of Active Grid Object Paging in the upcoming 0.47.0 release, it became clear that a change was needed to squash these issues once and for all. Thanks to under-the-hood changes to lighting and a brand new attenuation formula, all of these problems are cleaned up wonderfully. The lighting should look pretty much the same as you remembered it, but with a level of polish that hasn’t been seen before. As a preview, here are some before and after shots placed side by side for you to compare. We think you’ll agree the OpenMW experience is about to feel even smoother!

- <https://imgsli.com/NDQyODU>

- <https://imgsli.com/NDQyODY>

- <https://imgsli.com/NDQyODg>

- <https://imgsli.com/NDM5NTg>

- <https://imgsli.com/NDQ0OTA>

That’s it for today. Stay safe everyone, and stay tuned for the next release!

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7403 "Want to leave a comment?")
