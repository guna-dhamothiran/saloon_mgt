# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Description:

In this experiment, we developed a simple counter application that allows users to increment and decrement a counter value. The application has been divided into separate components to improve code organization and maintainability.

Steps:
Component Creation (CounterApp.js):

We created a React component named CounterApp in a separate file called CounterApp.js.
The component uses the useState hook to manage the state of the counter, initialized with a value of 0.
We implemented two functions:
handleIncrement: Increments the counter value by 1.
handleDecrement: Decreases the counter value by 1.
Inside the JSX, the current counter value is displayed, along with two buttons: "Increment" and "Decrement." The buttons call the respective functions to update the state.
App File (App.js):

In the App.js file, we imported the CounterApp component and rendered it inside the main App component, allowing the counter to be displayed and functional.
Styling (CounterApp.css):

A CSS file (CounterApp.css) was created to style the component. The CSS handles the layout, button design, and general appearance of the counter application.

github url:(https://github.com/guna-dhamothiran/UID/tree/main/exp-5)
