import { Command } from './types'

export class CeilingFan {
  public static HIGH = 3

  public static MEDIUM = 2

  public static LOW = 1

  public static OFF = 0

  private speed: number

  private room: string

  public constructor(room: string) {
    this.room = room
    this.speed = CeilingFan.OFF
  }

  public high(): void {
    this.speed = CeilingFan.HIGH
    console.log(`${this.room} 선풍기 속도가 HIGH로 설정되었습니다.`)
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM
    console.log(`${this.room} 선풍기 속도가 MEDIUM으로 설정되었습니다.`)
  }

  public low(): void {
    this.speed = CeilingFan.LOW
    console.log(`${this.room} 선풍기 속도가 LOW로 설정되었습니다.`)
  }

  public off(): void {
    this.speed = CeilingFan.OFF
    console.log(`${this.room} 선풍기가 꺼졌습니다.`)
  }

  public getSpeed(): number {
    return this.speed
  }
}

export class CeilingFanOnCommand implements Command {
  private ceilingFan: CeilingFan

  private prevSpeed: number = CeilingFan.OFF

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.high()
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFan.LOW:
        this.ceilingFan.low()
        break
      case CeilingFan.OFF:
        this.ceilingFan.off()
        break
    }
  }
}

export class CeilingFanOffCommand implements Command {
  private ceilingFan: CeilingFan

  private prevSpeed: number = CeilingFan.OFF

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.off()
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFan.LOW:
        this.ceilingFan.low()
        break
      case CeilingFan.OFF:
        this.ceilingFan.off()
        break
    }
  }
}

export class CeilingFanHighCommand implements Command {
  private ceilingFan: CeilingFan

  private prevSpeed: number = CeilingFan.OFF

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.high()
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFan.LOW:
        this.ceilingFan.low()
        break
      case CeilingFan.OFF:
        this.ceilingFan.off()
        break
    }
  }
}

export class CeilingFanMediumCommand implements Command {
  private ceilingFan: CeilingFan

  private prevSpeed: number = CeilingFan.OFF

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.medium()
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFan.LOW:
        this.ceilingFan.low()
        break
      case CeilingFan.OFF:
        this.ceilingFan.off()
        break
    }
  }
}

export class CeilingFanLowCommand implements Command {
  private ceilingFan: CeilingFan

  private prevSpeed: number = CeilingFan.OFF

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.low()
  }

  public undo(): void {
    switch (this.prevSpeed) {
      case CeilingFan.HIGH:
        this.ceilingFan.high()
        break
      case CeilingFan.MEDIUM:
        this.ceilingFan.medium()
        break
      case CeilingFan.LOW:
        this.ceilingFan.low()
        break
      case CeilingFan.OFF:
        this.ceilingFan.off()
        break
    }
  }
}
