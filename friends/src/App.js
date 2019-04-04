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
};

updateFriend = newFriend => {
  this.setState({friends: newFriend});
};


  render() {
    return (
      <div className="App">
        <Route exact path = '/' render = {props => <Friends {...props} friends = {this.state.friends} updateFriend = {this.updateFriend}/>} />
      </div>
    );
  }
}

export default App;
