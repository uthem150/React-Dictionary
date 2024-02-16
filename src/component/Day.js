import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

//특정 Day를 들어갔을 때, 단어들이 나오는 페이지
export default function Day() {
  //useParams를 이용해서, 주소창에 있는 문자를 읽어옴
  const { day } = useParams(); //day/:day이므로, {day: 1}과 같은 객체 형식으로 값을 받아옴

  const words = useFetch(`http://localhost:3005/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
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
