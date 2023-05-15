class ChocolateBoiler {
  private empty
  private boiled

  private static uniquInatance: ChocolateBoiler

  private constructor() {
    this.empty = true
    this.boiled = false
  }

  public static getInstance = () => {
    if (!this.uniquInatance) {
      this.uniquInatance = new ChocolateBoiler()
    }

    return this.uniquInatance
  }

  fill = () => {
    if (this.isEmpty()) {
      this.empty = false
      this.boiled = false
    }
  }

  drain = () => {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true
    }
  }

  boil = () => {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true
    }
  }

  isEmpty = () => {
    return this.empty
  }

  isBoiled = () => {
    return this.boiled
  }
}

export default ChocolateBoiler
