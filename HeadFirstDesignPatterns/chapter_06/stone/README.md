# 커맨드 패턴

## 정의

- 요청 내역을 객체로 캡슐화해서 객체를 서로 다른 요청 내역에 따라 매개 변수화.
- 요청을 큐에 저장하거나 로그로 기록하거나 작업 취소 기능을 사용할 수 있음.
- 요청하는 객체와 요청을 수행하는 객체를 분리.

## 구조

- `Client`
  - `ConcreteCommand`를 생성하고 `Receiver`를 설정.
- `Invoker`
  - `Command`를 갖고 있고 `setCommnad`로 정할 수 있음.
  - `Command` 객체에게 특정 장업을 요청할 수 있음.
- `Receiver`
  - 요구 사항을 수행할 때 어떤 일을 처리해야하는지 알고 있는 객체.
  - `action` 메소드.
- `Command`
  - 모든 커맨드 객체가 구현해야하는 인터페이스.
  - `excute`로 작업 수행.
- `ConcreteCommand`
  - `Receiver`를 전달 받아 `Receiver`로 작업 처리.
