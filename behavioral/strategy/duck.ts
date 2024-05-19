interface FlyBehavior {
  fly(): void
}

interface QuackBehavior {
  quack(): void
}

class Animal {
  public makeSound(): void {
    console.log('I am an animal')
  }
}

abstract class Duck extends Animal {
  private flyBehavior: FlyBehavior

  private quackBehavior: QuackBehavior

  public constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    super()
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb
  }

  public performQuack() {
    this.quackBehavior.quack()
  }

  public performFly() {
    this.flyBehavior.fly()
  }

  public swim() {
    console.log('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠')
  }
}

class FlyWithWings implements FlyBehavior {
  public fly() {
    console.log('날고 있어요!')
  }
}

class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log('저는 못 날아요')
  }
}

class Quack implements QuackBehavior {
  public quack() {
    console.log('꽥!')
  }
}

class MuteQuack implements QuackBehavior {
  public quack() {
    console.log('<< 조용 >>')
  }
}

class Squeak implements QuackBehavior {
  public quack() {
    console.log('삑!')
  }
}

class MallardDuck extends Duck {
  public constructor() {
    super(new FlyWithWings(), new Quack())
  }

  public display() {
    console.log('저는 물오리입니다')
  }
}

class FlyRockerPowered implements FlyBehavior {
  public fly() {
    console.log('로켓 추진으로 날아갑니다')
  }
}

class ModelDuck extends Duck {
  public constructor() {
    super(new FlyNoWay(), new Quack())
  }

  public display() {
    console.log('저는 모형 오리입니다')
  }
}

const miniduckSimulator = () => {
  const mallard = new MallardDuck()
  mallard.performQuack()
  mallard.performFly()

  const model = new ModelDuck()
  model.performFly()
  model.setFlyBehavior(new FlyRockerPowered())
  model.performFly()
}

miniduckSimulator()
