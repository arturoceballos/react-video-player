import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCR6E9yQT_yXvf6pmTSFKg32T687Er48XM';
// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            hi!
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));