import State from '..'
import GumballMachine from '../../GumballMachine'

class HasQuarterState implements State {
  gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  isRandomWinner() {
    const PERCENT = 10
    const random = Math.floor(Math.random() * 99 + 1)

    return random <= PERCENT && this.gumballMachine.getCount() >= 2
  }

  insertQuarter() {
    console.log('동전은 한 개만 넣어 주세요.')
  }

  ejectQuarter() {
    console.log('동전이 반환됩니다.')

    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }

  turnCrank() {
    console.log('손잡이를 돌리셨습니다.')

    if (this.isRandomWinner()) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState())

      return
    }

    this.gumballMachine.setState(this.gumballMachine.getSoldState())
  }

  dispense() {
    console.log('동전을 넣어 주세요.')
  }
}

export default HasQuarterState
