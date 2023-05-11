## 개요
`decorator pattern`으로 카페 키오스크 애플리케이션 구현

## 프로젝트 설명
decorator pattern으로 `비지니스 로직`을 구현하고, React로 `view`를 그림으로서 키오스크 어플리케이션을 구현하였다.
(음료와 옵션은 정책에 따라 변경될 수 있으므로 `비지니스 로직`이라고 생각된다.)

## 후기
아무래도 책에 있는 예제만으로 키오스크 애플리케이션을 만드는것은 한계가 있었다. 

1. description 문자열을 더하는것은 음료와 옵션을 설명하기엔 부적절하다.

2. 데코레이터로 옵션을 더하는것은 문제가 없지만, 실제론 옵션을 뺄 수 있는 기능도 있어야 하는데 이를 데코레이터 패턴으로 어떻게 구현해야 할 지 잘모르겠다. (빼기 데코레이터를 만들어야하나..?)

#### 그럼에도 불구하고..
``` ts
const [beverage, setBeverage]= useState<Beverage>(); // type: Beverage

// ✅
setBeverage(new Americano()); // type: Americano
setBeverage(new Shot(beverage)) // type: Shot
```

beverage 상태에 Beverage 클래스로 생성한 인스터스와 CondimentDecorator 클래스로 생성한 인스턴스가 같은 자리(beverage)에 들어갈 수 있는게 신기하고 재밌었다. 1장에서 `상위 형식에 맞춰 프로그래밍하라` 하라는 이야기가 와닿는 순간이었다.
