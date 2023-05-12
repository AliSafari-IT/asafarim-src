---
sidebar_position: 4050 
title: "JSON Deserialization"
slug: "../deserialization"
---

## In brief
Decoding and deserialization are the opposite process of [encoding and serialization](/docs/serialization) → turning a string into a data structure. 

## In details
Serialization is the process of converting an object or data structure into a format that can be stored or transmitted. In the context of JSON, serialization refers to the process of converting a JavaScript object into a JSON string so that it can be sent over the network or stored in a file. Similarly, deserialization is the process of converting a JSON string back into a JavaScript object.

## When needed?
We use deserialization of JSON when we receive a JSON string from a client or server and need to convert it back into an object or data structure that can be manipulated in code.

For example, suppose you are building a web application that allows users to search for and view information about books. When a user performs a search, your application might make a request to a server that returns a JSON string representing a list of books that match the search criteria. To display this list of books on the webpage, you need to convert the JSON string into an array of JavaScript objects representing the individual books. This process involves deserializing the JSON string into a JavaScript object or data structure that can be used in your code.

Similarly, when a user submits a form with data, the data is often sent to the server in the form of a JSON string. The server needs to deserialize this string into a data structure that can be used to process the user's input and perform some action, such as updating a database or sending an email.

In general, deserialization of JSON is used whenever we need to convert a JSON string into an object or data structure that can be used in code.