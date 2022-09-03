// Proggress Bar code starts
document.addEventListener('scroll', updateProgressBar);
function updateProgressBar() {
    const progress = document.getElementsByClassName('progress-bar')[0];
   
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop/(scrollHeight - window.innerHeight) * 100 + '%';
    
    progress.style.setProperty('--progress', scrollPercent);
}
// Proggress Bar code ends

//regular expressions
const reg_name = new RegExp('[A-Za-z]{2,}');
const reg_email = new RegExp('[A-Za-z0-9\-\_\.]{1,}(@gmail.com)');
const reg_address = new RegExp('[a-zA-Z]{1,}\/[a-zA-Z]{1,}\/[a-zA-Z]{1,}');
const reg_postalCode = new RegExp('[0-9]{5}\-[0-9]]{4}|[0-9]{5}');
const reg_ccNum = new RegExp('[0-9]{15,16}');
const reg_ccType = new RegExp('(Visa)|(Mastercard)|(American Express)|(Discover)');
const reg_cvv = new RegExp('[0-9]{3}');
// declaring variable for specified regEx for each input
let my_regEx;

// declaring date for case my_regEx === 'date'
let my_now_date = new Date();
let my_date =`${my_now_date.getYear()+1900}-0${my_now_date.getMonth()+1}`;
// VALIDATION STARTS

// selecting elements
const myForm = document.forms[0];
const myInputs = document.getElementsByTagName('input');
const myError = myInputs.nextElementSibling;

// making array from htmlCollection myInputs
const arr = Array.from(myInputs);

// onload checking if required fields are empty
window.addEventListener('load', ()=> {
    for (const input of arr) {
        if (input.required && input.value.length === 0) {
            input.className = 'invalid';
        }
    }
});

// adding input type event listener to each input
for (const input of arr) {
    input.addEventListener('input', showError);
}


// adding submit type event listener to the form
myForm.addEventListener('submit', (e) => {
    const agreement = document.querySelector('#agree');
    if (!agreement.checked) {
        e.preventDefault();
        // adding an error message
        const error_message = agreement.nextElementSibling;
        error_message.textContent = 'If your order is correrct check the corrrect button';
        error_message.style.top = '0rem';
    } else {
        for (const input of arr) {
            // if any of inputs is invalid don't submit
            if (input.className === 'invalid') {
                e.preventDefault();
                const error_message = agreement.nextElementSibling;
                error_message.textContent = 'It seems that you have filled some blanks by invalid data';
                error_message.style.top = '1.7rem';
            }
        }
    }
});

function showError(e) {
    // switching special regEx for each input
    switch (e.target.id) {
        case 'f-name':
            my_regEx = reg_name;
            break;
        case 'l-name':
            my_regEx = reg_name;
            break;
        case 'email':
            my_regEx = reg_email;
            break;
        case 'address':
            my_regEx = reg_address;
            break;
        case 'p-code':
            my_regEx = reg_postalCode;
            break; 
        case 'c-number':
            my_regEx = reg_ccNum;
            break; 
        case 'c-type':
            my_regEx = reg_ccType;
            break; 
        case 'cvv':
            my_regEx = reg_cvv;
            break;
        case 'exp-date':
            my_regEx = 'date'
            break;
    }
    
    // declaring conditions
    const main_condition = (my_regEx === 'date')? (e.target.value > my_date): my_regEx.test(e.target.value);
    const required_condition = (e.target.value.length === 0);

    // testing conditions
    if (main_condition && !required_condition) {
        e.target.className = 'valid';
        e.target.nextElementSibling.textContent = '';
    } else {
        e.target.className = 'invalid';
        let error =  e.target.nextElementSibling;
        switch (my_regEx) {
            case reg_name:
                error.textContent = 'Must start with a capital letter';
                break;
            case reg_email:
                error.textContent = 'Must be a google mail';
                break;
            case reg_address:
                error.textContent = 'Must contain City/Country/State';
                break;
            case reg_postalCode:
                error.textContent = "Whatismyzip.com is a free fast web app to define your postal code. Just allow it to use your current location info and in a few moments you'll see the zip code of the area you are in";
                break;
            case reg_ccNum:
                error.textContent = "A credit card number is often the 15- or 16-digit number found on the front or back of your credit card.";
                break;
            case reg_ccType:
                error.textContent = 'We accept only one from the list';
                break;
            case reg_cvv:
                error.textContent = "Card Verification Value (CVV) is an extra code printed on your debit or credit card.";
                break;
            case 'date':
                error.textContent = 'Your cart has passsed exporesion date';
                break;
        }
    }
}