let contactForm = document.getElementById("contactUs");
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
let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function clearForm()
{
    contactForm.reset();
}

function addPromo(){
    
    let state = document.getElementById("states").value;
    if(state !==""){
        state = state + '-PROMO';
        document.getElementById('promotional').value = state;
    }
    else{
        document.getElementById('promotional').value = "";
    }
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
    
    validateName();
    validateEmail();
    validateOrg();

    if(!validateName() || !validateEmail() || !validateOrg()){
        formError.innerHTML =  "Please fill all the required fields below";
        event.preventDefault();
    }
    else{
        window.alert("Form is Submitted");
    }
    
}

function CareerFormValidation(){

   validateName();
   validateEmail();
   if(!validateName() || !validateEmail()){
    window.alert("Please fill all the required fields below");
    event.preventDefault();
   }
   else{
    window.alert("Form Submitted");
   }

}

function validateEmail()
{
    
    
    if(emailAddress.value.match(validemail))
    {
        emailError.textContent = "*";
        return true;
    }
    else if(!emailAddress.value)
    {
        emailError.textContent = "Email is required.";
        return false;
    }
    else{
        emailError.textContent = "Email is incorrect.";
        return false;
    }
}

function validateName(){
    if(!fullName.value){
        nameError.textContent = "Name is required.";
        return false;
    }
    
    else{
        nameError.textContent = "*";
        return true;
    }
}

function validateOrg(){
    if(!org.value){
        orgError.textContent = "Organisation needed";
        return false;
    }
    else{
        orgError.textContent = "*";
        return true;
    }
}

function fileGet()
{
    document.getElementById('getfiles').click();
}

/*
inputfile.addEventListener("input", ()=>{
    if(inputfile.files.length){
        //console.log(inputfile.files);
        let showedfile = inputfile.files[0].name;
        showfile.value = showedfile;
    }
})
*/
