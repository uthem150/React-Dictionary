import "./App.css";
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          {/* 첫 페이지에는 day List를 보여줌 */}
          <Route path="/" element={<DayList />}></Route>
          {/* day/1에 들어가면, day라는 변수로 1의 값을 얻음 */}
          <Route path="/day/:day" element={<Day />}></Route>
          {/* 이상한 경로에 접근시 -> path="*"은 모든 경로를 나타내는 와일드 카드 */}
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
