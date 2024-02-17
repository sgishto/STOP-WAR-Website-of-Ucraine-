const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , e => {
    e.preventDefault();

    validateInputs();

});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
} //do te kontrolloj nese username ka string brenda apo eshte bosh dhe nese eshte bosh afishon error  
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}; //kontrollojm nese emaili eshte sipas sintakses se duhur
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();  //perdoret per te validuar hapsirat mes fjaleve 
    
    if(usernameValue === ''){
        setError(username, 'Username is required');

    } else {
        setSuccess(username);
    }
    if(emailValue ==='') {
        setError(email, 'Email is required');

    }else if (!isValidEmail(emailValue)){
        setError(email, 'Vendosni një adresë email të saktë')
    } else {
        setSuccess(email);
    } //per passwordin do kontrollojme nese ka string apo eshte bosh
    //nqs ka nje string te vendosur do kontrollojme gjatsine me 8 shifra
    if (passwordValue === '') {
        setError(password,'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Passwordi duhet të jetë të paktën me 8 shifra ose shkronja.')
    } else { 
        setSuccess(password);
    } //e njejta procedure dhe per passwordin e dyte 
    if(password2Value ==='') {
        setError(password2, 'Ju lutem, rishkruani passwordin!');
    } //kush tjeter ka te beje verifikimin nese eshte njesoj me passwordin e vendosur me siper 
    else if (password2Value !== passwordValue){
        setError(password2,"Paswordet nuk përputhen!" );
    } else {
        setSuccess(password2);

    }
       
};

