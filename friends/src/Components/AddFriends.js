import React from 'react'

const AddFriends = (props) => {
    const {addFriend} = props
    const initialState ={
        name: '',
        email: ''
    }

    const [user,setUser] = useState(initialState)

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
        
    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        const newFriend = {
            name: user.name,
            email: user.email,
            id: Date.now()
        }
        console.log(newFriend)
        axiosWithAuth().post('friends', newFriend)
            .then(res => {
                console.log(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
                setError('err')
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

<label>
    Name:
</label>
<input
type='text'
name='name'
value={user.name}
onChange={handleChanges}
/>

<label>
    Email:
</label>
<input 
 type='text'
 name='email'
 value={user.email}
 onChange={handleChanges}
 />

 <button>Add Friend</button>


</form>
        </div>
    )
}

export default AddFriends
