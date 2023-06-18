import State from '..'
import GumballMachine from '../../GumballMachine'

class WinnerState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  insertQuarter() {
    console.log('알맹이를 내보내고 있습니다.')
  }

  ejectQuarter() {
    console.log('알맹이를 내보내고 있습니다.')
  }

  turnCrank() {
    console.log('손잡이는 한 번만 돌려 주세요.')
  }

  dispense() {
    this.gumballMachine.releaseBall()

    if (this.gumballMachine.getCount() <= 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState())

      return
    }

    this.gumballMachine.releaseBall()
    console.log('축하드립니다! 알맹이를 하나 더 받으실 수 있습니다.')

    if (this.gumballMachine.getCount() <= 0) {
      console.log('더 이상 알맹이가 없습니다.')
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState())

      return
    }

    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }
}

export default WinnerState
