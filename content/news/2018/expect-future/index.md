---
title: "What to expect in the future"
date: 2018-09-09T18:55:55+02:00
lastmod: 2024-01-05T16:39:24Z
slug: "expect-future"
categories: ["News"]
authors: ["lysol"]
guid: https://openmw.org/?p=5178
---
Long time no see! Time for some news then.

A lot has happened since 0.44, and 0.45 would be a quite big release already if it were to be released right now.

If you go to our repository and filter out the latest closed issues, you’ll notice something: quite a lot of them were done by Andrei Kortunov (akortunov) and Alexei Dobrohotov (Capostrophic). These guys are working like there’s no tomorrow.

But let’s not forget the other devs. AnyOldName3 is also working his butt off, but with one single, quite big, task; [getting shadows back in the engine again](https://github.com/OpenMW/openmw/pull/1547). The shadows have been in the work for a long time now, so it proved to be a quite difficult task to do. If you build the shadow branch now, however, you’ll see that there is not much left to do until they are ready to be merged. It is hard to estimate when things in open source projects are done ([in a previous news post](/news/2018/solution-ai-problems), there was an estimation that shadows would be done for 0.44… Sorry. As I said, it is hard to estimate stuff!), but with that in mind, it is not unlikely they will be done for the next release, i.e. 0.45. If you wish to support AnyOldName3 with his work on OpenMW and other projects, consider [supporting him on patreon](https://www.patreon.com/AnyOldName3)!

Elsid is still working with the [implementation of navmeshes](https://github.com/OpenMW/openmw/pull/1633) via Recastnavigation, a feature that was also mentioned in a newspost back in March. A few days ago, he implemented a way to update the navmesh when doors are opened or closed. This means the AI will now finally be able to use doors correctly. Fingers crossed for a merged navmesh feature for 0.45!

Capostrophic and akortunov have both got so many pull requests merged lately that I would just spam this post by mentioning all of them. But let’s sum it up a bit:

- 0.45 will get improved battle AI (better weapon and magic priorities and better performance for example) thanks to both akortunov and Capostrophic
- Kortunov has loads of work in progress pull requests to make animations look better. Most are already merged, and when the last of them are, there will be much rejoicing.
- Akortunov implemented proper TTF scaling to the GUI (finally!). We will also get a proper font for the [profiler](https://imgur.com/L1iZI0L)
- He is also implementing Lamoot’s icons in the menus in OpenMW-CS, [which looks great](http://pasteall.org/pic/show.php?id=5e74111e96d612b99254d603f385ad02). Lamoot has worked hard to make more icons and most of the ones needed right now seem to be done.
- A crapton of bugfixes

Aesylwinn has returned for some work on the editor. He has been working lately on [implementing NPC rendering in the editor](https://gitlab.com/OpenMW/openmw/merge_requests/25), a feature that is more or less ready to be merged at the time of writing. Speaking of the editor, unelsson is working on implementing a [land texture selection feature](https://github.com/OpenMW/openmw/pull/1769), to be used with his already implemented land texture editing feature.

Wareya, a long time member on the forums, but a not-so-long time developer, is working on [improving the movement solver](https://github.com/OpenMW/openmw/pull/1794), and once that is done, collisions, like general movement close to walls and the like, will feel much more smooth.

It is also probably time for us to mention the kind of partnership we’ve started with [www.modding-openmw.com](http://www.modding-openmw.com). This website launched a while ago to suggest good mods for OpenMW, and we’ve partnered with the creator to use the site as a database for mod compatibility. Check it out!

And that’s a summary of what’s been going on since last time you heard from us. Stay tuned for 0.45!

Oh, and as always, we are happily accepting your contributions, be it developing or something else. Just join us on the forums and take part in the discussion or send your merge/pull requests on gitlab or github

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=5390 "Want to leave a comment?")
