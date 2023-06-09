# 데코레이터 패턴

## 정의

- 객체에 추가 요소를 동적으로 더할 수 있음.
  - 서브클래스를 만들 때보다 훨씬 유연하게 기능을 확장 할 수 있음.
  - 기존 클래스 코드 수정 없이 객체에 새로운 임무를 추가할 수 있음.

## 구조

- `Component` 추상 클래스
- `Decorator` `Component`를 확장한 추상 클래스
  - `Component`의 레퍼런스를 갖고 있는다.
  - `Component`의 메소드를 실행 후 추가 작업을 수행할 수 있음.

## 특징

- 데코레이터의 슈퍼클래스는 자신이 장식하고 있는 객체의 슈퍼클래스와 같습니다.
- 한 객체를 여러 개의 데코레이터로 감쌀 수 있습니다.
- 데코레이터는 자신이 감싸고 있는 객체와 같은 슈퍼클래스를 가지고 있기에 원래 객체(싸여 있는 개체)가 들어갈 자리에 데코레이터 객체를 넣어도 상관 없습니다.
- **테코레이터는 자신이 장식하고 있는 객체에게 어떤 행동을 위임하는 일 말고도 추가 작업을 수행할 수 있습니다.**
- 객레는 언제든지 감쌀 수 있으므로 실행 중에 필요한 데코레이터를 마음대로 적용할 수 있습니다.

## 주의 사항

- 특정 형식에 의조하는 코드에 데코레이터를 적용하지 말 것.
  - 패턴의 가장 큰 장점 중 하나가 테코레이터를 끼워 넣어도 클라잉언트는 데코레이터를 사용하고 있다는 사실을 전혀 알 수 없다임.
- 자잘한 객체가 많이 추가 될 수 있고, 너무 많이 사용하면 코드가 필요 이상으로 복잡해짐.

## 디자인 원칙

- OCP(Open-Closed Principle)
  - 클래스는 확장에는 열려 있어야 하지만 변경에는 닫혀 있어야 한다.
