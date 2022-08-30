import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../../../home/Loader/Loader";
import Header from "../../../header/Header";
import Return from "../../../header/Return";
import styles from "../../Faction/AllianceHorde.module.scss";

const SetChoice = () => {
  const location = useLocation();
  const data = location.state;
  const [setChoice, setSetChoice] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${data}`,
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setSetChoice(response.data);
      setLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, [data]);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="set" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {setChoice.map((e) => {
            if (e.hasOwnProperty("imgGold") || e.hasOwnProperty("img")) {
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

export default SetChoice;
