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
    input.addEventListener('input', () => {
        console.log('a');
    });
}


// adding submit type event listener to the form
myForm.addEventListener('submit', () => {
    console.log('smth');
});
