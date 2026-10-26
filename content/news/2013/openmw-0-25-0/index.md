---
title: "OpenMW 0.25.0!"
date: 2013-08-05T11:55:12+02:00
lastmod: 2024-01-05T16:40:09Z
slug: "openmw-0-25-0"
categories: ["News"]
authors: ["sir_herrbatka"]
guid: https://openmw.org/?p=2979
---
**Zespół OpenMW** z dumą ogłasza wydanie [OpenMW 0.25.0](/news/2013/openmw-0-25-0-released), wolnej reimplementacji silnika Morrowinda. Pliki programu znajdują się w dziale do ściągnięcia na stronie OpenMW.org w wersjach dla systemów operacyjnych Linux, Windows, OSX. Ta wersja OpenMW przynosi spore nowości.

Z wprowadzanych funkcji uwagę przyciąga z pewnością implementacja **SundGen** (umożliwia wydawanie dźwięków napotkanym stworzeniom i nie tylko), a także szwendających się po okolicy postaci (uruchomienie tej funkcji wymaga użycia konsoli). Wiele osób ucieszy się z pewnością na wieść o przebudowanej obsłudze sterowania ─ dzięki wykorzystaniu SDL 2, możliwym jest już wyjście kursorem poza okno OpenMW, a także przełączanie się za pomocą domyślnego skrótu Alt+Tab (obecnego w wielu środowiskach graficznych) do innych uruchomionych aplikacji. Ponadto możliwym stało się uniezależnienie ruchu kursora w GUI od aktualnej liczby klatek na sekundę (Hardware Cursor).

**Wideo demonstrujące nową wersję.**  

{{< youtube id="fTKQaXibMTA" title="OpenMW 0.25 Release Commentary" >}}

Znane problemy:

- Przejście do nowej komórki może u niektórych graczy skutkować silnymi zaburzeniami widocznym na ekranie. Możliwym obejściem jest włączenie Antialiasingu.
- Polska wersja językowa Morrowind.esm może spowodować niespodziewane zakończenie OpenMW.
- Wciśnięcie klawisza “j” w trakcie uruchamiania gry zawiesza ją.

Pełna lista zmian:

- Wprowadzono SoundGen zwierząt oraz NPC.
- Wprowadzono pakiet sztucznej inteligencji: Wander.
- Wprowadzono kompatybilność dla 64-bitowej wersji OSX.
- Wprowadzono Hardware Cursor.
- Wprowadzono obsługę animacji trybu FPP.
- Wprowadzono regulację oddalenia kamery TPP za pomocą rolki myszy.
- Wprowadzono obsługę automatycznego powtarzania dla przycisków kontrolujących suwaki w menu.
- Naprawiono niestabilnej zachowanie startera występujące na systemach OSX w wersjach poniżej 10.8.
- Naprawiono problemy z wydajnością pojawiające się w Biurze Spisów i Opodatkowań.
- Naprawiono niepoprawną inicjalizację rekordów SSCR.
- Naprawiono obsługę skryptów zawierających w swojej nazwie kreskę.
- Naprawiono obsługę powielonych parametrów dla AI wander.
- Naprawiono okno ekwipunku dzięki czemu karta przedmiotów zaklętych zawiera też magiczne bronie.
- Naprawiono błąd umożliwiający poruszanie się przeciążonych postaci.
- Naprawiono obsługę klawiszy martwych.
- Naprawiono rozmaite problemy związane z obsługą myszy.
- Naprawiono importer plików ini który już nie ulega zakończeniu w wypadku braku pliku cfg.
- Naprawiono starter który już nie uruchomi OpenMW pomimo braku aktywnych plików gry.
- Naprawiono kolizję z martwymi postaciami oraz zwłokami zwierząt.
- Naprawiono nieprawidłowe sortowanie odpowiedzi w dialogach.
- Naprawiono zachowanie importera ustawień ini w wypadku podania nieznanego parametru.
- Naprawiono problem utykania w niektórych drzwiach.
- Poprawki wyświetlania stron książek oraz dziennika.
- Naprawiono bug powodujący odtworzenie dźwięku dobycia broni gdy równocześnie postać przechodzi do innej komórki.
