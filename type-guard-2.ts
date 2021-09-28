/**
 * Type Guard example 2
 * 
 * Types that doesn't have any common/reference property
 */

type Person = {
  name: string;
};

type Parent = Person & {
  work: string;
};

type Child = Person & {
  school: string;
};


const isParent = (p: Parent | Child): p is Parent => {
  if ((p as any).work != null) {
    return true;
  }
  return false;
};

const doSomething = (p: Parent | Child) => {
  if (isParent(p)) {
    console.log(p.work);
    return;
  }

  console.log(p.school);
};



