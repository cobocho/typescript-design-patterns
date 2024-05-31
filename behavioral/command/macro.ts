import { Command } from './types'

export class MacroCommand implements Command {
  private commands: Command[]

  public constructor(commands: Command[]) {
    this.commands = commands
  }

  public execute(): void {
    for (const command of this.commands) {
      command.execute()
    }
  }

  public undo(): void {
    for (const command of this.commands) {
      command.undo()
    }
  }
}
