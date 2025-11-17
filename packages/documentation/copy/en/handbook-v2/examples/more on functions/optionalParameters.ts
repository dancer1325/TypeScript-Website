// 1. ?     == OPTIONAL
function functionWithOptionalInput(x?: number) {
  //
}
functionWithOptionalInput();
functionWithOptionalInput(10);
functionWithOptionalInput(undefined);     // if it's optional -> `undefined` is ALLOWED

// 2. default value
function functionWithDefaultInput(x: number = 10) {
  console.log("functionWithDefaultInput ", x);
}

functionWithDefaultInput(undefined);          // TODO: why is it ALLOWED?
