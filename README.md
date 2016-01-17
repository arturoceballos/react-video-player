# react-video-player

Practicing creating components to make a simple video player in React

1. Clone repo
2. `npm install`
3. Go to `localhost:8080`
4. [Import React libraries](#importing-react-libraries)
    * React
    * ReactDOM
5. Create 1st React component
    * [Functional components](#functional-components-es5-vs-es6)
        * w/ES5 syntax
        * w/ES6 syntax
6. [Render component to the DOM](#rendering-components-to-the-dom)
7. [Create Class-Based component](#creating-a-class-based-component) that'll be nested in our first component
    * Explain the difference between Functional component's and Class-Based component's
8. [Add an onChange event handler](#adding-an-event-handler) to our component
    * `onChange={someUpdateMethod}`
    * Create update method
9. [Refactor our component](#refactoring-our-component-even-further)
    * Explain that `render ()` is a method on the React.Component object used for rendering component to the DOM
        * `constructor ()` is the same thing
    * Explain super and how we're accessing properties on the parent class
    * Explain the meaning of [this](#the-true-meaning-of-this) inside ES6 classes vs. functions
10. [Update the value of our "Search Bar"](#updating-the-value-of-our-input)

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
We only create Function-based components when we're not changing the state of a component.
Try to use these as often as possible.

## <a name="rendering-components-to-the-dom"></a>Rendering Components to the DOM

To render a component to the DOM invoke the render method on the ReactDOM object and pass in 2 arguments.

1. Your component that you want rendered (using jsx syntax).

2. Where you want your component to be rendered on the page.

```javascript
ReactDOM.render(<App />, document.querySelector('.container'));
```

## <a name="creating-a-class-based-component"></a>Creating a Class Based Component

We only create Class-based components when we're trying to change the state of the component.
To start, we'll

1. Create a component
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

Adding the `onChange` event handler to our input
```javascript
return <input onChange={this.onInputChange} />;
```

Creating the event handler
```javascript
onInputChange (event) {
    console.log(event.target.value)
}
```

We can take advantage of the arrow functions in ES6 to clean up our code. We'll refactor our `<input/>` so it looks a little more like this:
```javascript
return <input onChange={(event) => console.log(event.target.value)} />;
```
You can even get rid of the parentheses where our arguments go if we only have one argument
```javascript
event => console.log(event.target.value)
```

## The True Meaning of `this`
With ES6 classes, the meaning of `this` is a little bit different. It's cool because when we're trying to get access to something outside the scope of our ES5 functions, we're used to doing something like the following:

```javascript
var a = this;

function () {
    console.log(a);
}
```
We don't have to worry about workarounds like the one above with ES6 classes.

## Refactoring Our Component Even Further

The constructor method is used to access properties on the React object.
To do this we need to use the `super()` method.
Now we can access properties from our parent (Component) class like `state`.

```javascript
class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = { term: '' };
    }
```
To render our components we use the `render ()` method.

```javascript
    render () {
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value})} />
                Value of the input: {this.state.term}
            </div>
        );
    }
}
```
This best demonstrates the difference between Function-based components and Class-based components and why we use Class-based components to change the state of a component.

### Updating the Value of our `<input/>`

Although what we're typing in our "Search Bar" is updating the value of our state, we're not updating the value of our "Search Bar".
Let's do that now.

```javascript
<input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value})} />
```