import React, { useEffect, useState } from "react";

function QuizScreen() {
  const [questions, setQuestions] = useState([]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function checkAnswer() {
    let correctValue = questions[ind].correctAns;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }

  const calculatePercentage = () => {
    return ((score / questions.length) * 100).toFixed(2);
  };

  useEffect(() => {
    // Simulating data retrieval
    setTimeout(() => {
      setQuestions([
        {
          question: "Sample Question 1",
          options: ["Option A", "Option B", "Option C"],
          correctAns: "Option A",
        },
        {
          question: "Sample Question 2",
          options: ["Option X", "Option Y", "Option Z"],
          correctAns: "Option Y",
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-500 via-slate-800 to-slate-500 h-screen d-flex align-items-center justify-content-center">
      <div className="p-4">
        <div className="text-center">
          {isLoading ? (
            <p className="text-white font-weight-bold">Loading...</p>
          ) : showResult ? (
            <div className="p-4 font-weight-bold text-4 my-2 rounded shadow bg-slate-400 text-black">
              <p className="font-serif text-slate-700">Result</p>
              <progress
                className="p-3"
                id="file"
                value={score}
                max={questions.length}
              ></progress>
              <h3 className="font-serif text-slate-700">{calculatePercentage()} %</h3>
              <h3 className="font-serif text-slate-700">
                {calculatePercentage() < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!isLoading && !showResult ? (
          <div className="p-4 font-weight-bold text-4 my-2 rounded shadow bg-slate-400 text-black">
            <p className="fs-4">
              Question Number <span>{ind + 1}</span> of{" "}
              {questions.length}
            </p>
            <h3 className="py-4">{questions[ind].question}</h3>
          </div>
        ) : null}
        {!isLoading && !showResult ? (
          <div className="p-5 my-4 ">
            <div className="row">
              {questions[ind].options.map((e, i) => (
                <div key={i} className="col-md-4 mb-4">
                  <button
                    onClick={() => setSelectedValue(e)}
                    className="btn btn-primary w-100"
                  >
                    {e}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {!isLoading && !showResult ? (
          <div className="text-center">
            <button
              onClick={() => checkAnswer()}
              className="btn btn-primary mt-4 px-4 rounded-pill"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuizScreen;
