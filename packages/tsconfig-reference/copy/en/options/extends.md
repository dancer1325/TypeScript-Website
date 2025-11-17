---
display: "Extends"
oneline: "Specify one or more path or node module references to base configuration files from which settings are inherited."
---

* allows
  * inheriting -- from -- another configuration file
* value = string / relative path -- to another -- configuration file
  * path -- may use -- Node.js style resolution
* configuration from the base file
  * are loaded first 
    * & NOT excluded from inheritance & relative path values -> resolved -- relative to the -- original configuration file
  * 👁️fields / COMPLETELY overridden -- by -- the inheriting config file 👁️
    * [`files`](#files)
    * [`include`](#include)
    * [`exclude`](#exclude)
  * ⚠️ ONLY top-level property / -- excluded from inheritance -- is [`references`](#references) ⚠️ 


##### Example

`configs/base.json`:

```json tsconfig
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

`tsconfig.json`:

```json tsconfig
{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
```

`tsconfig.nostrictnull.json`:

```json tsconfig
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

* `tsc --showConfig`
* `tsc --showConfig tsconfig.nostrictnull.json`
  * Problems:
    * Problem1: Why `"compilerOptions": {}` ?
      * Solution: TODO:
    * Problem2: Why that path for `"files": ` ?
      * Solution: TODO:
