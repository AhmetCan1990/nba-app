import appStyle from "../App.module.css";
import { data } from "../helper/data";
import { useState } from "react";
const PlayerCard = ({ search }) => {
  const [toggle, setToggle] = useState();
  const handleToggle = (e) => {
    setToggle(!toggle);
    if (
      e.currentTarget.firstElementChild.classList.contains(appStyle["visible"])
    ) {
      e.currentTarget.firstElementChild.classList.remove(appStyle["visible"]);
    } else {
      e.currentTarget.firstElementChild.classList.add(appStyle["visible"]);
    }
  };
  return (
    <>
      {data.map(
        ({ name: playerName, img, statistics }, index) =>
          search.trim().toLowerCase() ===
            playerName.slice(0, search.trim().length).toLowerCase() && (
            <div
              onClick={handleToggle}
              key={index}
              className={appStyle.playerCard}
            >
              <img className={appStyle.image} src={img} alt="player" />
              <div className={appStyle.statistics}>
                {statistics.map((item, index) => (
                  <p key={index}>🏀 {item}</p>
                ))}
              </div>

              <div className={appStyle.namebox}>
                <h5>{playerName}</h5>
              </div>
            </div>
          )
      )}
    </>
  );
};
export default PlayerCard;
