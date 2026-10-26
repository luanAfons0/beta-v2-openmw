---
title: "News from behind the scene"
date: 2021-12-20T15:50:57+01:00
lastmod: 2024-01-05T16:36:55Z
slug: "news-from-behind-the-scene"
categories: ["News"]
authors: ["jvoisin"]
guid: https://openmw.org/?p=5584
---
We took some time this year to overhaul, simplify and *awesomify* our web presence and infrastructure.

## Our blog

Ten years using WordPress and still kicking! But it was time to clean up the dust a bit.

First of all, we removed unnecessary plugins like [akismet](https://wordpress.org/plugins/akismet) and its friends to only keep:

- our [Cloudflare](https://en.wikipedia.org/wiki/Cloudflare) integration, since our server is not super powerful and we’ve been [slashdot’ed](https://linux.slashdot.org/story/12/07/04/0224210/open-source-morrowind-version-0160-released) before. So better safe than sorry. Also, no need to fetch your pitchforks if you’re using Tor or a VPN: we configured Cloudflare to not annoy you, so it’s only used as a CDN/cache.
- [Polylang](https://polylang.pro), since WordPress doesn’t support internationalization by default and some of our blogposts are translated into a couple of languages.
- [Jetpack](https://wordpress.org/plugins/jetpack) because our posts are written in Markdown.

Moreover, since more and more people are browsing the web via their phones, we are more than happy that [vtastek](https://www.nexusmods.com/morrowind/users/1225558) took the time to make the blog responsive, so that it looks great on mobile as well!

If you have a look at the sidebar, you’ll notice a handful of badges: [GitHub](https://github.com/openmw/openmw), [GitLab](https://gitlab.com/openmw/openmw), [Discord](https://discord.gg/YegsVV3aRb), [matrix](https://matrix.to/#/#openmw-space:matrix.org), [Twitter](https://twitter.com/openmw_org), [Reddit](https://reddit.com/r/openmw) – all without a single line of JavaScript, as in, no tracking. Speaking of tracking: we also removed Google Analytics, which we weren’t using anyway.

On the backend side, we cleaned the database up by removing comments (which had been turned off years ago), post revisions, unnecessary users, and much more, reducing the size of our database by 60%.

All those small changes lead to a significant improvement of loading times: from around 9 seconds to 1 second!

Our [plan for the future](https://gitlab.com/OpenMW/openmw/-/issues/6076) is to move away from WordPress to take advantage of [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages) to run a static website instead. Any help to make this happen is more than welcome!

## Forum

We’ve been using [phpBB](https://www.phpbb.com) for the forums even before we had our blog, and it’s been working great. So not a lot has changed on this side except that we upgraded it to the latest available major version, granting us a minor performance boost and improved security. We also switched to MySQL for the search engine which reduces the database table and makes the search not only better but also faster. Moreover, we stepped up our anti-spam game: the forum should be kept tidy now with less human intervention necessary, and we’re now reporting spammers to [Stop Forum Spam](https://www.stopforumspam.com).

## Wiki

We’ve long been using [MediaWiki](https://www.mediawiki.org) (the same wiki software used by Wikipedia itself!) to document everything, along with a [plugin](https://github.com/Digitalroot/MediaWiki_PHPBB_Auth) to bridge accounts between the forum and the wiki. Now that OpenMW is slowly reaching feature parity with Morrowind’s original engine, most of the information on the wiki is no longer being updated. So we made our wiki read-only and available at [old-wiki.openmw.org](https://old-wiki.openmw.org) and moved the content to [GitLab’s wiki](https://gitlab.com/OpenMW/openmw/-/wikis/home), reducing the maintenance cost of our MediaWiki. Switching our old wiki to read-only allowed us to disable a ton of features. It also allowed us to make use of aggressive caching which significantly improves its performances and makes it way less taxing resource-wise.

## Alerting

We’ve set up a status page at [openmw.org/status](https://openmw.org/status), thanks to [UptimeRobot](https://uptimerobot.com), to monitor all of our services and to get notified in case one of them goes down. Also, since this information is available to everyone, you can check for yourself if "openmw.org is down for everyone, or is it just me"? This uncovered an issue with our backup system: in the middle of the night (European time) our backups are kicking in, and were doing some heavy compression operations which result in a massive slowdown of the website, generating timeouts. We lowered the process priority of the backups, which fixed the issue and appeased our monitoring.

## Backend

Our nginx config was overhauled and factorized to make our services’ configurations more uniform: same [modern TLS parameters](https://www.ssllabs.com/ssltest/analyze.html?d=openmw.org), usage of http2, same Cloudflare configuration, more efficient serving of big files for [downloads.openmw.org](https://downloads.openmw.org), etc.

Since we’re automatically building OpenMW on every commit using [GitLab’s continuous integration](https://gitlab.com/OpenMW/openmw/-/pipelines) to avoid hammering [NuGet](https://www.nuget.org/), [Chocolatey](https://chocolatey.org/), [Debian](https://www.debian.org/distrib/packages) and co. too much, we’re using [Nexus Repository OSS](https://www.sonatype.com/products/repository-oss) to act as a caching proxy. It has been updated to the latest available version, fixing a lot of [nasty security issues](https://help.sonatype.com/repomanager3/release-notes). We also spent some time improving its loading time.

We ran [OptiPNG](http://optipng.sourceforge.net) and [jpegoptim](https://github.com/tjko/jpegoptim) on icons/media to drastically reduce the size of images and, thus, our bandwidth consumption.

Our database engine, [MariaDB](https://mariadb.org), was tuned for performance as well as cleaned up: we purged old data, and [optimized](https://mariadb.com/kb/en/optimize-table/) the rest.

Since we’re in 2021, all of our domains are now fully accessible [over IPv6](https://ip6.nl/#!openmw.org).

Automatic updates have been enabled via [UnattendedUpgrades](https://wiki.debian.org/UnattendedUpgrades), so that our beloved sysadmin crew don’t have to waste time on mundane tasks and can sleep better at night knowing that security upgrades are installed as soon as they become available.

Finally, speaking of the sysadmin crew: we took steps to increase the [bus factor](https://en.wikipedia.org/wiki/Bus_factor), bringing nice side effects like increased motivation (it’s always funnier to do things with friends) and reduced burnout risks.

##### [Want to leave a comment?](https://forum.openmw.org/viewtopic.php?f=38&t=7634 "Want to leave a comment?")
