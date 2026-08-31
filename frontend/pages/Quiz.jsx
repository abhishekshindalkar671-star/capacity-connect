import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/App.css";

const javaQuestions = [
  {
    question: "Which keyword is used to create a class in Java?",
    options: ["class", "struct", "define", "object"],
    answer: "class",
  },
  {
    question: "Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()",
  },
  {
    question: "Which data type is used to store whole numbers in Java?",
    options: ["float", "char", "int", "boolean"],
    answer: "int",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: "extends",
  },
  {
    question: "Which keyword is used to create an object?",
    options: ["class", "new", "object", "create"],
    answer: "new",
  },
  {
    question: "Which concept allows the same method name with different parameters?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Method Overloading",
      "Abstraction",
    ],
    answer: "Method Overloading",
  },
  {
    question: "Which keyword is used to prevent a class from being inherited?",
    options: ["static", "private", "final", "const"],
    answer: "final",
  },
  {
    question: "Which of the following is not a primitive data type?",
    options: ["int", "char", "boolean", "String"],
    answer: "String",
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "check", "error", "handle"],
    answer: "try",
  },
  {
    question: "Which keyword is used to explicitly throw an exception?",
    options: ["throws", "throw", "exception", "catch"],
    answer: "throw",
  },
  {
    question: "Which OOP concept hides internal implementation details?",
    options: [
      "Inheritance",
      "Abstraction",
      "Polymorphism",
      "Compilation",
    ],
    answer: "Abstraction",
  },
  {
    question: "Which OOP concept binds data and methods together?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
    ],
    answer: "Encapsulation",
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "current", "this", "object"],
    answer: "this",
  },
  {
    question: "Which keyword is used to call the parent class constructor?",
    options: ["parent", "base", "super", "this"],
    answer: "super",
  },
  {
    question: "Which access modifier provides the widest access?",
    options: ["private", "protected", "public", "default"],
    answer: "public",
  },
  {
    question: "Which keyword is used when a method belongs to the class rather than objects?",
    options: ["static", "class", "shared", "global"],
    answer: "static",
  },
  {
    question: "Which exception occurs when dividing an integer by zero?",
    options: [
      "NullPointerException",
      "ArithmeticException",
      "IOException",
      "ClassNotFoundException",
    ],
    answer: "ArithmeticException",
  },
  {
    question: "Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
  },
  {
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "Set", "ArrayList", "Vector"],
    answer: "Set",
  },
  {
    question: "Which language feature allows one interface to have multiple implementations?",
    options: [
      "Inheritance",
      "Interface implementation",
      "Constructor",
      "Package",
    ],
    answer: "Interface implementation",
  },
];

function Quiz() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions =
    courseId === "java" ? javaQuestions : javaQuestions;

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    const isCorrect = option === question.answer;

    if (isCorrect) {
      setScore((previousScore) => previousScore + 1);
    }

    setAnswers((previousAnswers) => [
      ...previousAnswers,
      {
        question: question.question,
        selected: option,
        correct: question.answer,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer("");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="courses-page">

        <div
          className="dashboard-card quiz-result-card"
          style={{
            maxWidth: "850px",
            margin: "40px auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "70px" }}>
            {percentage >= 70 ? "🏆" : "📚"}
          </div>

          <span className="hero-badge">
            QUIZ COMPLETED
          </span>

          <h1 style={{ marginTop: "20px" }}>
            Java Final Quiz
          </h1>

          <div
            style={{
              fontSize: "48px",
              fontWeight: "800",
              margin: "25px 0",
            }}
          >
            {score} / {questions.length}
          </div>

          <h2>
            {percentage}%
          </h2>

          <p
            style={{
              color: "#6b7280",
              marginTop: "15px",
            }}
          >
            {percentage >= 70
              ? "Excellent! You successfully completed the quiz."
              : "Good attempt! Review the lessons and try again."}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <button
              onClick={restartQuiz}
              className="secondary-btn"
            >
              🔄 Try Again
            </button>

            <Link
              to={`/course/${courseId}`}
              className="primary-btn"
            >
              ← Back to Course
            </Link>
          </div>

          <div
            style={{
              marginTop: "35px",
              textAlign: "left",
            }}
          >
            <h2>
              Quiz Review
            </h2>

            {answers.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "18px",
                  marginTop: "12px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                }}
              >
                <strong>
                  {index + 1}. {item.question}
                </strong>

                <p style={{ marginTop: "8px" }}>
                  Your answer:{" "}
                  <strong>{item.selected}</strong>
                </p>

                <p>
                  Correct answer:{" "}
                  <strong>{item.correct}</strong>
                </p>

                <span>
                  {item.isCorrect ? "✅ Correct" : "❌ Incorrect"}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="courses-page">

      <Link
        to={`/course/${courseId}`}
        className="secondary-btn"
      >
        ← Back to Course
      </Link>

      <div
        className="dashboard-card"
        style={{
          maxWidth: "850px",
          margin: "35px auto",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span className="hero-badge">
              📝 FINAL QUIZ
            </span>

            <h1 style={{ marginTop: "18px" }}>
              Java Programming
            </h1>
          </div>

          <div
            style={{
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        {/* PROGRESS */}

        <div
          className="dashboard-progress-bar"
          style={{ marginTop: "25px" }}
        >
          <div
            className="dashboard-progress-fill"
            style={{
              width: `${
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        {/* QUESTION */}

        <div style={{ marginTop: "35px" }}>

          <h2 style={{ lineHeight: "1.5" }}>
            Q{currentQuestion + 1}. {question.question}
          </h2>

          <div
            style={{
              display: "grid",
              gap: "15px",
              marginTop: "25px",
            }}
          >

            {question.options.map((option, index) => {

              const isSelected =
                selectedAnswer === option;

              const isCorrect =
                option === question.answer;

              let background = "#f8fafc";
              let border = "1px solid #e5e7eb";

              if (selectedAnswer) {

                if (isCorrect) {
                  background = "#dcfce7";
                  border = "2px solid #22c55e";
                }

                if (isSelected && !isCorrect) {
                  background = "#fee2e2";
                  border = "2px solid #ef4444";
                }

              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  style={{
                    padding: "18px",
                    border,
                    borderRadius: "12px",
                    background,
                    textAlign: "left",
                    cursor: selectedAnswer
                      ? "default"
                      : "pointer",
                    fontSize: "16px",
                    transition: "0.2s",
                  }}
                >
                  <strong>
                    {String.fromCharCode(65 + index)}.
                  </strong>{" "}
                  {option}
                </button>
              );
            })}

          </div>

        </div>

        {/* NEXT */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <button
            onClick={handleNext}
            className="primary-btn"
            disabled={!selectedAnswer}
            style={{
              border: "none",
              opacity: selectedAnswer ? 1 : 0.5,
              cursor: selectedAnswer
                ? "pointer"
                : "not-allowed",
            }}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz 🏆"
              : "Next Question →"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default Quiz;