# 1. 내용정리

## 전략 패턴

- **알고리즘군을 정의**하고 **캡슐화해**서 각각의 알고리즘군을 **수정**해서 쓸 수 있게 한다. 전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 **독립적으로 변경**할 수 있음.

## 상속의 문제

- 슈퍼 클래스에 메소드를 추가했을 때 원하지 않는 서브 클래스에도 적용이 된다.
  - `Duck` 클래스에 `fly()`를 추가하면 `RubberDuck` 도 날게 된다.
- 재정의를 해서 날게 하지 않는다고 해도 변경될 때 마다 매번 확인해야 한다.
  - 유지 보수 어려움.

## 인터페이스 설계하기

- `flyable` 인터페이스로 날 수 있는 오리들만 구현하기.
  - 나는 행위의 중복코드가 늘어난다. (상속에서는 재사용이 가능했었던)

## 소프트웨어 개발 불변의 진리

- 시간이 지남에 따라 **변화**한다.

## 문제를 명확하게 파악하기

- 서브 클래스마다 행동이 바뀔 수 있음.

### 디자인 원칙

- 애플리케이션에서 달라진 부분을 찾아내고, 달라지지 않는 부분과 분리.
- 바뀌는 부분을 따로 뽑아서 **캡슐화** → 바뀌지 않는 부분에는 영향을 미치지 않고 수정해나갈 수 있음.

## 바뀌는 부분과 그렇지 않은 부분 분리하기.

- `fly()`, `quack()` 행동을 별도의 클래스 집합으로 분리.

## 오리의 행동을 디자인하는 방법.

- 유연하게 만들기 → 오리의 행동을 서브클래스에 맞게 동적으로 정하기.

## 디자인 원칙

- **구현** 보다는 **인터페이스**(상위 형식)에 맞춰서 프로그래밍하기.
- 실세 실행 시에 쓰이는 객체가 코드에 고정되지 않도록 → 다형성 활용.
  - 객체를 변수에 대입할 때 상위 형식으로 선언하면 상위 형식을 구현한 어떠한 객체도 넣을 수 있게 됨.

## 오리의 행동을 구현하는 방법.

- `FlyBehavior`, `QuackBehavior` 인터페이스를 사용.
- 이런식으로 디자인하면 `Duck` 말고 다른 객체에서도 사용 가능.
  - **상속의 단점 없이 재사용의 장점을 누릴 수 있게 됨.**

## 오리 행동 통합하기.

- 나는 행동과 꽥꽥 거리는 행동을 `Duck` 클래스에서 구현하지 않고 다른 클래스에 **위임** 한다.

```tsx
public abstract class Duck {
  QuackBehavior quackBehavior;

  public void performQuack() {
    quackBehavior.quack();
  }
}
```

## 동적으로 행동 지정하기.

- 세터 메소드 활용.

## 두 클래스를 합치는 방법.

- “A에는 B가 있다.” → **구성(composition).**

### 디자인 원칙

- 상속 보다는 구성을 활용한다.

## 패턴과 전문 용어.

- 서로 알고 있는 패턴을 정말 막강하다.
- 패턴을 사용하면 간단한 단어로 많은 얘기를 할 수 있음.
- 패턴 수준에서 이야기하면 ‘디자인’에 더 오랫동안 집중할 수 있음.
- 전문 용어를 사용하면 개발팀의 능력을 극대화할 수 있음.
- 전문 용어는 신입 개발자에게 훌륭한 자극제가 된다.

# 2. 적용해보기

## 화이트라벨 웹 헤더에 적용해보기?

### WL 웹 헤더

- 링크
  - [다나와](https://whitelabel.imsmobility.co.kr/danawa/home), [프리무브](https://whitelabel.imsmobility.co.kr/premove/home)
- 구성 (2가지 영역)
  - 왼쪽: 플랫폼사 로고(다나와, 트립소다, 티머니고 등)
  - 오른쪽: 네비게이션 버튼 (예약 내역, 마이페이지, 로그아웃)
- 변경이 있는 부분
  - 왼쪽(로고): 각 플랫폼사에 맞게 노출.
  - 오른쪽(네비게이션바): 상황에 맞게 버튼 노출.
    - 기존(프리무브 전): 예약 내역, 마이페이지(닉네임 설정)
    - 프리무브 추가: 예약 내역, 마이페이지(계정 관리), 로그아웃
    - 네이버 추가 예정: 예약 내역
- 현재는 조건으로 분기 처리되어 있음.
- 네비게이션 렌더링 부분만 작성해보기

### 클래스

- 행동(렌더링) 인터페이스

```js
import { ReactNode } from 'react'

interface HeaderNavigator {
  render(): ReactNode;
}

export default HeaderNavigator
```

- 행동(렌더링) 구현체

```js
import HeaderNavigator from './HeaderNavigator'

class NaverNavigator implements HeaderNavigator {
  render() {
    return (
      <>
        <button>예약 내역</button>
      </>
    )
  }
}

export default NaverNavigator
```

- 사용 클래스 및 예시

```js
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

// ...

new WebHeader(new NaverNavigator()); // naver용 헤더 사용.

// ...


new WebHeader(getNavigator()); // getNavigator() 구현시, 현재 플랫폼에 맞는 navigator 반환
```

### 함수형

- 프로젝트에서 렌더링은 함수형을 사용 중.
- 또한 변경되는 상황이 렌더링(리액트 엘리먼트)이기 때문에 공통의 interface를 구상하지 않아도 될 것 같음.
- 상황에 맞는 Navigator를 prop으로 받아서 렌더링?
- 전략패턴을 사용하는 적절한 방법이 떠오르지 않음 ㅠ
  - 여러 Navigator를 만들어 놓았으면 사용할 Navigator를 어디서 정해서 넘겨줄지?(예시 같은 prop이냐 아니면 hook에서 엘리먼트를 전달)
  - 아니면 Navigator를 생성할 때 사용할 Navigator로 만들어서 그대로 사용하기 (현재 적용되어 있는 if 분기 나열)
- 위에 class 형에서도 `ReactNode`로 엘리먼트를 받도록 추상화 했는데 내가 원하는 엘리먼트가 아니여도 통과 될수가 있음.
  - ex) Input 도 엘리먼트이기 때문에 넘겨줘도 조건을 만족함.
  - class 형에서는 interface를 implementation 할 수 있으니 내가 원하는 형태를 보장할 수 있음.

```js
interface Props {
  Navigator: ReactNode;
}

const WebHeader = ({ Navigator }: Props) => {
  return (
    <div>
      <div>플랫폼 로고</div>
      {Navigator}
    </div>
  )
}
```

혹은

```js
export const Navigatior = () => {
  const { platformStore} = useStores();
  const { isPremove, isNaver} = platformStore;

  if(isPremove) {
    return <PremoveNavigator />
  }

  if(isNaver) {
    return <NaverNavigator />
  }


  return <DefaultNavigator />
}

const WebHeader = () => {
  return <Navigator>
}
```

```js
// 위에 class 예시로 만들어준 GPT 답변
import { ReactNode } from 'react'

export type HeaderNavigator = {
  render: () => ReactNode,
}

export const defaultNavigator: HeaderNavigator = {
  render: () => (
    <>
      <button>예약 내역</button>
      <button>마이페이지</button>
    </>
  ),
}

export const webHeader = (navigator: HeaderNavigator) => {
  return {
    render: () => navigator.render(),
  }
}
```
