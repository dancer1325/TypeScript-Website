---
title: TypeScript 3.0
layout: docs
permalink: /docs/handbook/release-notes/typescript-3-0.html
oneline: TypeScript 3.0 Release Notes
---

## Project References

TypeScript 3.0 introduces a new concept of project references. Project references allow TypeScript projects to depend on other TypeScript projects - specifically, allowing `tsconfig.json` files to reference other `tsconfig.json` files. Specifying these dependencies makes it easier to split your code into smaller projects, since it gives TypeScript (and tools around it) a way to understand build ordering and output structure.

TypeScript 3.0 also introduces a new mode for tsc, the `--build` flag, that works hand-in-hand with project references to enable faster TypeScript builds.

See [Project References handbook page](/docs/handbook/project-references.html) for more documentation.

## Tuples in rest parameters and spread expressions

TypeScript 3.0 adds support to multiple new capabilities to interact with function parameter lists as tuple types.
TypeScript 3.0 adds support for:

- [Expansion of rest parameters with tuple types into discrete parameters.](#rest-parameters-with-tuple-types)
- [Expansion of spread expressions with tuple types into discrete arguments.](#spread-expressions-with-tuple-types)
- [Generic rest parameters and corresponding inference of tuple types.](#generic-rest-parameters)
- [Optional elements in tuple types.](#optional-elements-in-tuple-types)
- [Rest elements in tuple types.](#rest-elements-in-tuple-types)

With these features it becomes possible to strongly type a number of higher-order functions that transform functions and their parameter lists.

## Rest parameters with tuple types

When a rest parameter has a tuple type, the tuple type is expanded into a sequence of discrete parameters.
For example the following two declarations are equivalent:

```ts
declare function foo(...args: [number, string, boolean]): void;
```

```ts
declare function foo(args_0: number, args_1: string, args_2: boolean): void;
```

## Spread expressions with tuple types

When a function call includes a spread expression of a tuple type as the last argument, the spread expression corresponds to a sequence of discrete arguments of the tuple element types.

Thus, the following calls are equivalent:

```ts
const args: [number, string, boolean] = [42, "hello", true];
foo(42, "hello", true);
foo(args[0], args[1], args[2]);
foo(...args);
```

## Generic rest parameters

A rest parameter is permitted to have a generic type that is constrained to an array type, and type inference can infer tuple types for such generic rest parameters. This enables higher-order capturing and spreading of partial parameter lists:

##### Example

```ts
declare function bind<T, U extends any[], V>(
  f: (x: T, ...args: U) => V,
  x: T
): (...args: U) => V;

declare function f3(x: number, y: string, z: boolean): void;

const f2 = bind(f3, 42); // (y: string, z: boolean) => void
const f1 = bind(f2, "hello"); // (z: boolean) => void
const f0 = bind(f1, true); // () => void

f3(42, "hello", true);
f2("hello", true);
f1(true);
f0();
```

In the declaration of `f2` above, type inference infers types `number`, `[string, boolean]` and `void` for `T`, `U` and `V` respectively.

Note that when a tuple type is inferred from a sequence of parameters and later expanded into a parameter list, as is the case for `U`, the original parameter names are used in the expansion (however, the names have no semantic meaning and are not otherwise observable).

## Optional elements in tuple types

Tuple types now permit a `?` postfix on element types to indicate that the element is optional:

##### Example

```ts
let t: [number, string?, boolean?];
t = [42, "hello", true];
t = [42, "hello"];
t = [42];
```

In [`strictNullChecks`](/tsconfig#strictNullChecks) mode, a `?` modifier automatically includes `undefined` in the element type, similar to optional parameters.

A tuple type permits an element to be omitted if it has a postfix `?` modifier on its type and all elements to the right of it also have `?` modifiers.

When tuple types are inferred for rest parameters, optional parameters in the source become optional tuple elements in the inferred type.

The `length` property of a tuple type with optional elements is a union of numeric literal types representing the possible lengths.
For example, the type of the `length` property in the tuple type `[number, string?, boolean?]` is `1 | 2 | 3`.

### Rest elements in tuple types

The last element of a tuple type can be a rest element of the form `...X`, where `X` is an array type.
A rest element indicates that the tuple type is open-ended and may have zero or more additional elements of the array element type.
For example, `[number, ...string[]]` means tuples with a `number` element followed by any number of `string` elements.

##### Example

```ts
function tuple<T extends any[]>(...args: T): T {
  return args;
}

const numbers: number[] = getArrayOfNumbers();
const t1 = tuple("foo", 1, true); // [string, number, boolean]
const t2 = tuple("bar", ...numbers); // [string, ...number[]]
```

The type of the `length` property of a tuple type with a rest element is `number`.

## New `unknown` top type

* `unknown`
  * == 💡`any`'s type-safe counterpart💡
    * `any` is -- assignable to -> `unknown`
    * ❌`unknown` is NOT -- assignable to -> `any`❌
  * ⚠️if you want to make operations | `unknown` type -> requirements⚠️
    * assertion
    * narrow to a more specific type

## Support for `defaultProps` in JSX

TypeScript 2.9 and earlier didn’t leverage [React `defaultProps`](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) declarations inside JSX components.
Users would often have to declare properties optional and use non-null assertions inside of `render`, or they'd use type-assertions to fix up the type of the component before exporting it.

TypeScript 3.0 adds support for a new type alias in the `JSX` namespace called `LibraryManagedAttributes`.
This helper type defines a transformation on the component's `Props` type, before using to check a JSX expression targeting it; thus allowing customization like: how conflicts between provided props and inferred props are handled, how inferences are mapped, how optionality is handled, and how inferences from differing places should be combined.

In short using this general type, we can model React's specific behavior for things like `defaultProps` and, to some extent, `propTypes`.

```tsx
export interface Props {
  name: string;
}

export class Greet extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <div>Hello {name.toUpperCase()}!</div>;
  }
  static defaultProps = { name: "world" };
}

// Type-checks! No type assertions needed!
let el = <Greet />;
```

## Caveats

### Explicit types on `defaultProps`

The default-ed properties are inferred from the `defaultProps` property type. If an explicit type annotation is added, e.g. `static defaultProps: Partial<Props>;` the compiler will not be able to identify which properties have defaults (since the type of `defaultProps` include all properties of `Props`).

Use `static defaultProps: Pick<Props, "name">;` as an explicit type annotation instead, or do not add a type annotation as done in the example above.

For function components (formerly known as SFCs) use ES2015 default initializers:

```tsx
function Greet({ name = "world" }: Props) {
  return <div>Hello {name.toUpperCase()}!</div>;
}
```

#### Changes to `@types/React`

Corresponding changes to add `LibraryManagedAttributes` definition to the `JSX` namespace in `@types/React` are still needed.
Keep in mind that there are some limitations.

## `/// <reference lib="..." />` reference directives

TypeScript adds a new triple-slash-reference directive (`/// <reference lib="name" />`), allowing a file to explicitly include an existing built-in _lib_ file.

Built-in _lib_ files are referenced in the same fashion as the [`lib`](/tsconfig#lib) compiler option in _tsconfig.json_ (e.g. use `lib="es2015"` and not `lib="lib.es2015.d.ts"`, etc.).

For declaration file authors who relay on built-in types, e.g. DOM APIs or built-in JS run-time constructors like `Symbol` or `Iterable`, triple-slash-reference lib directives are the recommended. Previously these .d.ts files had to add forward/duplicate declarations of such types.

##### Example

Using `/// <reference lib="es2017.string" />` to one of the files in a compilation is equivalent to compiling with `--lib es2017.string`.

```ts
/// <reference lib="es2017.string" />

"foo".padStart(4);
```
