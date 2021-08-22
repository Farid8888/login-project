import classes from './Navigation.module.css'
import { AuthContext } from '../Auth-context/auth-context'
import {useContext} from 'react'


const Navigation =()=>{
    const ctxlogin = useContext(AuthContext)
    const logout = ctxlogin.logout
    return(
        ctxlogin.isLogged && <nav className={classes.mainNav}>
            <ul>
                <li>
                    <a href="/">Users</a>
                </li>
                <li>
                    <a href="/">Admin</a>
                </li>
                <li className={classes.backgrLi} onClick={logout}>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation