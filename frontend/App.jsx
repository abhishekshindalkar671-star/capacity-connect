import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import "./styles/App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";

/* =====================================================
   COURSE DATA
===================================================== */

const courseData = {
  java: {
    icon: "☕",
    title: "Java Programming",
    description: "Learn Java programming from basics to advanced concepts.",
    lessons: [
      "Introduction to Java",
      "Variables and Data Types",
      "Operators and Expressions",
      "Conditional Statements",
      "Loops",
      "Object Oriented Programming",
      "Classes and Objects",
      "Inheritance",
      "Polymorphism",
      "Exception Handling",
    ],
  },

  web: {
    icon: "🌐",
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript and modern web development.",
    lessons: [
      "Introduction to Web Development",
      "HTML Basics",
      "HTML Forms",
      "CSS Basics",
      "CSS Layout",
      "Responsive Design",
      "JavaScript Basics",
      "DOM Manipulation",
      "Events",
      "Modern JavaScript",
    ],
  },

  database: {
    icon: "🗄️",
    title: "Database Management",
    description: "Understand databases, SQL and database management.",
    lessons: [
      "Introduction to Databases",
      "Database Concepts",
      "ER Model",
      "Relational Model",
      "SQL Basics",
      "SQL Queries",
      "Joins",
      "Normalization",
      "Transactions",
      "Database Security",
    ],
  },

  python: {
    icon: "🐍",
    title: "Python Programming",
    description: "Learn Python programming and problem solving.",
    lessons: [
      "Introduction to Python",
      "Variables and Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists and Tuples",
      "Dictionaries",
      "File Handling",
      "Object Oriented Programming",
    ],
  },

  react: {
    icon: "⚛️",
    title: "React Development",
    description: "Build modern interactive applications using React.",
    lessons: [
      "Introduction to React",
      "Components",
      "JSX",
      "Props",
      "State",
      "Events",
      "Hooks",
      "React Router",
      "Forms",
      "Building React Applications",
    ],
  },

  ai: {
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Explore AI concepts and modern intelligent systems.",
    lessons: [
      "Introduction to AI",
      "AI Applications",
      "Machine Learning Basics",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics",
    ],
  },
};

/* =====================================================
   QUIZ DATA
===================================================== */

