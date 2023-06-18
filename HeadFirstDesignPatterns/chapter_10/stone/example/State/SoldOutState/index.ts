import State from '..'
import GumballMachine from '../../GumballMachine'

class SoldOutState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  insertQuarter() {
    console.log('죄송합니다. 매진되었습니다.')
  }

  ejectQuarter() {
    console.log('동전을 반환할 수 없습니다. 동전을 넣지 않았습니다.')
  }

  turnCrank() {
    console.log('죄송합니다. 매진되었습니다.')
  }

  dispense() {
    console.log('알맹이를 내보낼 수 없습니다.')
  }
}

export default SoldOutState
