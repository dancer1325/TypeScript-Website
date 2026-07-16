# TypeScript Training Topics

## 1. Introduction

### 1.1 TypeScript & ecosystem
* **TypeScript compiler (`tsc`)**
  * — type-checker + transpiler de TS/JS a JavaScript
  * → [The Basics](packages/documentation/copy/en/handbook-v2/Basics.md) · [tsc CLI Options](packages/documentation/copy/en/project-config/Compiler%20Options.md)
* **The Handbook**
  * — guía de referencia del lenguaje, día a día
  * → [The TypeScript Handbook](packages/documentation/copy/en/handbook-v2/The%20Handbook.md)
* **TypeScript en proyectos JavaScript**
  * — type-checking incremental de código JS existente vía JSDoc
  * → [JS Projects Utilizing TypeScript](packages/documentation/copy/en/javascript/Intro%20to%20JS%20with%20TS.md)
* **Declaration files (`.d.ts`)**
  * — describir la forma de librerías JS para consumo tipado
  * → [Declaration Files – Introduction](packages/documentation/copy/en/declaration-files/Introduction.md)
* **tsconfig.json**
  * — configuración del compilador por proyecto
  * → [What is a tsconfig.json](packages/documentation/copy/en/project-config/tsconfig.json.md)

### 1.2 TypeScript project
* Typed superset of JavaScript — open source, mantenido por Microsoft
  * → [README](README.md)
* Historial completo de versiones
  * → [Release notes (1.1 → 5.1)](packages/documentation/copy/en/release-notes/)
* Compila a JavaScript estándar (downleveling a ES3/ES5/ES2015+)
  * → [Downleveling](packages/documentation/copy/en/handbook-v2/Basics.md)
* Cross-platform: cualquier entorno con Node.js
  * → [TypeScript Tooling in 5 minutes](packages/documentation/copy/en/tutorials/TypeScript%20Tooling%20in%205%20minutes/TypeScript%20Tooling%20in%205%20minutes.md)

### 1.3 Overview

#### 1.3.1 Technical prerequisites
* Conocimiento de JavaScript (ES2015+)
* Familiaridad con npm/node
* Nociones de tipos estáticos (útil, no obligatorio)
  * → [TypeScript for the New Programmer](packages/documentation/copy/en/get-started/TS%20for%20the%20New%20Programmer.md)

#### 1.3.2 Use cases
* Añadir tipos estáticos a apps JavaScript
  * → [TypeScript for JavaScript Programmers](packages/documentation/copy/en/get-started/TS%20for%20JS%20Programmers/TS%20for%20JS%20Programmers.md)
* Type-checking de ficheros `.js` sin migrar a `.ts`
  * → [Type Checking JavaScript Files](packages/documentation/copy/en/javascript/Type%20Checking%20JavaScript%20Files.md) · [JSDoc Reference](packages/documentation/copy/en/javascript/JSDoc%20Reference.md)
* Publicar librerías con tipos (`.d.ts`)
  * → [Publishing](packages/documentation/copy/en/declaration-files/Publishing.md)
* Migrar una base de código JavaScript a TypeScript
  * → [Migrating from JavaScript](packages/documentation/copy/en/tutorials/Migrating%20from%20JavaScript.md)

#### 1.3.3 Why TypeScript
* Static type-checking — detecta errores antes de ejecutar → [The Basics](packages/documentation/copy/en/handbook-v2/Basics.md)
* Tooling: autocompletado, refactors, navegación → [The Basics](packages/documentation/copy/en/handbook-v2/Basics.md)
* Structural type system — tipado por forma, no por nombre → [TS for JS Programmers](packages/documentation/copy/en/get-started/TS%20for%20JS%20Programmers/TS%20for%20JS%20Programmers.md)

#### 1.3.4 Perfiles de entrada
* Programador nuevo → [TS for the New Programmer](packages/documentation/copy/en/get-started/TS%20for%20the%20New%20Programmer.md)
* Desarrollador JavaScript → [TS for JS Programmers](packages/documentation/copy/en/get-started/TS%20for%20JS%20Programmers/TS%20for%20JS%20Programmers.md)
* Desarrollador Java / C# (OOP) → [TS for Java/C# Programmers](packages/documentation/copy/en/get-started/TS%20for%20OOPers.md)
* Programador funcional (Haskell/ML) → [TS for Functional Programmers](packages/documentation/copy/en/get-started/TS%20for%20Functional%20Programmers.md)

