# react-video-player

Practicing creating components to make a simple video player in React

1. Clone repo
2. `npm install`
4. Go to `localhost:8080`
5. [Import React libraries](#import-react-libraries)
    * React
    * ReactDOM
6. Create 1st React component
    * [Functional components](#functional-components-es5-vs-es6)
        * w/ES5 syntax
        * w/ES6 syntax
7. [Render component to the DOM](#rendering-components-to-the-dom)
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

## <a name="functional-components-es5-vs-es6"></a>Functional Components ES5 vs ES6

### ES5
```javascript
    const App = function () {
        return <div>Hi!</div>
    }
```
### ES6
```javascript
    const App = () => {
        return <div>Hi!</div>
    };
```

## <a name="rendering-components-to-the-dom"></a>Rendering Components to the DOM

To render a component to the DOM invoke the render method on the ReactDOM object and pass in 2 arguments.

1. Your component that you want rendered (using jsx syntax).

2. Where you want your component to be rendered on the page.

```javascript
ReactDOM.render(<App />, document.querySelector('.container'));
```

## <a name="importing-react-libraries"></a>Importing React Libraries

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```