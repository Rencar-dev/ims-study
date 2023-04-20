import HeaderNavigator from '../Navigator/HeaderNavigator'

class WebHeader {
  private navigator: HeaderNavigator

  constructor(navigator: HeaderNavigator) {
    this.navigator = navigator
  }

  setNavigator(navigator: HeaderNavigator) {
    this.navigator = navigator
  }

  render() {
    return this.navigator.render()
  }
}

export default WebHeader