const quizData = {
  java: [
    [
      "Which keyword is used to create a class in Java?",
      ["class", "Class", "new", "object"],
      "class",
    ],
    [
      "Which method is the entry point of a Java program?",
      ["start()", "main()", "run()", "execute()"],
      "main()",
    ],
    [
      "Which data type is used to store whole numbers?",
      ["float", "double", "int", "char"],
      "int",
    ],
    [
      "Which keyword is used for inheritance?",
      ["inherit", "extends", "implements", "super"],
      "extends",
    ],
    [
      "Which concept means hiding data inside a class?",
      ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
      "Encapsulation",
    ],
    [
      "Which symbol is used to end a Java statement?",
      [".", ",", ";", ":"],
      ";",
    ],
    [
      "Which keyword creates an object?",
      ["create", "object", "new", "this"],
      "new",
    ],
    [
      "Which keyword refers to the current object?",
      ["self", "current", "this", "object"],
      "this",
    ],
    [
      "Which access modifier provides the highest restriction?",
      ["public", "protected", "private", "default"],
      "private",
    ],
    [
      "Which feature allows the same method name with different parameters?",
      ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
      "Overloading",
    ],
    [
      "Which keyword is used to handle exceptions?",
      ["try", "check", "error", "exception"],
      "try",
    ],
    [
      "Which block is used with try to handle an exception?",
      ["catch", "handle", "error", "solve"],
      "catch",
    ],
    [
      "Which keyword prevents a variable from being changed?",
      ["constant", "static", "final", "fixed"],
      "final",
    ],
    [
      "Which operator is used for comparison?",
      ["=", "==", "!=", ":="],
      "==",
    ],
    [
      "Which loop executes at least once?",
      ["for", "while", "do-while", "foreach"],
      "do-while",
    ],
    [
      "Which keyword is used to define an interface implementation?",
      ["extends", "implements", "interface", "using"],
      "implements",
    ],
    [
      "Which package contains Scanner class?",
      ["java.io", "java.util", "java.lang", "java.net"],
      "java.util",
    ],
    [
      "Which type stores a single character?",
      ["String", "char", "character", "text"],
      "char",
    ],
    [
      "Which concept allows one interface to have multiple implementations?",
      ["Polymorphism", "Encapsulation", "Compilation", "Iteration"],
      "Polymorphism",
    ],
    [
      "Java source code is compiled into?",
      ["Machine code", "Bytecode", "HTML", "Binary only"],
      "Bytecode",
    ],
  ],

  web: [
    [
      "What does HTML stand for?",
      [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Management Language",
        "Home Tool Markup Language",
      ],
      "Hyper Text Markup Language",
    ],
    [
      "Which tag creates a paragraph?",
      ["<p>", "<para>", "<text>", "<paragraph>"],
      "<p>",
    ],
    [
      "Which language is used for styling web pages?",
      ["HTML", "CSS", "Java", "SQL"],
      "CSS",
    ],
    [
      "Which language adds interactivity to web pages?",
      ["CSS", "HTML", "JavaScript", "SQL"],
      "JavaScript",
    ],
    [
      "Which tag creates a hyperlink?",
      ["<link>", "<a>", "<href>", "<url>"],
      "<a>",
    ],
    [
      "Which CSS property changes text color?",
      ["font-color", "text-color", "color", "foreground"],
      "color",
    ],
    [
      "Which tag displays an image?",
      ["<image>", "<img>", "<picture>", "<src>"],
      "<img>",
    ],
    [
      "Which symbol represents an ID selector in CSS?",
      [".", "#", "*", "@"],
      "#",
    ],
    [
      "Which symbol represents a class selector?",
      ["#", ".", "*", "&"],
      ".",
    ],
    [
      "Which HTML tag creates a heading?",
      ["<head>", "<h1>", "<heading>", "<title>"],
      "<h1>",
    ],
    [
      "Which CSS property controls background color?",
      ["bgcolor", "background-color", "color-background", "background"],
      "background-color",
    ],
    [
      "Which keyword declares a variable in modern JavaScript?",
      ["var", "let", "Both var and let", "variable"],
      "Both var and let",
    ],
    [
      "Which method prints output in browser console?",
      ["print()", "console.log()", "display()", "writeConsole()"],
      "console.log()",
    ],
    [
      "Which HTML tag creates an unordered list?",
      ["<ol>", "<ul>", "<list>", "<li>"],
      "<ul>",
    ],
    [
      "Which tag represents a list item?",
      ["<item>", "<li>", "<list>", "<ul>"],
      "<li>",
    ],
    [
      "Which CSS property changes font size?",
      ["font-size", "text-size", "size", "font"],
      "font-size",
    ],
    [
      "Which protocol is commonly used for secure websites?",
      ["HTTP", "HTTPS", "FTP", "SMTP"],
      "HTTPS",
    ],
    [
      "Which HTML element contains the main page content?",
      ["<main>", "<body>", "<content>", "<page>"],
      "<main>",
    ],
    [
      "Which technology is used to make pages responsive?",
      ["Media Queries", "SQL", "JVM", "Servlet"],
      "Media Queries",
    ],
    [
      "Which file extension is commonly used for CSS?",
      [".html", ".js", ".css", ".web"],
      ".css",
    ],
  ],

  python: [
    [
      "Which keyword is used to define a function in Python?",
      ["function", "def", "fun", "define"],
      "def",
    ],
    [
      "Which symbol is used for comments in Python?",
      ["//", "#", "/*", "--"],
      "#",
    ],
    [
      "Which function displays output?",
      ["display()", "echo()", "print()", "show()"],
      "print()",
    ],
    [
      "Which data type stores True or False?",
      ["int", "bool", "str", "float"],
      "bool",
    ],
    [
      "Which brackets create a list?",
      ["()", "{}", "[]", "<>"],
      "[]",
    ],
    [
      "Which keyword is used for a loop?",
      ["loop", "for", "repeat", "iterate"],
      "for",
    ],
    [
      "Which keyword checks a condition?",
      ["if", "check", "when", "condition"],
      "if",
    ],
    [
      "Which function returns the length of a list?",
      ["length()", "size()", "len()", "count()"],
      "len()",
    ],
    [
      "Which operator is used for exponentiation?",
      ["^", "**", "//", "^^"],
      "**",
    ],
    [
      "Which keyword creates a class?",
      ["class", "Class", "object", "define"],
      "class",
    ],
    [
      "Which data type stores text?",
      ["str", "text", "char", "string"],
      "str",
    ],
    [
      "Which method adds an item to a list?",
      ["add()", "append()", "insertEnd()", "push()"],
      "append()",
    ],
    [
      "Which collection stores key-value pairs?",
      ["List", "Tuple", "Dictionary", "Set"],
      "Dictionary",
    ],
    [
      "Which keyword handles exceptions?",
      ["try", "catch", "handle", "error"],
      "try",
    ],
    [
      "Which keyword handles an exception?",
      ["catch", "except", "error", "handle"],
      "except",
    ],
    [
      "Python files commonly use which extension?",
      [".java", ".py", ".python", ".pt"],
      ".py",
    ],
    [
      "Which function takes user input?",
      ["scan()", "input()", "read()", "get()"],
      "input()",
    ],
    [
      "Which data type is immutable?",
      ["List", "Dictionary", "Tuple", "Set"],
      "Tuple",
    ],
    [
      "Which keyword returns a value from a function?",
      ["send", "return", "give", "output"],
      "return",
    ],
    [
      "Python is mainly known as a?",
      [
        "Low-level language",
        "High-level programming language",
        "Markup language",
        "Database language",
      ],
      "High-level programming language",
    ],
  ],

  database: [
    [
      "What does SQL stand for?",
      [
        "Structured Query Language",
        "Simple Query Language",
        "System Query Language",
        "Structured Question Language",
      ],
      "Structured Query Language",
    ],
    [
      "Which command is used to retrieve data?",
      ["GET", "SELECT", "FETCH", "READ"],
      "SELECT",
    ],
    [
      "Which command adds new records?",
      ["ADD", "INSERT", "CREATE", "APPEND"],
      "INSERT",
    ],
    [
      "Which command modifies existing records?",
      ["CHANGE", "UPDATE", "MODIFY", "ALTER"],
      "UPDATE",
    ],
    [
      "Which command removes records?",
      ["REMOVE", "DELETE", "DROP", "CLEAR"],
      "DELETE",
    ],
    [
      "Which key uniquely identifies a record?",
      ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
      "Primary Key",
    ],
    [
      "Which key references another table?",
      ["Primary Key", "Foreign Key", "Unique Key", "Main Key"],
      "Foreign Key",
    ],
    [
      "Which command creates a table?",
      ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
      "CREATE TABLE",
    ],
    [
      "Which clause filters rows?",
      ["WHERE", "FILTER", "HAVING", "ORDER"],
      "WHERE",
    ],
    [
      "Which clause sorts records?",
      ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"],
      "ORDER BY",
    ],
    [
      "Which function counts rows?",
      ["COUNT()", "TOTAL()", "NUMBER()", "ROWS()"],
      "COUNT()",
    ],
    [
      "Which command deletes a table completely?",
      ["DELETE", "REMOVE", "DROP", "CLEAR"],
      "DROP",
    ],
    [
      "What is normalization used for?",
      ["Increase redundancy", "Reduce redundancy", "Delete database", "Create users"],
      "Reduce redundancy",
    ],
    [
      "Which join returns matching rows from both tables?",
      ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      "INNER JOIN",
    ],
    [
      "Which language is commonly used with relational databases?",
      ["SQL", "HTML", "CSS", "JavaScript"],
      "SQL",
    ],
    [
      "What does DBMS stand for?",
      [
        "Database Management System",
        "Data Backup Management System",
        "Database Machine System",
        "Data Management Service",
      ],
      "Database Management System",
    ],
    [
      "Which command changes table structure?",
      ["UPDATE", "ALTER", "CHANGE", "MODIFY"],
      "ALTER",
    ],
    [
      "Which clause groups rows?",
      ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
      "GROUP BY",
    ],
    [
      "Which property prevents NULL values?",
      ["UNIQUE", "NOT NULL", "PRIMARY", "CHECK"],
      "NOT NULL",
    ],
    [
      "A row in a relational table is also called?",
      ["Attribute", "Tuple", "Field", "Domain"],
      "Tuple",
    ],
  ],

  react: [
    [
      "React is mainly used for building?",
      ["Databases", "User Interfaces", "Operating Systems", "Servers"],
      "User Interfaces",
    ],
    [
      "Who developed React?",
      ["Google", "Microsoft", "Facebook", "Amazon"],
      "Facebook",
    ],
    [
      "What is JSX?",
      ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
      "JavaScript XML",
    ],
    [
      "Which hook manages state?",
      ["useEffect", "useState", "useContext", "useRef"],
      "useState",
    ],
    [
      "Which hook handles side effects?",
      ["useState", "useEffect", "useMemo", "useRef"],
      "useEffect",
    ],
    [
      "React applications are built using?",
      ["Components", "Tables", "Queries", "Servlets"],
      "Components",
    ],
    [
      "Props are used to?",
      ["Pass data to components", "Create databases", "Style only", "Compile Java"],
      "Pass data to components",
    ],
    [
      "Which file commonly contains the main React component?",
      ["App.jsx", "index.sql", "main.java", "server.py"],
      "App.jsx",
    ],
    [
      "Which command starts a Vite development server?",
      ["npm run dev", "npm start server", "vite start app", "run vite"],
      "npm run dev",
    ],
    [
      "React uses which DOM concept for efficient updates?",
      ["Virtual DOM", "Static DOM", "SQL DOM", "Server DOM"],
      "Virtual DOM",
    ],
    [
      "Which hook accesses context?",
      ["useContext", "useState", "useEffect", "useData"],
      "useContext",
    ],
    [
      "React Router is used for?",
      ["Navigation", "Database storage", "CSS styling", "Compilation"],
      "Navigation",
    ],
    [
      "Which package is commonly used for routing?",
      ["react-router-dom", "react-navigation-web", "router-react", "react-path"],
      "react-router-dom",
    ],
    [
      "A component should return?",
      ["JSX", "SQL", "CSS only", "JSON only"],
      "JSX",
    ],
    [
      "State changes can cause a component to?",
      ["Re-render", "Delete", "Compile", "Exit"],
      "Re-render",
    ],
    [
      "Which hook stores a mutable reference?",
      ["useRef", "useState", "useEffect", "useMemo"],
      "useRef",
    ],
    [
      "React is a?",
      ["Library", "Database", "Programming language", "Operating system"],
      "Library",
    ],
    [
      "Which attribute is used instead of class in JSX?",
      ["className", "class", "cssClass", "styleClass"],
      "className",
    ],
    [
      "Which symbol is commonly used to embed JavaScript in JSX?",
      ["{}", "[]", "()", "<>"],
      "{}",
    ],
    [
      "Vite is mainly used as a?",
      ["Build tool", "Database", "CSS framework", "Programming language"],
      "Build tool",
    ],
  ],

  ai: [
    [
      "What does AI stand for?",
      ["Artificial Intelligence", "Automated Internet", "Advanced Information", "Artificial Internet"],
      "Artificial Intelligence",
    ],
    [
      "Which is a branch of AI?",
      ["Machine Learning", "HTML", "CSS", "SQL"],
      "Machine Learning",
    ],
    [
      "ML stands for?",
      ["Machine Learning", "Modern Logic", "Machine Language", "Model Learning"],
      "Machine Learning",
    ],
    [
      "Which learning uses labeled data?",
      ["Supervised Learning", "Unsupervised Learning", "Random Learning", "Manual Learning"],
      "Supervised Learning",
    ],
    [
      "Which learning works without labeled data?",
      ["Supervised Learning", "Unsupervised Learning", "Guided Learning", "Direct Learning"],
      "Unsupervised Learning",
    ],
    [
      "What is a neural network inspired by?",
      ["Human brain", "Database", "Internet", "Compiler"],
      "Human brain",
    ],
    [
      "Deep Learning commonly uses?",
      ["Neural Networks", "HTML tags", "SQL queries", "CSS classes"],
      "Neural Networks",
    ],
    [
      "NLP stands for?",
      ["Natural Language Processing", "Natural Learning Program", "New Language Processing", "Network Language Protocol"],
      "Natural Language Processing",
    ],
    [
      "Computer Vision deals mainly with?",
      ["Images and videos", "Databases", "Text editors", "Operating systems"],
      "Images and videos",
    ],
    [
      "Which is an AI application?",
      ["Speech Recognition", "Calculator only", "Text editor only", "File manager only"],
      "Speech Recognition",
    ],
    [
      "Training data is used to?",
      ["Train a model", "Delete a model", "Create HTML", "Format a disk"],
      "Train a model",
    ],
    [
      "An AI model makes predictions based on?",
      ["Learned patterns", "Random typing", "CSS", "HTML"],
      "Learned patterns",
    ],
    [
      "Which is a supervised learning task?",
      ["Classification", "Clustering", "Random search", "Compression"],
      "Classification",
    ],
    [
      "Which is an unsupervised learning technique?",
      ["Clustering", "Classification", "Regression", "Prediction"],
      "Clustering",
    ],
    [
      "AI ethics focuses on?",
      ["Responsible use of AI", "Writing CSS", "Database tables", "HTML forms"],
      "Responsible use of AI",
    ],
    [
      "What is a chatbot?",
      ["Software that communicates with users", "Database table", "CSS framework", "Computer hardware"],
      "Software that communicates with users",
    ],
    [
      "Which technology can generate text?",
      ["Generative AI", "CSS", "SQL", "HTML"],
      "Generative AI",
    ],
    [
      "AI can be used in healthcare for?",
      ["Medical analysis", "Only typing", "Only printing", "Only networking"],
      "Medical analysis",
    ],
    [
      "A model's performance can be evaluated using?",
      ["Evaluation metrics", "HTML tags", "CSS selectors", "SQL tables"],
      "Evaluation metrics",
    ],
    [
      "Which is important when developing responsible AI?",
      ["Fairness and privacy", "Only speed", "Only color", "Only storage"],
      "Fairness and privacy",
    ],
  ],
};

