---
title: "v0.29.0 is almost here!"
date: 2014-03-06T20:52:07+01:00
lastmod: 2024-01-05T16:53:37Z
slug: "v0-29-0-here"
categories: ["News"]
authors: ["Lukasz Gromanowski"]
guid: https://openmw.org/?p=3485
---
First, let me quote Zini:

> The first iteration of the navigation system is now in master. Please test!
>
> A few points to consider:  
> – This is only the first iteration. We will most definitely improve the system further.  
> – Other navigation modes can be added later. We should even consider allowing editor plugins to add navigation modes.  
> – Input focus handling is a bit wonky at the moment. When opening the scene sub view and after clicking outside the actual rendered scene you will have to click on the scene again, before it accepts keyboard input. Needs further work, but not my priority now.  
> – Navigation modes can be selected via the button on the left bar. This buttons pops up another bar with 3 buttons, one for each mode. The icons on these buttons are place-holders (I just used some random icons that are already in use elsewhere).  
> – There are currently several hard-coded values that influence how the navigation system works (e.g. mouse sensitivity). These will be made configurable, once we have a properly working user settings implementation (\*cough\*). Likewise all key-bindings (including mouse buttons) will be made configurable eventually.
>
> The navigation modes are (from left to right):
>
> 1\. First Person
>
> – Mouse-Look while holding the left mouse button  
> – WASD as usual  
> – Mouse wheel moves the camera forward/backward  
> – Holding the left mouse button and control, lets you strafe (also vertically)  
> – Camera is held upright (you can’t do a back-flip or a headstand)
>
> 2\. Free Camera
>
> – Mouse-Look while holding the left mouse button  
> – WASD lets you strafe (also vertically)  
> – Holding the left mouse button and control, lets you strafe (also vertically)  
> – Mouse wheel moves the camera forward/backward  
> – Q and E keys makes the camera roll
>
> 3\. Orbiting
>
> – You are always facing the center point.  
> – The center point is 0, 0, 0 by default (we will add other methods to set it eventually)  
> – Holding the left mouse button makes you rotate around the center point while keeping the distance.  
> – WASD also makes you rotate around the center point while keeping the distance.  
> – The mouse wheel moves you towards or away from the center. But you can not pass through the center.  
> – Q and E keys makes the camera roll  
> – Holding the left mouse button and control let’s you strafe and moves the center point in the same direction and by the same distance.
>
> In all three modes you can hold down the shift key to perform actions at an accelerated speed.

In short, OpenCS editor has been enriched with the ability to change the orientation of the camera in the rendering panel. Of course, the rendering panel is still not able to display the contents of a game cell yet – this feature will come with time.

Meanwhile, Scrawl submitted terrain rendering fixes to the GitHub repository. Could this mean that his latest work in this area revealed some imperfections? This seems suspicious enough that, just in case, I’ll not pry further into this matter.

I similarly prefer to avoid mistreatment of poor Pvdk who, with determination rivaling that of mythical heroes, strives to handle all possible installation media of Morrowind. This group includes CDs from magazines and every known boxed edition – each of which may differ slightly in the packaging of their files.

Cc9cii (contrary to appearances, this is not the Borg designation, only the nickname of one of our developers) submitted a number of patches which will help us reach v0.29.0.

See you next week!
