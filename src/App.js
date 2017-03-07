import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './test.scss';

import sdk from 'react-components-lib'
let ActionButton = sdk.ActionButton
// import { ActionButton } from 'react-components-lib/src/sdk/ActionButton/ActionButton'
// import 'react-components-lib/src/sdk/ActionButton/ActionButton.scss'
// <ActionButton onClick={this.handleButtonClick.bind(this)} name="Click me now!" />
// <ActionButton name="Black button" onClick={this.handleButtonClick.bind(this)} withColor="black" />

class App extends Component {
  handleButtonClick = (e) => {
    e.preventDefault()
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="testScss">Test scss.
          <ActionButton name="Black button" onClick={this.handleButtonClick.bind(this)} withColor="black" />
        </div>
      </div>
    );
  }
}

export default App;
