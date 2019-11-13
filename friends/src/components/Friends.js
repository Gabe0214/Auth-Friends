import React,{useState} from 'react'
import Friend from './Friend'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

const Friends = (props) => {
    const [friends, setFriends] = useState([])


  axiosWithAuth()
  .get('/friends')
  .then(res => {
     //console.log(res)
      setFriends(res.data)
  })
.catch(error => {
    console.log(error)
})




    return(
        <div>
            <h1>Friends</h1>
            <AddFriend/> 
            {friends.map(friend => (
                <Friend friend = {friend}/> 
            ))}
        </div>
    )

}

export default Friends