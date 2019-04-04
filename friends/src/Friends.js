import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
            name: '',
            age: '',
            email: '',
            id: ''
            }
        }
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        this.setState(prevState => ({friend: {...prevState.friend, [e.target.name]: value}
        }));
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/friends', this.state.friend )
            .then(response => {
                this.props.updateFriend(response.data);
                this.props.history.push('/')
                e.persist();
            })
            .catch(err => console.log(err))
    }

     deleteFriend = e => {
         console.log(`http://localhost:5000/friends/${e.id}`)

    }

    render(){
    return (
        <div>
        <form onSubmit = {this.handleSubmit}>
            <input type ='text' name = 'name' onChange = {this.changeHandler} placeholder = 'Name' value = {this.state.friend.name}/> 
            <input type ='text' name = 'age' onChange = {this.changeHandler} placeholder = 'Age' value = {this.state.friend.age}/> 
            <input type ='text' name = 'email' onChange = {this.changeHandler} placeholder = 'Email' value = {this.state.friend.email}/> 
        <button type = 'submit' > Add Friend </button>
        </form>
        <h2> Current Friends</h2>
        <div>
            {this.props.friends.map((friend, id) => {
               return (
                   <div > 
                   <span onClick = {this.deleteFriend}  key = {friend.id}> X </span>
                    <h3 > {friend.name}</h3>
                    <p> Is {friend.age} years old. </p>
                    <p> E-mail: {friend.email}</p>
                   </div>
               )
           })}
        </div>
    </div>
    )
    }
}

export default Friends;