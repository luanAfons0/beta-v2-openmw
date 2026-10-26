---
title: "Distant terrain"
date: 2017-03-15T15:19:21+01:00
lastmod: 2024-01-05T16:44:17Z
slug: "distant-terrain"
categories: ["News"]
authors: ["DestinedToDie"]
guid: https://openmw.org/?p=4921
---
[![](https://openmw.org/wp-content/uploads/2017/03/budmNsK-300x169.jpg)](https://openmw.org/wp-content/uploads/2017/03/budmNsK.jpg)

What’s this? I can see the Ghostfence all the way from Ald-Ruhn and my fps is above 10. This is OpenMW and not MGE XE, right?

This is OpenMW alright and [what you’re seeing](http://i.imgur.com/IuRDXv7.jpg) is made possible by the newest addition from scrawl – distant terrain. This new feature is available in the latest OpenMW commit and if you’re on windows, you can download it from [Ace’s nightly builds](https://forum.openmw.org/viewtopic.php?f=20&t=1808#p18839) to try it out yourself.

So what does it do? In short, it [simplifies the land mesh](http://i.imgur.com/YklBk3E.jpg), nothing else. It doesn’t touch on scripts, NPCs and statics, but having simplified land certainly lightens the workload to a point where we can have some wiggle room with our view distance. Distant statics is another feature that will have to be implemented at a later stage.

You may have noticed that I’ve taken use of this in some of the screenshots and loaded enough statics to create the illusion that there are objects [as far as the eye can see](http://i.imgur.com/HLZzgDp.jpg). You can only spot [empty land](http://i.imgur.com/pAg1oKv.jpg) if I purposefully look at something very distant.

Finally, here is how you set this up:

```
[Camera]
# Determines how much land is rendered. Add another 6 or 66 to it.
viewing distance = 6666.0
```

```
[Terrain]
# The on-switch to distant terrain. Set this to True.
distant terrain = True
```

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=4221 "Want to leave a comment?")
