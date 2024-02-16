import dummy from "../db/data.json";
import Word from "./Word";
import { useParams } from "react-router-dom";

//특정 Day를 들어갔을 때, 단어들이 나오는 페이지
export default function Day() {
  const a = useParams(); //day/:day이므로, {day: 1}과 같은 객체 형식으로 값을 받아옴
  const day = a.day;
  // 특정 day의 단어만 보이도록 filter
  const wordList = dummy.words.filter(
    (word) => Number(word.day) === Number(day)
  );

  return (
    <>
      <table>
        <h2>Day {day}</h2>
        <tbody>
          {/* ()=>{}을 하면 {}안에 return을 넣어야 함*/}
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