/* =====================================================
   CONVERT QUIZ ARRAYS TO OBJECTS
===================================================== */

const normalizedQuizData = Object.fromEntries(
  Object.entries(quizData).map(([courseId, questions]) => [
    courseId,
    questions.map(([question, options, answer]) => ({
      question,
      options,
      answer,
    })),
  ])
);

/* =====================================================
   LOCAL STORAGE HELPERS
===================================================== */

const PROGRESS_KEY = "capacity_connect_progress";
const QUIZ_KEY = "capacity_connect_quiz_scores";

function getSavedProgress() {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Unable to load progress:", error);
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Unable to save progress:", error);
  }
}

function getSavedQuizScores() {
  try {
    const saved = localStorage.getItem(QUIZ_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Unable to load quiz scores:", error);
    return {};
  }
}

function saveQuizScores(scores) {
  try {
    localStorage.setItem(QUIZ_KEY, JSON.stringify(scores));
  } catch (error) {
    console.error("Unable to save quiz scores:", error);
  }
}

/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🚀 Smart Digital Learning</span>

          <h1>
            Learn. Connect.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p>
            Capacity Connect is a Digital Learning Management Portal
            that connects students, teachers and administrators in
            one powerful platform.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started →
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="learning-icon">🎓</div>

          <h3>Your Learning Journey</h3>

          <p>
            Track your learning progress and improve your skills every day.
          </p>

          <div className="progress-box">
            <div className="progress-header">
              <span>Course Progress</span>
              <span>75%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>12</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>08</strong>
              <span>Completed</span>
            </div>

            <div>
              <strong>92%</strong>
              <span>Score</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat">
          <h2>1000+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Courses</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Teachers</p>
        </div>

        <div className="stat">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>FEATURES</span>

          <h2>
            Everything You Need
            <br />
            <strong>To Learn Better</strong>
          </h2>

          <p>
            A simple and powerful platform designed for modern digital learning.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Digital Courses</h3>
            <p>
              Access learning materials, courses and educational resources
              from anywhere.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>
              Monitor your learning progress, performance and achievements.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Teacher Support</h3>
            <p>
              Connect with teachers and get guidance throughout your learning
              journey.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <span>START LEARNING</span>

        <h2>Ready to Start Your Journey?</h2>

        <p>Create your account and start learning today.</p>

        <Link to="/register" className="primary-btn">
          Create Account →
        </Link>
      </section>
    </div>
  );
}

