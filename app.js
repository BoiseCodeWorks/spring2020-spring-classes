let car = {
  make: "Chevy",
  model: "Tracker",
  year: 1989,
  price: 2000
}

let anotherCar = {
  make: "Subaru",
  model: "Forester",
  year: 2017
}

console.log(car)
console.log(anotherCar)
class Car {
  constructor(make = "Chevy", model, year, miles, noise) {
    this.make = "Chevy"
    this.model = model || "Tracker"
    this.year = year || 1989
    this.price = 20000
    this.gasTank = miles
    this.sound = noise
    console.log(make)
    1 + 2
  }

  drive(milesDriven) {
    this.gasTank -= milesDriven
    console.log("You have ", this.gasTank, " miles remaining")
  }

  start() {
    console.log(this.sound)
  }

}

let tracker = new Car("Chevy", "Tracker", 1989, 30000, "Clunk Screech BANG bang")
let subaru = new Car("Subaru", "Forester", 2017, 30000, "puuurs like a kitten")

console.log(tracker)



function drive(milesDriven) {
  tracker.gasTank -= milesDriven
  console.log("You have ", tracker.gasTank, " miles remaining")
}


class CarDealership {
  constructor(cars) {
    this.cars = cars
    this.money = 0
  }


  purchaseCar() {
    let carIndex = window.prompt("Which car? 0. Subaru, 1. Tracker")
    let car = this.cars[carIndex]
    this.money += car.price
  }
}

let fairlyHonestBobs = new CarDealership([subaru, tracker])

fairlyHonestBobs.purchaseCar()