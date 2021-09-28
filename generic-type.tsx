/**
 * Generic type examples
 */

/**
 * Example 1
 * 
 * Basic usage of generic type
 */
const flagActive = <T extends Record<string, any>>(obj: T) => {
  return {
    ...obj,
    isActive: true,
  };
}

const myObj_1 = flagActive({name: 'Alex', age: 10}); // --> Correct
const myObj_2 = flagActive('Alex'); // --> Error, because the 'Alex' doesn't fulfill the type `Record<string, any>`

/**
 * Example 2
 * 
 * This type utils allow us to modify the existing properties in generic type `T`
 */
type Modify<T, TReplace> = Omit<T, keyof TReplace> & TReplace;

type OriginalType = {name: string; age: string}; // --> {name: string; age: string}
type ModifiedType = Modify<OriginalType, {age: number}>; // --> {name: string; age: number}

/**
 * Example 3 
 * 
 * Generic type with template literal
 * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 */
type Prefix<TPrefix extends string> = `${TPrefix}${string}`;

const prefixString_1: Prefix<'_'> = '_abc'; // --> Correct
const prefixString_2: Prefix<'_'> = 'abc'; // --> Error, because the value doesn't have the prefix "_"