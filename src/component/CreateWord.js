import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  //day를 선택하는 옵션에 실제 day들을 이어주기 위해 불러옴.
  const days = useFetch("http://localhost:3005/days");
  // Link 처럼, a태그를 사용하지 않고 페이지를 전환할 때 사용
  const navigate = useNavigate();

  function onSubmit(e) {
    //form이 버튼을 눌러도 새로고침되지 않도록.
    e.preventDefault();

    // console.log(engRef.current.value);
    fetch(`http://localhost:3005/words/`, {
      //words까지만 입력하고 post를 날리면, 새로운 단어 생성됨.
      method: "POST",
      //요청이 JSON 형식의 데이터를 전송한다고 명시
      headers: {
        "Content-Type": "application/json", // 보내는 리소스의 타입
      },
      //JSON 형식으로 데이터를 변환한 후 전송
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      //생성이 완료되었을 경우.
      if (res.ok) {
        alert("생성이 완료되었습니다");
        //생성 후, useNavigate 훅을 통해, 해당 페이지로 이동.
        navigate(`/day/${dayRef.current.value}`);
      }
    });
  }

  // useRef를 사용하여 생성된 참조는 .current로 해당 요소에 접근, value는 input에 입력된 값 얻음
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    //<form> 요소에서 제출(submit) 이벤트가 발생했을 때 호출되는 함수 지정 - onSubmit
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="영어 단어" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="한글 뜻" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
