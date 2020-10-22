//Declarando as constantes

const name = document.querySelector('#first_nome')

const number = document.querySelector('#Phone');

const email = document.querySelector('#email')

const passaword = document.querySelector('passaword')

const repeat = document.querySelector('#repeat')


console.log(name);

function enviardados() {
    //uso setCustomValidity para trocar a mensagem de erro dele.

    repeat.setCustomValidity(' Confirma a senha.');
    alert('Oi')
    if (document.dados.tx_nome.value == "" ||
        document.dados.tx_nome.value.length < 8) {
        alert("Preencha campo NOME corretamente!");
        document.dados.tx_nome.focus();
        return false;
    }


    if (document.dados.phone.value == "" ||
        document.dados.Phone.value.indexOf('@') == -1 ||
        document.dados.Phone.value.indexOf('.') == -1) {
        alert("Preencha número ");
        document.dados.Phone.focus();
        return false;
    }

    return true;
}


