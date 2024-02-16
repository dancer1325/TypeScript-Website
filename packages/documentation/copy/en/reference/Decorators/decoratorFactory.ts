function color(value: string) {
  console.log('Decorator factory - color');
  return function (target: any) {
    // This is the decorator
    // Do something with 'target' and 'value'...
    console.log(`Applying color ${value} to ${target.name}`);
    // You can do something with 'target' here, such as modifying its behavior or properties
  };
}

// Use the decorator to decorate a class
@color("factoryClass")
class factoryClass {
  private _room: string;
  private readonly _students: number;

  // TODO: Why does TS1239 hit here?
  // @ts-ignore
  constructor(@color("constructorRoom") room: string, students: number) {
    this._room = room
    this._students = students
  }

  // TODO: Why does TS1241 hit here?
  // @ts-ignore
  @color("myMethod")
  myMethod(a: number, b: number) {
    return a + b;
  }

  // TODO: Why does TS1241 hit here?
  // @ts-ignore
  @color("studentsGet")
  get students(): number {
    return this._students
  }
}
