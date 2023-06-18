# 템플릿 메소드 패턴

## 정의

- 알고리즘 골격(템플릿, 틀)을 정의.
- 알고리즘 일부 단계를 서브클래스에서 구현.
- 알고리즘의 구조는 그대로 유지하면서 알고리즘의 특정 단계를 서브 클래스에서 재정의도 할 수 있음.

## 구조

- `AbstractClass`
  - `templateMethod`
    - 알고리즘의 틀.
  - `primitiveOperation`
    - 단계별로 달라지는 로직들은 서브 클래스에서 구현.
  - `concreteOperation`
    - 중복되는 로직은 미리 정의해서 사용.
  - `hook`
    - 아무것도 하지 않거나 간단한 일.
    - 오버라이드 하거나 그대로 사용.
      - 서브 클래스에서 분기처리가 가능. (알고리즘 진행 변경)
- `ConcreteClass`
  - `primitiveOperation`
    - 추상 메소드 로직 구현.
  - `hook`
    - 필요하면 오버라이드.

## 헐리우드 원칙

- 먼저 연락하ㅣㅈ 마세요. 저희가 연락 드리겠습니다.
- 의존성 부패를 방지.
  - 순환 의존성이 생기면 안된다.
- 저수준 구성 요소는 절대 고수준 구성 요소를 직접 호출할 수 없음.