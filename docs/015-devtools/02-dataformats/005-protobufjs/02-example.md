---
sidebar_position: 1
title: "Example in TypeScript"
---

Here's an example of how to define and use a Protocol Buffers message type in TypeScript using the *protobufjs* library:

First, you need to install the library:
```javascript
npm install protobufjs
```

Then, you can define your message type in a *.proto* file, like this:

```javascript
syntax = "proto3";

message Person {
  string name = 1;
  int32 age = 2;
  repeated string email = 3;
}
```

This defines a simple message type called Person with three fields: name (a string), age (an integer), and email (a repeated string).

Next, you can use the protobufjs library to load your message type and create instances of it in your TypeScript code:
```javascript
import { load } from 'protobufjs';

// Load the message type from the .proto file
const root = await load('path/to/person.proto');

// Get a reference to the Person message type
const Person = root.lookupType('Person');

// Create an instance of the Person message
const person = Person.create({
  name: 'Alice',
  age: 30,
  email: ['alice@example.com'],
});

// Encode the message as a binary buffer
const buffer = Person.encode(person).finish();

// Decode the binary buffer back into a Person message
const decodedPerson = Person.decode(buffer);

console.log(decodedPerson); // { name: 'Alice', age: 30, email: ['alice@example.com'] }
```

This code loads the Person message type from the .proto file using the load function, gets a reference to the type using lookupType, creates an instance of the message using create, encodes the message as a binary buffer using encode, decodes the binary buffer back into a Person message using decode, and finally logs the decoded message to the console.
