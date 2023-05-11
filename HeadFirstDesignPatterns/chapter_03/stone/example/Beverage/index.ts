export abstract class Beverage {
  description = ''

  getDescription = () => {
    return this.description
  }

  abstract cost(): number
}
