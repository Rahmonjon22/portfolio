
import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="picture/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rahmonjon Ibragimov</h1>
          <h3>
          Full Stack  <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="picture/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
