import React, { useEffect, useState } from "react";
import styles from "../AllianceHorde.module.scss";
import axios from "axios";
import Header from "../../../header/Header";
import FactionsList from "../FactionsList";
import Return from "../../../header/Return";

const Alliance = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/alliance",
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      console.log(response.data);

      setCards(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="factions" />
      <FactionsList cards={cards} />
    </div>
  );
};

export default Alliance;
