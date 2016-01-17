# react-video-player

Practicing creating components to make a simple video player in React

1. Clone repo
2. `npm install`
4. Go to `localhost:8080`
5. [Import React libraries](#importing-react-libraries)
    * React
    * ReactDOM
6. Create 1st React component
    * [Functional components](#functional-components-es5-vs-es6)
        * w/ES5 syntax
        * w/ES6 syntax
7. [Render component to the DOM](#rendering-components-to-the-dom)
8. [Create Class-Based component](#creating-a-class-based-component) that'll be nested in our first component
    * Explain the difference between Functional component's and Class-Based component's
9. [Add an onChange event handler](#adding-an-event-handler) to our component
    * `onChange={someUpdateMethod}`
    * Create update method
10. Refactor our component
    * Explain that `render ()` is a method on the React.Component object used for rendering component to the DOM
        * `constructor ()` is the same thing
    * Explain super and how we're accessing properties on the parent class
    * Explain the meaning of `this` inside ES6 classes vs. functions

## <a name="importing-react-libraries"></a>Importing React Libraries

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```

## <a name="functional-components-es5-vs-es6"></a>Functional Components ES5 vs ES6

### ES5
```javascript
    var App = function () {
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

## <a name="creating-a-class-based-component"></a>Creating a Class Based Component

1. Create component
2. Export your new component
3. Import your new component into your main.js file (index.js in our case)
4. Render our new component into our previous function based component we created earlier

### Creating component using ES6 Class syntax
```javascript
class SearchBar extends React.Component {
    render () {
        return <input/>
    }
}
```

You can also pull off the Component property from the React object and extend it directly
```javascript
import React, { Component } from 'react';
```
And your component will look like
```javascript
class SearchBar extends Component {
    render () {
        return <input/>
    }
```

### Exporting the component
```javascript
export default SearchBar;
```

### Importing Component and Rendering it in index.js

```javascript
import SearchBar from './components/search_bar';
```
And rendering it
```javascript
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};
```

##Adding an event handler

Creating the event handler
```javascript
onInputChange (event) {
    console.log(event.target.value)
}
```

Adding the `onChange` event handler to our input
```javascript
return <input onChange={this.onInputChange} />;
```