import { Command } from './types'

export class HotTub {
  private room: string

  public constructor(room: string) {
    this.room = room
  }

  public on() {
    console.log(`${this.room} 욕조 온도를 40도로 설정합니다.`)
  }

  public off() {
    console.log(`${this.room} 욕조가 꺼졌습니다.`)
  }
}

export class HotTubOnCommand implements Command {
  private hotTub

  public constructor(hotTub: HotTub) {
    this.hotTub = hotTub
  }

  public execute() {
    this.hotTub.on()
  }

  public undo() {
    this.hotTub.off()
  }
}

export class HotTubOffCommand implements Command {
  private hotTub

  public constructor(hotTub: HotTub) {
    this.hotTub = hotTub
  }

  public execute() {
    this.hotTub.off()
  }

  public undo() {
    this.hotTub.on()
  }
}
