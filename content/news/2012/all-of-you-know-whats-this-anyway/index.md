---
title: "All of you know what’s this anyway"
date: 2012-02-26T10:34:24+01:00
lastmod: 2012-10-13T08:45:45Z
slug: "all-of-you-know-whats-this-anyway"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=235
---
**The 0.12.0 is near.** Actually only package testing has left, well **unless something goes wrong again**. **Lgro** had a lot of struggle with libboost ─ it worked in different ways depending on version. **Finally solution has been found and to this point It seems that morrowind path finding finally works as it should.**

**Scrawl started to work on skybox** and weather implementations **and soon after got very good results**. So good that actually Zini started to think about **moving skybox to openmw 0.13.0**, even if weather still will be unfinished just because sky looks awesome on its own and most certainly It will be ready on time. I must say that I’m very happy since **We finally can get rid of cealum** that didn’t do what morrowind sky needs to have and is a fps-killer.

Sadly no chance for terrain rendering in 0.13.0. Water+Terrain+Sky would be so awesome, but It won’t happen before 0.14.0.

**Jhooks1** is digging in few places and sometimes findings are ugly. Remember Project Aedra physics? **Ultimately it seems that the problem cannot be solved by simply tuning few values**. It looks like we are about to see a lot of recoding in our physics implementation.

OTOH jhooks1 was also messing with **animations**, and maybe finally **the performance stopper was found**. Needs testing. Meanwhile you can see this [video](http://www.youtube.com/watch?v=lmh_I5_9wIs&feature=youtu.be "video")…

Also it’s worth to mention that another crashing bug was solved. **Heart in the Akulakhan’s Chamber** is different then all other creatures and that proved to be a little nasty. But **it’s fixed** now. **Bravo Jhooks1!**

Dudes on IRC channel (our **IRC channel is on freenode**) say that it’s not advertised enough. Well, ok. So here is just a short compilation of memorable quotes from the channel:

> |werdanith| interesting, sitting on the couch, watching on TV journalists arguing about exactly how !@$!$# we are
>
> |pvdk| gus: never got into that, I did install gentoo though  
> |pvdk| back in the days, 14 years old, me and a friend, printed the whole install guide
>
> |Sir_Herrbatka| anyway  
> |Sir_Herrbatka| Did anybody thought about using their skybox code?  
> |Sir_Herrbatka| It seems to work the same way as morrowind one  
> |pvdk| Sir_Herrbatka: well i thought about it right now  
> |pvdk| i thought: lets steal it!  
> |pvdk| steal their skies!  
> |Sir_Herrbatka| and? ;-)  
> |Sir_Herrbatka| they have a pretty water too  
> |pvdk| nice! let’s steal that too
>
> |raevol| some of my favorite things come from finland though: linux, korpiklaani, vodka…  
> |werdanith| vodka is finnish?  
> |raevol| probably not originally  
> |raevol| but they make good vodka
>
> |Yacoby| it is trivial for the loss of productivy it brings  
> |pvdk| yeah need another vid card for it though  
> |pvdk| haha how so?  
> |Yacoby| I can “work” and watch a film :P
>
> |swick\_| i got skyrim run in wine :)  
> |pvdk| nice!  
> |swick\_| running on lowest settings and in a 800\*500 resolution  
> |pvdk| 800×500  
> |swick\_| did not event know the resolution exists :/
>
> |werdanith| scrawl: gus might know  
> |gus\_| scrawl: 42
>
> |Yacoby| I know a guy who ran arch testing on his server  
> |pvdk| Yacoby: wow…  
> |pvdk| why?  
> |Yacoby| for the lols.  
> |Yacoby| it was sometimes up for entire days
>
> |Pjstaab| why freenode?  
> |Pjstaab| all the cool people are on chatspike  
> |pvdk| wow hi Pjstaab  
> |pvdk| chatspike didn’t want us  
> |pvdk| they said we werent cool enough
>
> |Sir_Herrbatka| NPC Activation only works on each npc’s lower body.  
> |Sir_Herrbatka| openmw is perverted by design?  
> |pvdk| Sir_Herrbatka: hehehe good pickup line to use on a pretty girl  
> |pvdk| Sir_Herrbatka: “Let me activate your lower body girl”  
> |pvdk| or something like that  
> |Sir_Herrbatka| try and share report about resoult  
> |Sir_Herrbatka| ;-)  
> |pvdk| maybe i will :)  
> |pvdk| “openmw got me laid!”  
> |Sir_Herrbatka| I would put this on blog  
> |Sir_Herrbatka| would be very good PR
