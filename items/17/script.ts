interface A {
  a: "a";
}

interface B extends A {
  b: "b";
}

interface C extends B {
  c: "c";
}

const c: C = {
  a: "a",
  b: "b",
  c: "c",
};

const a: A = {
  a: "a",
};

const obja: A = c; // C는 A에 할당가능하다.
const objb: B = c; // C는 B에 할당가능하다.
const objc: C = c; // C는 C에 할당가능하다.

type T = {
  t: "t";
};

type U = {
  u: "u";
};

type TorU = T | U;

const obj1: TorU = {
  t: "t",
};

const obj2: TorU = {
  u: "u",
};

const obj3: TorU = {
  t: "t",
  u: "u",
};

// Person | Lifespan
// => name 프로퍼티가 string 이거나 birth 프로퍼티가 Date 인 모든 객체
// => 이 집합의 원소는 name 프로퍼티가 있다고도, birth 프로퍼티가 있다고도 확신할 수 없음
// => 따라서 확실하게 존재한다고 할 수 있는 프로퍼티가 없음
// => keyof 때리면 never

{
  type T = {
    t: string;
  };

  type U = {
    t: string;
    u: string;
  };

  const t: T = { t: "" };
  const u: U = { t: "", u: "" };

  const a: T = u;
  const b: U = t;
}

{
  type A = {
    a: "a";
  };

  const obj = {
    a: "a",
    b: "b",
    c: "c",
  } as const;

  const abc: A = obj;
}
