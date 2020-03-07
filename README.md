# 11ty Flare

This is what happens when tech writers are _desperate_ to procrastinate. Don't use it.

## 11ty setup

1. Create a new 11ty project. [Docs](https://www.11ty.dev/docs/getting-started/).
2. Create a `.eleventy.js` file in the root of the project.
3. Create a custome input directory, and set it in the config. For example, create a directory called `src` and add the following to `.elevent.js`:
    ```
    module.exports = function(eleventyConfig) {
    
        return {
        dir: {
            input: "src"
        }
        };
    };
    ```
    This is importane because we want to keep the Flare source files in the same directory as the 11ty project, but we don't want 11ty to process the Flare source files.


## Flare project setup

1. Create a new empty project.
2. Set the output files to be HTML rather than HTM. Target > Advanced > Use custom file extension for topics.
3. Create a batch script to copy the Flare output over to the 11ty `src` directory, and add it to the target. Target > Build Events. Put the full path to the `.bat` file in the Post-Build Event Command box. There is a sample batch file in this repo - you will need to edit it to reflect your own system.

