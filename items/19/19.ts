type Obj = {
  name: string;
};

const func = (obj: Obj) => {
  return obj;
};

const obj: Obj = {
  name: "with",
  age: 10,
};

func(obj);
