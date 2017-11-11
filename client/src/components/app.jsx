import React from 'react';
import ReactDom from 'react-dom';

// Main app component
// Stateless function, benefits are less code and is faster than classes.
// Use stateless function if you don't need to have React life cycle or constructor methods.
const App = () =>
  (
    <div>
      <h1>Hello world!!!</h1>
    </div>
  );

export default App;
