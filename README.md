# react-video-player

Practicing creating components to make a simple video player in React

1. Clone repo
2. `npm install`
4. Go to `localhost:8080`
5. Import React libraries
    * React
    * ReactDOM
6. Create 1st React component
    * Functional componenent w/ES5 syntax
* ```javascript
    const App = function() {
        return <div>Hi!</div>
    }
  ```

    * Functional componenent w/ES6 syntax

7. Render component to the DOM
8. Create Class-Based component that'll be nested in our first component
    * Explain the difference between Functional component's and Class-Based component's
9. Add an onChange event handler to our component
    * `onChange={someUpdateMethod}`
    * Create update method
10. Refactor our component
    * Explain that `render ()` is a method on the React.Component object used for rendering component to the DOM
        * `constructor ()` is the same thing
    * Explain super and how we're accessing properties on the parent class
    * Explain the meaning of `this` inside ES6 classes vs. functions