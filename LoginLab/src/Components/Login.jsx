import { useState, useContext } from 'react'
import UserContext from '../UserContext'

export default function LogIn () {
    const initialState = {
        userName:"",
        password:""
    }

    const [ formState, setFormState ] = useState(initialState)
    const [ isActive, setIsActive ] = useState(false)
    const { userInfo, setUserInfo } = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault()
        const curDate = new Date().toLocaleString()
        console.log(`${formState.password} formState`)
        console.log(`${userInfo.password} userInfo`)

        if(formState.password === userInfo.password) {
            setUserInfo({...userInfo, userName: formState.userName, lastLogIn: curDate})
            setIsActive(false)
            console.log(`logged in`)
        } else {
            setIsActive(true)
            setFormState({...formState, password:""})
        }
        console.log(userInfo)
    }
    const handleCancel = e => {
        setFormState[initialState]
    }
    const handleChange = e => {
        setFormState[{...formState, [e.target.id]: e.target.value}]
    }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <form>
                <label htmlFor="username"> Username:</label>
                <input type="text" placeholder="Username" id="userName" onChange={handleChange} value={formState.userName}></input>
                <label htmlFor="password">Password:</label>
                <input type= "password" placeholder='Password' id="password" onChange={handleChange} value={formState.password}></input>
                <p className="invalid" style={{display: isActive? "" : "none"}}>incorrect</p>
                <button type= "submit">Submit</button>
                <button type= "button" onClick={handleChange}>Cancel</button>
            </form>
        </div>
    )
}