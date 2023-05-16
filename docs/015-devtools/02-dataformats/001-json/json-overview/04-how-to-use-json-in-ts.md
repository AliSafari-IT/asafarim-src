---
sidebar_position: 3
title: "How to use JSON"
slug: "/how-to-use/json-in-ts" 
---
Here's a small example of how to use JSON in TypeScript:

```js
interface Person {
  name: string;
  age: number;
}

const jsonString = '{"name": "John", "age": 30}';
const person: Person = JSON.parse(jsonString);

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
```
