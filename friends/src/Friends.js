import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
        };
    }
    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({friends: response.data})
            console.log(this.state.friends)
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <form>

                </form>
                <h2> Current Friends</h2>
                <div>
                   <p> {this.state.friends.map(friend => {
                       return (
                           <div> 
                            <h3> {friend.name}</h3>
                            <p> Is {friend.age} years old. </p>
                            <p> E-mail: {friend.email}</p>
                           </div>
                       )
                   })}</p> 
                </div>
            </div>
        )
    }
}

export default Friends;