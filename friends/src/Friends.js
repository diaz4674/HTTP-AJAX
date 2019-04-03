import React from 'react';

const Friends = (props) =>{
    return (
        <div>
        <form>

        </form>
        <h2> Current Friends</h2>
        <div>
            {props.friends.map((friend, i) => {
               return (
                   <div key = {i}> 
                    <h3> {friend.name}</h3>
                    <p> Is {friend.age} years old. </p>
                    <p> E-mail: {friend.email}</p>

                   </div>
               )
           })}
        </div>
    </div>
    )
}

export default Friends;