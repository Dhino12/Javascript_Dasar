const averageExams = (valuesExam) => {
    
    const numberValidation = valuesExam.every(exam => typeof exam === "number");
    if(!numberValidation) throw Error('Please input number')

    const sumValues = valuesExam.reduce((accumulator, currentValue) => {

            // console.log(`accumulator = ${accumulator}`);
            // console.log(`currentValue = ${currentValue}`);
            // console.log(`==============================`);

            return accumulator + currentValue
        }
    )
    return sumValues / valuesExam.length

}


const isStudentPassExam = (valuesExam, name) => {
    const minValues = 73

    const average = averageExams(valuesExam)

    if(average > minValues){
        console.log(`${name} is Fail the exams`);
        return true
    }else{
        console.log(`${name} is pass the exam`);
        return false
    }
}

module.exports = { averageExams, isStudentPassExam }