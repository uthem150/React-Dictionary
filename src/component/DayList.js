import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DayList() {
  // api에서 리스트를 가져와서 바꿔줄 것임
  const [days, setDays] = useState([]);

  // 어떤 상태값이 변경되고, 다시 렌더링된 다음에 호출
  useEffect(() => {
    //api비동기 통신을 위해 fetch이용
    fetch("http://localhost:3005/days") //api경로 적음(get요청)-> promise 반환됨
      .then((res) => {
        return res.json(); // response는 http응답이고, 실제 json은 아님. -> json메소드를 사용해야 함.
        //json으로 변환되고, promise를 반환하게 됨
      })
      .then((data) => {
        setDays(data);
      });

    //불필요하게 계속 실행될 수 있으니, 두번째 매개변수로 배열 전달 -> [count]count가 변경되었을 때만, 함수가 실행되도록 (의존성 배열)
    //상태값과 무관하게 렌더링 직후 한번만 실행되는 작업은 빈 배열 전달.
  }, []);
  return (
    <>
      <ul className="list_day">
        {/* 배열을 받아서, 새로운 배열을 반환하는 map사용 */}
        {days.map((day) => (
          //key: 반복되는 요소에 고유한 값을 넣어야 함

          <li key={day.id}>
            {/* a태그는 클릭할 때마다 새로운 페이지를 로드하게 되는 단점 */}
            {/* SPA (Single-Page Application)에서 페이지 전환을 부드럽게 처리하기 위해 Link태그 사용. */}
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
