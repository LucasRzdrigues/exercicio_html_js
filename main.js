const form = document.getElementById('form')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkValores();
}) 

function checkValores() {
    const campoAValue = campoA.value;
    const campoBValue = campoB.value;

    if (campoAValue > campoBValue) {
        setErrorFor(campoA, 'Valor A é maior que o B!')
        setErrorFor(campoB, 'Valor B é maior que o A!')
    } else {
        setSuccessFor(campoA);
        setSuccessFor(campoB);
    }

    const messageSuccess = `O valor de <b>${campoAValue}</b> é menor que <b>${campoBValue}</b>, portanto está correto!`

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className === 'form-control success');
    });

    if (formIsValid) {
        const containerMessageSuccess = document.querySelector('.messageSuccess');
        containerMessageSuccess.innerHTML = messageSuccess;
        containerMessageSuccess.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}