import axios from 'axios';
import React from 'react'
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

    addFriend = (newFriend) => {
        axiosWithAuth()
        .post('/friends',newFriend) 
        .then(res => {
            this.setState({
                ...this.state,
                friends:res.data
            })
        })
        .catch(err => {
            console.log(err);
        })


   
    return(
        <div>
            
        </div>
    )
    
}
}

export default Friends
