
class Car {
    constructor(title, price, max_speed, color, mileage){
        this.title = title;
        this.price = price;
        this.max_speed = max_speed;
        this.color = color;
        this.mileage = mileage;
    }
}


let car1 = new Car('BMW',1000000,220, 'Black', 50000);
let car2 = new Car('AUDI',3000000,240, 'Silver', 30000);
let car3 = new Car('Mercedez',2000000,230, 'White', 70000);

console.log(car1,car2,car3);

let list = [car1,car2,car3];

console.log(list);

list.pop();
console.log(list)