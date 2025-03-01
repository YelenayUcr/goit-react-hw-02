import React from 'react';
// import styles from './Options.module.css'; // eğer CSS modülü kullanacaksanız

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback('bad')}>
        Bad
      </button>

      {/* Reset butonu sadece totalFeedback > 0 ise gösterilsin */}
      {totalFeedback > 0 && (
        <button type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
