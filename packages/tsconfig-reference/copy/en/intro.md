---
header: Intro to the TSConfig Reference
firstLine: A TSConfig file in a directory indicates that the directory is the root of a TypeScript or JavaScript project...
---

* TSConfig file 
  * | directory == 👁️directory is the root of a TypeScript or JavaScript project 👁️
  * 👁️way to define / SAME set of config variables 👁️
    * `tsconfig.json`
    * `jsconfig.json` 
  * \> 100 options / sections
    * categorized overview of all compiler flags
    * [root fields](#Project_Files_0) 
      * letting TypeScript what files are available
    * [`compilerOptions`](#compilerOptions) fields
      * majority of the document
    * [`watchOptions`](#watchOptions) fields
      * tweaking the watch mode
    * [`typeAcquisition`](#typeAcquisition) fields
      * tweaking how types are added | JavaScript projects
  * `tsc --init`
    * bootstrap a [TSConfig base](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
