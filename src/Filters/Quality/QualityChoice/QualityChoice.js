import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../header/Header";
import Return from "../../../header/Return";
import axios from "axios";
import Loader from "../../../home/Loader/Loader";
import styles from "../../Faction/AllianceHorde.module.scss";

const QualityChoice = () => {
  const [qualityChoice, setQualityChoice] = useState("");
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const fetchQuality = async () => {
      const options = {
        method: "GET",
        url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/${data}`,
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const quality = await axios.request(options);
      console.log(quality.data);

      setQualityChoice(quality.data);
      setLoading(false);
    };
    fetchQuality();
  }, [data]);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="quality" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {qualityChoice.map((e) => {
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

export default QualityChoice;
