import classes from './Login.module.css'
import Card from '../UI/Card/Card'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { AuthContext } from '../Auth-context/auth-context'
import {useContext,useReducer,useState,useEffect,useRef} from 'react'

const nameReducer =(state,action)=>{
    switch(action.type){
        case('SET_NAME'):return {value:action.value,isValid:action.value.includes('@')};
        default:return {value:'',isValid:false}
    }
    
}
const passwordReducer =(state,action)=>{
    switch(action.type){
        case('SET_PASSWORD'):return {value:action.value,isValid:action.value.trim().length > 6};
        default:return {value:'',isValid:false}
    }
    
}

const Login =(props)=>{
    const ctxlogin =useContext(AuthContext)
    const nameRef = useRef()
    const passwordRef =useRef()
    const [formIsValid,setformIsValid] = useState(false)
    const [nameState,dispatch]=useReducer(nameReducer,{
        value:'',
        isValid:null
    })
    const [passwordState,dispatching]=useReducer(passwordReducer,{
        value:'',
        isValid:null
    })

    const {isValid:nameValid} = nameState
    const {isValid:passwordValid} = passwordState
    useEffect(()=>{
       const timer = setTimeout(()=>{
            if(nameValid && passwordValid){
                setformIsValid(true)
            }
        },1000)
        return()=>clearTimeout(timer)
    },[nameValid,passwordValid])

    const loginHandler = ctxlogin.login
    const onSubmitHandler = (event)=>{
        event.preventDefault()
        if(formIsValid){
            loginHandler()
        }else if(nameValid && !passwordValid){
            passwordRef.current.focus()
        }else{
            nameRef.current.focus()
        }
        
    }

    const onChangeName =(event)=>{
        dispatch({type:'SET_NAME',value:event.target.value})
    }

    const onChangePassword=(event)=>{
        dispatching({type:'SET_PASSWORD',value:event.target.value})
    }
    return(
      <Card className={classes.mainInput}>
          <form onSubmit={onSubmitHandler}>
          <Input 
          label="E-Mail" 
          type="email"
          change={onChangeName}
          valid={nameState.isValid}
          value={nameState.value}
          ref={nameRef}/>
          <Input 
          label="Password" 
          type="password"
          change={onChangePassword}
          valid={passwordState.isValid}
          value={passwordState.value}
          ref={passwordRef}/>
          <div className={classes.actions}>
          <Button type='submit'>
              Login
          </Button>
          </div>
          </form>
      </Card>
    )
}

export default Login