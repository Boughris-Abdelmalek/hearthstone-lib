import React from "react";
import { Link } from "react-router-dom";
import styles from "../Types.module.scss";
import Loader from "../../../home/Loader/Loader";

const TypeSelected = ({ choice, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <ul>
      {choice.map((e) => {
        if (e === "Enchantment") {
          return;
        } else {
          return (
            <li key={e}>
              <Link to="/typesChoice" state={e} className={styles.links}>
                {e}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default TypeSelected;
