const btnSubmit = document.querySelector('#btn-submit');
const inputCPF_Element = document.querySelector('.cpf-input')

btnSubmit.addEventListener('click', generateValidCPF);

function generateValidCPF(){
   const generateValidCPF = CPF.generateValidCPF();

    inputCPF_Element.value = generateValidCPF.cpfWithPunction
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
    statusCheckElement.innerText = `CPF VÁLIDO GERADO!`
    return
   
}




function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    createPopUp() 
} 

function createPopUp(){

    const popUpArea = document.querySelector('.pop-up');

    if(popUpArea.children.length < 2){
        const popUpElement = document.createElement('div');
        popUpElement.innerText = 'CPF COPIADO!'
        popUpElement.classList.add('teste');
        popUpArea.appendChild(popUpElement);
    
        setTimeout(() => {
            popUpArea.removeChild(popUpElement);
    
        }, 1000)
    }
   

    

}