import ChocolateBoiler from './ChocolateBoiler'
;(() => {
  const boiler = ChocolateBoiler.getInstance()

  console.log(boiler.isEmpty(), boiler.isBoiled())

  boiler.fill()
  boiler.boil()
  boiler.drain()

  console.log(boiler.isEmpty(), boiler.isBoiled())

  const sameBoiler = ChocolateBoiler.getInstance()
  console.log(sameBoiler.isEmpty(), sameBoiler.isBoiled())
})()
