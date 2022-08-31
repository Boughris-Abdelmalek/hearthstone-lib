import React from 'react';
import styles from './settings.module.scss';
import { ExternalLink } from 'react-external-link';

const Settings = () => {
  return (
    <div className={styles.container}>
        <ExternalLink href='https://github.com/Boughris-Abdelmalek'>GitHub</ExternalLink>
        <ExternalLink href='https://www.linkedin.com/in/abdelmalek-boughris/'>LinkedIn</ExternalLink>
    </div>
  )
}

export default Settings;