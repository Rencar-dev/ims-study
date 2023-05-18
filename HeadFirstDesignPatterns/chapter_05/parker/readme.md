# Singleton Pattern

### 정의

> 클래스 인스턴스를 하나만 만들고, 그 인스턴스로의 전역 접근을 제공합니다.

자바는 **멀티스레드**를 지원해서 멀티스레딩 문제를 해결해야 하지만, 자바스크립트는 **싱글스레드** 기반으로 멀티스레딩 문제가 없다고 생각한다.

또한 자바는 class 자체에 접근자 프로퍼티인 private를 걸 수 있지만, ts는 그러한 문법을 제공하지 않는다.

따라서 사용자가 static method의 존재를 모르고 new로 클래스를 생성할 경우 서로 다른 인스턴스가 생성됨으로 static method를 사용하는 방식보다 인스턴스를 초기화 하는 방식이 더 적합하다고 생각한다.

```ts 
// ❌
class Singleton1 {
  private static uniqueInstance: Singleton1;

  constructor() { }

  public static getInstance() {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton1();

      return this.uniqueInstance;
    }

    return this.uniqueInstance;
  }
}

Singleton1.getInstance() === Singleton1.getInstance(); // true
new Singleton1() === new Singleton1() // false


// ✅ better then Singleton1
class Singleton2 {
  private static uniqueInstance = new Singleton2();

  constructor() {
    return Singleton2.uniqueInstance;
  }
}

new Singleton2() === new Singleton2(); // true
```