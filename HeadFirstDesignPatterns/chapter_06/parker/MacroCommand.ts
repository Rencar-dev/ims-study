interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  public on() { }
  public off() { }
}
class Radio {
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

class RadioOnCommand implements Command {
  radio: Radio;
  constructor(radio: Radio) {
    this.radio = radio;
  }

  execute(): void {
    this.radio.on();
  }
  undo(): void {
    this.undo();
  }
}
class RadioOffCommand implements Command {
  radio: Radio;
  constructor(radio: Radio) {
    this.radio = radio;
  }

  execute(): void {
    this.radio.off();
  }
  undo(): void {
    this.radio.on();
  }
}
class MacroCommand implements Command {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  execute(): void {
    this.commands.forEach(command => command.execute());
  }
  undo(): void {
    this.commands.forEach(command => command.undo());
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

const remoteControlWithUndo = new RemoteControlWithUndo();
const partyOn = new MacroCommand([new LightOnCommand(new Light), new RadioOnCommand(new Radio)]);
const partyOff = new MacroCommand([new LightOffCommand(new Light), new RadioOffCommand(new Radio)]);

remoteControlWithUndo.setCommand(0, partyOn, partyOff);