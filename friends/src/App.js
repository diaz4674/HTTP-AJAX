import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = '/friends' render = {props => <Friends {...props}/>} />
      </div>
    );
  }
}

export default App;