// custom Hook 만들기
import { useEffect, useState } from "react";

//바뀔 수 있는건 url주소 밖에 없으므로
export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //api비동기 통신을 위해 fetch이용
    fetch(url) //api경로 적음(get요청)-> promise 반환됨
      .then((res) => {
        return res.json(); //json으로 변환되고, promise를 반환하게 됨
      })
      .then((data) => {
        setData(data);
      });

    //배열에 포함된 값이 변경될 때만 useEffect가 실행 (day라는 변수에 의존성이 있다)
    //상태값과 무관하게 렌더링 직후 한번만 실행되는 작업은 빈 배열 전달.
  }, [url]);

  return data;
}

// data라는 상태값이 있고, API주소를 넘겨받아서
// fetch하고 응답받은 내용을 setData
// 완료 후, return
