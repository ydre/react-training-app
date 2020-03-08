import React from 'react';
import './App.css';

function getButtonText(){
  return 'click click';
}

const App = () => {
 const buttonText = 'Click me';


  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}} >
        {buttonText}
        {getButtonText()}
      </button>
    </div>
  );
}

export default App;
