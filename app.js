const btnSubmit = document.querySelector('#btn-submit');
const inputCPF_Element = document.querySelector('.cpf-input')

btnSubmit.addEventListener('click', checkCPF)

function checkCPF(){
    const userCPF = new CPF(inputCPF_Element.value);

    userCPF.validateCPF()

    if(userCPF.cpfWithError) return CPFStatusEffect('err')

    if(!userCPF.isValid) return CPFStatusEffect('invalid')
    
    CPFStatusEffect()

}

function CPFStatusEffect(status){
    //true : valid
    //false : invalid

    const statusCheckElement = document.querySelector('.status-check');
    statusCheckElement.classList.add('visible')

    if(status === 'clean'){
        statusCheckElement.innerText = 'INFORME O CPF:'
        statusCheckElement.classList.remove('visible')
        statusCheckElement.classList.remove('valid')
        statusCheckElement.classList.remove('err')
        statusCheckElement.classList.remove('invalid')
        return
    }

    if(status === 'invalid'){
        statusCheckElement.classList.remove('valid')
        statusCheckElement.classList.remove('err')
        statusCheckElement.classList.add('invalid')
        statusCheckElement.innerText = `CPF INVÁLIDO`
        return
    }

    if(status === 'err'){
        statusCheckElement.classList.remove('valid')
        statusCheckElement.classList.remove('invalid')
        statusCheckElement.classList.add('err')
        statusCheckElement.innerText = `CPF INCOMPLETO`
        return
    }


    statusCheckElement.classList.remove('invalid')
    statusCheckElement.classList.remove('err')
    statusCheckElement.classList.add('valid')
    statusCheckElement.innerText = `CPF VÁLIDO`
    return
   
}



function keyispressed(e){

    if(e.target.value.length != 14){
        CPFStatusEffect('clean')
    }

    const currentCPF = new CPF(e.target.value)
    const keycode = e.which;
    e.target.value  = currentCPF.cpfWithPunction

   if(keycode == 13)  //key 'Enter'
    return checkCPF()

   if(keycode == 8) //key 'Backspace'
    return e.target.value = CPF.formatCPF(e.target.value)

   if(keycode == 46) //key 'Delete'
    return e.target.value =''

   if(keycode >= 48 && keycode <= 57) //any key numbers
    return

    e.preventDefault()
   
}