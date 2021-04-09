/* 

 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.

*/

// TODO 1
class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

module.exports = ValidationError
// TODO 2
const validateNumberInput = (firstNumber, secondNumber, thirdNumber) => {

	if(typeof(firstNumber) !== "number"){
        console.log(typeof firstNumber);

        console.log(firstNumber);

        console.log(typeof firstNumber != 1);

	   throw new ValidationError("Argumen pertama harus number")

	}else if(typeof secondNumber !== "number"){

	   throw new ValidationError("Argumen kedua harus number")	

	}else if(typeof thirdNumber !== "number"){

	   throw new ValidationError("Argumen ketiga harus number")	
	}
}

const detectTriangle = (a, b, c) => {
  // TODO 3
 
  try{ 

    validateNumberInput(a,b,c)
  
    if (a === b && b === c) {
        return 'Segitiga sama sisi ';
    }

    if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki ';
    } 

  }catch(error){
    
    return error.message

  }

  return 'Segitiga sembarang ';
};

console.log(detectTriangle(1,true,1));
