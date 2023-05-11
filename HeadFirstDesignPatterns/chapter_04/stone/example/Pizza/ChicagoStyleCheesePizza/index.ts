import Pizza from '..'

class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super()

    this.name = '시카고 스타일 딥 디쉬 치즈 피자'
    this.dough = '아주 두꺼운 크러스트 도우'
    this.sauce = '플럼토마토 소스'

    this.toppings.push('잘게 조각낸 모짜렐라 치즈')
  }
}

export default ChicagoStyleCheesePizza
