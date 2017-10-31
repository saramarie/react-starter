// deps
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './user_card.scss';

const UserCard = props => (
  <section className={styles.card}>
    <h2 className={styles.username}>
      {props.userName}
    </h2>

    <p className={styles.email}>
      <a href={`mailto:${props.email}`} className={styles.link}>
        {props.email}
      </a>
    </p>
  </section>
);

UserCard.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string
};

export default UserCard;