---

## 2. The type system

### 2.1 Static type-checking
* `tsc` analiza el código y reporta errores de tipo sin ejecutarlo
* "if there are errors → NO emit" (configurable con `noEmitOnError`)
* Non-exception failures: TS detecta bugs que JS deja pasar en silencio
* → [The Basics](packages/documentation/copy/en/handbook-v2/Basics.md)

### 2.2 Main mechanics

#### 2.2.1 Explicit vs inferred types
* Type inference — TS deduce el tipo cuando no se anota
* Explicit types — anotaciones en variables, parámetros y retornos
* Erased types — los tipos desaparecen en el JS emitido
* → [Everyday Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md) · [Type Inference](packages/documentation/copy/en/reference/Type%20Inference.md)

#### 2.2.2 Structural typing
* Compatibilidad por forma, no por nombre de tipo ("duck typing")
* → [Type Compatibility](packages/documentation/copy/en/reference/Type%20Compatibility/Type%20Compatibility.md) · [Advanced Types](packages/documentation/copy/en/reference/Advanced%20Types.md)

#### 2.2.3 Strictness
* `strict: true` — activa todas las comprobaciones estrictas
* `noImplicitAny` — prohíbe `any` implícito
* `strictNullChecks` — `null`/`undefined` deben tratarse explícitamente
* → [The Basics – Strictness](packages/documentation/copy/en/handbook-v2/Basics.md)

---

## 3. Everyday types

### 3.1 Primitives & basics
* `string`, `number`, `boolean`
* Arrays: `number[]` / `Array<number>`
* `any` — desactiva el type-checking (evitar)
* → [Everyday Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md) · [Basic Types (v1)](packages/documentation/copy/en/handbook-v1/Basic%20Types.md)

### 3.2 Object & function types
* Object types con propiedades opcionales (`?`)
* Anotaciones de parámetros y retorno en funciones
* → [Everyday Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md)

### 3.3 Composing types

#### 3.3.1 Union types
* `type Id = number | string` — uno de varios tipos
* Working with unions → narrowing antes de usar
* → [Everyday Types – Union Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md) · [Unions and Intersections (v1)](packages/documentation/copy/en/handbook-v1/Unions%20and%20Intersections.md)

#### 3.3.2 Type aliases vs interfaces
* `type` alias — cualquier tipo con nombre
* `interface` — forma de objeto extensible
* Diferencias y cuándo usar cada uno
* → [Everyday Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md) · [Interfaces (v1)](packages/documentation/copy/en/handbook-v1/Interfaces.md)

#### 3.3.3 Literal & assertion types
* Literal types: `"left" | "right"`, literal inference
* Type assertions: `as`, non-null `!`
* → [Everyday Types](packages/documentation/copy/en/handbook-v2/Everyday%20Types.md) · [Literal Types (v1)](packages/documentation/copy/en/handbook-v1/Literal%20Types.md)

---

## 4. Narrowing

### 4.1 Type guards
* `typeof` guards, truthiness, equality
* `in` operator, `instanceof`
* → [Narrowing](packages/documentation/copy/en/handbook-v2/Narrowing.md)

### 4.2 Control flow & predicates
* Control flow analysis — TS estrecha tipos por el flujo
* Type predicates: `x is Fish`
* Assertion functions
* → [Narrowing](packages/documentation/copy/en/handbook-v2/Narrowing.md)

### 4.3 Discriminated unions & never
* Discriminated unions — campo común para distinguir variantes
* `never` type + exhaustiveness checking
* → [Narrowing](packages/documentation/copy/en/handbook-v2/Narrowing.md)

---

## 5. Functions & objects

### 5.1 More on functions
* Function type expressions y call/construct signatures
* Generic functions + constraints
* Optional parameters, function overloads
* Rest params & arguments, parameter destructuring
* `this` en funciones, `void` / `object` / `unknown` / `never`
* → [More on Functions](packages/documentation/copy/en/handbook-v2/More%20on%20Functions.md) · [Functions (v1)](packages/documentation/copy/en/handbook-v1/Functions.md)

