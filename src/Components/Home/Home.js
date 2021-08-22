import Card from "../UI/Card/Card"
import classes from './Home.module.css'
import Button from "../UI/Button/Button"
import { AuthContext } from "../Auth-context/auth-context"
import {useContext} from 'react'


const Home =()=>{
    const ctxlogin = useContext(AuthContext)
    const logout = ctxlogin.logout
    return(
      <Card className={classes.home}>
          <h1>Welcome back</h1>
          <Button className={classes.actions} type='button' clicked={logout}>
              Logout
          </Button>
      </Card>
    )
}

export default Home