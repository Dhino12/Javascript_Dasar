const validationError = require('./ValidationError');

let json = '{ "age" : 20 }';

try {
    
    let user = JSON.parse(json);

    if(!user.name){
        throw new validationError("'name' is required")
    }

    if(!user.age){
        throw new validationError("'age' is required")
    }
    
    console.log(user.name); // undifined
    console.log(user.age); // 20

} catch (error) {
    
    if(error instanceof SyntaxError){
        console.log(`JSON ERROR: ${error.message}`);

    }else if(error instanceof validationError){
        console.log(`Invalid Data: ${error.message}`);

    }else{
        console.log(error.stack);

    }

}