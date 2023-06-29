# State Pattern

> 객체의 내부 상태가 바뀜에 따라서 객체의 행동을 바꿀 수 있다. 마치 클래스가 바뀌는 것과 같은 결과를 얻을 수 있다. 

- concrete state는 상태를 갖고있는 context를 합성하여 내부 상태를 변경한다.
- 상태를 기반으로 하는 행동을 캡슐화하고 행동을 현재 상태에 위임한다.


## 예시 
State 패턴을 사용하면 아래와 같이 메서드에서 내부 상태에 따라 조건문으로 분기친 코드를 상태별 행동을 캡슐화 할 수 있다. 

``` ts
class SlotMachine {
  state = 'NO_QUARTER';

  public insertQuarter() {
    if (this.state === 'NO_QUARTER') {
      // ...do something
    }
    if (this.state === 'HAS_QUARTER') {
      // ...do something
    }
    if (this.state === 'SOLD_OUT') {
      // ...do something
    }
  }
}
```

상태별 공통 행동을 interface로 정의한 후 concrete state class를 만든다.

``` ts 
interface State {
  insertQuarter():void
}

// concrete 
class NoQuarterState {
  slotMachine: SlotMachine;

  constructor(slotMachine: SlotMachine) {
    this.slotMachine = slotMachine;
  }

  insertQuarter() {
    console.log('동전이 투입되었습니다.');
    
    // change state
    this.slotMachine.setState(
      this.slotMachine.hasQuarterState
    );
  }
}

class HasQuarterState {
  slotMachine: SlotMachine;

  constructor(slotMachine: SlotMachine) {
    this.slotMachine = slotMachine;
  }

  insertQuarter() {
    // ...do something
  }
}
``` 

context에서는 내부의 현재 state에 따라 다른 행동을 하게 된다.

``` ts
// context 
class SlotMachine {
  state: State; 

  noQuarterState;
  hasQuarterState;

  constructor() {
    this.noQuarterState = new NoQuarterState(this); 
    this.hasQuarterState = new HasQuarterState(this);

    this.state = this.noQuarterState
  }

  public insertQuarter() {
    this.state.insertQuarter();
  }

  public setState(state: State) {
    this.state = state;
  }
}
```

클라이언트는 내부의 상태를 알 필요가 없이 동일한 메서드를 호출할 수 있다.

``` ts

const slotMachine = new SlotMachine();
slotMachine.insertQuarter();
```