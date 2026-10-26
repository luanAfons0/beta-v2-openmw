---
title: "Week in review"
date: 2013-08-18T21:32:41+02:00
lastmod: 2024-01-05T16:40:35Z
slug: "week-review-65"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=3019
---
Welcome once again!

Another great week. Loads of work being done in many areas, especially by **Chris** on Bullet improvements (but I don’t want to pretend that I understand what he is doing there) and werewolf mechanics. We also have magic effects triggered by traps now, improved alchemy window layout and a couple less bugs. Quite decent progress if you ask me!

However I would like to introduce something different this time: **OpenCS**. It didn’t get enough attention before – that’s for sure.

This [screenshot](http://wstaw.org/m/2013/08/17/zrzut_ekranu6.png "Yes, my desktop") shows an OpenCS instance running on KDE and so follows my KDE color settings – that’s why it is grey, if you don’t like dark color schemes just use a bright one.

But let’s focus on **OpenCS**.

As you can see **OpenCS** currently can be described as windows with tables. You are free to add as many tables in a single window as you may wish (even if a table of this type is already present in the view), change size easily, arrange and even detach the table dock. If you are used to KDE or Qt applications (for instance smplayer) you are probably familiar with this behavior. You can’t group the docks together, though.

As you can see I have two OpenCS windows here, belonging to the very same OpenCS instance. I can spawn as many as I want to. This is an effective solution for multiple screen setups, but on Linux (or BSD, or any X11 system in fact) many window managers can greatly help to use multiple windows even on single screen setup. For instance in any of those you can make use of the virtual desktop feature, place window on top; in some use scripts to affect window behavior, or use gfx effects similar to OSX expo.

Each table contains a set of elements with properties. Some tables are really wide. I use an ancient 4:3 monitor but I still think they will be wide even on a dachshund type computer screen. Don’t worry, there is a solution designed to deal with this issue.

Thanks to **nomadic1** we have have covered referencable record types, and eventually (I hope) we will be able to get an icon for every element in every table.

Besides of tables OpenCS can also show an exterior [map](http://wstaw.org/m/2013/08/17/zrzut_ekranu7.png "Still my desktop.").

As you would expect this is just another dock. You are free to add tables to this window as well, if you want to. In fact you can even add a second map if you think that it makes sense.

**Currently we don’t have a render window but this is yet to come obviously.**

Ah, one more thing. **Scrawl** is experimenting with a different terrain rendering technique that allows for a large viewing distance. We can’t fully utilize this yet due to depth precision issues (and missing distant statics are also somewhat off-putting), so don’t get too hyped –  I’m just posting it because it is **amazingly** cool.  

{{< youtube id="2wnd9EuPJIY" >}}
