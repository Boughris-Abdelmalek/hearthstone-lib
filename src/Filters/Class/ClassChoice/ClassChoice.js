import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../home/Loader/Loader";
import Header from "../../../header/Header";
import Return from "../../../header/Return";
import styles from "../../Faction/AllianceHorde.module.scss";

const RaceChoice = () => {
  const location = useLocation();
  const data = location.state;
  const [classChoice, setClassChoice] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuality = async () => {
      const options = {
        method: "GET",
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${data}`,
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const quality = await axios.request(options);
      console.log(quality.data);

      setClassChoice(quality.data);
      setLoading(false);
    };
    fetchQuality();
  }, [data]);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="class" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {classChoice.map((e) => {
            if (e.hasOwnProperty("imgGold") && e.hasOwnProperty("img")) {
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

export default RaceChoice;
