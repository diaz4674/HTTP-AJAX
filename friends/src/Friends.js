import React from 'react';
import FriendsList from './components/FriendsList';


const Friends = props => {



    return (
        <div> 
            {props.friends.map((friend, i) => <FriendsList friends = {friend} deleteFriend = {props.deleteFriend} key = {i}/>)}

        </div>
    )
    }

export default Friends;