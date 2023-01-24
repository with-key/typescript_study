// 타입에 이름을
interface User {
  name: string;
  age: number;
}

// intersection 연산자
type Psrson = { address: string } & User;

// 기존 타입의 부분집합을 사용
type State = {
  a: string;
  b: string;
  c: number;
  d: string[];
};

// type MinState = {
//   a: State["a"];
//   b: State["b"];
// };

// type MinState = {
//   [k in "a" | "b" | "c"]: State[k];
// };

// type MinState = Pick<State, "a" | "b" | "c">;

type A = { type: "a" };
type B = { type: "b" };
type Actions = (A | B)["type"];

interface Option {
  width: number;
  height: number;
  color: string;
  label: string;
}

// type OptionsUpdate = {
//   [k in keyof Option]?: Option[k];
// };

// type OptionUpdate = Partial<Option>;

const INIT_OPTIONS = {
  width: 100,
  height: 200,
  color: "red",
  label: "hello",
};

type InitOptions = typeof INIT_OPTIONS;

type PlusFunc = (a: number, b: number) => number;

const plus: PlusFunc = (a, b) => {
  return a + b;
};

type PlusReturnType = ReturnType<typeof plus>;

interface Name {
  first: string;
  last: string;
}

// 매개변수를 제한하지 않은 경우
type Duo<T> = [T, T];
// 매개변수를 Name의 부분집합으로 제한한 경우
type LimitDuo<T extends Name> = [T, T];

const duo1: Duo<{}> = [{}, {}]; // 타입체커 에러 없음
const duo2: LimitDuo<{ first: string; last: string; middle: string }> = [
  {
    first: "hello",
    last: "world",
    middle: "mid",
  },
  {
    first: "hello",
    last: "world",
    middle: "mid",
  },
];

type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};
