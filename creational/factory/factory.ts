interface VehicleOptions {
  state?: 'brand new' | 'used'
  color?: string
}

abstract class Vehicle {
  public state: VehicleOptions['state']

  public color: string

  public constructor({
    state = 'brand new',
    color = 'silver',
  }: VehicleOptions) {
    this.state = state
    this.color = color
  }
}

interface CarOptions extends VehicleOptions {
  door?: number
}

class Car extends Vehicle {
  public door: number

  public state: Vehicle['state']

  public constructor({ door = 4, color, state }: CarOptions) {
    super({ state, color })
    this.door = door
  }
}

interface TruckOptions extends VehicleOptions {
  wheelSize?: 'small' | 'medium' | 'large'
}

class Truck extends Vehicle {
  public wheelSize: TruckOptions['wheelSize']

  public constructor({ wheelSize = 'large', color, state }: TruckOptions) {
    super({ color, state })
    this.wheelSize = wheelSize
  }
}

interface CarCreateOption extends CarOptions {
  vehicleType: 'car'
}

interface TruckCreateOption extends TruckOptions {
  vehicleType: 'truck'
}

type AllVehicleOptions = CarCreateOption | TruckCreateOption

class VehicleFactory {
  public create(options: AllVehicleOptions): Vehicle {
    const { vehicleType } = options

    switch (vehicleType) {
      case 'car':
        return new Car(options)
      case 'truck':
        return new Truck(options)
    }
  }
}

const vehicleFactory = new VehicleFactory()

vehicleFactory.create({
  vehicleType: 'car',
})
// Output: Car { state: 'brand new', color: 'silver', door: 4 }

vehicleFactory.create({
  vehicleType: 'truck',
})
// Output: Truck { state: 'brand new', color: 'silver', wheelSize: 'large' }
