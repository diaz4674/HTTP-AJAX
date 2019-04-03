import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import axios from 'axios';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: []
    };
}
componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => {
        this.setState({friends: response.data})
    })
    .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <Route path = '/friends' render = {props => <Friends {...props} friends = {this.state.friends} />} />
      </div>
    );
  }
}

export default App;
