/**
 * Type Guard example 1
 * 
 * Types that contain common/reference property
 */

type Person = {
  name: string;
};

type Parent = Person & {
  role: "parent"; // <-- reference property
  work: string;
};

type Child = Person & {
  role: "child"; // <-- reference property
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
