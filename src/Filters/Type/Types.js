import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import styles from "./Types.module.scss";
import axios from "axios";
import Return from "../../header/Return";
import TypeSelected from "./TypeSelected/TypeSelected";

const Types = () => {
  const [types, setTypes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTypes = async () => {
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

      setTypes(response.data.types);
      setLoading(false);
    };

    fetchTypes();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Return path="" />
      <div className={styles.type}>
        <TypeSelected choice={types} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Types;
