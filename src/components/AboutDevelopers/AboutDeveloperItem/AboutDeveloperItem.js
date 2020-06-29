import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './AboutDeveloperItem.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  facebook,
  linkedIn,
  instagram,
  gitHub,
} from './../../utils/SocialIcons';
import checkedSocialNetworkLink from '../../utils/checkedSocialNetworkLink';

const DEFAULT_AVATAR =
  'https://i.ibb.co/d5yKB57/85622928-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors.jpg';

function AboutDeveloperItem({ name, avatarLink, social, github }) {
  const socialNetworkFacebook = checkedSocialNetworkLink(social, 'facebook');
  const socialNetworkInstagramm = checkedSocialNetworkLink(social, 'instagram');
  const socialNetworkLinkedIn = checkedSocialNetworkLink(social, 'linkedin');

  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <LazyLoadImage
          className={styles.cardImg}
          src={avatarLink || DEFAULT_AVATAR} // use normal <img> attributes as props
          alt={name}
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>
        {socialNetworkFacebook && (
          <a
            href={social}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {facebook}
          </a>
        )}
        {socialNetworkInstagramm && (
          <a
            href={social}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagram}
          </a>
        )}
        {socialNetworkLinkedIn && (
          <a
            href={social}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedIn}
          </a>
        )}
        {github && (
          <a
            href={github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {gitHub}
          </a>
        )}
      </div>
    </div>
  );
}

AboutDeveloperItem.defaultProps = {
  gitHub: '',
};

AboutDeveloperItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatarLink: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
  gitHub: PropTypes.string,
};

export default AboutDeveloperItem;
