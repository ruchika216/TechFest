import React, { useEffect, useState } from "react";
import Questions from "./Data/techFest_FAQ_questions";
import FaqQuestion from "./FaqQuestion";
// import Accordion from "react-bootstrap/Accordion";
const FaqQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(Questions);
  }, []);
  return (
    <div className="faqQuestions row" id="faqQuestions">
      <div className="accordion" id="FAQ">
        {/* <Accordion> */}
        {questions.map((question, index) => {
          return <FaqQuestion question={question} key={index} />;
        })}
        {/* </Accordion> */}
      </div>
    </div>
  );
};

export default FaqQuestions;
