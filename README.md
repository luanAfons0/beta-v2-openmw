# beta-v2-openmw

An unofficial prototype of a new [openmw.org](https://openmw.org) website, built as a static site.

OpenMW is a free, open-source engine that runs Morrowind. Its website runs on WordPress today. The team wants to move to a static site that GitLab CI builds and publishes. This repo explores that move. The goal comes from GitLab issue [#6076 "Revamp our website"](https://gitlab.com/OpenMW/openmw/-/issues/6076).

> **Status:** early work. This is not the official site, and the OpenMW team has not adopted it. The first page is Downloads.

## Goals

- Help players find the right download for their system fast.
- Give testers a clear path to the development builds.
- Replace WordPress with plain files that anyone can fix through a merge request.
- Keep the look that players already know: the logo, the header art and the forum colors.

## Rules

Most of these rules come from issue #6076. Every change must follow them.

1. **The site works without JavaScript.** Every page, link and menu must work with JavaScript turned off. Use plain links, `<details>` and CSS. Do not use tabs, sliders or menus that need a script. The only script is search, and without it the search box sends people to DuckDuckGo.
2. **No custom fonts.** Use system font stacks only. Do not use web fonts or font CDNs.
3. **Keep the current logo and header art.** Do not redraw, recolor or crop them in a way that changes them.
4. **Use the forum color palette.** The colors come from [forum.openmw.org](https://forum.openmw.org) and [r/openmw](https://www.reddit.com/r/openmw/). See [Design rules](#design-rules).
5. **Keep words out of templates.** The site is in English only, but its text lives in `i18n/en.toml`, not in templates, so a translation stays possible.
6. **The site is static.** The build makes plain HTML and CSS files, and any web host can serve them as they are. No server, database or API runs in production. `hugo server` is only a local preview tool.
7. **Keep every existing link.** When a page moves from the old site, every download, package and documentation link moves with it. Regroup links if you want, but do not drop them.

## Stack

| Part | Choice | Why |
| --- | --- | --- |
| Site generator | [Hugo](https://gohugo.io) | One binary, fast builds, built-in multilingual support. Issue #6076 names it. |
| Styles | Plain CSS | No build step, so anyone can read and change it. |
| Hosting | GitLab Pages (planned) | The OpenMW project already lives on GitLab. |
| Posts | Markdown files, sent as merge requests | The team prefers this to an editor in the browser. |
| Search | [Pagefind](https://pagefind.app), with DuckDuckGo as fallback | Pagefind searches an index made at build time and shows the results on the site. Without JavaScript, WebAssembly or the index, the search box sends people to DuckDuckGo, limited to openmw.org. |

The OpenMW team has the final word on the stack.

## Pages

The menu in issue #6076:

- **News**: the blog, about 280 posts from 2011 to today.
- **Media**: screenshots and videos.
- **Downloads**: releases, package managers and development builds.
- **Community**: forums, how to contribute, IRC, Matrix and Discord.
- **About**: FAQ, the team and contributors.

Old URLs such as `/2024/some-post/` must keep working, so links from the forum and Reddit do not break.

Each news post keeps its old feed ID in `guid` (for example `https://openmw.org/?p=6979`), so feed readers do not show old posts as new. Two posts have a `url` field, because Hugo removes signs such as ™ from their old slugs.

### Redirects

The build makes a `_redirects` file for the old WordPress URLs. GitLab Pages, Netlify and Cloudflare Pages read this file and send a 301 redirect. For each rule, the build also makes a small HTML page at the old path, so the redirect also works in a browser on hosts that do not read `_redirects`, such as GitHub Pages.

The rules come from `layouts/_partials/redirects.html`:

- `/feed/` and `/feed/atom/` go to the RSS and Atom feeds.
- `/category/<name>/feed/` and `/author/<name>/feed/` go to the feed of that category or author.
- `/<year>/` and `/<year>/<month>/` go to that year on the Archive page. Deeper paths, such as `/2015/page/2/`, work only through `_redirects`.
- The paths in the `aliases` field of a page go to that page.

When a page moves, add its old path to `aliases`. Start each path with `/`:

```yaml
aliases:
  - /old-path/
```

`hugo.toml` sets `disableAliases = true`, because the `_redirects` file and its HTML pages replace the alias pages that Hugo makes.

Old `?p=ID` links cannot be redirected on a static host, because the host ignores everything after `?`. They open the home page. A server rule (nginx, Apache or Cloudflare) can redirect them, with the `guid` of each post as the map.

## Design rules

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--ground` | `#e4dcd1` | `#2a231a` | Page background (with the parchment tile) |
| `--surface` | `#efe9df` | `#3a2c1e` | Panels |
| `--rule` | `#b8a483` | `#4b3b26` | Thin lines and borders |
| `--rule-strong` | `#956e1f` | `#8a6a2c` | Strong borders |
| `--ink` | `#2b2014` | `#ece2d0` | Body text |
| `--brand` | `#48361d` | `#d8b45a` | Primary buttons, headings |
| `--link` | `#9e3200` | `#f0975c` | Links |
| `--alarm` | `#a8002a` | `#ff7d92` | Warnings only, use it rarely |

- Dark mode follows the system setting through `prefers-color-scheme`.
- Text contrast meets WCAG AA (4.5:1 for body text).
- Pages work at 375px wide with no sideways scroll.
- Motion is small: a short press effect on buttons and nothing more.

## Getting started

You need [Hugo](https://gohugo.io/installation/). The standard edition is enough.

```sh
git clone https://github.com/luanAfons0/beta-v2-openmw.git
cd beta-v2-openmw
hugo server
```

Open http://localhost:1313. Hugo reloads the page when you save a file.

To make the static files and the search index:

```sh
hugo
npx -y pagefind@1.6.0 --site public
```

The output goes to `public/`. The second command needs [Node.js](https://nodejs.org). Without it the site still works, and search goes to DuckDuckGo.

The build downloads `AUTHORS.md` for The Team page and the numbers in the "Follow OpenMW" row. Without internet, it uses the copy in `assets/AUTHORS.md` and leaves out the numbers.

A preview of this repository is online at https://luanafons0.github.io/beta-v2-openmw/. It is built from `main` and published on the `gh-pages` branch:

```sh
HUGO_PARAMS_NOINDEX=true hugo --baseURL https://luanafons0.github.io/beta-v2-openmw/
npx -y pagefind@1.6.0 --site public
```

`HUGO_PARAMS_NOINDEX=true` asks search engines not to list the preview, so it does not compete with openmw.org.

## Contributing

- Keep merge requests small: one page or one fix at a time.
- Understand every line you send, and be ready to explain it.
- Test each page with JavaScript off, in dark mode and at phone width before you open a merge request.
- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. See below.

### Commit messages

Each commit message starts with a type, an optional scope and a short summary:

```
<type>(<scope>): <summary>
```

| Type | Use it for |
| --- | --- |
| `feat` | A new page, section or feature |
| `fix` | A broken link, wrong content or a layout bug |
| `style` | CSS and visual changes that do not change content |
| `content` | New or changed text, posts or images |
| `refactor` | Template or code changes that do not change the output |
| `docs` | This README and other docs |
| `build` | Hugo config and the CI pipeline |
| `chore` | Anything else, such as `.gitignore` |

The scope is the page or area, for example `downloads`, `news` or `layout`. Write the summary in the imperative mood, in lower case, with no period at the end.

```
feat(downloads): add the package manager list
fix(downloads): correct the Flathub install command
style(layout): add space between the menu and the page
docs: add the project rules
```

For a breaking change, such as a renamed color token that other files use, add `!` after the type and explain it in the commit body:

```
refactor(layout)!: rename the color tokens
```

## Roadmap

1. Downloads page.
2. The other fixed pages: FAQ, Media, The Team, Google Summer of Code.
3. News: move the old posts over and keep their URLs.
4. The GitLab CI build, and `?p=ID` redirects if the host can read the query string.
5. Move the repo to the OpenMW GitLab group, if the team wants it.

## Credits

- OpenMW logo by Necrod.
- Header image © Maxim Nikolaev.
- The OpenMW team allowed the use of the logo and header image in this repo.
- Morrowind is a trademark of Bethesda Softworks. This project is not affiliated with Bethesda.

## License

This repository is under the [GNU General Public License, version 3](LICENSE), the same license as OpenMW.

Two exceptions: the OpenMW logo and the header image belong to their authors (see [Credits](#credits)), and the imported news posts stay the work of the people who wrote them.
