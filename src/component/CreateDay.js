import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

export default function CreateDay() {
  //서버로부터 데이터를 가져오는 custom 훅
  const days = useFetch("http://localhost:3005/days");
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3005/days/`, {
      method: "POST",
      //어떤 타입으로 전송할지
      headers: {
        "Content-type": "application/json",
      },
      //전달할 내용
      body: JSON.stringify({
        day: days.length + 1, //현재 날짜에서 1 증가
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다");
        //생성 후, useNavigate 훅을 통해, 해당 페이지로 이동.
        navigate(`/`);
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
