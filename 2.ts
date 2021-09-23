type Person = {
  name: string;
};

type Parent = Person & {
  work: string;
};

type Child = Person & {
  school: string;
};

const doSomething = (p: Parent | Child) => {
  // ...
};














// const isParent = (p: Parent | Child): p is Parent => {
//   if ((p as any).work != null) {
//     return true;
//   }
//   return false;
// };
