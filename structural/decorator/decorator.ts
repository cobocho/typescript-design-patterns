abstract class Beverage {
  public description: string = '제목 없음'

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number
}

abstract class CondimentDecorator extends Beverage {
  public beverage: Beverage | null = null

  public abstract getDescription(): string
}

class Esspresso extends Beverage {
  public constructor() {
    super()
    this.description = '에스프레소'
  }

  public cost(): number {
    return 1.99
  }
}

class HouseBlend extends Beverage {
  public constructor() {
    super()
    this.description = '하우스 블렌드 커피'
  }

  public cost(): number {
    return 0.89
  }
}

class DarkRoast extends Beverage {
  public constructor() {
    super()
    this.description = '다크 로스트'
  }

  public cost(): number {
    return 0.99
  }
}

class Decaf extends Beverage {
  public constructor() {
    super()
    this.description = '디카페인'
  }

  public cost(): number {
    return 1.05
  }
}

class Mocha extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super()

    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage!.getDescription() + ', 모카'
  }

  public cost(): number {
    return 0.2 + this.beverage!.cost()
  }
}

class Soy extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage!.getDescription() + ', 두유'
  }

  public cost(): number {
    return 0.15 + this.beverage!.cost()
  }
}

class Whip extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage!.getDescription() + ', 휘핑'
  }

  public cost(): number {
    return 0.1 + this.beverage!.cost()
  }
}

class StarBuzzCoffee {
  public static main(...args: string[]) {
    const beverage = new Esspresso()
    console.log(beverage.getDescription() + ' $' + beverage.cost())

    let beverage2 = new DarkRoast()
    beverage2 = new Mocha(beverage2)
    beverage2 = new Mocha(beverage2)
    beverage2 = new Whip(beverage2)
    console.log(beverage2.getDescription() + ' $' + beverage2.cost())

    let beverage3 = new HouseBlend()
    beverage3 = new Soy(beverage3)
    beverage3 = new Mocha(beverage3)
    beverage3 = new Whip(beverage3)
    console.log(beverage3.getDescription() + ' $' + beverage3.cost())
  }
}

StarBuzzCoffee.main()
