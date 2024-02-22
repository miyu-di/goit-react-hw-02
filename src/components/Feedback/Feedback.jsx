export const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {totalFeedback}</p>
        </li>
        <li>
          <p>
            Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%
          </p>
        </li>
      </ul>
    </div>
  );
};