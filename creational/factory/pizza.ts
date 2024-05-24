interface PizzaIngredientFactory {
  createDough(): string
  createSauce(): string
  createCheese(): string
  createVeggies(): string[]
  createPepperoni(): string
  createClam(): string
}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough() {
    return '씬 크러스트 도우'
  }

  public createSauce() {
    return '마리나라 소스'
  }

  public createCheese() {
    return '레지아노 치즈'
  }

  public createVeggies() {
    return ['마늘', '양파', '버섯', '빨간 고추']
  }

  public createPepperoni() {
    return '페퍼로니'
  }

  public createClam() {
    return '조개'
  }
}

abstract class Pizza {
  public name: string

  public dough: string

  public sauce: string

  public toppings: string[] = []

  public constructor(
    name: string,
    dough: string,
    sauce: string,
    toppings: string[] = [],
  ) {
    this.name = name
    this.dough = dough
    this.sauce = sauce
    this.toppings = toppings
  }

  public prepare() {
    console.log(`준비 중: ${this.name}`)
    console.log(`도우를 돌리는 중`)
    console.log(`소스를 추가하는 중`)
    console.log(`토핑 추가 중`)
    for (const topping of this.toppings) {
      console.log(`  ${topping}`)
    }
  }

  public bake() {
    console.log('175도에서 25분간 굽기')
  }

  public cut() {
    console.log('피자를 대각선으로 자르기')
  }

  public box() {
    console.log('상자에 피자를 담기')
  }

  public setName(name: string) {
    this.name = name
  }

  public getName() {
    return this.name
  }

  public toString() {
    // 피자에 관련된 코드
  }
}

class NyStyleCheesePizza extends Pizza {
  public constructor() {
    super('뉴욕 스타일 소스와 치즈 피자', '씬 크러스트 도우', '마리나라 소스', [
      '레지아노 치즈',
    ])
  }
}

class ChicagoStyleCheesePizza extends Pizza {
  public constructor() {
    super(
      '시카고 스타일 딥디쉬 치즈 피자',
      '아주 두꺼운 크러스트 도우',
      '플럼 토마토 소스',
      ['모짜렐라 치즈'],
    )
  }

  public cut() {
    console.log('사각형 모양으로 자르기')
  }
}

class CheesePizza extends Pizza {
  public constructor() {
    super('치즈 피자', '도우', '소스', ['치즈'])
  }
}

class PepperoniPizza extends Pizza {
  public constructor() {
    super('페퍼로니 피자', '도우', '소스', ['페퍼로니'])
  }
}

class ClamPizza extends Pizza {
  public constructor() {
    super('조개 피자', '도우', '소스', ['조개'])
  }
}

class VeggiePizza extends Pizza {
  public constructor() {
    super('야채 피자', '도우', '소스', ['야채'])
  }
}

abstract class PizzaStore {
  public orderPizza(type: string) {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  protected abstract createPizza(type: string): Pizza
}

class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string) {
    if (type === 'cheese') {
      return new CheesePizza()
    } else if (type === 'pepperoni') {
      return new PepperoniPizza()
    } else if (type === 'clam') {
      return new ClamPizza()
    } else if (type === 'veggie') {
      return new VeggiePizza()
    }

    return new CheesePizza()
  }
}

class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string) {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza()
    } else if (type === 'pepperoni') {
      return new PepperoniPizza()
    } else if (type === 'clam') {
      return new ClamPizza()
    } else if (type === 'veggie') {
      return new VeggiePizza()
    }

    return new ChicagoStyleCheesePizza()
  }
}

class PizzaTestDrive {
  public static main() {
    const nyStore = new NYPizzaStore()
    const chicagoStore = new ChicagoPizzaStore()

    let pizza = nyStore.orderPizza('cheese')
    console.log(`이동중: ${pizza.getName()}\n`)

    pizza = chicagoStore.orderPizza('cheese')
    console.log(`이동중: ${pizza.getName()}\n`)
  }
}

const main = () => {
  PizzaTestDrive.main()
}

main()
