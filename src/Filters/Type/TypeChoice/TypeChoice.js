import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../Faction/AllianceHorde.module.scss";
import Header from "../../../header/Header";
import Return from "../../../header/Return";
import { useLocation } from "react-router-dom";
import Loader from "../../../home/Loader/Loader";

const TypeChoice = () => {
  const [type, setType] = useState([]);
  const location = useLocation();
  const data = location.state;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const renderType = async () => {
      const options = {
        method: "GET",
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${data.toLowerCase()}`,
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      setType(response.data);
      setLoading(false);
    };

    renderType();
  }, [data]);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="types" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {type.map((e) => {
            if (e.hasOwnProperty("imgGold") && e.hasOwnProperty("img")) {
              return (
                <li key={e.cardId}>
                  <img src={e.imgGold} alt="card" />
                </li>
              );
            } else if (
              !e.hasOwnProperty("imgGold") &&
              e.hasOwnProperty("img")
            ) {
              return (
                <li key={e.cardId}>
                  <img src={e.img} alt="card" />
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default TypeChoice;
