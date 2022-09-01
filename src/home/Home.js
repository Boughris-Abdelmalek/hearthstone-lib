import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import user from "./img/user.png";
import Header from "../header/Header";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.choice}>
          <Link to="/factions" className={styles.choiceButton}>
            Faction
          </Link>
          <Link to="/types" className={styles.choiceButton}>
            Type
          </Link>
          <Link to="/quality" className={styles.choiceButton}>
            Quality
          </Link>
          <Link to="/race" className={styles.choiceButton}>
            Race
          </Link>
          <Link to="/class" className={styles.choiceButton}>
            Class
          </Link>
          <Link to="/set" className={styles.choiceButton}>
            Set
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.user}>
          <img
            src={user}
            alt="settings"
            className={styles.userImg}
            onClick={handleClick}
          ></img>
          {open && <h5 className="copy-right">Abdelmalek Boughris ©️ 2022</h5>}
        </div>
        <div className={styles.clock}>
          <h1>{date.toLocaleTimeString()}</h1>
        </div>
      </footer>
    </>
  );
};

export default Home;
