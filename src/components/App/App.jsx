import React, { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';


function App() {
  // 1. State: Geri bildirim sayıları
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // 2. Sayfa yüklendiğinde localStorage'dan verileri okuyup state'e aktarmak
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  // 3. feedback state'i her değiştiğinde localStorage'ı güncellemek
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  // 4. Geri bildirim güncelleme fonksiyonu
  const updateFeedback = (feedbackType) => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  // 5. Reset fonksiyonu
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // 6. Toplam geri bildirim sayısı
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // 7. Olumlu geri bildirim yüzdesi
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      
      {/* Options bileşeni - butonlar */}
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {/* Koşullu render: Eğer geri bildirim yoksa Notification göster */}
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback yet" />
      ) : (
        // Eğer en az 1 geri bildirim varsa Feedback bileşenini göster
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
