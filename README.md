# 'React JS' 단어장 제작
<br>

공부 자료 : "[코딩앙마 youtube react js강좌](https://www.youtube.com/@codingangma/playlists)"

| 실행화면 |
|----------|
|![ezgif-7-b78c21ae2d](https://github.com/uthem150/React-Dictionary/assets/142042011/8e563c52-da68-441c-a264-2210799fbb23)|


<br>
<br>


## 📍개발 환경

- 개발 언어 : HTML, CSS, React JS
- 참고 자료 : [코딩앙마 youtube react js강좌](https://www.youtube.com/@codingangma/playlists)
- prettier
  - 코드 포맷팅은 prettier을 사용하여, 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.

<br>
<br>

## 📍주요 기능

- [json 데이터 읽어오기]  
  - db폴더의 json파일을 읽어와서, map을 이용해 단어 목록과 day목록을 생성합니다
  - 데이터 정보를 저장하고 있기 때문에, 새로고침을 해도 변경사항이 유지됩니다.

- [라우터 구현]
  - 단일 페이지 애플리케이션(Single Page Application)에서 다른 페이지 간의 전환과 URL 관리하기 위해,
  - 사용자가 특정 URL을 요청할 때 해당 URL에 맞는 컴포넌트를 렌더링하여 보여줍니다.

- [json server]
  - db를 구축하고 api를 만들기 위해, json 서버를 띄움
  - `npm install -g json-server`
  - `json-server --watch ./src/db/data.json --port 3001`

- [REST API - uri주소와 메소드로 crud요청 진행]
  - json서버를 띄우고, RestAPI로 통신하면서, 단어들을 추가, 수정, 삭제 (POST, PUT, DELETE)
  - userEffect를 통해 API 호출 (fetch('http://localhost:3001/days')를 통해 api주소를 보내줌)

- [Custom Hook 생성]
  - useState, useEffect를 이용하여, custom Hook생성
  - data 상태값이 있고, api주소를 넘겨받아서 fetch하고, 응답받은 data를 setData하고 return
      
<br>
<br>

## 📍추가 기능
- [Day 이동 기능](https://github.com/uthem150/React-Dictionary/commit/1f73d117e768cc387029f5c63da7d4d412b14c24)
  - 현재 위치와 전체 day의 length를 기반으로, 각 day를 움직일 수 있는 이동 버튼을 추가하였습니다

- [Day 삭제 기능](https://github.com/uthem150/React-Dictionary/commit/baf9dd18b5dfbca24a03f50c039c6307d02f46a4)
  - Day를 삭제할 시, 해당 Day안에 있던 단어들도 forEach를 돌면서 함께 삭제가 되도록 구현하였습니다

