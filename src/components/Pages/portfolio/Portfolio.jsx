import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,

} from "../../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Portfolio",
    },

  ];

  useEffect(() => {
    // switch (selected) {
    //   case "featured":
    setData(featuredPortfolio);
    //     break;

    // }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">

            <img 
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <div className="button-container">
              <a className="button-box" href={d.demo} target="_blank" rel="noreferrer">DEMO</a>
              <a className="button-box" href={d.code} target="_blank" rel="noreferrer">CODE</a>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
