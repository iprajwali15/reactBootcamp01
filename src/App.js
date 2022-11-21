import React from 'react';
import ReactDOM from 'react-dom/client';
//const heading = React.createElement('h1',{},'Hello world from React');

// adding id to h1 element
const heading = React.createElement('h1',{id:'title'},'Hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);