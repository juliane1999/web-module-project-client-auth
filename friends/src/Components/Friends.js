import axios from 'axios';
import React from 'react'
import AddFriends from './AddFriends';
import axiosWithAuth from './axiosWithAuth'

class Friends extends React.Component {
    state={
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }
    
    getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            this.setState({
                friends:res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    };

    // addFriend = (newFriend) => {
    //     axiosWithAuth()
    //     .post('/friends',newFriend) 
    //     .then(res => {
    //         this.setState({
    //             ...this.state,
    //             friends:res.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
    
    render() {
        const friends = this.getFriends();
    return(
        <div>
           {/* { this.state.friends.map(friend => { return <AddFriends friend={friend}/>})} */}
        <AddFriends />
        {this.state.friends.map(friend => (
            <div key={friend.id}> 
                <div>
                    Name:{friend.name}
                    Age:{friend.age}
                    Email:{friend.email}
                </div>
            </div>
        ))}
        </div>
    )}
}


export default Friends
