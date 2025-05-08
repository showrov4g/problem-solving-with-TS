* blog 1
# What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript is a type-safe language based on JavaScript that makes the coding experience of developers more precise and safe. One of the important features of TypeScript is the keyof keyword. This keyword is mainly used to extract the types of property keys that are present in a kind.

## In this blog, we will discuss:

- What is the keyof keyword?

- How does it work?

- Why is it used?

An explanation with a real example.

- What is keyof?

Keyof is a type operator that takes an object type as input and returns a union type of the property keys present in that type.

In simple terms, suppose you have an object type, keyof extracts the names (as string literal types) of all the keys present in that type.

- How does keyof work?

Suppose a type is declared like this:

<pre> <code>``` type Person = {
name: string;
age: number;
isStudent: boolean;
}; ``` </code></pre>
Now, if we write keyof Person, TypeScript will give us the following type:

ts
Copy
Edit
type PersonKeys = keyof Person;
// PersonKeys will have the value: "name" | "age" | "isStudent"
That is, keyof Person returns "name" | "age" | "isStudent" as a union type.

✅ Why is keyof used?

The main purpose of using keyof is to use the names of the properties of the object in a type-safe way. This reduces the possibility of using the wrong key in the code and makes type checking stronger during development.

It is also:

To provide type constraints in generic functions

To create type-safe get/set functions

To use the keys of an object dynamically

It is widely used.

🧪 A real-world example
Let's look at a real-world example where a generic getProperty function is created using keyof:

ts
Copy
Edit
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

const carYear = getProperty(myCar, "year"); // 2021
Here, by K extends keyof T, we are saying that only those values ​​will be accepted as keys that exist in type T (here Car). As a result, if you provide the wrong key, TypeScript will immediately show an error.

* Example of an error
ts
Copy
Edit
getProperty(myCar, "color"); // ❌ Error: Argument of type '"color"' is not assignable to parameter of type '"brand" | "model" | "year"'
Here, there is no property of type Car in type "color", so TypeScript is giving an error — that's type safety.

# Conclusion
TypeScript's keyof keyword is a powerful tool that helps developers write type-safe and bug-resistant code by extracting the key types of properties of object types. It is very useful for generic functions, utility types, and type mappings.