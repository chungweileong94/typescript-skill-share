type Person = {
  name: string;
};

type Parent = Person & {
  role: "parent";
  work: string;
};

type Child = Person & {
  role: "child";
  school: string;
};

const doSomething = (p: Parent | Child) => {
  switch (p.role) {
    case "parent":
      console.log(p.work);
      break;

    case "child":
      console.log(p.school);
      break;
  }
};
