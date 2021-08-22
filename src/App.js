import React,{useContext} from 'react'
import MainHeader from './Components/Navigation/MainHeader'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import { AuthContext } from './Components/Auth-context/auth-context'



const App =()=>{
    const ctxlogin =useContext(AuthContext)
    return(
     <React.Fragment>
        <MainHeader/>
        {!ctxlogin.isLogged && <Login/>}
        {ctxlogin.isLogged && <Home/>}
        </React.Fragment>
    )
}

export default App