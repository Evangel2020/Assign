const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const stateoforigin = document.getElementById('stataoforigin');
const dateofbirth = document.getElementById('dateofbirth');
const country = document.getElementById('country');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkinputs();
});

function checkinputs() {
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    /*const mobileValue = mobile.value.trim();
    const stateoforiginValue = stateoforigin.value.trim();
    const dateofbirthValue = dateofbirth.value.trim();
    const countryValue = country.value.trim();*/

    if(fnameValue == '') {
        //show error
        //add error class
        setErrorFor(fname, 'First name cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(fname);
    }
    if(lnameValue == '') {
        //show error
        //add error class
        setErrorFor(lname, 'Last name cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(lname);
    }
    if(emailValue == '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(email);
    }
   /* if(mobileValue == '') {
        //show error
        //add error class
        setErrorFor(mobile, 'Mobile cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(mobile);
    }
    if(stateoforiginValue == '') {
        //show error
        //add error class
        setErrorFor(stateoforigin, 'stateoforigin cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(stateoforigin);
    }
    if(dateofbirthValue == '') {
        //show error
        //add error class
        setErrorFor(dateofbirth, 'dateofbirth cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(dateofbirth);
    }
    if(countryValue == '') {
        //show error
        //add error class
        setErrorFor(country, 'country cannot be blank');
    } 
    else {
        //add success class
        setSuccessFor(country);
    }*/

}


function setErrorFor(input,message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}