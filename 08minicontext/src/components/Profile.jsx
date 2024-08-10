import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const userobj = useContext(UserContext)
    
    if (!userobj.user) return <div>please login</div>

    return <div>Welcome {userobj.user.username}</div>
}

export default Profile