import { Command } from './types'

export class Light {
  private room: string

  public constructor(room: string) {
    this.room = room
  }

  public on() {
    console.log(`${this.room} 조명이 켜졌습니다.`)
  }

  public off() {
    console.log(`${this.room} 조명이 꺼졌습니다.`)
  }
}

export class LightOnCommand implements Command {
  private light: Light

  public constructor(light: Light) {
    this.light = light
  }

  public LightOnCommand(light: Light) {
    this.light = light
  }

  public execute() {
    this.light.on()
  }

  public undo() {
    this.light.off()
  }
}

export class LightOffCommand implements Command {
  private light: Light

  public constructor(light: Light) {
    this.light = light
  }

  public execute() {
    this.light.off()
  }

  public undo() {
    this.light.on()
  }
}
