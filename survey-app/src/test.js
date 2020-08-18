class Baz {
  constructor(props) {
    this.a = props.a;
    this.b = props.b;
  }
  A() {
    return `Baz.a = ${this.a}`;
  }
  B() {
    return `Baz.b = ${this.b}`;
  }
  ToString() {
    return this.A() + ", " + this.B();
  }
  Print() {
    console.log(this.ToString());
  }
}
class Bazinga extends Baz {
  constructor(props) {
    super(props);
    this.c = props.c;
  }
  C() {
    return `Bazinga.c = ${this.c}`;
  }
  ToString() {
    return super.ToString() + ", " + this.C();
  }
}

class Sheldon extends Bazinga {
  constructor(props) {
    super(props);
    this.d = props.d;
  }
  D() {
    return `Sheldon.d = ${this.d}`;
  }
  ToString() {
    return super.ToString() + ", " + this.D();
  }
}

class Leonard extends Sheldon {
  constructor(props) {
    super(props);
    this.penny = props.penny;
  }
  Penny() {
    return `Leonard.penny = ${this.penny}`;
  }
  ToString() {
    return super.ToString() + ", " + this.Penny();
  }
}

let test1 = new Baz({ a: 1, b: 2 });
let test2 = new Baz({ a: 2, b: 3 });

test1.Print();
test2.Print();

let test3 = new Bazinga({ a: 1, b: 2, c: 3 });
let test4 = new Bazinga({ a: 3, b: 4, c: 5 });

test3.Print();
test4.Print();

let test5 = new Sheldon({ a: 1, b: 2, c: 3, d: 4 });
let test6 = new Sheldon({ a: 3, b: 4, c: 5, d: 6 });

test5.Print();
test6.Print();

let test7 = new Leonard({
  a: "dog",
  b: "cow",
  c: "evolution",
  d: "jackrabbit",
  penny: "short shorts",
});

test7.Print();

class SecondClass {
  constructor(props) {
    this.item = props.item;
  }
  Item() {
    return `SecondClass.Item = ${this.item}`;
  }
  ToString() {
    return this.Item();
  }
  Print() {
    console.log(this.ToString());
  }
}

class FirstExtend extends SecondClass {
  constructor(props) {
    super(props);
    this.function = props.function;
  }
  Function() {
    return `FirstExtend.function = ${this.function}`;
  }
  ToString() {
    return super.ToString() + ", " + this.Function();
  }
}

let test8 = new SecondClass({ item: 12345 });
let test9 = new FirstExtend({ item: 9876, function: "Function" });

test8.Print();
test9.Print();
