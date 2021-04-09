let json = '{ "age" : 20, "name" : "joko"}';


try {
    
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError("'name' is required")
    }

    console.log(user.name); // undifined
    console.log(user.age); // 20

} catch (error) {
    
    if(error instanceof SyntaxError){
        console.log(`JSON ERROR: ${error.message}`);

    }else if(error instanceof ReferenceError){
        console.log(error.message);

    }else{
        console.log(error.stack);

    }

}