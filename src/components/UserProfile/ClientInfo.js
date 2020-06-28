import React from "react";
import { FormattedMessage } from "react-intl";

import userIcon from "../../assets/img/user.svg";
import mailIcon from "../../assets/img/mail.svg";
import styles from "./ClientInfo.module.css";

export const ClientInfo = ({ username, email }) => (
  <div className={styles.clientInfo}>
    <h3 className={styles.clienInfoTitle}>
      <FormattedMessage id="welcome" /> {username}!
    </h3>
    <ul className={styles.clientInfoList}>
      <li>
        <img src={userIcon} alt="user icon" />
        <span>{username}</span>
      </li>
      {email && (
        <li>
          <img src={mailIcon} alt="mail icon" />
          <span>{email}</span>
        </li>
      )}
    </ul>
  </div>
);
