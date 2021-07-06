// unit test
const { averageExams, isStudentPassExam } = require('../gradeCalculation')


test('it should return exact average', () => {
    const listValueOfExams = [80,100,100,80]

    expect(averageExams(listValueOfExams)).toEqual(90)
})

test('it should handle non-number', () => {
    const listValuesOfExams = [80,'a','100',80]
    expect(() => averageExams(listValuesOfExams).toThrow())
})

// grouping unit test & integration test
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80,100,100,80]
        expect(averageExams(listValueOfExams)).toEqual(90)
    })

    // integration test
    test('it should return exams passed status', () => {
        const listValuesOfExams = [80,100,100,80]
        expect(isStudentPassExam(listValuesOfExams, 'Budi')).toEqual(true)
    })

    test('it should return exam failed status.', ( ) => {
        const listValueOfExams = [50,40,70,80]
        expect(isStudentPassExam(listValueOfExams,'budi') ).toEqual(false)
    })
})