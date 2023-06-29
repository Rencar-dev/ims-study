# Proxy Pattern

> 원본 객체에 대한 접근 제어

<div style="background-color: #F0F0F0; padding: 20px;">
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Proxy_pattern_diagram.svg/439px-Proxy_pattern_diagram.svg.png' > 
</div>

### 장점
- client는 실제 service 객체를 모른다.
- 실제 service와 interface가 동일하기에 service를 쓰는곳 어디든 가져다 쓸 수 있다.
- ocp를 준수한다. 
  - service와 client 수정없이 새로운 proxy들을 생산할 수 있다.

### 단점
- service에 대한 응답이 지연될 수 있다.

### decorate pattern과 비교하자면?

- subject 인터페이스를 구현하는것은 같다.
- decorate pattern은 진짜 객체를 꾸미고 proxy pattern은 '행동'을 추가한다.
- proxy pattern은 원본 객체에 대한 접근을 제어 한다. 

### 사례

<div style="background-color: #F0F0F0; padding: 20px;">
  <figure>
    <figcaption>proxy server</figcaption>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proxy_concept_en.svg/554px-Proxy_concept_en.svg.png' width='60%'> 
  <figure/>
</div>

취업 준비시절 사이드 프로젝트로 공공데이터 포털의 API를 사용했는데

local에서 공공데이터 포톨에 api 요청을하니 CORS에러가 발생했다. 

이를 Express로 Proxy server를 만들어서 해결했었다. 

local에서 특정 엔드포인트로 api를 요청하면 실제 공공데이터 포털의 엔드포인트가 아닌 proxy server가 대신 공공데이터 포털에 api를 요청하고 응답을 받아서 응답의 header에 'Access-Control-Allow-Origin'을 담아 CORS 문제를 해결할 수 있었다.

``` js
app.get("/lun/day", (req,res) => {
  getLunday()
    .then(response => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
    });
  });
```

