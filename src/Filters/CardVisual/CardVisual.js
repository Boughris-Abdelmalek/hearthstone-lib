import React from 'react'
import Header from '../../header/Header';
import { useLocation } from 'react-router-dom';
import styles from './CardVisual.module.scss';

const CardVisual = () => {
    const location = useLocation();
    const data = location.state;

  return (
    <>
    <Header />
    <div className={styles.cardContainer}>
        {data}
    </div>
    </>
  )
}

export default CardVisual;