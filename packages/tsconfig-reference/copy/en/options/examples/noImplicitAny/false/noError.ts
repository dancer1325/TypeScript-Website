// `s`    NOT specified the type -> fall back as `any`
function fn(s) {
  // No error?
  console.log(s.subtr(3));
}
fn(42);
