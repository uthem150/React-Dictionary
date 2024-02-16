import World from "./World";
import styles from "./Hello.module.css";

export default function hello() {
  return (
    <>
      <h1
        style={{
          color: "#f00",
          borderRadius: "12px solid #000",
          marginBottom: "30px",
          opacity: 0.7,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hello</div>
    </>
  );
}
