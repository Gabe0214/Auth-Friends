import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const AddFriend = props => {
    const [addFriend, setAddFriend ] = useState({
        name: '',
        age: '',
        email: ''
    })

  const onChange = e => {
      setAddFriend({...addFriend, [e.target.name]: e.target.value})
  }

const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/friends', addFriend)
    .then(res => {
        setAddFriend({...addFriend, name: '', age:'', email: ''})
    })
    .catch(error => {
        console.log(error)
    })
}


  return(
      <div>
          <form onSubmit={onSubmit}>
              <input name ='name' placeholder='Name' onChange={onChange} value ={addFriend.name}/>
              <input name ='age' placeholder='age' onChange={onChange} value ={addFriend.age}/>
              <input name ='email' placeholder='Email' onChange={onChange} value ={addFriend.email}/>
              <button>Add Friend</button>
          </form>
      </div>
  )
}

export default AddFriend;

