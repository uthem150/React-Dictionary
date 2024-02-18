import Word from "./Word";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//특정 Day를 들어갔을 때, 단어들이 나오는 페이지
export default function Day() {
  //useParams를 이용해서, 주소창에 있는 문자를 읽어옴
  const { day } = useParams(); //day/:day이므로, {day: 1}과 같은 객체 형식으로 값을 받아옴

  const words = useFetch(`http://localhost:3005/words?day=${day}`);

  const days = useFetch("http://localhost:3005/days");
  const navigate = useNavigate();

  function prev() {
    const prevDay = Number(day) - 1;
    navigate(`/day/${prevDay}`);
  }

  function next() {
    const nextDay = Number(day) + 1;
    navigate(`/day/${nextDay}`);
  }

  let showPrevButton = true;
  let showNextButton = true;
  //parms로 받아온 day (주소창의 값)
  if (Number(day) === 1) {
    showPrevButton = false;
  }
  //days 배열을 가져오는 부분인 const days = useFetch("http://localhost:3005/days");이 비동기적으로 이루어지고 있습니다. 즉, 데이터를 불러오는 동안 days 배열의 길이는 0일 것입니다.
  if (days.length > 0 && Number(day) >= days.length) {
    showNextButton = false;
  }

  return (
    <>
      <div className="day_move_container">
        {showPrevButton && (
          <button className="prev_move_btn" onClick={prev}>
            ◀
          </button>
        )}
        <h2 className="center_content">Day {day}</h2>
        {showNextButton && (
          <button className="next_move_btn" onClick={next}>
            ▶
          </button>
        )}
      </div>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {/* ()=>{}을 하면 {}안에 return을 넣어야 함*/}
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
