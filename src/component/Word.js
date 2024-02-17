import { useState } from "react";

export default function Word(props) {
  const [word, setWord] = useState(props.word);

  //처음에는 뜻이 보이지 않도록  false
  const [isShow, setIsShow] = useState(false);

  //초기값은 단어가 가지고 있는 idDone속성
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // REST API를 사용하여 단어 데이터를 수정

    // 외운 단어의 상태를 저장하기 위함.
    // 주소, 객체(요청의 옵션 입력)
    fetch(`http://localhost:3005/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // 보내는 리소스의 타입
      },
      body: JSON.stringify({
        //수정을 위한 정보들 입력 (기존데이터에 isDone을 바꿔서 입력)
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      // toggle이니, 누를때 마다 상태가 반대가 되도록
      //응답을 받아서, 응답 속성이 ok면, state를 바꿔줌
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      //사용자가 확인을 선택한 경우에만 fetch 함수를 사용하여 서버에 DELETE 요청을 보냄
      fetch(`http://localhost:3005/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          //삭제 요청을 하고 ok응답을 받으면, id를 0으로
          setWord({ id: 0 });
        }
      });
    }
  }

  //id 가 0인 경우, 해당 단어는 더 이상 존재하지 않는 것으로 간주. return null; 을 통해 해당 컴포넌트가 렌더링되지 않도록
  if (word.id === 0) {
    return null;
  }

  return (
    //table row, 테이블의 한 행
    <tr className={isDone ? "off" : ""}>
      {/* table data, 테이블의 데이터 셀 */}
      <td>
        {/* checked는 데이터 파일, word 배열의 isDone 속성 */}
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      {/* isShow가 true일때만 보이도록 */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
