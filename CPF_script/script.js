class CPF{
	constructor(cpf){
		this.cpf = CPF.formatCPF(cpf).slice(0,-2)
		this.cpfWithError = false
		this.isValid = undefined;
		this.validDigits = ''
		this.insertedDigits = CPF.formatCPF(cpf).slice(-2),
		this.cpfWithPunction = CPF.insertCPFwithPunction(CPF.formatCPF(cpf))

		if(isNaN(Number(this.cpf)) || this.cpf.length !== 9)
        	return this.isValid = false
    	
	}

	validateCPF(){

	    if(this.isValid === false){
			return this.cpfWithError = true
		}

	    if(this.cpf.length != 11){

	       for (let i = 0; i < 2; i++) {
	            let multipliedCPF =  CPF.multiplyCPFValues(this.cpf);
	            this.cpf +=  CPF.getDigit(multipliedCPF)
	            this.validDigits += CPF.getDigit(multipliedCPF)
	       }
	    }

	    if(this.validDigits == this.insertedDigits){
	        this.isValid = true
	        return `CPF ${this.cpfWithPunction}: Válido`
	    }else{
	        this.isValid = false
			return `CPF ${this.cpfWithPunction}: Inválido`

	    }

	}
		

	static formatCPF(cpf){
	    return cpf.toString().replace(/\D+/g, "")
	}

	static insertCPFwithPunction(array){
	    array = Array.from(array)
				
		if(array.length >= 3){
			array.insert('.', 3)
		}

		if(array.length >= 7){
			array.insert('.', 7)
		}

		if(array.length >= 11){
			array.insert('-', 11)
		}
	    array = array.join('')
	    return array
	}

	static multiplyCPFValues(cpf){

    	let cpfToArray = Array.from(cpf);

    	let multiplicator = cpfToArray.length + 1;

    	for (let i = 0; i < cpfToArray.length; i++) {

	        cpfToArray[i] = cpfToArray[i] * multiplicator;
	        multiplicator = multiplicator -1
    	}

    	return cpfToArray
	}

	static getDigit(cpf, t){

	    let totalSum = cpf.reduce((cur, val) => cur + val, 0)
	    let digit = 0;

	    let checkDigit = totalSum % 11

	    if(checkDigit >= 2){
	        digit = 11 - checkDigit
	    }

	    return digit
	}

	static generateValidCPF(){

	    let creatingCPF = [];

	    for (let i = 0; i < 9; i++) {
	       
	        creatingCPF.push(getRandomNumberBetween(0,8))
	        
	    }

	    creatingCPF = creatingCPF.join('')

	    for (let i = 0; i < 2; i++) {
	        creatingCPF += this.getDigit(this.multiplyCPFValues(creatingCPF))
	        
	    }

	    
	    const generatedCPF = new CPF(creatingCPF)
	    generatedCPF.validateCPF()
	    return generatedCPF

	}


}













