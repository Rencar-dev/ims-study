interface Command {
  execute(): void;
}

// receiver
class Light {
  public on() { }
}

// command
class LightInCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}

// invoker 
class SimpleRemoteControl {
  private slot: Command;

  public setCommand(command: Command) {
    this.slot = command;
  }

  public buttonWasPressed() {
    this.slot.execute();
  }
}

const light = new Light();
const lightOn = new LightInCommand(light);
const remote = new SimpleRemoteControl();

remote.setCommand(lightOn);
remote.buttonWasPressed();

export { };