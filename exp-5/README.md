# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

github url:()
