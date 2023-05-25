interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  public on() { }

  public off() { }
}

class NoCommand implements Command {
  execute(): void { }
  undo(): void { }
}

class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }
  public undo(): void {
    this.light.off();
  }
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }
  public undo(): void {
    this.light.on();
  }
}

class RemoteControlWithUndo {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    const noCommand = new NoCommand();

    Array(7).fill(null).forEach(_ => {
      this.onCommands.push(noCommand);
      this.offCommands.push(noCommand);
    });

    this.undoCommand = noCommand;
  }

  public setCommand(slot: number, onCommands: Command, offCommands: Command) {
    onCommands[slot] = onCommands;
    offCommands[slot] = offCommands;
  }

  public onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed() {
    this.undoCommand.undo();
  }
}