import GumballMachine from './GumballMachine'

const testGumballMachine = () => {
  const gumballMachine = new GumballMachine(5)

  gumballMachine.toString()
  gumballMachine.inserQuarter()
  gumballMachine.turnCrank()

  gumballMachine.toString()
  gumballMachine.inserQuarter()
  gumballMachine.turnCrank()

  gumballMachine.toString()
  gumballMachine.inserQuarter()
  gumballMachine.turnCrank()
}

testGumballMachine()
