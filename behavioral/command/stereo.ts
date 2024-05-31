import { Command } from './types'

export class Stereo {
  private room: string

  public constructor(room: string) {
    this.room = room
  }

  public on() {
    console.log(`${this.room} 오디오가 켜졌습니다.`)
  }

  public off() {
    console.log(`${this.room} 오디오가 꺼졌습니다.`)
  }

  public setCD() {
    console.log(`${this.room}에서 CD가 재생됩니다.`)
  }

  public setDVD() {
    console.log(`${this.room}에서 DVD가 재생됩니다.`)
  }

  public setRadio() {
    console.log(`${this.room} 라디오가 설정되었습니다.`)
  }

  public setVolume(volume: number) {
    console.log(`${this.room} 볼륨이 ${volume}로 설정되었습니다.`)
  }
}

export class StereoOnWithCDCommand implements Command {
  private stereo

  public constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  public execute() {
    this.stereo.on()
    this.stereo.setCD()
    this.stereo.setVolume(11)
  }

  public undo() {
    this.stereo.off()
  }
}

export class StereoOffCommand implements Command {
  private stereo

  public constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  public execute() {
    this.stereo.off()
  }

  public undo() {
    this.stereo.on()
  }
}
