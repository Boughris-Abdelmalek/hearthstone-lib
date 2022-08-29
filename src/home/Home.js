import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import user from './img/user.png';
import Header from '../header/Header';

const Home = () => {
    const [date, setDate] = useState(new Date());


    function refreshClock() {
      setDate(new Date());
    }  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

    return (
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.searchContainer}>
                <form action="submit" className={styles.searchBarForm}>
                    <input type={'text'} placeholder='Enter a card name' className={styles.searchBar}/>
                    <input type={'submit'} value='Search' className={styles.searchBtn}/>
                </form>
            </div>
            <div className={styles.choice}>
                <Link to='/factions' className={styles.choiceButton}>Faction</Link>
                <Link to='/types' className={styles.choiceButton}>Type</Link>
                <Link to='/quality' className={styles.choiceButton}>Quality</Link>
                <button className={styles.choiceButton}>Race</button>
                <button className={styles.choiceButton}>Class</button>
                <button className={styles.choiceButton}>Set</button>
            </div>
        </main>
        <footer className={styles.footer}>
        <div className={styles.user}>
            <img src={user} alt='settings' className={styles.userImg}></img>
        </div>
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
        </footer>
        </>
    );
}

export default Home;