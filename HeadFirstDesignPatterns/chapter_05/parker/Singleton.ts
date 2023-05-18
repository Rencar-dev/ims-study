class Singleton1 {
  private static uniqueInstance: Singleton1;

  constructor() { }

  public static getInstance() {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton1();

      return this.uniqueInstance;
    }

    return this.uniqueInstance;
  }
}

Singleton1.getInstance() === Singleton1.getInstance(); // true


// better then Singleton1
class Singleton2 {
  private static uniqueInstance = new Singleton2();

  constructor() {
    return Singleton2.uniqueInstance;
  }
}

new Singleton2() === new Singleton2(); // true
