import React,{ useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const Login = props => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        passoword: ''
    })

const onChange = e => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
}

const onSubmit = e => {
    e.preventDefault()
   axiosWithAuth()
   .post(`/login`, loginForm)
   .then(res => {
       localStorage.setItem('token', res.data.payload)
       console.log(res)
       props.history.push('/friends')

   })
   .catch(error => {
       console.log(error)
   })

}


    return(
        <div>
            <h2>Log In</h2>
            <form onSubmit={onSubmit}>
                <input type ='text' name='username' value ={loginForm.username} onChange={onChange}/>
                <input type ='password' name='password' value ={loginForm.password} onChange={onChange}/>
                <button >Log In</button>
            </form>
        </div>
    )
}

export default Login 
