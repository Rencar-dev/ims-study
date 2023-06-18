import State from '../State'
import HasQuarterState from '../State/HasQuarterState'
import NoQuarterState from '../State/NoQuarterState'
import SoldOutState from '../State/SoldoutState'
import SoldState from '../State/SoldState'
import WinnerState from '../State/WinnerState'

class GumballMachine {
  state: State
  hasQuarterState: HasQuarterState
  noQuarterState: NoQuarterState
  soldState: SoldState
  soldOutState: SoldOutState
  winnerState: WinnerState

  constructor(private count: number) {
    this.hasQuarterState = new HasQuarterState(this)
    this.noQuarterState = new NoQuarterState(this)
    this.soldState = new SoldState(this)
    this.soldOutState = new SoldOutState(this)
    this.winnerState = new WinnerState(this)

    this.state = this.count > 0 ? this.noQuarterState : this.soldOutState
  }

  inserQuarter() {
    this.state.insertQuarter()
  }

  ejectQuarter() {
    this.state.ejectQuarter()
  }

  turnCrank() {
    this.state.turnCrank()
    this.state.dispense()
  }

  releaseBall() {
    console.log('알맹이를 내보내고 있습니다.')

    if (this.count > 0) {
      this.count = this.count - 1
    }
  }

  setState(nextState: State) {
    this.state = nextState
  }

  getCount() {
    return this.count
  }

  getHasQuarterState() {
    return this.hasQuarterState
  }

  getNoQuarterState() {
    return this.noQuarterState
  }

  getSoldState() {
    return this.soldState
  }

  getSoldOutState() {
    return this.soldOutState
  }

  getWinnerState() {
    return this.winnerState
  }

  toString() {
    console.log('-----------------------')
    console.log('최신형 뽑기')
    console.log(`남은 갯수: ${this.count}`)
    console.log('-----------------------')
  }
}

export default GumballMachine
