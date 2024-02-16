import { useState } from "react";
import UserName from "./UserName";

// 비구조화 할당 문법을 통해 props에서 age 추출 -> {age}
export default function Hello({ age }) {
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인 입니다" : "미성년자 입니다";

  // props로 받은 값을 컴포넌트 내부에서 변경하고 싶다면,
  // 컴포넌트 내부에서 state를 다시 만들어야 함.

  return (
    <>
      <h2>
        {/* props로 받은 age를 state로 만든 새로운 age 사용 */}
        {name}({age} : {msg})
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        change
      </button>
    </>
  );
}
