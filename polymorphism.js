class Ring{
    corners(){
        console.log('Ringil ei ole ühtegi nurka.')
    } 
    sides(){
        console.log('Ringil on üks külg.')
    } 
} 
class Ristkülik{
    corners(){
        console.log('Ristkülikul on neli nurka.')
    } 
    sides(){
        console.log('Ristkülikul on neli külge.')
    } 
} 
const cornersTest = (shape) => {
    shape.corners()
} 
const sidesTest = (shape) => {
    shape.sides()
} 
const shape1 = new Ring()
const shape2 = new Ristkülik()

cornersTest(shape1)
cornersTest(shape2)
sidesTest(shape1)
sidesTest(shape2)