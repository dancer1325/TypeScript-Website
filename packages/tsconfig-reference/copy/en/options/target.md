---
display: "Target"
oneline: "Set the JavaScript language version for emitted JavaScript and include compatible library declarations."
---

* == 💡JS language version | emitted "*.js"💡
  * ALLOWED values
    * `ES6`
      * supported by
        * modern browsers
      * recommended
    * `ESNext`
      * highest supported TS version 
      * take caution
    * [OTHERS](https://en.wikipedia.org/wiki/ECMAScript_version_history)

* affects
  * ALLOWED JS features
  * [`lib`](lib.md)'s default value

* recommendations
  * if you set `target` -> NOT set `lib`

* ⚠️-- depend on -- platform & 's version ⚠️
  * [TSConfigs community](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
