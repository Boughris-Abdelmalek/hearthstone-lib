import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from './img/hearthstone-logo.png';
import settings from './img/settings.png';
import { Link } from 'react-router-dom';
import Settings from './settings/settings';


const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <header className={styles.header}>
            <Link to='/' className={styles.logoContainer}>
                <img src={logo} alt='logo' className={styles.logo}></img>
            </Link>
            <h1 className={styles.title}>Card Visualizer</h1>
            <div className={styles.settings}>
                <img src={settings} alt='settings' className={styles.settingsImg} onClick={handleClick}></img>
                {open &&
                  <Settings />
              }
            </div>
        </header>
  )
}

export default Header;