var currentDate = new Date();
var creationDate = new Date('December 11, 2023');
var datacollectionDate = new Date();

var formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
var formattedCreationDate = creationDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

document.getElementById('lastUpdate').innerHTML = 'Last Update: ' + formattedDate;
document.getElementById('creationDate').innerHTML = 'Date Created: ' + formattedCreationDate;
document.getElementById('datacollectionDate').innerHTML = 'Data Collected: ' + formattedDate;

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setError(username, 'Username cannot be blank');
    }else{
        //add success class
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be blank');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Email is not valid');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password cannot be blank');
    }else if (passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters');
    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please reconfirm your password');
    }else if(passwordValue !== password2Value){
        setError(password2, 'Passwords does not match');
    }else{
        setSuccess(password2);
    }
};