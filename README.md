# FizzBuzz

Fizz Buzz is a Coding Challenge, a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". 

Below are the basic steps for creating a React app named "Fizzbuzz." These steps include setting up a new React project, writing a simple FizzBuzz component, and running the app.

---

## Step 1: Create React App
```js
npx create-react-app fizzbuzz
cd fizzbuzz
```

## Step 2: Create FizzBuzz Component
In the src directory, create a new file named `FizzBuzz.js`. Check the code code above.

## Step 3: Use FizzBuzz Component in App
Replace the content of src/App.js with the following:

```js
// src/App.js
import React from 'react';
import './App.css';
import FizzBuzz from './FizzBuzz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FizzBuzz />
      </header>
    </div>
  );
}

export default App;
```

## Step 4: Run the App
```js
npm start
```
Visit http://localhost:3000 in your browser to see the FizzBuzz app.

## Additional Steps (Optional)
+ Customize the FizzBuzz logic or styling based on your preferences.
+ Deploy your React app to platforms like GitHub Pages, Netlify, or Vercel.
