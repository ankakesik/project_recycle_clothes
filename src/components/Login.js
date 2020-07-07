import React from 'react';
import decoration from "../assets/icons/Decoration.svg"
import LoginNav from './LoginNav';
import HeaderNav from './HeaderNav';
import {useForm} from "react-hook-form";
export default function Login (){

     
    const {handleSubmit, register, errors} = useForm()
    const onSubmit = (data) => {
        
        console.log(data);
        
    }
    return(
        <>
            <LoginNav />
            <HeaderNav />
           
            <div className="login">
                <h1>Zaloguj się</h1>
                <img src={decoration}></img>
                <div className="formLogin">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="emailAndPass">
                            <div className= "first field">
                                <label>Email</label>
                                <input name="title" ref={register} /> 
                            </div>
                            <div className="second field">
                                <label>Wpisz swój email</label>
                                <input name="email" ref={register} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                   

           
          
        </>
    )
} 