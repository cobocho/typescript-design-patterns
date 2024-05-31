import {
  GarageDoor,
  GarageDoorDownCommand,
  GarageDoorUpCommand,
} from './garage'
import {
  CeilingFan,
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
  CeilingFanOnCommand,
} from './ceilingFan'
import { Light, LightOffCommand, LightOnCommand } from './light'
import { Stereo, StereoOffCommand, StereoOnWithCDCommand } from './stereo'
import { Command } from './types'
import { NoCommand } from './noCommand'
import { TV, TVOffCommand, TVOnCommand } from './tv'
import { MacroCommand } from './macro'
import { HotTub, HotTubOnCommand, HotTubOffCommand } from './hotTub'

class RemoteControl {
  private onCommands: Command[] = []

  private offCommands: Command[] = []

  private undoCommand: Command

  public constructor() {
    const noCommand = new NoCommand()

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand
      this.offCommands[i] = noCommand
    }

    this.undoCommand = noCommand
  }

  public setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  public onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  public offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  public undoButtonWasPushed() {
    this.undoCommand.undo()
  }

  public toString() {
    let result = ''

    for (let i = 0; i < this.onCommands.length; i++) {
      result += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`
    }

    result += `[undo] ${this.undoCommand.constructor.name}\n`

    return result
  }
}

class RemoteControlTest {
  public static main() {
    const remote = new RemoteControl()

    // const livingRoomLight = new Light('거실')
    // const kitchenLight = new Light('주방')
    // const ceilingFan = new CeilingFan('거실')
    // const garageDoor = new GarageDoor('차고')
    // const stereo = new Stereo('거실')

    // const livingRoomLightOn = new LightOnCommand(livingRoomLight)
    // const livingRoomLightOff = new LightOffCommand(livingRoomLight)
    // const kitchenLightOn = new LightOnCommand(kitchenLight)
    // const kitchenLightOff = new LightOffCommand(kitchenLight)

    // const ceilingFanOn = new CeilingFanOnCommand(ceilingFan)
    // const ceilingFanOff = new CeilingFanOffCommand(ceilingFan)
    // const ceilingFanHigh = new CeilingFanOffCommand(ceilingFan)
    // const ceilingFanMedium = new CeilingFanOffCommand(ceilingFan)

    // const garageDoorOpen = new GarageDoorUpCommand(garageDoor)
    // const garageDoorClose = new GarageDoorDownCommand(garageDoor)

    // const stereoOnWithCD = new StereoOnWithCDCommand(stereo)
    // const stereoOff = new StereoOffCommand(stereo)

    // remote.setCommand(0, livingRoomLightOn, livingRoomLightOff)
    // remote.setCommand(1, kitchenLightOn, kitchenLightOff)
    // remote.setCommand(2, ceilingFanOn, ceilingFanOff)
    // remote.setCommand(3, stereoOnWithCD, stereoOff)

    // console.log(remote.toString())

    // remote.onButtonWasPushed(0)
    // remote.offButtonWasPushed(0)
    // remote.onButtonWasPushed(1)
    // remote.offButtonWasPushed(1)
    // remote.onButtonWasPushed(2)
    // remote.offButtonWasPushed(2)
    // remote.undoButtonWasPushed()
    // remote.onButtonWasPushed(3)
    // remote.offButtonWasPushed(3)

    // const ceilingFan = new CeilingFan('거실')

    // const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan)
    // const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan)
    // const ceilingFanOff = new CeilingFanOffCommand(ceilingFan)

    // remote.setCommand(0, ceilingFanMedium, ceilingFanOff)
    // remote.setCommand(1, ceilingFanHigh, ceilingFanOff)

    // remote.onButtonWasPushed(0)
    // remote.offButtonWasPushed(0)
    // console.log(remote.toString())
    // remote.undoButtonWasPushed()

    // remote.onButtonWasPushed(1)
    // console.log(remote.toString())
    // remote.undoButtonWasPushed()

    const light = new Light('거실')
    const tv = new TV('거실')
    const hotTub = new HotTub('거실')

    const lightOn = new LightOnCommand(light)
    const lightOff = new LightOffCommand(light)
    const tvOn = new TVOnCommand(tv)
    const tvOff = new TVOffCommand(tv)
    const hotTubOn = new HotTubOnCommand(hotTub)
    const hotTubOff = new HotTubOffCommand(hotTub)

    const partyOn: Command[] = [lightOn, tvOn, hotTubOn]
    const partyOff: Command[] = [lightOff, tvOff, hotTubOff]

    const partyOnMacro = new MacroCommand(partyOn)
    const partyOffMacro = new MacroCommand(partyOff)

    remote.setCommand(0, partyOnMacro, partyOffMacro)

    console.log(remote.toString())

    remote.onButtonWasPushed(0)
    remote.offButtonWasPushed(0)
    remote.undoButtonWasPushed()
  }
}

RemoteControlTest.main()
