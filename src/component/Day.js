import Word from "./Word";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//특정 Day를 들어갔을 때, 단어들이 나오는 페이지
export default function Day() {
  //useParams를 이용해서, 주소창에 있는 문자를 읽어옴
  const { day } = useParams(); //day/:day이므로, {day: 1}과 같은 객체 형식으로 값을 받아옴

  // 특정 day의 단어만 보이도록 filter
  // const wordList = dummy.words.filter(
  //   (word) => Number(word.day) === Number(day)
  // );
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3005/words?day=${day}`) //1일차 데이터만 가져오기 위해, ?day=1 형태로
      .then((res) => {
        return res.json(); //json형태로 값을 받아옴
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]); //배열에 포함된 값이 변경될 때만 useEffect가 실행 (day라는 변수에 의존성이 있다)

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
