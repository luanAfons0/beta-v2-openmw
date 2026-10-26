---
title: "News again!"
date: 2012-03-05T01:01:33+01:00
lastmod: 2012-10-13T08:42:46Z
slug: "news-again-2"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=254
---
Good day to you all!

**OpenMW 0.12.0** has been in feature freeze for a while now and **is currently being packaged up neatly for your consumption and joy. Thank you packagers!** It will likely be available in a matter of days, so just hold on another 48 hours…

Testing and fixing packages on our three supported systems has eaten up a lot of time, **but exciting work has continued on OpenMW 0.13.0.** Its progress has been so remarkably fast that I dare say development is going smoother than ever before.

**Scrawl has finished work on the sky for now.** Weather effects are limited since they composed of particles and we haven’t implemented particles just yet. The sky looks very impressive, just like in Morrowind. Once again, I’m very happy with the progress in this area. It was a fast, smooth and elegant job and the result is a beautiful working skybox (we kicked cealum to the curb!). Take a look at this [screenshoot](http://openmw.org/wiki/images/thumb/a/ae/0.13-preview-17.png/800px-0.13-preview-17.png).

And now! Quote of the week:

> I have only the tiniest understanding of what you guys are talking about. Let me be more clear by “understanding” I mean it’s like waking up in a UFO and overhearing two aliens speak to each other about some an amazing glowing device in the room. You know they are having a discussion about said device because occasionally one or the other points at it. It’s like that level of comprehension…

ElderTroll expressing his feelings on the forum thread where the **massive work being done by Yacoby and Scrawl on terrain rendering** is discussed. These two are doing a truly fantastic job. **Yacoby had a succesful idea for a workaround for vertex colours** (quote: “OMG! I don’t believe that it’s working!!!!!!!!!!1111oneoneoneeleven”) which had not been working previously, but which are needed for terrain rendering. Meanwhile **scrawl implemented terrain material, which improved performance.**

It brings me great happiness to say that **terrain rendering is finally feature complete**. Its inclusion as an enabled feature in OpenMW depends on the release of **Ogre3d 1.8** as we can’t put an unstable lib as requirement for a stable OpenMW. The wait for Ogre 1.8 gives the team the ability to do performance improvements like shortening loading times and generally polishing it for version 0.14.0.

**Werdanith the brave** has started exploration of the Dwemer ruins containing the soundmanager code. The code was not touched for aeons and is in pretty bad shape. The situation is similar to that of the rendering refactoring that happened a while ago ─ without refactoring no new features.

**Jhooks1**, our Isaac Newton, continues his work on physics. That’s another 0.14.0 task and with its release months away,  I’m very hopeful that the major kinks will be sorted out.

Also, the above post should be free of the most scandalous spelling and grammar mistakes thanks to **ElderTroll** who **volunteered to correct the news section**. A number of users on forum said the errors are charming and adorable, but those compliments come from a bunch of ugly nerds. So sorry guys (which certainly most, if not all, of you are), but I don’t care about your opinion :P

PS  
This [image](http://openmw.org/wiki/images/b/b3/Terrain-caldera-04March12.png) is from yacoby. You can see terrain and sky enabled. It’s amazing!
