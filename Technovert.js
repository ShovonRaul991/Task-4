function clearForm()
{
    var element = document.getElementById("contactUs");
    element.reset();
}

function addPromo(){
    var name = document.getElementById("states").value;
    name = name+ '-PROMO';
    document.getElementById('promotional').value = name;
}

function genderSelection()
{
    if(document.getElementById('male').checked==true){
        window.alert("Hello Sir")
    }
    else if(document.getElementById('female').checked==true){
        window.alert("Hello lady")
    }
}



function nofilledError()
{
    let x = document.getElementById('fullname').value;
    let y = document.getElementById('emailaddress').value;
    let z = document.getElementById('org').value;
    if(x === "" || y==="" || z === "")
    {
        document.getElementById('error-message').innerHTML =  "Please fill all the required fields below";
        //window.alert("Please fill all the required fields below");
        event.preventDefault();
    }
    if(x==="")
    {
        document.getElementById('required-fullname').textContent = "Name is required.";
    }

    if(y==="")
    {
        document.getElementById('required-email').textContent = "Email is required.";
    }
    if(z ==="")
    {
        document.getElementById('required-org').textContent = "*";
    }
}

function validateEmail()
{
    let mail = document.getElementById('emailaddress').value;
    let valid_email = /^[a-zA-Z0-9. ]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail.match(valid_email))
    {
        document.getElementById('required-email').textContent = "Email is correct.";
    }
    else{
        document.getElementById('required-email').textContent = "Email is incorrect.";
    }
}

/*

const sbmt = document.querySelector("submit-button");
sbmt.addEventListener('click',(e)=>{
    e.preventDefault();
    var x = document.getElementById('fullname').value;
    var y = document.getElementById('emailaddress').value;
    var z = document.getElementById('org').value;
    if(x === "" || y==="" || z === "")
    {
        document.getElementsByClassName('error-message').innerTEXT =  "Please fill all the required fields below";
        //window.alert("Please fill all the required fields below");
    }
    else if(x==="")
    {
        document.getElementsByClassName('required-fullname').innerHTML = "Name is required.";
    }

    else if(y==="")
    {
        document.getElementsByClassName('required-email').innerHTML = "Email is required."
    }
});
*/

