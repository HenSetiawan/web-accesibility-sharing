const button = document.querySelector('.btn-submit');
const inputName = document.querySelector('#fullName');
const positionType = document.querySelector('#positionType');
const address = document.querySelector('#address');
const checkIn = document.querySelector('#checkIn');
const checkOut = document.querySelector('#checkOut');
const agreement = document.querySelector('#agreement');
const code = document.querySelector('#kode');


agreement.addEventListener('click', () => {
    if (agreement.checked) {
        button.removeAttribute('disabled');
    } else if (agreement.checked === false) {
        button.setAttribute('disabled', 'disabled');
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    const fullNameValue = inputName.value;
    const positionTypeValue = positionType.value;
    const checkInValue = checkIn.value;
    const checkOutValue = checkOut.value;
    const addressValue = address.value;
    const codeValue = code.value;

    if (fullNameValue === 'Monalisa' && positionTypeValue === 'fe' && checkInValue === 
    '2022-09-05' && checkOutValue === '2023-01-13' && addressValue === 'Via Maggio' && codeValue === "Lavender") {
        alert('Kode Rahasia : Lato-Lato')
    } else {
        alert('salah')
    }
})