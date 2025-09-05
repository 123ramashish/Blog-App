import { useState } from "react";
import { useSelector } from "react-redux";
import ConsultantCard from "./Consultant";
import { consultants, questions } from "../const/data.js";
import DietPlan from "./DietPlan.jsx";
import ExercisePlan from "./ExercisePlan.jsx";
import MoodResources from "./MoodResources.jsx";
import { FaArrowDown } from "react-icons/fa";

const answers = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Always" },
];

const moodConfig = {
  Stressed: { emoji: "😥", bg: "bg-red-100", text: "text-red-600" },
  Anxious: { emoji: "😰", bg: "bg-orange-100", text: "text-orange-600" },
  Angry: { emoji: "😡", bg: "bg-red-200", text: "text-red-800" },
  Tired: { emoji: "😴", bg: "bg-purple-100", text: "text-purple-600" },
  Neutral: { emoji: "😐", bg: "bg-yellow-100", text: "text-yellow-600" },
  Happy: { emoji: "😊", bg: "bg-green-100", text: "text-green-600" },
};

export default function MentalHealthQuiz() {
  const { currentUser } = useSelector((state) => state.user);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [moodResult, setMoodResult] = useState("");
  const [currentView, setCurrentView] = useState("analysis");

  const handleAnswerSelect = (questionId, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleAnswerSave = async (mood) => {
    try {
      const response = await fetch("http://localhost:5000/api/user/moodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          mood,
          userId: currentUser._id,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorMessage}`
        );
      }
      await response.json();
    } catch (error) {
      console.error("Save failed:", error);
      alert("An error occurred while saving your answers. Please try again.");
    }
  };

  const calculateResult = () => {
    const answerValues = Object.values(userAnswers);
    const average =
      answerValues.reduce((a, b) => a + b, 0) / answerValues.length;

    if (average < 1.5) return "Stressed";
    if (average < 2.5) return "Anxious";
    if (average < 3) return "Angry";
    if (average < 3.5) return "Tired";
    if (average < 4) return "Neutral";
    return "Happy";
  };

  const handleLevelSubmit = () => {
    const currentQuestions = questions[currentLevel];
    const allAnswered = currentQuestions.every((q) => userAnswers[q.id]);

    if (!allAnswered) {
      alert("Please answer all questions before submitting!");
      return;
    }

    if (currentLevel === Object.keys(questions).length) {
      const result = calculateResult();
      setMoodResult(result);
      setShowResult(true);
      console.log(result);
      handleAnswerSave(result);
    } else {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  if (showResult) {
    const negativeMoods = ["Stressed", "Anxious", "Angry", "Tired"];
    const showConsultants = negativeMoods.includes(moodResult);

    const renderContent = () => {
      switch (currentView) {
        case "diet":
          return <DietPlan moodResult={moodResult} />;
        case "exercise":
          return <ExercisePlan moodResult={moodResult} />;
        case "resources":
          // <p className="text-xl text-center text-blue-400">Resource</p>

          return <MoodResources moodResult={moodResult} />;
        case "consultants":
          return (
            <div className="space-y-6">
              <p className="text-xl text-center text-blue-400">
                Doctor Consultants
              </p>
              {consultants.map((consultant) => (
                <ConsultantCard key={consultant.id} consultant={consultant} />
              ))}
            </div>
          );
        default:
          return (
            <>
              <p className="text-lg text-gray-500 text-center mb-2">
                You are felling...
              </p>
              <div
                className={`${moodConfig[moodResult].bg} ${moodConfig[moodResult].text} 
                text-4xl font-bold text-center p-6 rounded-lg flex items-center justify-center gap-3 max-w-96 m-auto`}
              >
                <span>{moodConfig[moodResult].emoji}</span>
                {moodResult}
              </div>
              <p className="mt-6 text-gray-600 text-center">
                Remember to consult a professional if you need further support.
              </p>
              <div className="my-4">
              <p className="text-3xl font-bold text-blue-600 bg-blue-400 bg-opacity-30 animate-bounce p-2 rounded-full shadow-lg m-auto w-8 h-8 text-center flex items-center justify-center"><FaArrowDown/></p>
             </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <button
                  onClick={() => setCurrentView("diet")}
                  className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  🥗 Diet Plan
                </button>
                <button
                  onClick={() => setCurrentView("exercise")}
                  className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  🏋️ Exercise Plan
                </button>
                <button
                  onClick={() => setCurrentView("resources")}
                  className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  🎵 Music & Resources
                </button>
                {/* {showConsultants && ( */}
                  <button
                    onClick={() => setCurrentView("consultants")}
                    className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    👩⚕️ Consultants
                  </button>
                {/* )} */}
              </div>
            </>
          );
      }
    };

    return (
      <div className="max-h-screen bg-gray-100 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <a
              href="/test"
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to Test
            </a>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Mood Analyzed
              </h2>
            </div>
            {currentView !== "analysis" && (
              <button
                onClick={() => setCurrentView("analysis")}
                className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Back to Analysis
              </button>
            )}

            {renderContent()}

            {!showConsultants && currentView === "analysis" && (
              <p className="mt-6 text-green-600 text-center font-medium">
                Great job maintaining your mental health! Keep up the good work.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Level {currentLevel} of {Object.keys(questions).length}
          </h2>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{
                width: `${
                  (currentLevel / Object.keys(questions).length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {questions[currentLevel].map((question) => (
          <div key={question.id} className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              {question.text}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {answers.map((answer) => (
                <button
                  key={answer.value}
                  onClick={() => handleAnswerSelect(question.id, answer.value)}
                  className={`p-2 text-sm rounded transition-colors
                    ${
                      userAnswers[question.id] === answer.value
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleLevelSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentLevel === Object.keys(questions).length
            ? "Submit Final Answers"
            : `Continue to Level ${currentLevel + 1}`}
        </button>
      </div>
    </div>
  );
}
