import appStyle from "../App.module.css";
import Form from "react-bootstrap/Form";
import PlayerCard from "./playerCard";
import { useState } from "react";
const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        type="text"
        id="searchplayer"
        aria-describedby="searchplayer"
        className="w-25 m-auto mt-1"
        placeholder="Search Player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={appStyle.cardContainer}>
        <PlayerCard search={search} />
      </div>
    </>
  );
};

export default CardContainer;