### 5.2 Object types
* Property modifiers: opcionales, `readonly`, index signatures
* Excess property checks
* Extending types e intersection types
* Generic object types: `Array`, `ReadonlyArray`, tuples
* → [Object Types](packages/documentation/copy/en/handbook-v2/Object%20Types.md)

### 5.3 Classes
* Class members: fields, `readonly`, constructors, methods, getters/setters
* Heritage: `implements`, `extends`
* Visibility: `public`, `protected`, `private`
* Static members, `static` blocks, generic classes
* `this` at runtime, `this` types
* → [Classes](packages/documentation/copy/en/handbook-v2/Classes.md) · [Classes (v1)](packages/documentation/copy/en/handbook-v1/Classes.md)

---

## 6. Type manipulation

### 6.1 Generics
* Hello world of generics, generic type variables
* Generic types, classes, constraints, parameter defaults
* → [Generics](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Generics.md) · [Generics (v1)](packages/documentation/copy/en/handbook-v1/Generics.md)

### 6.2 Operators & derived types
* `keyof` type operator → [Keyof](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Keyof%20Type%20Operator/Keyof%20Type%20Operator.md)
* `typeof` type operator → [Typeof](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Typeof%20Type%20Operator/Typeof%20Type%20Operator.md)
* Indexed access types → [Indexed Access](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Indexed%20Access%20Types.md)
* → [Creating Types from Types](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/_Creating%20Types%20from%20Types.md)

### 6.3 Conditional & mapped types
* Conditional types + distributive conditional types → [Conditional Types](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Conditional%20Types.md)
* Mapped types + key remapping via `as` → [Mapped Types](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Mapped%20Types.md)
* Template literal types → [Template Literal Types](packages/documentation/copy/en/handbook-v2/Type%20Manipulation/Template%20Literal%20Types.md)

### 6.4 Utility types
* `Partial`, `Required`, `Readonly`, `Record`, `Pick`, `Omit`
* `Exclude`, `Extract`, `NonNullable`, `Parameters`, `ReturnType`, `Awaited`, ...
* → [Utility Types](packages/documentation/copy/en/reference/Utility%20Types/Utility%20Types.md)

---

## 7. Modules & project structure

### 7.1 Modules
* ES module syntax, import adicional, CommonJS interop
* Module resolution & module output options
* → [Modules (handbook)](packages/documentation/copy/en/handbook-v2/Modules.md) · [Modules (reference)](packages/documentation/copy/en/reference/Modules.md)

### 7.2 Module resolution & namespaces
* Estrategias: `node`, `classic`, `node16`/`nodenext`
* ESM support for Node → [ESM Support for Node](packages/documentation/copy/en/reference/ESM%20Support%20for%20Node.md)
* Namespaces vs modules → [Namespaces](packages/documentation/copy/en/reference/Namespaces.md) · [Namespaces and Modules](packages/documentation/copy/en/reference/Namespaces%20and%20Modules.md)
* → [Module Resolution](packages/documentation/copy/en/reference/Module%20Resolution.md)

### 7.3 Project references
* Dividir proyectos grandes en subproyectos compilables por separado
* → [Project References](packages/documentation/copy/en/project-config/Project%20References.md)

---

## 8. Configuration & tooling

### 8.1 tsconfig.json
* `compilerOptions`, `include`/`exclude`, TSConfig bases, `extends`
* → [What is a tsconfig.json](packages/documentation/copy/en/project-config/tsconfig.json.md)

### 8.2 Compiler options
* `tsc` CLI options y flags principales
* Compiler Options en MSBuild
* → [tsc CLI Options](packages/documentation/copy/en/project-config/Compiler%20Options.md) · [Compiler Options in MSBuild](packages/documentation/copy/en/project-config/Compiler%20Options%20in%20MSBuild.md)

### 8.3 Watch & build integration
* Configuring watch mode
* Integrar con build tools (Gulp, Babel, Webpack)
* → [Configuring Watch](packages/documentation/copy/en/project-config/Configuring%20Watch.md) · [Integrating with Build Tools](packages/documentation/copy/en/project-config/Integrating%20with%20Build%20Tools.md)

---

## 9. Advanced references

