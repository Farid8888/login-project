import {createContext,useState,useEffect} from 'react'



export const AuthContext =createContext({
    isLogged:false,
    login:()=>{},
    logout:()=>{}
})



const AuthContextProvider =(props)=>{
    useEffect(()=>{
        const loginKey = localStorage.getItem('login')
        if(loginKey === '1'){
            setisLogged(true)
        }
       },[])

const [isLogged,setisLogged] = useState(false)

const loginHandler =()=>{
    localStorage.setItem('login','1')
    setisLogged(true)
}

const logoutHandler =()=>{
    localStorage.removeItem('login')
    setisLogged(false)
}

    return(
         <AuthContext.Provider value={{isLogged:isLogged,login:loginHandler,logout:logoutHandler}}>
             {props.children}
         </AuthContext.Provider>
    )
}

export default AuthContextProvider

