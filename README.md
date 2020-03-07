# 11ty Flare

This is what happens when tech writers are _desperate_ to procrastinate. Don't use it.

## Project aim

Allow writers to write in Flare, and take full advantage of Flare convenience features such as search, glossaries and so on.
Allow designers to create a completely custom look and feel without fighting a MadCap Flare skin.



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
7. Set skins to none. Target > Skin. BUG: you must keep one skin or it won't build.
8. Set the output file to index rather than Default. Target > General > Output file.
9. Create a master page and assign it to any topics (or set it as default if you prefer). Try adding a Nunjucks include to it, and creating a simple html file in the `_includes` directory in 11ty.

## Current issues

1. Can't completely remove Flare skins (it won't build) See Flare Slack. Another option is the Clean XHTML target, but you lost all the nice Flare stuff (search etc.) Probably have to accept some sort of Frankenstein . . . unless handle nav, search etc. from 11ty. That in itself wouldn't be too painful, but it'd be a shame to lose the glossary. I wonder how hard it is to role one with 11ty . . .