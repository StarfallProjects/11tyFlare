# 11ty Flare

This is what happens when tech writers are _desperate_ to procrastinate. Don't use it.

## Project aim

Allow writers to write in Flare, and take full advantage of Flare convenience features such as search, glossaries and so on.
Allow designers to create a completely custom look and feel without fighting a MadCap Flare skin.

This is looking rather ambitious at present. A more realistic first step is including a clean Flare output in a larger site. Would keep: topics, snippets, conditions, targets. Would lose: glossary term conversion, search, menu . . . 

## 11ty setup

1. Create a new 11ty project. [Docs](https://www.11ty.dev/docs/getting-started/).
2. Add the `.eleventy.js` to the root of the project. Take a close look at this file - it contains a bunch of important settings.

## Flare project setup

1. Create a new empty project.
2. Set the output files to be HTML rather than HTM. Target > Advanced > Use custom file extension for topics.
3. Create a batch script to copy the Flare output over to the 11ty `src` directory, and add it to the target. Target > Build Events. Put the full path to the `.bat` file in the Post-Build Event Command box. There is a sample batch file in this repo - you will need to edit it to reflect your own system.
4. Optional, but nicer: Use lowercase filenames. Target > Advanced.
5. Do not use "Content" folder in output. Target > Advanced. This is required as we need `flare.11tydata.json` to end up in the root of the `flare` directory in the 11ty `src`. NOTE: it should be possible to put flare.11tydata.json in the `_data` directory and avoid this (I think) but 11ty has been behaving a bit oddly with finding and recognising data files.
6. Add the `flare.11tydata.json` file to the root of your `Content` directory. NOTE: rename it if your Flare files aren't ending up in `src/flare`. This makes sure 11ty retains the Flare project structure and ugly URLs.
7. Set skins to none. Target > Skin. NOTE: you must keep one skin or it won't build. This is ok as you will probably want skins for search and menu anyway. Add these now so you can ditch the sidenav, topnav and default.
8. Set the output file to index rather than Default. Target > General > Output file.
9. Create a master page and assign it to any topics (or set it as default if you prefer). Try adding a Nunjucks include to it, and creating a simple html file in the `_includes` directory in 11ty.

## Current issues


### Skins
Can't completely remove Flare skins (it won't build, and anyway have to have them for search & menu) See Flare Slack. Another option is the Clean XHTML target, but you lose all the nice Flare stuff (search etc.) Probably have to accept some sort of Frankenstein . . . unless handle nav, search etc. from 11ty. That in itself wouldn't be too painful, but it'd be a shame to lose the glossary. I wonder how hard it is to role one with 11ty . . .

How about . . . Clean for times when bringing Flare into a larger site (as you'll want site-side search, nav etc. anyway). HTML5 & conveniences (but Frankenstein-ish) when just Flare? Why would you wrap in 11ty for just Flare?
- No skin = vastly reduced obnoxious styling to fight. Only battling the handful of skins and CSS for key Flare functions . . . although it looks like it sneaks in some default styling :-(
- Nice automated browser reload (could be done far more simply)
- Automated deploys to Netlify

### More skins

Even just using the bare minimum MadCap styling, you get issues, as some elements assume you have a Content folder (and don't adjust when you untick it). Weirdly, the glossary is happy when converting marked terms but not when converting first occurence of terms . . . .