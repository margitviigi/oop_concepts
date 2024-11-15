class Person {
    constructor(firstname, lastname,age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    } 
} 
class Student {
    constructor(){
        this.firstname = ''
        this.lastname = ''
        this.age = 0
    } 
} 


const student1 = new Student
student1.firstname = 'Margit'
student1.lastname = 'Viigi'
student1.age = 29

const student2 = new Student
student2.firstname = 'Paula'
student2.lastname = 'Mai'
student2.age = 3

const student3 = new Student
student3.firstname = 'Anni'
student3.lastname = 'Tamm'
student3.age = 50


const person1 = new Person(firstname = 'Jüri', lastname = 'Kuusk', age = 79)
const person2 = new Person(firstname = 'Mart', lastname = 'Kask', age = 40)
const person3 = new Person(firstname = 'Mari', lastname = 'Koldits', age = 27)


console.log(student1, student2, student3)
console.log(person1, person2, person3)
