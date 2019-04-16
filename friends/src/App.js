import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Form from './components/Form'

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

deleteFriend = id => {

  axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {console.log(err)})
}


  render() {
    return (
      <div className="App">

        <Route path = '/' render = {props => <Form {...props} updateFriend = {this.updateFriend}/>} />
        <h2> Current Friends</h2>
        <Route exact path = '/' render = {props => <Friends {...props} friends = {this.state.friends} updateFriend = {this.updateFriend} deleteFriend = {this.deleteFriend}/>} />
      </div>
    );
  }
}

export default App;
