import appStyle from "../App.module.css";
import Form from "react-bootstrap/Form";
import PlayerCard from "./playerCard";
import { useState } from "react";
const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className={appStyle.crossContainer}>
        <Form.Control
          type="search"
          id="searchplayer"
          aria-describedby="searchplayer"
          className={appStyle.input}
          placeholder="Search Player..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={appStyle.cardContainer}>
        <PlayerCard search={search} />
      </div>
    </>
  );
};

export default CardContainer;
