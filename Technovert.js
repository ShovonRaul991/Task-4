let element = document.getElementById("contactUs");
let male = document.getElementById('male');
let female = document.getElementById('female')
let fullName = document.getElementById('fullname');
let emailAddress = document.getElementById('emailaddress');
let org = document.getElementById('org');
let emailStatus = document.getElementById('required-email');
let formError = document.getElementById('error-message');
let nameError = document.getElementById('required-fullname');
let emailError = document.getElementById('required-email');
let orgError = document.getElementById('required-org');
let inputfile = document.getElementById("getfiles");
let showfile = document.getElementById('selected-file');
let valid_email = /^[a-zA-Z0-9. ]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function clearForm()
{
    element.reset();
}

function addPromo(){
    
    let state = document.getElementById("states").value;
    state = state + '-PROMO';
    document.getElementById('promotional').value = state;
}

function genderSelection()
{
    if(male.checked==true){
        window.alert("Hello Sir")
    }
    else if(female.checked==true){
        window.alert("Hello lady")
    }
}



function contactUsFormValidation()
{
    
    if(fullName.value ==="" || emailAddress.value==="" || org.value === "" || emailStatus.textContent ==="Email is incorrect.")
    {
        formError.innerHTML =  "Please fill all the required fields below";
        //window.alert("Please fill all the required fields below");
        event.preventDefault();
    }
    
    if(fullName.value==="")
    {
        nameError.textContent = "Name is required.";
    }

    if(emailAddress.value==="")
    {
        emailError.textContent = "Email is required.";
    }
    if(org.value ==="")
    {
        orgError.textContent = "Organisation needed";
    }
    
    
    if(emailStatus.textContent ==="Email is correct." && fullName.value!=="" && emailAddress.value!=="" && org.value!==""){
        window.alert("Form is Submitted");
    }
    
}

function CareerFormValidation(){
    

    if(fullName.value === "" || emailAddress.value==="" || emailStatus.textContent ==="Email is incorrect." )
    {
        //document.getElementById('error-message').innerHTML =  "Please fill all the required fields below";
        window.alert("Please fill all the required fields below");
        event.preventDefault();
    }
    else{
        window.alert("Form Submitted");
    }

}

function validateEmail()
{
    
    
    if(emailAddress.value.match(valid_email))
    {
        emailError.textContent = "Email is correct.";
    }
    else if(emailAddress.value==="")
    {
        emailError.textContent = "Email is required.";
    }
    else{
        emailError.textContent = "Email is incorrect.";
    }
}

function validName(){
    if(fullName.value===""){
        nameError.textContent = "Name is required.";
    }
    
    else{
        nameError.textContent = "*";
    }
}

function validOrg(){
    if(org.value ===""){
        orgError.textContent = "Organisation needed";
    }
    else{
        orgError.textContent = "*";
    }
}

function fileGet()
{
    document.getElementById('getfiles').click();
}

/*
function resueTake(){
    if(inputfile.files.length){
        let showed_file = inputfile.files[0].name;
        showfile.value = showed_file;
    }
}
*/


inputfile.addEventListener("input", ()=>{
    if(inputfile.files.length){
        let showed_file = inputfile.files[0].name;
        showfile.value = showed_file;
    }
})
