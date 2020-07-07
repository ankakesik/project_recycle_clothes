export default function sendForm(){
    const myForm = document.querySelector(".myForm");
    myForm.addEventListener("submit",function(e){

    e.preventDefault();

    const formData =new FormData(this);

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "post",
        body: formData
    }).then(function(response){
        return response.json();

    }).then(function(response){

        if (response.status === "success") {
            console.log('ohh yeahhh')
        }
    }).catch(function(error){
        console.log(error);
        
    });



    })
}
