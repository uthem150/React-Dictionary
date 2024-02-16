import { useState } from "react";

export default function Word({ word }) {
  //처음에는 뜻이 보이지 않도록  false
  const [isShow, setIsShow] = useState(false);

  function toggleShow() {
    // toggle이니, 누를때 마다 상태가 반대가 되도록
    setIsShow(!isShow);
  }

  return (
    //table row, 테이블의 한 행
    <tr>
      {/* table data, 테이블의 데이터 셀 */}
      <td>
        {/* checked는 데이터 파일, word 배열의 isDone 속성 */}
        <input type="checkbox" checked={word.isDone}></input>
      </td>
      <td>{word.eng}</td>
      {/* isShow가 true일때만 보이도록 */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  );
}
