import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Set.module.scss";
import Header from "../../header/Header";
import Return from "../../header/Return";
import { Link } from "react-router-dom";
import Loader from "../../home/Loader/Loader";

const Set = () => {
  const [sets, setSets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
        headers: {
          "X-RapidAPI-Key":
            "40cde80c0cmshe3ccc0a6b31c3ddp1debebjsn27a9eb345236",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setSets(response.data.sets);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="" />
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {sets.map((e) => {
            return (
              <Link state={e} to="/setChoice" className={styles.link}>
                {e}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Set;
