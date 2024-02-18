import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3005/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

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
