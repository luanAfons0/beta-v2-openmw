---
title: "Interview with CMAugust"
date: 2024-05-12T10:46:13+02:00
lastmod: 2025-04-21T13:23:23Z
slug: "interview-with-cmaugust"
categories: ["Interview"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=6584
---
## Good morning, who are you, and have you always been a month?

Only for a little while. My previous moniker was CMTuesday, or was it?

## When did you join the project and why?

I first heard of OpenMW in late 2015, around the release of [0.37.0](/news/2015/openmw-0-37-released). The MrOpenMW Release Commentaries hadn’t caught up by that point, but the FAQ video successfully piqued my interest in a clean-room reverse engineered engine that could run Morrowind better than the original. I had bounced off of Morrowind in my first attempts to play it, but after the release of Skyrim ignited my interest in The Elder Scrolls like never before, I was ready to try it again in this new engine. And believe it or not, that was the first time I finished Morrowind’s main quest.

It was already a very playable experience in OpenMW even then, but there were some minor visual and UI hiccups along the way – these I documented and submitted as bug reports, which were promptly fixed by scrawl, who was still working like a machine after moving the engine from [OGRE](https://www.ogre3d.org/) to [OSG](https://openscenegraph.github.io/openscenegraph.io/) for 0.37.0. Seeing that level of responsiveness encouraged me, and thanks to the ease of being able to download a fixed build the next day, the testing process was in a sense more satisfying than if I had just played the game and moved on. Of course I played some more, and noticed some more oddities, and opened more issues on the tracker. And I basically never stopped.

## I’ve been told you’re part of the “OpenMW Public Relations And Assorted Propaganda cabal”, is that so?

It’s news to me, but maybe I haven’t been let in on the joke! First and foremost my role in OpenMW has been as a tester, giving feedback to identify any bugs, issues, or features that will help to improve the user experience. I generally interact more within the OpenMW team than outside it – or to put it another way, if I’m pestering anyone, it’s the devs themselves. Of course, I do regularly wade over to the various Discord servers such as [Morrowind Modding Community](https://discord.me/mwmods) as well as the big projects like [Tamriel Rebuilt](https://www.tamriel-rebuilt.org/) to see what’s being worked on there, and occasionally I put in my two cents when certain topics like rendering performance are being discussed. That topic comes up fairly often with a game as CPU-intensive as Morrowind, and mods are constantly hitting that performance ceiling. I don’t care to do any preaching or propaganda for more users to pick up OpenMW, because as far as I’m concerned the engine speaks for itself with each new version that’s released. It’s good enough for me to know that the OpenMW team itself is in great shape, with a [community Discord server](https://discord.gg/YegsVV3aRb) that’s friendly and focused on the business at hand.

<!--more-->

## Out of all your time playing OpenMW and looking for bugs, which issues have been the most satisfying to see resolved?

For me it probably has to be the visual side of things, as in rendering. For a long time particles weren’t lit correctly, at least according to how Morrowind originally rendered them. Particle effects are usually the thing that brings the most “pizazz” to any game, and Morrowind’s effects aren’t great to begin with, so it irked me that they looked a bit worse in certain lighting conditions. I was also bothered by the light rendering in general, since while OpenMW faithfully replicated Morrowind’s fixed function lighting, the lighting in Morrowind is just hideous. Quite apart from the infamous 8 lights limit, the attenuation model used was so whack[^1] that it produced lighting seams and unsightly blinking everywhere you looked. Cleaning all this stuff up and replacing it with something better was not for the faint of heart, requiring knowledge of not just rendering but the many rules and quirks of OSG and OpenMW engine itself, and there was more than one attempt by different developers over the years with several false starts. To my eternal gratitude, all of this was finally resolved by wazabear in 0.47.0 and 0.48.0, with some further tweaks by Capo and wareya to end up in 0.49.0, and all with such finesse that OpenMW now has a direct upgrade path to clustered shading[^2] at a future date.

## How come you know literally everything about OpenMW graphics even though you never wrote a single line of its code?

“Talk is cheap. Ask questions. You don’t ask, you never learn.”

When I notice something about Morrowind that looks broken, or runs slow, or is simply not as pretty as other games, I ask why. The OpenMW team is after all stuffed with people knowledgeable about such things, and more often than not a guru like AnyOldName3 or wazabear will explain it to me. Or, on the occasion they can’t recall off the top of their head like a Zen master, they might do some investigation of their own, in which case we both end up learning something.

Moreover, one of the nice things about identifying problems for open development is that you get to see the solutions. I read every issue and merge request that comes through on the tracker at least once, which usually conveys the gist of what was wrong and what was changed even if I don’t understand a lick of code. I also read each message that comes through the Discord, and each new post on the OpenMW forum before that. To sum it up, eventually some of that knowledge soaks through. But I certainly don’t know it all, and any day can bring new surprises.

## Has OpenMW lived up to what you expected when you first discovered the project so far?

Looking back, I’d say OpenMW has nearly fulfilled all my original hopes from when it first caught my attention. At that time there was no distant land, object paging, groundcover, shadows, fancy shaders… and while all the Morrowind essentials were more or less in its place, not all the thousands of little pieces that make up the game fit quite right. Things are much further along today. OpenMW has reached parity with vanilla Morrowind in nearly every conceivable way, and for a stickler like me, that’s saying something. Out of all those original expectations, the only thing that still falls short is the dehardcoding of all relevant systems, and that is now well underway with the Lua API. But that’s not the end of the story, because completing the various features doesn’t simply close chapters of the OpenMW book – it opens new ones.

## What’s the current or next big thing you’re hyped about?

Bindless textures[^3] will be a huge deal if it lands, and because one is related to the other, clustered shading\* is likely to come with it. Aside from the advent of Vulkan, this is likely to be the biggest leap in rendering performance OpenMW will ever see. When that happens, there is suddenly scope for huge (and expensive) leaps in visual fidelity such as point light shadows. In addition, we could soon have a native physically based rendering path[^4] and support for its materials to go with it. Altogether, there’s a lot to be excited about in OpenMW’s future.

## Any favourite mods?

When I’m not testing stuff, I run a fairly light setup, mostly related to fixes like Morrowind Optimization Patch and Patch for Purists. I think my favorite mods haven’t been invented yet. If I had to describe it, I think I’m most inclined towards mods that provide glimpses of a Morrowind that is less clumsy and more refined in every respect, polished and fun from end to end.

## If you could change one thing about OpenMW, what would it be?

Giving it the power to dispense good luck and motivation to its many talented developers, so it can be developed still further.

[^1]: Morrowind’s whack attenuation model: CMAugust refers to Morrowind’s suboptimal use of the traditional lighting calculations. Unlike in most modern games and later Bethesda games, Morrowind’s light sources fade according to inverse-linear law rather than according to the physically accurate [inverse-square law](https://en.wikipedia.org/wiki/Inverse-square_law) which means that it can take a while for the produced lighting to “disappear”. Due to Morrowind’s low light source limit this often results in it getting cut off prematurely. In OpenMW’s shader lighting, the used formula is tweaked to let lights fade earlier, preventing most apparent instances of lighting seams and pop-in. This does mean the game becomes darker overall. In 0.49.0, shader lighting will be further adjusted to minimize the resulting differences.

[^2]: Clustered shading: another shader pipeline technique where light sources are bound to small segments of the screen (clusters) rather than objects. It allows to significantly increase the light source limit without running into the act’s usual performance penalties.

[^3]: Bindless textures: [a shader pipeline technique](https://www.khronos.org/opengl/wiki/Bindless_Texture) that makes it possible to use textures without binding them to the scene. This allows to significantly reduce the number of draw calls and thus the CPU load, similar to atlasing but avoiding its usual drawbacks.

[^4]: Physically based rendering (PBR): [the rendering approach](https://en.wikipedia.org/wiki/Physically_based_rendering) often employed in modern video games in which texturing defines the object’s optic properties in a standardised way consistent with real physics.
