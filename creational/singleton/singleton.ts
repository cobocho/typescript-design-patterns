class Singleton {
  private static uniqueInstance: Singleton

  // eslint-disable-next-line no-useless-constructor
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.uniqueInstance) {
      Singleton.uniqueInstance = new Singleton()
    }

    return Singleton.uniqueInstance
  }
}

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

console.log(singleton1 === singleton2) // true

class ChocolateBoiler {
  private empty: boolean

  private boiled: boolean

  private static uniqueInstance: ChocolateBoiler = new ChocolateBoiler()

  private constructor() {
    this.empty = true
    this.boiled = false
  }

  public static getInstance(): ChocolateBoiler {
    return ChocolateBoiler.uniqueInstance
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false
      this.boiled = false
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true
    }
  }

  public isEmpty(): boolean {
    return this.empty
  }

  public isBoiled(): boolean {
    return this.boiled
  }
}
