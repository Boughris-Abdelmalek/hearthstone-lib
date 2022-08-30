import React from 'react'
import Header from '../../header/Header';
import Return from '../../header/Return';
import { Link } from 'react-router-dom';
import styles from './Race.module.scss';

const Race = () => {
  return (
    <div className={styles.container}>
        <Header />
        <Return path='' />
        <ul>
          <Link to='/raceChoice' state ='beast' className={styles.race}>Beast</Link>
          <Link to='/raceChoice' state ='demon' className={styles.race}>Demon</Link>
          <Link to='/raceChoice' state ='dragon' className={styles.race}>Dragon</Link>
          <Link to='/raceChoice' state ='mech' className={styles.race}>Mech</Link>
          <Link to='/raceChoice' state ='murloc' className={styles.race}>Murloc</Link>
          <Link to='/raceChoice' state ='pirate' className={styles.race}>Pirate</Link>
          <Link to='/raceChoice' state ='totem' className={styles.race}>Totem</Link>
          <Link to='/raceChoice' state ='elemental' className={styles.race}>Elemental</Link>
          <Link to='/raceChoice' state ='naga' className={styles.race}>Naga</Link>
        </ul>
    </div>
  )
}

export default Race;