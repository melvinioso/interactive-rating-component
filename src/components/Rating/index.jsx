import React, { useState } from 'react';
import styles from './Rating.module.css';

const ratings = [1, 2, 3, 4, 5];

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return submitted ? (
    <div className={`${styles.panel} ${styles.center}`}>
      <img
        className={styles.thanks}
        src="/illustration-thank-you.svg"
        alt="thanks"
      />

      <div className={styles.selected}>
        You selected {selectedRating} out of 5
      </div>

      <h1 className={styles.title}>Thank you!</h1>

      <p className={styles.description}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg" alt="star" />

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.ratingGroup}>
        {ratings.map((rating, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`${styles.rating} ${
                selectedRating === index ? styles.active : ''
              }`}
              onClick={() => setSelectedRating(index)}
            >
              {rating}
            </button>
          );
        })}
      </div>

      <button
        disabled={selectedRating ? false : true}
        className={styles.submit}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Rating;
