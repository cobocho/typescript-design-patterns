interface Observer {
  update(temperature: number, humidity: number, pressure: number): void
}

interface Subject {
  registerObserver(o: Observer): void

  removeObserver(o: Observer): void

  notifyObservers(): void
}

interface DisplayElement {
  display(): void
}

class WeatherData implements Subject {
  private observers: Set<Observer> = new Set()

  private temperature: number = 0

  private humidity: number = 0

  private pressure: number = 0

  public registerObserver(o: Observer): void {
    this.observers.add(o)
  }

  public removeObserver(o: Observer): void {
    this.observers.delete(o)
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure)
    })
  }

  public measurementsChanged(): void {
    this.notifyObservers()
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0

  private humidity: number = 0

  private weatherData: WeatherData

  public constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public update(temperature: number, humidity: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.display()
  }

  public display(): void {
    console.log(
      `현재 상태: 온도 "${this.temperature}C" 습도 "${this.humidity}%"`,
    )
  }
}

class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92

  private lastPressure: number = 0

  private weatherData: WeatherData

  public constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure
    this.currentPressure = pressure
    this.display()
  }

  public display(): void {
    console.log('예보: ')
    if (this.currentPressure > this.lastPressure) {
      console.log('날씨가 개선될 것입니다!')
    } else if (this.currentPressure === this.lastPressure) {
      console.log('날씨가 그대로 일 것입니다')
    } else if (this.currentPressure < this.lastPressure) {
      console.log('한숨 돌릴 날씨가 올 것입니다')
    }
  }
}

class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp = 0.0

  private minTemp = 200

  private tempSum = 0.0

  private numReadings = 0

  private weatherData: WeatherData

  public constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.tempSum += temperature
    this.numReadings++

    if (temperature > this.maxTemp) {
      this.maxTemp = temperature
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature
    }

    this.display()
  }

  public display(): void {
    console.log(
      `평균/최대/최소 온도 = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`,
    )
  }
}

class WeatherStation {
  public static main(): void {
    const weatherData = new WeatherData()
    const currentDisplay = new CurrentConditionsDisplay(weatherData)
    const forecastDisplay = new ForecastDisplay(weatherData)
    const statisticsDisplay = new StatisticsDisplay(weatherData)

    weatherData.setMeasurements(80, 65, 30.4)
    weatherData.setMeasurements(82, 70, 29.2)
    weatherData.setMeasurements(78, 90, 29.2)
  }
}

WeatherStation.main()
