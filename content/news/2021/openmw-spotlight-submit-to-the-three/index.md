---
title: "OpenMW Spotlight: Submit to the three…"
date: 2021-03-05T10:54:57+01:00
lastmod: 2024-01-05T16:37:32Z
slug: "openmw-spotlight-submit-to-the-three"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5495
---
Hello everyone and sorry for the lack of updates lately.

The lack of updates has nothing to do with lack of development. It’s been quite the contrary; a lot has happened since last time. Blame me, Lysol, for the silence.

While there are a ton of things we *could* talk about in this post, you’ll have to wait until the upcoming 0.47.0 release and the included change log for most of that. Instead, let us talk about three major features: Lua, groundcover and "The Enlightenment".

## 1\. Lua scripting

As we’ve discussed already before, the plan is for OpenMW and TES3MP to eventually merge into one project. This means that OpenMW will require a scripting system that is compatible with, and benefits, both projects.

For quite a while now, TES3MP has been using a server-side scripting system that uses the Lua scripting language. The consensus has for the most part been to continue upon this foundation and implement both a single- and multiplayer friendly Lua-based scripting system for OpenMW. A system that will give massive power to modders making mods for both singleplayer and multiplayer gameplay. Discussions have come and gone regarding the subject, but there was never any real work done.

Our productive developer Petr Mikheev (ptmikheev) therefore decided to take the matters in his own hands. Petr and David C, the mind behind TES3MP’s scripting system, discussed the matter and have sketched out a [plan](http://forum.openmw.org/viewtopic.php?f=6&t=7149) for the ideal scripting system for our needs. It resulted in this [merge request](https://gitlab.com/OpenMW/openmw/-/merge_requests/430) which is frequently updated by Petr. Although it is still in early stages (i.e. do not expect it for the next release), people can experiment with basic scripts already to see how it works.

Getting this implemented is crucial for us to be able to get on with the de-hardcoding phase planned once OpenMW 1.0.0 has been released. It is also crucial to be able to make OpenMW the great moddable engine we want it to be. All the impressive mods made for vanilla Morrowind’s MWSE-Lua system gives us a glimpse of what we could see in the future for OpenMW.

## 2\. Groundcover

Ever since OpenMW implemented object paging, we have been enjoying long viewing distances with distant objects and playable performance. Some have even been able to run grass mods without much issue. With emphasis on the word "some". Object paging was not implemented with groundcover mods in mind, even though it might provide increased performance for them too.

Enter instancing. Our veteran Andrei Kortunov (akortunov) has, together with Master of Shadows Chris Djali (AnyOldName3), been working on supporting groundcover through a system much more suitable for it. You see, supporting grass and other groundcover require some special tweaking before you can get acceptable performance with it. Otherwise, each and every piece of grass will have to be sent to the CPU before the GPU can render it, and this takes a very long time. This is called a "draw call". Draw calls are slow. So slow that you don’t want too many of them in one scene. Reducing draw calls was actually the main reason we implemented Active Grid Object Paging, which merges many smaller objects into fewer larger objects (thus reducing draw calls), not only in the distance, but also in the active cell. Read more about Object Paging and Active Grid Object Paging [here](/news/2020/openmw-spotlight-turning-the-pages).

So while Object Paging worked out great for buildings and similar, grass can get handled better, especially since you want grass to sway with the wind and to get bent under your feet when you step on it. The new groundcover system enables grass and other groundcover with better performance and with full support for animation and reaction to you stepping on it.

So far, work has been focused on supporting legacy mods, previously made for MGE XE. This puts some limitations on what can be done. In the future, we plan to implement an even better system to handle groundcover. Such a system will, however, not be compatible with current mods made for MGE XE.

Try the groundcover system today in an unreleased build of OpenMW, or wait for the next release. You can read on how to enable groundcover mods [here](https://openmw.readthedocs.io/en/latest/reference/modding/settings/groundcover.html) and [here](https://openmw.readthedocs.io/en/latest/reference/modding/extended.html#groundcover-support).

## 3\. The Enlightenment

Did you know that OpenMW only supports up to eight lights for each object? You might have noticed lights turning on and off while walking around in a few specific places in Morrowind. If you use Active Grid Object Paging, you might have noticed this quite a lot.

The issue lies with our support for old style Fixed Function Pipeline (FFP). Every object in the game can only receive up to eight light sources at the same time. This was actually the case with vanilla Morrowind too, but the game is designed in a way that you almost never see it. To be fair, all Bethesda games until Fallout 4 had very limited maximum lights per object and worked around the issue in the design of the game. However, the way Morrowind is designed, with many small objects everywhere, is also very inefficient since it creates a lot of draw calls. And while draw calls are reduced if we merge many of the smaller objects into fewer larger object with Active Grid Object Paging, we will instead get issues with lights, since the light limit per object will get reached much earlier. There have been attempts at solving this issue previously, but it proved to be quite the tricky task.

This is where Cody Glassman (wazabear/wazabear_notabear) comes in. You might have come across him earlier from his [fork of OpenMW](https://www.nexusmods.com/morrowind/mods/47806) that implements more advanced UI features, which by the way can get re-implemented in a much lighter more mod-like way once Lua is merged. Anyway, Cody decided to have a look at this light limit issue, which resulted in [this](https://gitlab.com/OpenMW/openmw/-/merge_requests/618) merge request. It is not quite finished yet, but he already gave us a sweet example of it working here:

[Watch the video on Streamable](https://streamable.com/hofhxc)

A scene like this would be impossible with the current version of OpenMW. Although getting this crazy with lights is a pretty bad idea in a real-world case, this case at least proves modders will have less issues with lights in the future. End-users will also be able to get the sweet performance increase of Active Grid Object Paging *without* the annoying light pop-in and pop-out issues.

## The next release

Yes, we plan on releasing 0.47.0 in a not too distant future! Stay tuned, we will let you know when it is out.

Until next time, thanks for reading.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7385 "Want to leave a comment?")
