---
title: "Long time no see!"
date: 2019-06-20T14:26:19+02:00
lastmod: 2024-01-05T16:38:28Z
slug: "long-time-no-see"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5326
---
Hello everyone and thanks for stopping by.

Apologies for the long silence since the last release. That silence does not mean nothing has happened, however – quite the contrary actually! The upcoming OpenMW version 0.46.0 is already a huge release with many major differences compared to the current stable OpenMW release of 0.45.0. This news post is going to briefly sum up everything that has been going on behind the scenes. Quite a challenge when there is so much to talk about!

First off, akortunov got a really nice feature merged into OpenMW a while ago: native graphic herbalism. He had already finished a first draft of that feature when Stuporstar and Greatness7 started working on their [MWSE-Lua mod](https://www.nexusmods.com/morrowind/mods/46599), and they eventually decided to work together to make sure the meshes would be compatible between Morrowind+MWSE-Lua and OpenMW. When the release of the mod got closer, akortunov focused on finishing the pull request for OpenMW. As a result, players have been enjoying graphic herbalism without any performance penalties for quite a while now. Great work, guys!

Capostrophic has been working on many things, big and small, but among the more important things is improved compatibility with [Sotha Sil Expanded](https://www.nexusmods.com/morrowind/mods/42347). Of course, more testing is always appreciated to squash the last remaining bugs. Capo has also fixed another mod-related issue in that teleportation caused problems with companion mods, such as [Julan](https://bethesda.net/community/topic/48658/julan-ashlander-companion-2-1). A big thank you to our coding champion!

Improving gamepad support has always been tricky for a development team consisting of zero gamepad users. But thankfully, Perry Hugh, a new face in our corner of GitLab, came along and added – among other things – several great improvements to the joystick movement. You can now lean back on your sofa and enjoy proper analogue-stick movement in OpenMW.

Last time, we mentioned that Bzzt had included some cool optimisations in a huge merge request on GitLab. *Most* of these have now been merged with the help of Capostrophic and akortunov who split the – quite large – merge request into smaller pieces for easier review. This has resulted in improved performance, lower memory usage, and a better visual look of the distant-land feature. This is not the end, however, as Bzzt has some more aces up his sleeve on GitLab. We will see what improvements can be squeezed out of this guy in the future.

A guy we haven’t talked about before in a news post is Stomy. He came to our forums a while ago, presenting some interesting long-term ideas he wanted to develop for the engine. But while it is way too early to talk about those, he also has some other interesting merge requests in the pipeline. The most important ones are optional head-bobbing and a radial viewing distance, which uses a clipping circle instead of a clipping plane to avoid things popping up when looking around, both of which will add a more modern feeling to the game.

But what about TES3MP? Well, one interesting thing is that since TES3MP already supports Lua scripting, the user Johnnyhostile (the man behind www.modding-openmw.com) was able to start [porting the mod Natural Character Growth and Decay to Lua](https://forum.openmw.org/viewtopic.php?f=45&t=6026) in order to make it compatible with TES3MP!

Let’s leave it at that and talk about other recent and future changes in a later news post. Until next time, and thanks for reading.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=6031 "Want to leave a comment?")
