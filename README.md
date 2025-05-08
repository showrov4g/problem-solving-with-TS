# 📘 Blog 1: Understanding the `keyof` Keyword in TypeScript

TypeScript is a type-safe language based on JavaScript that makes the coding experience of developers more precise and safe. One of the important features of TypeScript is the `keyof` keyword. This keyword is mainly used to extract the types of property keys that are present in a kind.

---

## 🧹 In This Blog, We Will Discuss:

* What is the `keyof` keyword?
* How does it work?
* Why is it used?
* An explanation with a real example

---

## 🔍 What is `keyof`?

`keyof` is a **type operator** that takes an object type as input and returns a **union type** of the property keys present in that type.

In simple terms, suppose you have an object type — `keyof` extracts the names (as string literal types) of all the keys present in that type.

---

## ⚙️ How Does `keyof` Work?

Suppose a type is declared like this:

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};
```

Now, if we write:

```ts
type PersonKeys = keyof Person;
```

TypeScript will evaluate this to:

```ts
// PersonKeys will have the value: "name" | "age" | "isStudent"
```

That is, `keyof Person` returns `"name" | "age" | "isStudent"` as a union type.

---

## ✅ Why is `keyof` Used?

The main purpose of using `keyof` is to use the names of the properties of an object in a **type-safe** way. This:

* Reduces the possibility of using incorrect keys
* Improves type-checking during development
* Helps in creating generic and utility types

### 📦 Other Use Cases:

* To provide **type constraints** in generic functions
* To create **type-safe** get/set functions
* To use the keys of an object **dynamically**

It is **widely used** in large-scale TypeScript codebases.

---

## 🧪 Real-World Example

Let's look at an example where a generic `getProperty` function is created using `keyof`:

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

const carBrand = getProperty(myCar, "brand"); // ✅ "Toyota"
const carYear = getProperty(myCar, "year");   // ✅ 2021
```

Here, `K extends keyof T` means that only the existing keys of type `T` (in this case `Car`) are allowed. So if you provide the wrong key, TypeScript will immediately show an error.

---

## ❌ Example of an Error

```ts
getProperty(myCar, "color");
// ❌ Error: Argument of type '"color"' is not assignable to parameter of type '"brand" | "model" | "year"'
```

Since `"color"` is not a property of `Car`, TypeScript throws an error. That’s **type safety** in action.

---

## 🏋️ Conclusion

TypeScript's `keyof` keyword is a **powerful tool** that helps developers write type-safe and bug-resistant code by extracting the key types of object properties. It is very useful for:

* Generic functions
* Utility types
* Type mappings

Understanding and using `keyof` properly can greatly enhance the reliability of your TypeScript codebase.
