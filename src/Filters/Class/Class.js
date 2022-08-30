/*
Demon Hunter 
Druid 
Hunter 
Mage 
Paladin
Priest 
Rogue 
Shaman 
Warlock 
Warrior
*/

import React from "react";
import Header from "../../header/Header";
import Return from "../../header/Return";
import { Link } from "react-router-dom";
import styles from "./Class.module.scss";

const Class = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Return path="" />
      <ul>
        <Link to="/classChoice" state="demon-hunter" className={styles.class}>
          Demon Hunter
        </Link>
        <Link to="/classChoice" state="druid" className={styles.class}>
          Druid
        </Link>
        <Link to="/classChoice" state="hunter" className={styles.class}>
          Hunter
        </Link>
        <Link to="/classChoice" state="mage" className={styles.class}>
          Mage
        </Link>
        <Link to="/classChoice" state="paladin" className={styles.class}>
          Paladin
        </Link>
        <Link to="/classChoice" state="priest" className={styles.class}>
          Priest
        </Link>
        <Link to="/classChoice" state="rogue" className={styles.class}>
          Rogue
        </Link>
        <Link to="/classChoice" state="shaman" className={styles.class}>
          Shaman
        </Link>
        <Link to="/classChoice" state="warlock" className={styles.class}>
          Warlock
        </Link>
        <Link to="/classChoice" state="warrior" className={styles.class}>
          Warrior
        </Link>
      </ul>
    </div>
  );
};

export default Class;
