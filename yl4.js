class Shape {
    #color
    constructor(color){
        this.#color = color
    } 
    setColor(color){
        this.#color = color
    } 
    getColor(){
        return this.#color
    } 
    getArea(){
        return null
    } 
} 
class Circle extends Shape {

} 
const shape1 = new Shape('red')
console.log('shape color', shape1.getColor())
console.log('shape area', shape1.getArea())

const circle1 = new Circle('red')
console.log('circle color', circle1.getColor())
console.log('circle area', circle1.getArea())