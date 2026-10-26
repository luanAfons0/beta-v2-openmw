---
title: "To Ogr(e)!"
date: 2015-02-15T19:43:19+01:00
lastmod: 2024-01-05T16:49:00Z
slug: "ogre-2"
categories: ["News"]
authors: ["Vedyimyn"]
guid: https://openmw.org/?p=4198
---
Ostatnio niecierpliwie wyczekiwaliśmy Ogre 2.0, silnika używanego w OpenMW. Druga wersja jest kamieniem milowym w jego rozwoju. Pozwoli nam to uczynić OpenMW jeszcze lepszym niż przedtem. Niestety dostosowanie OpenMW do nowej wersji silnika nie jest kwestią poprawki paru linijek kodu. Ogre 2 różni się znacznie od Ogre 1, a OpenMW musi razem z nim ewoluować.

Część problemów dotyczy „sklejania” części ciała tak, żeby stanowiły całość. Jak wiadomo, postaci w Morrowindzie składają się z torsu, głowy, rąk i nóg. Muszą także być w stanie trzymać przedmioty, co także oznacza „sklejanie”. Jako że takiej możliwości jeszcze nie ma w Ogre 2, implementacja tego silnika pozbawiła grę istotnej funkcjonalności.

Ostatni post Scrawla na jego stronie dotyczy problemów takich jak ten powyżej, więc jeśli interesujesz się takimi technikaliami, koniecznie zajrzyj [tutaj](http://scrawl.bplaced.net/blog/?p=34).

Oczywiście poza pracą nad silnikiem, pracowano też nad samym OpenMW. Naprawiono ponad 100 bugów z trackera oraz dodano parę funkcji. Teraz, jeśli „przewiniesz czas” czekając lub śpiąc, NPC będą w innych miejscach niż byli przedtem (w końcu chodzili w międzyczasie, czyż nie?).

Zbliżamy się do wydania 0.35.0 dość szybko, więc założono już blokadę kodu. Obecna praca skupia się na wydaniu następnym, w którym już poprawiono tor ruchu słońca. Ktoś zauważył, mianowicie Yann GOUY, że słońce nie wschodzi i nie zachodzi we właściwych miejscach. Księżyce, co prawda, też mają tę przypadłość, ale muszą trochę poczekać na naprawę. W wersji 0.36.0 dodano też możliwość ubierania zwłok.

Pełna lista zmian dla 0.35.0 jest już napisana. Jest to kwestia paru dni, zanim się pojawi, więc miejcie oko na naszą stronę internetową. Albo zlećcie to aptowi/yumowi/pacmanowi…

Zapraszamy do komentowania [tutaj](https://forum.openmw.org/viewtopic.php?f=38&t=2753).
