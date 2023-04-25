- 기상스테이션 구축 프로젝트
  -  WeatherData 를 바탕으로 디스플레이 장비를 만들것!
  
  
  업체에서 준 코드
  ```ts
    class WeatherData {
    
      getTemperatrue(){...}    
      getHumidity(){...}      
      getPressure(){...}
    
      measurementsChanged() {
        //우리의 코드가 들어갈 곳
      }
  }
  ```
  - 목표
    - 확장성 (새로운 디스플레이의 형태가 개발 될수도 있다)


- 옵저버 패턴의 정의
  - 객체의 상태가 변경되면, 그 객체에 의존하는 다른객체의 내용이 자동으로 갱신되는 1:N 의존성을 가진 패턴
  


WIP
