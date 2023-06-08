interface Duck {
  quack(): void;
  fly(): void;
}

class MallardDuck implements Duck {
  public fly(): void {
    console.log('날고 있어요~');
  }
  public quack(): void {
    console.log('꽥!');
  }
}

interface Turkey {
  gobble();
  fly();
}

class WildTurkey implements Turkey {
  public gobble() {
    console.log("골골");
  }
  public fly() {
    console.log('짧은 거리를 날고 있어요');
  }
}

class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    Array(5)
      .fill(null)
      .forEach(_ => this.turkey.fly());
  }
}

const duck: Duck = new MallardDuck();

const turkey: Turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

const testDuck = (duck: Duck) => {
  duck.fly();
  duck.quack();
};

testDuck(duck); // ✅ ok
testDuck(turkey); // ❌ error
testDuck(turkeyAdapter); // ✅ ok

export { };