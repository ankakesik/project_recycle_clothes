import React from 'react';
import decoration from "../assets/icons/Decoration.svg"
import LoginNav from './LoginNav';
import HeaderNav from './HeaderNav';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export default function Login (){

     
    const {handleSubmit, register, errors} = useForm()
    const onSubmit = (data) => {
        
        console.log(data);
        
    }
    return(
        <>
        <div className="loginNav">
            <LoginNav />
            <HeaderNav />
        </div>
            
            <div className="login">
                <h1>Zaloguj się</h1>
                <img src={decoration}></img>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="emailAndPass">
                            <div className= "first field">
                                <label>Email</label>
                                <input name="email" ref={register({
                                required: true,
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}
                            })} />
                            {errors.email && errors.email.type === "required" && <p className="wrong">Pole wymagane</p>}
                            {errors.email && errors.email.type === "pattern" && <p className="wrong">Nieprawidłowy email</p>}

                            </div>
                            <div className="second field">
                                <label>Hasło</label>
                                <input name="password" ref={register({
                                required: true,
                                minLength: 6
                            })}/>
                            {errors.password && errors.password.type === "required" && <p className="wrong">Pole wymagane</p>}
                            {errors.password && errors.password.type === "minLength" && <p className="wrong">Nieprawidłowe hasło</p>}  
                            </div>
                        </div> 
                        <div className="btns">
                            <button><Link to="/register">Załóż konto</Link></button>
                            <button type="submit">Zaloguj się</button> 
                        </div>   
                    </form>
                       
                </div>
                
            </div>
           
          
        </>
    )
} 