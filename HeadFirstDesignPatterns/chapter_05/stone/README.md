# 싱글턴 패턴

## 정의

- 싱글턴 패턴은 클래스 인스턴스를 하나만 만들고, 그 인스턴스로의 전역 접근을 제공.

## 구조

- `private static Signleton uniqueInstance`
  - Singletone 클래스의 하나뿐인 인스턴스를 저장하는 정적 변수.
- `private Singleton() {}`
  - 생성자를 private으로 설정.
  - 외부에서 실행을 못하고 `Singletone`에서만 인스턴스를 만들 수 있음.
- `public static Singleton getInstance()`
  - `uniqueInstance`가 없으면 인스턴스 생성하여 할당.
  - 있을 경우에는 `uniqueInstance` 반환.

## 멀티 스레딩 문제(JAVA)

- `synchronized` 사용.
- 초기에 `uniqueInstance`에 인스턴스 담기.
- `volatile` 사용.
- `enum` 사용.
