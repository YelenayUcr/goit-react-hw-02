import React from 'react';
// import styles from './Feedback.module.css'; // eğer CSS modülü kullanacaksanız

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;
