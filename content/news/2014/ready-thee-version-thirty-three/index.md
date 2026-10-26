---
title: "Ready thee for version thirty-three"
date: 2014-10-27T10:37:52+01:00
lastmod: 2024-01-05T16:49:57Z
slug: "ready-thee-version-thirty-three"
categories: ["News"]
authors: ["Okulo"]
guid: https://openmw.org/?p=4044
---
We’re in lockdown for 0.33.0 and that means that a fresh release is imminent. The full changelog will come with the release, and if you have followed the news, you’re already aware of some of the changes, but let’s see what else has been done.

16 features have been completed for this release, 11 of which are for OpenCS. Don’t take this as a sign of things slowing down for the OpenMW engine, though. Non-editor features are few and far between so the vast majority of changes are bugfixes.

Non-biped creatures now properly cast magic. That means that creatures such as the Dremora and the Scrib will now use their full arsenal of spells on you if they deem it preferable.

Users have been reporting some issues with movies not having any sound. This is because the software that OpenMW uses to play these movies, ffmpeg, had some internal changes in recent updates which broke playback. A different way of handling sound has been chosen so that you get to enjoy the videos as they were meant to be enjoyed.

There should be improved compatability with a bunch of mods. BTB made a pack of significant changes to the way Morrowind works, including spells. In past versions, those spells were added to OpenMW’s menagerie, but BTB intended these spells to replace parts of Morrowind’s library. Now OpenMW will properly clean up the list of spells before adding BTB’s magic. A crash that happened when one of the locations of Tamriel Rebuilt would be entered has been resolved. Same goes for an issue that left certain TR cells unnamed, which broke a whole bunch of their quests. These issues should be fixed now.

Work has also started on 0.34.0, but we’ll save that for another time. The 0.33.0 release is imminent, so check back soon and/or run your package manager daily.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=2538 "Want to leave a comment?")
