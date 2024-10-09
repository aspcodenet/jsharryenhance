import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'; // PATH
import { Car} from '../data/cars.js'



export function getCars(){
    //Generate 20 cars
    let cars = []
    for(var i = 0; i < 10;i++){
        var n = faker.vehicle.vehicle()
        var t = faker.vehicle.type()
        var c = faker.vehicle.color()
        var f = faker.vehicle.fuel()
        var y = faker.number.int({min:1970, max:2023})
        var i2 = faker.number.int({min:1, max:100})
        var i3 = faker.number.int({min:30, max:200}) * 1000
        
        cars.push(new Car(n,t,c,f,y,i2,i3))
    }
    return cars
}
