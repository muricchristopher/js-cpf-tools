const btnSubmit = document.querySelector('#btn-submit');
const inputCPF_Element = document.querySelector('.cpf-input')

inputCPF_Element.addEventListener('mousemove', e => {
    const tempCPF = new CPF(e.target.value);
    e.target.value = tempCPF.cpfWithPunction

    if(CPF.formatCPF(e.target.value).length > 11){
        while (e.target.value.length > 11) {
            e.target.value = CPF.formatCPF(e.target.value).slice(0, -1)
            
        }
    }

})


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


