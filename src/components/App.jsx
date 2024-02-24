import "./App.css";
import { Description } from "./Description/Description";
import { Options } from "./OptionsFolder/Options";
import { Feedback } from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

import { useState, useEffect } from "react";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("Feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      })
    } else {
      setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("Feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
