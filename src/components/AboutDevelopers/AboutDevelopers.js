import React, { useState, useEffect } from 'react';
import AboutDeveloperItem from './AboutDeveloperItem';
import styles from './AboutDevelopers.module.css';
import userData from './data.json';

export default function AboutDevelopers() {
  const [userCollection, setUserColection] = useState([]);
  useEffect(() => {
    setUserColection(userData);
  }, []);

  return (
    <div className={styles.container}>
      {userCollection.map(({ name, avatarLink, social }) => (
        <AboutDeveloperItem
          key={avatarLink}
          name={name}
          avatarLink={avatarLink}
          social={social}
        />
      ))}
    </div>
  );
}
