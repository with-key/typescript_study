{
  type User = {
    [props: string]: string;
  };

  const user: User = {
    name: "s",
  };

  type ParseCol = (input: string) => { [colName: string]: string }[];
  const parseCol: ParseCol = (input) => {
    // .. 중략
  };

  type Col = {
    id: string;
    name: string;
    age: string;
    address: string;
  };

  const products = parseCol("1") as Col;

  const u = (): { name: string; address: string } => {
    return { name: "with", address: "address" };
  };

  type T = {
    age: string;
    name: string;
  };

  const vu = u() as unknown as T;
}
{
  // 너무 넓음
  interface Row1 {
    [col: string]: string;
  }

  // 최선이다.
  interface Row2 {
    a: string;
    b?: string;
    c?: string;
    d?: string;
  }

  // 가장 정확
  type Row3 =
    | { a: string }
    | { a: string; b?: string }
    | { a: string; b?: string; c?: string }
    | { a: string; b?: string; c?: string; d?: string };

  type Row4 = Record<"a" | "b" | "c" | "d", string>;

  type Row5 = {
    [k in "a" | "b" | "c"]: string;
  };

  type Row6 = {
    [k in "a" | "b" | "c"]: k extends "a" ? string : string | undefined;
  };
}
