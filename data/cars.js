// encapsulation
// public, private, protected

// C# - class metoder, properties : public, private, protected

export let theAge = 123

export function calculateCarPrice(car){
    if(car.color ==="black"){
        return car.price * 0.8
    }
    return car.price
}

let theSecret = 123

export class Car{
    constructor(n,t,c,f,y,i,i2){
        this.name = n
        this.type = t
        this.color = c
        this.fuel = f
        this.year = y
        this.img = "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F" + i +  ".png"
        this.price = i2
    }
}



//export { theAge, calculateCarPrice, Car }