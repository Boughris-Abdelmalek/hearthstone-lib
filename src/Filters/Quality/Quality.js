import React from 'react'
import common from './img/Common.webp';
import rare from './img/Rare.webp';
import epic from './img/Epic.webp';
import legendary from './img/Legendary.webp';
import styles from './Quality.module.scss';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';

const Quality = () => {
  return (
    <div className={styles.container}>
      <Header />
    <div className={styles.qualityContainer}>
      <div className={styles.quality}>
      <Link to='/qualityChoice' state='common' className={styles.link}>Common</Link>
      </div>
      <img src={common} alt='rare'></img>
    </div>
    <div className={styles.qualityContainer}>
    <div className={styles.quality}>
    <Link to='/qualityChoice' state='rare' className={styles.link}>Rare</Link>
    </div>
      <img src={rare} alt='rare'></img>
    </div>
      <div className={styles.qualityContainer}>
      <div className={styles.quality}>
      <Link to='/qualityChoice' state='epic' className={styles.link}>Epic</Link>
      </div>
      <img src={epic} alt='rare'></img>
    </div>
    <div className={styles.qualityContainer}>
      <div className={styles.quality}>
      <Link to='/qualityChoice' state='legendary' className={styles.link}>Legendary</Link>
      </div>
      <img src={legendary} alt='rare'></img>
    </div>
    </div>
  )
}

export default Quality;