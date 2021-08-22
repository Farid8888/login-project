import classes from './Input.module.css'
import React,{useRef,useImperativeHandle} from 'react'


const Input =React.forwardRef((props,ref)=>{
    const inputref =useRef()
   useImperativeHandle(ref,()=>{
       return {
           focus:()=>inputref.current.focus()
       }
   })

    return(
        <div className={props.valid === false ? `${classes.input} ${classes.invalid}` : classes.input}>
              <div className={classes.main}>
                  <label htmlFor={props.id}>{props.label}</label>
                  <input id={props.id} value={props.value} type={props.type} onChange={props.change} ref={inputref}/>
              </div>
          </div>
    )
})

export default Input