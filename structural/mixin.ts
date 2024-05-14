/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

interface Constructor<T = object> {
  new (...args: unknown[]): T
}

const HorizontalMoveMixin = (superClass: Constructor) => {
  return class extends superClass {
    public moveLeft() {
      console.log('left')
    }

    public moveRight() {
      console.log('right')
    }
  }
}

const VerticalMoveMixin = (superclass: Constructor) =>
  class extends superclass {
    public moveTop() {
      console.log('top')
    }

    public moveBottom() {
      console.log('bottom')
    }
  }

class Creature {
  public eat() {
    console.log('eat!')
  }
}

class Squid extends VerticalMoveMixin(Creature) {}

class Crab extends HorizontalMoveMixin(Creature) {}

class Turtle extends VerticalMoveMixin(HorizontalMoveMixin(Creature)) {}

const squidActive = () => {
  const squid = new Squid()

  squid.moveBottom()
  squid.moveTop()
  squid.eat()
}

const crabActive = () => {
  const crab = new Crab()

  crab.moveLeft()
  crab.moveRight()
  crab.eat()
}

const turtleActive = () => {
  const turtle = new Turtle()

  turtle.moveBottom()
  turtle.moveTop()
  turtle.moveLeft()
  turtle.moveRight()
  turtle.eat()
}

squidActive() // top bottom eat!
crabActive() // left right eat!
turtleActive() // top bottom left right eat!
