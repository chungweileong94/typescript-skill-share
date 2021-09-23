enum EnumRole {
  Parent = "parent",
  Child = "child"
}

type Prefix<TPrefix extends string> = `${TPrefix}${string}`;

type Person = {
  name: Prefix<'_'>;
  role: EnumRole;
};

const newPerson: Person = {
  name: "_Brian",
  role: EnumRole.Child
};
