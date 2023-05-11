abstract class Pizza {
  name: string = ''
  dough: string = ''
  sauce: string = ''
  toppings: string[] = []

  prepare = () => {
    console.log('준비 중: ' + this.name)
    console.log('도우를 돌리는 중...')
    console.log('소스를 뿌리는 중...')
    console.log('토핑을 올리는 중...')

    this.toppings.forEach((topping) => console.log(' ' + topping))
  }

  bake = () => {
    console.log('175도에서 25분 간 굽기')
  }

  cut = () => {
    console.log('피자를 사선으로 자르기')
  }

  box = () => {
    console.log('상자에 피자 담기')
  }

  getName = (): string => {
    return this.name
  }
}

export default Pizza
