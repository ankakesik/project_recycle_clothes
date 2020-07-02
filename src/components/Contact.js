import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import image from "../assets/images/Background-Contact-Form.jpg"

function Contact () {
    
    const {handleSubmit, register, errors} = useForm()
    const onSubmit = (data) => {
        console.log(data);
        
    }


    return(
        <div className="contactForm">
            <img src={image}></img>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="nameAndSurname">
                        <label>Wpisz swoję imię</label>
                        <input name="title" ref={register} />
                        <label>Wpisz swój email</label>
                        <input name="email" ref={register} />
                    </div>
                    
                    <label>Wpisz swoją wiadomość</label>
                    <input name="messege" ref={register} />
                    <button type="submit">Wyślij</button>


                </form>

            </div>
           
        </div>
    )
}
export default Contact;