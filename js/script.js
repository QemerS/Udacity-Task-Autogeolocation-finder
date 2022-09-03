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

// VALIDATION STARTS

// selecting elements
const myForm = document.forms[0];
const myInputs = document.getElementsByTagName('input');
const myError = myInputs.nextElementSibling;

// making array from htmlCollection myInputs
var arr = Array.from(myInputs);
// adding input type event listener to each input
for (const input of arr) {
    input.addEventListener('input', showError);
}


// adding submit type event listener to the form
myForm.addEventListener('submit', () => {
    console.log('smth');
});

function showError(e) {
    // declaring special regEx for each input
    let my_regEx;
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

    // declaring date for case my_regEx === 'date'
    let my_now_date = new Date();
    let my_date =`${my_now_date.getYear()+1900}-0${my_now_date.getMonth()+1}`;
    // declaring conditions
    const main_condition = (my_regEx === 'date')? (e.target.value > my_date): my_regEx.test(e.target.value);
    const required_condition = (e.target.value.length === 0);

    // testing conditions
    if (main_condition && !required_condition) {
        e.target.className = 'valid';
        e.target.nextElementSibling.textContent = '';
    } else {
        e.target.className = 'invalid';
        e.target.nextElementSibling.textContent = 'Teleblere cavab vermir';
    }
}