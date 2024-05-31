import { Command } from './types'

export class TV {
  private room: string

  public constructor(room: string) {
    this.room = room
  }

  public on() {
    console.log(`${this.room} TV가 켜졌습니다.`)
  }

  public off() {
    console.log(`${this.room} TV가 꺼졌습니다.`)
  }

  public setDVD() {
    console.log(`${this.room}에서 DVD가 재생됩니다.`)
  }
}

export class TVOnCommand implements Command {
  private tv

  public constructor(tv: TV) {
    this.tv = tv
  }

  public execute() {
    this.tv.on()
    this.tv.setDVD()
  }

  public undo() {
    this.tv.off()
  }
}

export class TVOffCommand implements Command {
  private tv

  public constructor(tv: TV) {
    this.tv = tv
  }

  public execute() {
    this.tv.off()
  }

  public undo() {
    this.tv.on()
  }
}
