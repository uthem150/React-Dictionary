export default function hello() {
  function showName() {
    console.log("Mike");
  }

  function showText(txt) {
    console.log(txt)
  }

  return (
    <>
      <h1>Hello</h1>
      {/* showName()을 하면, showName이 반환하는 값이 나옴. */}
      <button onClick={showName}>Show name</button>

      <button
        onClick={() => {
          console.log(24);
        }}
      >
        Show age
      </button>

      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      ></input>
    </>
  );
}
