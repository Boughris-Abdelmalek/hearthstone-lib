import React from 'react';
import styles from './Header.module.scss';
import logo from './img/hearthstone-logo.png';
import settings from './img/settings.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
            <Link to='/' className={styles.logoContainer}>
                <img src={logo} alt='logo' className={styles.logo}></img>
            </Link>
            <h1 className={styles.title}>Card Visualizer</h1>
            <div className={styles.settings}>
                <img src={settings} alt='settings' className={styles.settingsImg}></img>
            </div>
        </header>
  )
}

export default Header;