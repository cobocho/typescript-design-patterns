import { Command } from './types'

export class NoCommand implements Command {
  public execute() {}

  public undo() {}
}
