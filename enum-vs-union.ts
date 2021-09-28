enum Role {
  Parent = "parent",
  Child = "child"
}

type UnionExample = {
  role: 'parent' | 'child';
};

type EnumExample = {
  role: Role
};


/**
 * Example 1
 * Sometimes union can works together with enum, but not always
 */
const obj_1: UnionExample = {role: Role.Child}; // Works
const obj_2: EnumExample = {role: 'parent'}; // Error


/**
 * Example 2
 * When we want to convert the enum values into an array, 
 * we need to be careful when the values are number
 */
enum Status_1 {
  Inactive = 0,
  Active = 1,
  Blocked = 2,
}
console.log(Object.values(Status_1)); // --> ["Inactive", "Active", "Blocked", 0, 1, 2]

enum Status_2 {
  Inactive = '0',
  Active = '1',
  Blocked = '2',
}
console.log(Object.values(Status_2)); // --> ["0", "1", "2"] 