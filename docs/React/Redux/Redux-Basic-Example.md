---
sidebar_position: 1 
title: "Redux vs Redux toolkit"
---

## Redux in React
Redux is a state management library for JavaScript applications, including React applications. It provides a centralized store that holds the state of the application, and allows you to manage state changes in a predictable way.

In a React application, each component can have its own local state, but managing the state of a large application can be challenging. Redux provides a global store where you can store the state of the entire application in one place. This makes it much easier to manage the state of the application as a whole.

When a component needs to update the state, it dispatches an action to the Redux store. An action is a plain JavaScript object that describes what happened. The action is then processed by a reducer, which is a pure function that takes the current state and the action as input, and returns a new state.

The reducer calculates the new state based on the current state and the action, and returns the new state to the store. The store then notifies all the components that are subscribed to the store that the state has changed. The components can then re-render based on the new state.

By using Redux, you can write more predictable and maintainable code, and make it easier to reason about the state of your application. It also makes it easier to debug your application, as you can see the entire state of the application in one place.
## State flow in Redux
Following table summarizes the state flow in a Redux application
<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>The application state is stored in the Redux store, which is a plain JavaScript object.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>The components in the application can dispatch actions to the store to update the state.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>An action is a plain JavaScript object that describes what happened, and contains a type property that specifies the type of action.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>When an action is dispatched, it is sent to the reducers.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>A reducer is a pure function that takes the current state and the action as input, and returns a new state.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>The reducer calculates the new state based on the current state and the action, and returns the new state to the store.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>The store updates its state with the new state returned by the reducer.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>The store then notifies all the components that are subscribed to the store that the state has changed.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>The components can then re-render based on the new state.</td>
    </tr>
  </tbody>
</table>

## Redux Toolkit

Redux Toolkit is a set of utility functions and opinionated defaults that simplify the process of writing Redux code. It is designed to be a more efficient and streamlined way of writing Redux applications, and provides several benefits over traditional Redux:

<table>
  <thead>
    <tr>
      <th>Benefit</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Simplified syntax: Redux Toolkit provides a simplified syntax for defining actions and reducers, making it easier to write and read Redux code.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Automatic reducer generation: Redux Toolkit can automatically generate reducers based on the functions you define, which can save you time and reduce the amount of boilerplate code you need to write.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Immutable state updates: Redux Toolkit uses the Immer library under the hood to enable you to write simpler, more intuitive code for updating state immutably.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Built-in middleware: Redux Toolkit includes several built-in middleware functions, such as `createAsyncThunk` and `createSlice`, that make it easier to handle common use cases like fetching data from an API or managing state for a specific feature.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Better performance: By using Redux Toolkit, you can reduce the amount of boilerplate code you need to write, which can help your application run faster and more efficiently.</td>
    </tr>
  </tbody>
</table>
