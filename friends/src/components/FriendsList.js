import React from 'react';

const FriendsList = props => {

    const handleClick = e => {
        props.deleteFriend(props.friends.id)
    }

        return (
            <div> 
        <div>
                   <div > 
                   <span onClick = {handleClick}> X </span>
                    <h3 > {props.friends.name}</h3>
                    <p> Is {props.friends.age} years old. </p>
                    <p> E-mail: {props.friends.email}</p>
                   </div>
        </div>
        </div>
        
    )
}



export default FriendsList;