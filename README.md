# What is the use of the `keyof` keyword in TypeScript? Provide an example.

TypeScript is a type-safe language based on JavaScript that makes the coding experience of developers more precise and safe. One of the important features of TypeScript is the `keyof` keyword. This keyword is mainly used to extract the types of property keys present in a type.

---

## In This Blog, We Will Discuss:

* What is the `keyof` keyword?
* How does it work?
* Why is it used?
* An explanation with a real example

---

## What is `keyof`?

`keyof` is a **type operator** that takes an object type as input and returns a **union type** of the property keys present in that type.

**In simple terms:** Suppose you have an object type — `keyof` extracts the names (as string literal types) of all the keys present in that type.

---

## How Does `keyof` Work?

Suppose a type is declared like this:

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};
```

Now if we write:

```ts
type PersonKeys = keyof Person;
```

TypeScript will infer:

```ts
// PersonKeys will have the value: "name" | "age" | "isStudent"
```

That is, `keyof Person` returns `"name" | "age" | "isStudent"` as a union type.

---

## Why is `keyof` Used?

The main purpose of using `keyof` is to use the names of the properties of the object in a **type-safe** way. This:

* Reduces the possibility of using the wrong key
* Makes type checking stronger during development

### It is also used:

* To provide **type constraints** in generic functions
* To create **type-safe** get/set functions
* To use the keys of an object **dynamically**

It is widely used in TypeScript applications.

---

## A Real-World Example

Let's look at a real-world example where a generic `getProperty` function is created using `keyof`:

```ts
type Car = {
  brand: string;
  model: string;
  year: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
};

const carBrand = getProperty(myCar, "brand"); // "Toyota"
const carYear = getProperty(myCar, "year");   // 2021
```

Here, by `K extends keyof T`, we are saying that only those values will be accepted as keys that exist in type `T` (here, `Car`). As a result, if you provide the wrong key, TypeScript will immediately show an error.

---

## Example of an Error

```ts
getProperty(myCar, "color");
//  Error: Argument of type '"color"' is not assignable to parameter of type '"brand" | "model" | "year"'
```

Here, there is no property named `"color"` in type `Car`, so TypeScript throws an error — that's **type safety**.

---

## Conclusion

TypeScript's `keyof` keyword is a **powerful tool** that helps developers write **type-safe** and **bug-resistant** code by extracting the key types of properties of object types. It is especially useful for:

* Generic functions
* Utility types
* Type mappings

Mastering `keyof` enhances your ability to build robust and maintainable TypeScript applications.
