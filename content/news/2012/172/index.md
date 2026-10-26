---
title: ""
date: 2012-01-15T15:36:47+01:00
lastmod: 2012-10-13T08:24:37Z
slug: "172"
categories: ["Infrastructure"]
authors: ["Lukasz Gromanowski"]
guid: https://openmw.org/?p=172
---
Hello,  
Thursday and Friday openmw.org unavailability, as I mentioned in previous post, was caused by power loss in [Ecatel datacenter](http://ecatel.co.uk/?p=home "Ecatel datacenter") in Holland which is used by Rootnode.net (our hosting), but that unfortunately was not all (Friday 13th?). There was also APC power switch and some KVMs failure which caused some problems with data on shell and web servers, so RN admins restored it from backup. I don’t have access to shell (yet) so I can’t verify if all data was restored, but main page, forum, wiki and bug tracker works, so I hope everything is OK.

Among this, RN admins planned some bigger maintenance works at Monday and Wednesday (16/17.01.2012). Maintenance status will be posted on [twitter](http://twitter.com/marcinhlybin "Rootnode twitter"). They will add and start testing new (faster, better) web cluster which will be used for web hosting for RN users in near future. Also there will be HDD upgrades (but only on shell servers so openmw.org pages will not be affected), and some network reconfiguration. So, please be prepared for some “unexpected” things, like few minutes of web page unavailability. And there is yet another thing, there will be a dedicated machine for Java in RN (it’s currently tested) – whats this mean for us? We could setup in future [Jenkins Continuous Integration server](http://jenkins-ci.org/ "Jenkins CI") which could do for us some automatic binaries building and packaging :D
