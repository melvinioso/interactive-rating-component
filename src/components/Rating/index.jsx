import React from 'react';
import styles from './Rating.module.css';

const ratings = [1, 2, 3, 4, 5];

const Rating = (props) => {
  return (
    <div className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg" alt="star" />

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.ratingGroup}>
        {ratings.map((rating) => (
          <button key={rating} className={styles.rating}>
            {rating}
          </button>
        ))}
      </div>

      <button className={styles.submit}>SUBMIT</button>
    </div>
  );
};

export default Rating;
