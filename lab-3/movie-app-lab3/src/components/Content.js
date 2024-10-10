// React library
import React from 'react';

// Functional component 'Content' that displays a message and the current times
const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2> {/* Displays the current time using JavaScript's Date object */}
    </div>
  );
}

// Exporting the 'Content' component for use in other parts of the app
export default Content;