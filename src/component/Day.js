import dummy from "../db/data.json";

//특정 Day를 들어갔을 때, 단어들이 나오는 페이지
export default function Day() {
  const day = 4;
  // 특정 day의 단어만 보이도록 filter
  const wordList = dummy.words.filter((word) => Number(word.day) === day);

  return (
    <>
      <table>
        <tbody>
          {/* ()=>{}을 하면 {}안에 return을 넣어야 함*/}
          {wordList.map((word) => (
            //table row, 테이블의 한 행
            <tr>
              {/* table data, 테이블의 데이터 셀 */}
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
