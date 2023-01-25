{
  const get = <T>(arr: T[], k: string) => {
    return arr[k];
  };

  const xs = [1, 2, 3];
  let e = "1";
  const x1 = xs[e];

  const keys = Object.keys(xs);

  for (const el in xs) {
    el;
    const x = xs[el];
  }

  xs.forEach((el, idx) => {
    console.log(el);
    console.log(idx);
  });

  type tuple = ArrayLike<string>;

  const arr: tuple = {
    "0": "1",
    "1": "2",
    length: 2,
  };
}
