import State from '..'
import GumballMachine from '../../GumballMachine'

class NoQuarterState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  insertQuarter() {
    console.log('동전을 넣으셨습니다.')
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
  }

  ejectQuarter() {
    console.log('동전을 넣어 주세요.')
  }

  turnCrank() {
    console.log('동전을 넣어 주세요.')
  }

  dispense() {
    console.log('동전을 넣어 주세요.')
  }
}

export default NoQuarterState
