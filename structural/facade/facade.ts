export {}

class TheaterLight {
  public on() {
    console.log('조명을 켭니다.')
  }

  public dim(value: number) {
    console.log(`조명 밝기를 ${value}%로 조절합니다.`)
  }

  public off() {
    console.log('조명을 끕니다.')
  }
}

class Projector {
  public on() {
    console.log('프로젝터를 켭니다.')
  }

  public wideScreenMode() {
    console.log('프로젝터를 넓은 화면 모드로 전환합니다.')
  }

  public tvMode() {
    console.log('프로젝터를 TV 모드로 전환합니다.')
  }

  public off() {
    console.log('프로젝터를 끕니다.')
  }
}

class StreamingPlayer {
  private movie: string = ''

  public on() {
    console.log('스트리밍 플레이어를 켭니다.')
  }

  public off() {
    console.log('스트리밍 플레이어를 끕니다.')
  }

  public play(movie: string) {
    this.movie = movie
    console.log(`영화 ${this.movie}를 재생합니다.`)
  }

  public pause() {
    console.log('영화를 일시 정지합니다.')
  }

  public setSurroundAudio() {
    console.log('사운드를 서라운드로 설정합니다.')
  }

  public setTwoChannelAudio() {
    console.log('사운드를 2채널로 설정합니다.')
  }

  public stop() {
    console.log(`영화 ${this.movie}를 정지합니다.`)
  }
}

class PopcornPopper {
  public on() {
    console.log('팝콘 팝을 켭니다.')
  }

  public off() {
    console.log('팝콘 팝을 끕니다.')
  }

  public pop() {
    console.log('팝콘을 튀깁니다.')
  }
}

class Screen {
  public up() {
    console.log('스크린을 올립니다.')
  }

  public down() {
    console.log('스크린을 내립니다.')
  }
}

class Tuner {
  public on() {
    console.log('튜너를 켭니다.')
  }

  public off() {
    console.log('튜너를 끕니다.')
  }

  public setAm() {
    console.log('튜너를 AM으로 설정합니다.')
  }

  public setFm() {
    console.log('튜너를 FM으로 설정합니다.')
  }

  public setFrequency() {
    console.log('튜너의 주파수를 설정합니다.')
  }
}

class Amplifier {
  public on() {
    console.log('앰프를 켭니다.')
  }

  public off() {
    console.log('앰프를 끕니다.')
  }

  public setStereoSound() {
    console.log('앰프를 스테레오 사운드로 설정합니다.')
  }

  public setSurroundSound() {
    console.log('앰프를 서라운드 사운드로 설정합니다.')
  }

  public setVolume(value: number) {
    console.log(`앰프 볼륨을 ${value}로 설정합니다.`)
  }
}

class HomeTheaterFacade {
  private theaterLight: TheaterLight
  private projector: Projector
  private streamingPlayer: StreamingPlayer
  private popcornPopper: PopcornPopper
  private screen: Screen
  private amplifier: Amplifier

  public constructor(
    theaterLight: TheaterLight,
    projector: Projector,
    streamingPlayer: StreamingPlayer,
    popcornPopper: PopcornPopper,
    screen: Screen,
    amplifier: Amplifier,
  ) {
    this.theaterLight = theaterLight
    this.projector = projector
    this.streamingPlayer = streamingPlayer
    this.popcornPopper = popcornPopper
    this.screen = screen
    this.amplifier = amplifier
  }

  public watchMovie(movie: string) {
    console.log('영화를 보기 위한 준비를 시작합니다.')
    this.popcornPopper.on()
    this.popcornPopper.pop()
    this.theaterLight.dim(10)
    this.screen.down()
    this.projector.on()
    this.projector.wideScreenMode()
    this.amplifier.on()
    this.amplifier.setSurroundSound()
    this.amplifier.setVolume(5)
    this.streamingPlayer.on()
    this.streamingPlayer.play(movie)
    console.log('\n')
  }

  public endMovie() {
    console.log('홈 시어터를 끄는 중.')
    this.popcornPopper.off()
    this.theaterLight.on()
    this.screen.up()
    this.projector.off()
    this.amplifier.off()
    this.streamingPlayer.stop()
    this.streamingPlayer.off()
  }
}

class HomeTheaterTestDrive {
  public static main() {
    const theaterLight = new TheaterLight()
    const projector = new Projector()
    const streamingPlayer = new StreamingPlayer()
    const popcornPopper = new PopcornPopper()
    const screen = new Screen()
    const amplifier = new Amplifier()

    const homeTheater = new HomeTheaterFacade(
      theaterLight,
      projector,
      streamingPlayer,
      popcornPopper,
      screen,
      amplifier,
    )

    homeTheater.watchMovie('인디아나 존스:레이더스')
    homeTheater.endMovie()
  }
}

HomeTheaterTestDrive.main()
