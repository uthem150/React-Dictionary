import dummy from "../db/data.json";

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {/* 배열을 받아서, 새로운 배열을 반환하는 map사용 */}
      {dummy.days.map((day) => {
        //key: 반복되는 요소에 고유한 값을 넣어야 함
        return <li key={day.id}>Day {day.day}</li>;
      })}
    </ul>
  );
}
