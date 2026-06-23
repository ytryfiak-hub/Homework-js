const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
const requiredLength = Number(input.dataset.length);
const actuaLength = input.value.length;

if(actuaLength === requiredLength){
    input.classList.add('valid');
    input.classList.remove('invalid');
} else{
    input.classList.remove('valid');
    input.classList.add('invalid');
}
});