### 9.1 Reference topics
* Enums → [Enums](packages/documentation/copy/en/reference/Enums/Enums.md)
* Decorators → [Decorators](packages/documentation/copy/en/reference/Decorators/Decorators.md)
* Iterators and Generators → [Iterators and Generators](packages/documentation/copy/en/reference/Iterators%20and%20Generators.md)
* Mixins → [Mixins](packages/documentation/copy/en/reference/Mixins.md)
* JSX → [JSX](packages/documentation/copy/en/reference/JSX.md)
* Symbols → [Symbols](packages/documentation/copy/en/reference/Symbols/Symbols.md)
* Declaration Merging → [Declaration Merging](packages/documentation/copy/en/reference/Declaration%20Merging.md)
* Triple-Slash Directives → [Triple-Slash Directives](packages/documentation/copy/en/reference/Triple-Slash%20Directives.md)
* Variable Declarations → [Variable Declarations](packages/documentation/copy/en/reference/Variable%20Declarations.md)

### 9.2 JavaScript interop
* Type-checking de ficheros `.js`
* JSDoc como fuente de tipos
* Crear `.d.ts` a partir de `.js`
* → [Type Checking JS Files](packages/documentation/copy/en/javascript/Type%20Checking%20JavaScript%20Files.md) · [JSDoc Reference](packages/documentation/copy/en/javascript/JSDoc%20Reference.md) · [Creating DTS files From JS](packages/documentation/copy/en/javascript/Creating%20DTS%20files%20From%20JS.md)

### 9.3 Understanding errors
* Cómo leer y diagnosticar mensajes de error del compilador
* → [Understanding Errors](packages/documentation/copy/en/handbook-v2/Understanding%20Errors.md)

---

## 10. Declaration files (.d.ts)

### 10.1 Fundamentals
* Introduction, Consumption, Do's and Don'ts
* → [Introduction](packages/documentation/copy/en/declaration-files/Introduction.md) · [Consumption](packages/documentation/copy/en/declaration-files/Consumption.md) · [Do's and Don'ts](packages/documentation/copy/en/declaration-files/Do's%20and%20Don'ts.md)

### 10.2 By example & deep dive
* Declaration reference by example
* Library structures (module, global, UMD, plugins)
* → [By Example](packages/documentation/copy/en/declaration-files/By%20Example/By%20Example.md) · [Library Structures](packages/documentation/copy/en/declaration-files/Library%20Structures.md) · [Deep Dive](packages/documentation/copy/en/declaration-files/Deep%20Dive/Deep%20Dive.md)

### 10.3 Templates & publishing
* Templates: `module.d.ts`, `global.d.ts`, `module-plugin.d.ts`, ...
* Publishing a npm / DefinitelyTyped
* → [Templates](packages/documentation/copy/en/declaration-files/Templates.md) · [Publishing](packages/documentation/copy/en/declaration-files/Publishing.md)

---

## 11. Tutorials
* TypeScript Tooling in 5 minutes → [Tooling in 5 minutes](packages/documentation/copy/en/tutorials/TypeScript%20Tooling%20in%205%20minutes/TypeScript%20Tooling%20in%205%20minutes.md)
* Migrating from JavaScript → [Migrating from JavaScript](packages/documentation/copy/en/tutorials/Migrating%20from%20JavaScript.md)
* DOM Manipulation → [DOM Manipulation](packages/documentation/copy/en/tutorials/DOM%20Manipulation.md)
* Frameworks: React, Angular, ASP.NET Core → [React](packages/documentation/copy/en/tutorials/React.md) · [Angular](packages/documentation/copy/en/tutorials/Angular.md) · [ASP.NET Core](packages/documentation/copy/en/tutorials/ASP.NET%20Core.md)
* Build tools: Babel, Gulp → [Babel with TypeScript](packages/documentation/copy/en/tutorials/Babel%20with%20TypeScript.md) · [Gulp](packages/documentation/copy/en/tutorials/Gulp.md)

---

## 12. Conclusions
* TypeScript como superconjunto tipado de JavaScript — adopción incremental
* Static type-checking + tooling = menos bugs, mejor DX
* Sistema de tipos estructural + type manipulation = tipos expresivos y reutilizables
* Ecosistema: `.d.ts`, DefinitelyTyped, interop JS/JSDoc, integración con frameworks y build tools
* → [The TypeScript Handbook](packages/documentation/copy/en/handbook-v2/The%20Handbook.md)
