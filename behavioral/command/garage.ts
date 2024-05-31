import { Command } from './types'

export class GarageDoor {
  private room: string

  public constructor(room: string) {
    this.room = room
  }

  public up() {
    console.log('차고 문이 올라갑니다.')
  }

  public down() {
    console.log('차고 문이 내려갑니다.')
  }
}

export class GarageDoorUpCommand implements Command {
  private garage: GarageDoor

  public constructor(garage: GarageDoor) {
    this.garage = garage
  }

  public execute(): void {
    this.garage.up()
  }

  public undo(): void {
    this.garage.down()
  }
}

export class GarageDoorDownCommand implements Command {
  private garage: GarageDoor

  public constructor(garage: GarageDoor) {
    this.garage = garage
  }

  public execute(): void {
    this.garage.down()
  }

  public undo(): void {
    this.garage.up()
  }
}
