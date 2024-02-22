import css from "./Options.module.css"

export const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("good")}>Good</button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      </li>
      {Boolean(totalFeedback) && (
        <li>
          <button className={css.btn} onClick={() => updateFeedback("reset")}>Reset</button>
        </li>
      )}
    </ul>
  );
};