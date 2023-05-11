# Factory Pattern

### 다형성
- interface에 맞춰 코딩하면 변화에 대응할 수 있다.
 
### factory
- 객체 생성을 처리하는 클래스

### factory pattern
- 객체 생성을 캡슐화 한다.

### simple factory
- 팩토리가 PizzaStore 안에 포함됨
- 인스턴스 생성만 분리

### factory method pattern
- 서브클래스에서 어떤 클래스를 만들지 결정함으로서 객체 생성을 캡슐화 한다.
- 인스턴스 만드는 일을 서브클래스에게 맡기게 된다.

### Dependency Inversion Principle(의존석 역전)
- 추상화된 것에 의존하게 만들고, 구상 클래스에 의존하지 않게 만든다.
- `factory pattern`으로 의존성 역전 원칙을 준수 할 수 있다.

### 저수준, 고수준 구성요소
- '고수준' 구성 요소는 다른 '저수준' 구성요소에 의해 정의되는 행동이 들어있는 구성 요소를 뜻한다. 