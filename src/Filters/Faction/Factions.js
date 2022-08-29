import React from 'react';
import styles from './Faction.module.scss';
import Header from '../../header/Header';
import { Link } from 'react-router-dom';
import Return from '../../header/Return';

const Factions = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Return path=''/>
        <main className={styles.factionsContainer}>
          <Link to='/alliance' className={styles.allianceContainer}>
            <h1>Alliance</h1>
          </Link>
          <Link to='/horde' className={styles.hordeContainer}>
            <h1>Horde</h1>
          </Link>
        </main>
    </div>
  )
};

export default Factions;