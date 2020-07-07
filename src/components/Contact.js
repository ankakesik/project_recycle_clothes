import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import image from "../assets/images/Background-Contact-Form.jpg"
import sendForm from "../js/form";

function Contact () {
    
    const {handleSubmit, register, errors} = useForm()
    const onSubmit = (data) => {
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function(response){
        return response.json();

    }).then(function(response){

        if (response.status === "success") {
            console.log('ohh yeahhh')
        }
    }).catch(function(error){
        console.log(error);
        
    });
        
    }


    return(
        <div className="contactForm">
            <img src={image}></img>

            <div className="form">
                <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="nameAndSurname">
                        <div className= "first field">
                           <label>Wpisz swoję imię</label>
                           <input name="name" ref={register({
                                required: true,
                                pattern: { value: /^\S+$/}
                        
                            })} /> 
                           {errors.name && errors.name.type === "required" && <p className="wrong">Pole wymagane</p>}
                           {errors.name && errors.name.type === "pattern" && <p className="wrong">Musi być jeden wyraz</p>}

                           
                        </div>
                        <div className="second field">
                            <label>Wpisz swój email</label>
                            <input name="email" ref={register({
                                required: true,
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,}
                            })} />
                            {errors.email && errors.email.type === "required" && <p className="wrong">Pole wymagane</p>}
                            {errors.email && errors.email.type === "pattern" && <p className="wrong">Nieprawidłowy email</p>}

                        </div>
                        
                    </div>
                    <div className="btnflex">
                        
                        <label>Wpisz swoją wiadomość</label>
                        <textarea name="message" ref={register({
                            required: true,
                            minLength: 120
                        })} />
                        {errors.message && errors.message.type === "required" && <p className="wrong">Pole wymagane</p>}
                        {errors.message && errors.message.type === "minLength" && <p className="wrong">Co najmniej 120 znaków</p>}
                    <button type="submit">Wyślij</button>
                    </div>

                </form>

            </div>
           
        </div>
    )
}
export default Contact;