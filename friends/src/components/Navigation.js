import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = () => {

    return(
        <div>
            <Link to='/login'>Log in</Link>
            <Link to='/friends'>Friends</Link>
        </div>
    )
}

export default Navigation 