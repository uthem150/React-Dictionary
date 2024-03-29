import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1>
        {/* a태그는 클릭할 때마다 새로운 페이지를 로드하게 되는 단점 */}
        {/* SPA (Single-Page Application)에서 페이지 전환을 부드럽게 처리하기 위해 Link태그 사용. */}
        <Link to="/">토익 영단어 (고급)</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          <button className="add_btn">단어 추가</button>
        </Link>
        <Link to="/create_day" className="link">
          <button className="add_btn">Day 추가</button>
        </Link>
      </div>
    </div>
  );
}
