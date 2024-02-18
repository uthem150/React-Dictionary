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

  const day_obj = useFetch(`http://localhost:3005/days?day=${day}`);

  function deleteDay() {
    if (window.confirm("삭제 하시겠습니까?")) {
      const dayId = day_obj[0].id; // 삭제할 day의 id
      const wordsToDelete = words.map((word) => word.id);
      // 삭제할 단어들의 id를 담을 배열

      fetch(`http://localhost:3005/days/${dayId}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          navigate(`/`);
        }
      });

      // 단어들 삭제 요청 추가
      wordsToDelete.forEach((wordId) => {
        fetch(`http://localhost:3005/words/${wordId}`, {
          method: "DELETE",
        });
      });
    }
  }

  let showPrevButton = true;
  let showNextButton = true;
  //parms로 받아온 day (주소창의 값)
  if (Number(day) === 1) {
    showPrevButton = false;
  }
  // 데이터를 불러오는 동안 days 배열의 길이는 0이므로,
  if (days.length > 0 && Number(day) >= days.length) {
    showNextButton = false;
  }

  return (
    <>
      <div className="day_move_container">
        {showPrevButton ? (
          <button className="prev_move_btn" onClick={prev}>
            ◀
          </button>
        ) : (
          <button disabled className="block_btn">
            ◀
          </button>
        )}
        <h2 className="center_content">Day {day}</h2>
        {showNextButton ? (
          <button className="next_move_btn" onClick={next}>
            ▶
          </button>
        ) : (
          <button disabled className="block_btn">
            ▶
          </button>
        )}
      </div>
      {/* {words.length === 0 && <span>Loading...</span>} */}
      <table>
        <tbody>
          {/* ()=>{}을 하면 {}안에 return을 넣어야 함*/}
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <button onClick={deleteDay} className="btn_del">
        Delete
      </button>
    </>
  );
}
