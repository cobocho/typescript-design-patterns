export {}

interface Duck {
  quack(): void
  fly(): void
}

class MallardDuck implements Duck {
  public quack() {
    console.log('꽥')
  }

  public fly() {
    console.log('날고 있어요!!')
  }
}

interface Turkey {
  gobble(): void
  fly(): void
}

class WildTurkey implements Turkey {
  public gobble() {
    console.log('골골')
  }

  public fly() {
    console.log('짧은 거리를 날고 있어요!!')
  }
}

class TurkeyAdapter implements Duck {
  private turkey: Turkey

  public constructor(turkey: Turkey) {
    this.turkey = turkey
  }

  public quack() {
    this.turkey.gobble()
  }

  public fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly()
    }
  }
}

class DuckTestDrive {
  public static main() {
    const duck: Duck = new MallardDuck()
    const turkey: Turkey = new WildTurkey()
    const turkeyAdapter = new TurkeyAdapter(turkey)

    console.log('칠면조가 말하길')
    turkey.gobble()
    turkey.fly()

    console.log('오리가 말하길')
    this.testDuck(duck)

    console.log('칠면조 어댑터가 말하길')
    this.testDuck(turkeyAdapter)
  }

  public static testDuck(duck: Duck) {
    duck.quack()
    duck.fly()
  }
}

DuckTestDrive.main()
