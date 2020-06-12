import React from 'react';
import styles from './AboutDeveloper.module.css';
import { facebook, linkedIn, instagram } from './../../utils/SocialIcons';
import checkedSocialNetworkLink from '../../utils/checkedSocialNetworkLink';
import PropTypes from 'prop-types';

function AboutDeveloperItem({ name, avatarLink, social }) {
  const socialNetworkFacebook = checkedSocialNetworkLink(social, 'facebook');
  const socialNetworkInstagramm = checkedSocialNetworkLink(social, 'instagram');
  const socialNetworkLinkedIn = checkedSocialNetworkLink(social, 'linkedin');

  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img className={styles.cardImg} src={avatarLink} alt={name} />
      </div>
      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>
        {socialNetworkFacebook && (
          <a href={social} target="_blank" rel="noopener noreferrer">
            {facebook}
          </a>
        )}
        {socialNetworkInstagramm && (
          <a href={social} target="_blank" rel="noopener noreferrer">
            {instagram}
          </a>
        )}
        {socialNetworkLinkedIn && (
          <a href={social} target="_blank" rel="noopener noreferrer">
            {linkedIn}
          </a>
        )}
      </div>
    </div>
  );
}

AboutDeveloperItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatarLink: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
};

export default AboutDeveloperItem;
