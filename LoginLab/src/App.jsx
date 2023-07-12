import { useState } from 'react'
import { UserContext } from './UserContext'
import LogIn from './Components/Login'
import './App.css'

function App() {
  const [userInfo, setUserInfo] = useState({
    userName:'jen',
    password: 'jen'
  })
  
    return (
    
        <div className="app">
          
  
          <div className="main">
            <UserContext.Provider value={{
              userInfo, setUserInfo }}>
              <LogIn/>
            </UserContext.Provider>
          </div>
   </div>
  )
}

export default App