/* =====================================================
   COURSES PAGE
===================================================== */

function Courses() {
  const courses = Object.entries(courseData);

  return (
    <div className="courses-page">
      <div className="courses-header">
        <span className="hero-badge">📚 LEARNING LIBRARY</span>

        <h1>Available Courses</h1>

        <p>Explore courses and start building your skills.</p>
      </div>

      <div className="courses-grid">
        {courses.map(([courseId, course]) => (
          <div className="course-card" key={courseId}>
            <div className="course-icon">{course.icon}</div>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div
              style={{
                marginTop: "10px",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              📖 {course.lessons.length} Lessons
            </div>

            <Link
              to={`/course/${courseId}`}
              className="course-btn"
            >
              Start Learning →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   COURSE DETAILS
===================================================== */

function CourseDetails() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  const [progress, setProgress] = React.useState(getSavedProgress);

  if (!course) {
    return (
      <div className="courses-page">
        <div className="dashboard-card">
          <h1>Course Not Found</h1>

          <p style={{ margin: "15px 0", color: "#6b7280" }}>
            The course you are looking for does not exist.
          </p>

          <Link to="/courses" className="primary-btn">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = progress[courseId] || [];
  const completedCount = completedLessons.length;

  const percentage = Math.round(
    (completedCount / course.lessons.length) * 100
  );

  const markLessonCompleted = (lessonNumber) => {
    const current = progress[courseId] || [];

    if (current.includes(lessonNumber)) {
      return;
    }

    const updated = {
      ...progress,
      [courseId]: [...current, lessonNumber],
    };

    setProgress(updated);
    saveProgress(updated);
  };

  return (
    <div className="courses-page">
      <Link to="/courses" className="secondary-btn">
        ← Back to Courses
      </Link>

      <div className="course-details-header">
        <div className="course-details-icon">{course.icon}</div>

        <div>
          <span className="hero-badge">📚 COURSE</span>

          <h1>{course.title}</h1>

          <p>{course.description}</p>
        </div>
      </div>

      <div
        className="dashboard-card"
        style={{ marginTop: "30px" }}
      >
        <div className="dashboard-card-title">
          <div>
            <h2>📊 Your Course Progress</h2>

            <p>Complete each lesson to increase your progress.</p>
          </div>

          <strong style={{ fontSize: "28px" }}>{percentage}%</strong>
        </div>

        <div
          className="dashboard-progress-bar"
          style={{ marginTop: "20px" }}
        >
          <div
            className="dashboard-progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="progress-text">
          {completedCount} of {course.lessons.length} lessons completed
        </p>

        {percentage === 100 && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              borderRadius: "12px",
              background: "#dcfce7",
              color: "#166534",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            🏆 Congratulations! Course Completed!
          </div>
        )}
      </div>

      <div
        className="dashboard-content"
        style={{ marginTop: "30px" }}
      >
        <div className="dashboard-card">
          <div className="dashboard-card-title">
            <div>
              <h2>📖 Course Lessons</h2>
              <p>Complete the lessons one by one.</p>
            </div>

            <span className="lesson-count">
              {course.lessons.length} Lessons
            </span>
          </div>

          <div className="lesson-list">
            {course.lessons.map((lesson, index) => {
              const lessonNumber = index + 1;
              const isCompleted = completedLessons.includes(lessonNumber);

              return (
                <div
                  key={lessonNumber}
                  className="lesson-link"
                  style={{ cursor: "default" }}
                >
                  <span
                    className="lesson-number"
                    style={{
                      background: isCompleted ? "#16a34a" : undefined,
                      color: isCompleted ? "white" : undefined,
                    }}
                  >
                    {isCompleted ? "✓" : lessonNumber}
                  </span>

                  <div style={{ flex: 1 }}>
                    <strong>{lesson}</strong>
                    <small>Lesson {lessonNumber}</small>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      to={`/course/${courseId}/lesson/${lessonNumber}`}
                      className="secondary-btn"
                      style={{ padding: "9px 14px" }}
                    >
                      {isCompleted ? "Review" : "Open"}
                    </Link>

                    {!isCompleted && (
                      <button
                        onClick={() => markLessonCompleted(lessonNumber)}
                        className="primary-btn"
                        style={{
                          border: "none",
                          cursor: "pointer",
                          padding: "9px 14px",
                        }}
                      >
                        ✓ Complete
                      </button>
                    )}

                    {isCompleted && (
                      <span
                        style={{
                          color: "#16a34a",
                          fontWeight: "700",
                          fontSize: "14px",
                        }}
                      >
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dashboard-side">
          <div className="dashboard-card">
            <h2>📋 Course Overview</h2>

            <div className="overview-item">
              📚 {course.lessons.length} Lessons
            </div>

            <div className="overview-item">
              ✅ {completedCount} Completed
            </div>

            <div className="overview-item">
              ⏳ {course.lessons.length - completedCount} Remaining
            </div>

            <div className="overview-item">
              {percentage === 100
                ? "🏆 Certificate Available"
                : "🔒 Certificate Locked"}
            </div>

            {percentage === 100 && (
              <Link
                to={`/course/${courseId}/certificate`}
                className="primary-btn"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  textDecoration: "none",
                }}
              >
                🏆 View Certificate
              </Link>
            )}
          </div>

          <div className="dashboard-card">
            <h2>📝 Course Quiz</h2>

            <p style={{ margin: "12px 0", color: "#6b7280" }}>
              Test your knowledge with 20 questions.
            </p>

            <Link
              to={`/course/${courseId}/quiz`}
              className="primary-btn"
            >
              Start Quiz →
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>🎯 Learning Tip</h2>

            <p
              style={{
                marginTop: "12px",
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Complete every lesson carefully before attempting the quiz.
              Practice is the key to improving your skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   LESSON PAGE
===================================================== */

function Lesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = courseData[courseId];
  const lessonNumber = Number(lessonId);

  const [progress, setProgress] = React.useState(getSavedProgress);

  if (
    !course ||
    !Number.isInteger(lessonNumber) ||
    lessonNumber < 1 ||
    !course.lessons[lessonNumber - 1]
  ) {
    return (
      <div className="courses-page">
        <div className="dashboard-card">
          <h1>Lesson Not Found</h1>

          <p style={{ margin: "15px 0", color: "#6b7280" }}>
            The lesson you are looking for does not exist.
          </p>

          <Link to="/courses" className="primary-btn">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const lessonTitle = course.lessons[lessonNumber - 1];
  const completedLessons = progress[courseId] || [];

  const isCompleted = completedLessons.includes(lessonNumber);

  const markCompleted = () => {
    if (isCompleted) {
      return;
    }

    const updated = {
      ...progress,
      [courseId]: [...completedLessons, lessonNumber],
    };

    setProgress(updated);
    saveProgress(updated);
  };

  const handleCompleteAndNext = () => {
    markCompleted();

    if (lessonNumber < course.lessons.length) {
      navigate(`/course/${courseId}/lesson/${lessonNumber + 1}`);
    } else {
      navigate(`/course/${courseId}/quiz`);
    }
  };

  return (
    <div className="courses-page">
      <Link
        to={`/course/${courseId}`}
        className="secondary-btn"
      >
        ← Back to Course
      </Link>

      <div className="lesson-page-card">
        <span className="hero-badge">
          📖 LESSON {lessonNumber}
        </span>

        <div className="lesson-page-header">
          <div className="lesson-big-icon">{course.icon}</div>

          <div>
            <h1>{lessonTitle}</h1>
            <p>{course.title}</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "12px",
            background: isCompleted ? "#dcfce7" : "#eef2ff",
            color: isCompleted ? "#166534" : "#4338ca",
            fontWeight: "700",
          }}
        >
          {isCompleted
            ? "✓ You have completed this lesson."
            : "📖 This lesson is not completed yet."}
        </div>

        <div className="learning-content">
          <h2>📚 Learning Content</h2>

          <p>
            Welcome to <strong>{lessonTitle}</strong>. This lesson is part of
            the <strong>{course.title}</strong> course.
          </p>

          <p>
            Study the concepts carefully, practice examples and complete this
            lesson before moving to the next lesson.
          </p>

          <div className="content-placeholder">
            <h3>📝 Lesson Material</h3>

            <p>
              Detailed notes, examples, videos, practice questions and
              exercises will be available here.
            </p>
          </div>
        </div>

        {!isCompleted && (
          <div style={{ marginTop: "25px", textAlign: "center" }}>
            <button
              onClick={markCompleted}
              className="primary-btn"
              style={{
                border: "none",
                cursor: "pointer",
              }}
            >
              ✓ Mark Lesson as Completed
            </button>
          </div>
        )}

        <div className="lesson-navigation">
          {lessonNumber > 1 ? (
            <Link
              to={`/course/${courseId}/lesson/${lessonNumber - 1}`}
              className="secondary-btn"
            >
              ← Previous Lesson
            </Link>
          ) : (
            <Link
              to={`/course/${courseId}`}
              className="secondary-btn"
            >
              ← Course Overview
            </Link>
          )}

          <button
            onClick={handleCompleteAndNext}
            className="primary-btn"
            style={{
              border: "none",
              cursor: "pointer",
            }}
          >
            {lessonNumber < course.lessons.length
              ? isCompleted
                ? "Next Lesson →"
                : "Complete & Next →"
              : isCompleted
              ? "Take Quiz 📝"
              : "Complete & Take Quiz 📝"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   QUIZ PAGE
===================================================== */

function Quiz() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseData[courseId];
  const questions = normalizedQuizData[courseId] || [];

  const [answers, setAnswers] = React.useState(
    () => Array(questions.length).fill("")
  );

  const [submitted, setSubmitted] = React.useState(false);

  if (!course || questions.length === 0) {
    return (
      <div className="courses-page">
        <div className="dashboard-card">
          <h1>Quiz Not Found</h1>

          <p style={{ margin: "15px 0", color: "#6b7280" }}>
            The quiz you are looking for does not exist.
          </p>

          <Link to="/courses" className="primary-btn">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const selectAnswer = (questionIndex, option) => {
    if (submitted) {
      return;
    }

    setAnswers((previous) => {
      const updated = [...previous];
      updated[questionIndex] = option;
      return updated;
    });
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (answers[index] === question.answer ? 1 : 0);
    }, 0);
  };

  const handleSubmit = () => {
    const unanswered = answers.filter((answer) => answer === "").length;

    if (unanswered > 0) {
      alert(
        `Please answer all ${questions.length} questions. ${unanswered} question(s) remaining.`
      );
      return;
    }

    const score = calculateScore();

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    const previousScores = getSavedQuizScores();

    const updatedScores = {
      ...previousScores,
      [courseId]: {
        score,
        percentage,
        total: questions.length,
        date: new Date().toLocaleDateString(),
      },
    };

    saveQuizScores(updatedScores);
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const score = calculateScore();

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const resetQuiz = () => {
    setAnswers(Array(questions.length).fill(""));
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          maxWidth: "950px",
          margin: "30px auto",
        }}
      >
        <span className="hero-badge">📝 COURSE QUIZ</span>

        <h1 style={{ marginTop: "20px" }}>
          {course.title} Quiz
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: "10px",
          }}
        >
          Test your knowledge with {questions.length} multiple-choice
          questions.
        </p>

        {submitted && (
          <div
            style={{
              marginTop: "25px",
              padding: "25px",
              borderRadius: "15px",
              background: "#f8fafc",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>
              {percentage >= 70 ? "🏆" : "📚"}
            </div>

            <h2>Quiz Completed!</h2>

            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginTop: "10px",
              }}
            >
              {score} / {questions.length}
            </p>

            <p style={{ color: "#6b7280" }}>
              Your Score: {percentage}%
            </p>

            <p
              style={{
                marginTop: "10px",
                fontWeight: "600",
              }}
            >
              {percentage >= 70
                ? "Excellent! 🎉 You passed the quiz."
                : "Keep learning and try again! 💪"}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="secondary-btn"
                onClick={resetQuiz}
                style={{
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🔄 Retake Quiz
              </button>

              <button
                className="primary-btn"
                onClick={() => navigate(`/course/${courseId}`)}
                style={{
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ← Course Overview
              </button>
            </div>
          </div>
        )}

        <div style={{ marginTop: "30px" }}>
          {questions.map((question, index) => (
            <div
              key={index}
              className="dashboard-card"
              style={{
                marginBottom: "20px",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3>
                Q{index + 1}. {question.question}
              </h3>

              <div
                style={{
                  marginTop: "15px",
                  display: "grid",
                  gap: "10px",
                }}
              >
                {question.options.map((option, optionIndex) => {
                  const isSelected = answers[index] === option;

                  const isCorrect =
                    submitted && option === question.answer;

                  const isWrong =
                    submitted &&
                    isSelected &&
                    option !== question.answer;

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => selectAnswer(index, option)}
                      disabled={submitted}
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        borderRadius: "10px",
                        border: isCorrect
                          ? "2px solid #16a34a"
                          : isWrong
                          ? "2px solid #dc2626"
                          : isSelected
                          ? "2px solid #6366f1"
                          : "1px solid #e5e7eb",
                        background: isCorrect
                          ? "#dcfce7"
                          : isWrong
                          ? "#fee2e2"
                          : isSelected
                          ? "#eef2ff"
                          : "#ffffff",
                        cursor: submitted ? "default" : "pointer",
                        fontSize: "15px",
                      }}
                    >
                      <strong>
                        {String.fromCharCode(65 + optionIndex)}.
                      </strong>{" "}
                      {option}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <p
                  style={{
                    marginTop: "15px",
                    fontWeight: "600",
                    color:
                      answers[index] === question.answer
                        ? "#16a34a"
                        : "#dc2626",
                  }}
                >
                  {answers[index] === question.answer
                    ? "✓ Correct Answer"
                    : `✗ Correct Answer: ${question.answer}`}
                </p>
              )}
            </div>
          ))}
        </div>

        {!submitted && (
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <button
              className="primary-btn"
              onClick={handleSubmit}
              style={{
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Quiz ✓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =====================================================
   CERTIFICATE PAGE
===================================================== */

function Certificate() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courseData[courseId];

  const [progress] = React.useState(getSavedProgress);

  const currentProgress = progress[courseId] || [];

  const completedCount = currentProgress.length;

  const isCourseCompleted =
    course &&
    completedCount === course.lessons.length;

  const currentUser = localStorage.getItem(
    "capacityConnectCurrentUser"
  );

  let studentName = "Student";

  if (currentUser) {
    try {
      const userData = JSON.parse(currentUser);

      studentName =
        userData.name ||
        userData.fullName ||
        userData.username ||
        userData.email ||
        "Student";
    } catch (error) {
      studentName = currentUser;
    }
  }

  const completionDate = new Date().toLocaleDateString();

  if (!course) {
    return (
      <div className="courses-page">
        <div className="dashboard-card">
          <h1>Certificate Not Found</h1>

          <p style={{ margin: "15px 0", color: "#6b7280" }}>
            The course certificate you are looking for does not exist.
          </p>

          <Link to="/courses" className="primary-btn">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  if (!isCourseCompleted) {
    return (
      <div className="courses-page">
        <div
          className="dashboard-card"
          style={{
            maxWidth: "700px",
            margin: "40px auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "60px" }}>🔒</div>

          <h1 style={{ marginTop: "15px" }}>
            Certificate Locked
          </h1>

          <p
            style={{
              marginTop: "15px",
              color: "#6b7280",
              lineHeight: "1.6",
            }}
          >
            Complete all lessons of this course to unlock your
            certificate.
          </p>

          <p
            style={{
              marginTop: "10px",
              fontWeight: "700",
            }}
          >
            Progress: {completedCount} / {course.lessons.length}
          </p>

          <Link
            to={`/course/${courseId}`}
            className="primary-btn"
            style={{
              display: "inline-block",
              marginTop: "20px",
              textDecoration: "none",
            }}
          >
            ← Continue Course
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="courses-page">
      <div
        className="certificate-actions"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto 20px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => navigate(`/course/${courseId}`)}
          className="secondary-btn"
          style={{
            border: "none",
            cursor: "pointer",
          }}
        >
          ← Back to Course
        </button>

        <button
          onClick={handlePrint}
          className="primary-btn"
          style={{
            border: "none",
            cursor: "pointer",
          }}
        >
          🖨️ Print / Save as PDF
        </button>
      </div>

      <div
        className="certificate-container"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "15px",
        }}
      >
        <div
          className="certificate"
          style={{
            position: "relative",
            background: "#ffffff",
            border: "12px solid #1e3a8a",
            borderRadius: "10px",
            padding: "60px 50px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            minHeight: "620px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              right: "20px",
              bottom: "20px",
              border: "3px solid #f59e0b",
              pointerEvents: "none",
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontSize: "55px",
                marginBottom: "10px",
              }}
            >
              🎓
            </div>

            <p
              style={{
                fontSize: "16px",
                letterSpacing: "4px",
                fontWeight: "700",
                color: "#64748b",
                margin: 0,
              }}
            >
              CAPACITY CONNECT
            </p>

            <h1
              style={{
                fontSize: "46px",
                margin: "15px 0 5px",
                color: "#1e3a8a",
                letterSpacing: "2px",
              }}
            >
              CERTIFICATE
            </h1>

            <h2
              style={{
                fontSize: "24px",
                margin: 0,
                color: "#475569",
                fontWeight: "500",
              }}
            >
              OF COMPLETION
            </h2>

            <p
              style={{
                marginTop: "35px",
                color: "#64748b",
                fontSize: "17px",
              }}
            >
              This certificate is proudly presented to
            </p>

            <h2
              style={{
                fontSize: "38px",
                color: "#111827",
                margin: "10px 0",
                fontFamily: "Georgia, serif",
              }}
            >
              {studentName}
            </h2>

            <div
              style={{
                width: "280px",
                height: "2px",
                background: "#f59e0b",
                margin: "10px auto 25px",
              }}
            ></div>

            <p
              style={{
                color: "#64748b",
                fontSize: "17px",
                margin: 0,
              }}
            >
              for successfully completing the course
            </p>

            <h2
              style={{
                fontSize: "30px",
                color: "#1e3a8a",
                margin: "12px 0 25px",
              }}
            >
              {course.icon} {course.title}
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
              }}
            >
              All required lessons have been completed successfully.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                marginTop: "55px",
                gap: "30px",
              }}
            >
              <div style={{ minWidth: "180px" }}>
                <div
                  style={{
                    borderTop: "1px solid #64748b",
                    marginBottom: "8px",
                  }}
                ></div>

                <strong style={{ color: "#334155" }}>
                  Course Completion
                </strong>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  {completionDate}
                </p>
              </div>

              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  border: "4px solid #f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                }}
              >
                🏆
              </div>

              <div style={{ minWidth: "180px" }}>
                <div
                  style={{
                    borderTop: "1px solid #64748b",
                    marginBottom: "8px",
                  }}
                ></div>

                <strong style={{ color: "#334155" }}>
                  Capacity Connect
                </strong>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  Digital Learning Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media print {
            body {
              background: white !important;
            }

            .navbar,
            footer,
            .certificate-actions {
              display: none !important;
            }

            .courses-page {
              padding: 0 !important;
              margin: 0 !important;
            }

            .certificate-container {
              max-width: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .certificate {
              box-shadow: none !important;
              min-height: 90vh !important;
              page-break-inside: avoid;
            }
          }
        `}
      </style>
    </div>
  );
}

/* =====================================================
   NAVBAR
===================================================== */

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState(
    () =>
      localStorage.getItem("capacityConnectLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("capacityConnectLoggedIn");
    localStorage.removeItem("capacityConnectCurrentUser");

    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">🎓</span>
        Capacity Connect
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        <Link to="/dashboard">Dashboard</Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="login-btn"
            style={{
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link
              to="/register"
              className="login-btn"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={<StudentDashboard />}
            />

            <Route path="/courses" element={<Courses />} />

            <Route
              path="/course/:courseId"
              element={<CourseDetails />}
            />

            <Route
              path="/course/:courseId/lesson/:lessonId"
              element={<Lesson />}
            />

            <Route
              path="/course/:courseId/quiz"
              element={<Quiz />}
            />

            <Route
              path="/course/:courseId/certificate"
              element={<Certificate />}
            />
          </Routes>
        </main>

        <footer>
          <p>© 2026 Capacity Connect</p>
          <p>Digital Learning Management Portal</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;