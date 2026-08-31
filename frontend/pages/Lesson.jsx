import { Link, useParams } from "react-router-dom";

function Lesson() {
  const { courseId, lessonId } = useParams();

  const courseData = {
    java: {
      icon: "☕",
      title: "Java Programming",
      lessons: [
        {
          title: "Introduction to Java",
          content:
            "Java is a high-level, object-oriented programming language used to develop desktop, web and mobile applications.",
          points: [
            "Java was developed by Sun Microsystems.",
            "Java is object-oriented.",
            "Java is platform independent.",
            "Java programs run using the JVM.",
            "Java supports secure and robust application development."
          ],
          example:
            'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n  }\n}'
        },
        {
          title: "Variables and Data Types",
          content:
            "Variables are used to store data in a Java program. Every variable has a data type.",
          points: [
            "int stores integer values.",
            "float stores decimal values.",
            "double stores larger decimal values.",
            "char stores a single character.",
            "boolean stores true or false."
          ],
          example:
            'int age = 20;\ndouble marks = 85.5;\nchar grade = \'A\';\nboolean passed = true;'
        },
        {
          title: "Operators and Expressions",
          content:
            "Operators are symbols used to perform operations on variables and values.",
          points: [
            "Arithmetic operators: +, -, *, /, %",
            "Relational operators: ==, !=, >, <",
            "Logical operators: &&, ||, !",
            "Assignment operator: =",
            "Operators are used to create expressions."
          ],
          example:
            "int a = 10;\nint b = 5;\nint sum = a + b;\nSystem.out.println(sum);"
        },
        {
          title: "Conditional Statements",
          content:
            "Conditional statements are used to make decisions in a program.",
          points: [
            "if statement checks a condition.",
            "if-else provides two possible paths.",
            "else-if checks multiple conditions.",
            "switch is useful for multiple fixed choices."
          ],
          example:
            'int age = 20;\n\nif (age >= 18) {\n  System.out.println("Eligible");\n} else {\n  System.out.println("Not Eligible");\n}'
        },
        {
          title: "Loops",
          content:
            "Loops are used to execute a block of code repeatedly.",
          points: [
            "for loop is useful when repetitions are known.",
            "while loop checks condition before execution.",
            "do-while executes at least once.",
            "Loops reduce repetitive code."
          ],
          example:
            'for (int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}'
        }
      ]
    },

    web: {
      icon: "🌐",
      title: "Web Development",
      lessons: [
        {
          title: "Introduction to Web Development",
          content:
            "Web development is the process of creating websites and web applications.",
          points: [
            "HTML creates the structure.",
            "CSS creates the design.",
            "JavaScript adds interactivity.",
            "Frontend runs in the browser.",
            "Backend handles server-side operations."
          ],
          example:
            "<h1>Hello World</h1>\n<p>Welcome to Web Development.</p>"
        },
        {
          title: "HTML Basics",
          content:
            "HTML stands for HyperText Markup Language and is used to create webpage structure.",
          points: [
            "HTML uses tags.",
            "Headings are created using h1 to h6.",
            "Paragraphs use the p tag.",
            "Links use the a tag.",
            "Images use the img tag."
          ],
          example:
            '<h1>My Website</h1>\n<p>Welcome!</p>\n<a href="#">Visit</a>'
        },
        {
          title: "HTML Forms",
          content:
            "HTML forms are used to collect information from users.",
          points: [
            "Forms use the form tag.",
            "input is used for user data.",
            "label describes form fields.",
            "button submits the form.",
            "Forms are commonly used for login and registration."
          ],
          example:
            '<form>\n  <label>Name</label>\n  <input type="text" />\n  <button>Submit</button>\n</form>'
        },
        {
          title: "CSS Basics",
          content:
            "CSS stands for Cascading Style Sheets and is used to style HTML elements.",
          points: [
            "CSS changes colors.",
            "CSS controls spacing.",
            "CSS controls fonts.",
            "CSS provides layouts.",
            "CSS improves website appearance."
          ],
          example:
            "body {\n  background: #f8fafc;\n}\n\nh1 {\n  color: blue;\n}"
        },
        {
          title: "CSS Layout",
          content:
            "CSS layout techniques are used to arrange elements on a webpage.",
          points: [
            "Flexbox is useful for one-dimensional layouts.",
            "Grid is useful for two-dimensional layouts.",
            "Margin controls outer spacing.",
            "Padding controls inner spacing.",
            "Width and height control element size."
          ],
          example:
            ".container {\n  display: flex;\n  gap: 20px;\n}"
        }
      ]
    },

    database: {
      icon: "🗄️",
      title: "Database Management",
      lessons: [
        {
          title: "Introduction to Databases",
          content:
            "A database is an organized collection of data that can be stored and accessed efficiently.",
          points: [
            "Databases store structured information.",
            "DBMS manages databases.",
            "SQL is used to work with relational databases.",
            "Databases reduce data duplication.",
            "Databases provide organized data access."
          ],
          example:
            "CREATE DATABASE college;"
        },
        {
          title: "Database Concepts",
          content:
            "Database concepts include tables, records, fields and relationships.",
          points: [
            "Table stores data.",
            "Row represents a record.",
            "Column represents an attribute.",
            "Primary key uniquely identifies records.",
            "Relationships connect tables."
          ],
          example:
            "Student\n----------------\nID | Name | Course\n1  | Abhi | Computer"
        },
        {
          title: "ER Model",
          content:
            "The Entity Relationship model is used to represent entities and relationships.",
          points: [
            "Entity represents an object.",
            "Attribute describes an entity.",
            "Relationship connects entities.",
            "ER diagrams represent database structure.",
            "ER modeling helps database design."
          ],
          example:
            "Student ---- ENROLLS ---- Course"
        },
        {
          title: "Relational Model",
          content:
            "The relational model stores data using tables consisting of rows and columns.",
          points: [
            "Data is represented using relations.",
            "Rows are called tuples.",
            "Columns are called attributes.",
            "Primary keys identify tuples.",
            "Foreign keys create relationships."
          ],
          example:
            "CREATE TABLE Student (\n  id INT PRIMARY KEY,\n  name VARCHAR(50)\n);"
        },
        {
          title: "SQL Basics",
          content:
            "SQL stands for Structured Query Language and is used to manage relational databases.",
          points: [
            "SELECT retrieves data.",
            "INSERT adds data.",
            "UPDATE modifies data.",
            "DELETE removes data.",
            "CREATE creates database objects."
          ],
          example:
            "SELECT * FROM Student;"
        }
      ]
    },

    python: {
      icon: "🐍",
      title: "Python Programming",
      lessons: [
        {
          title: "Introduction to Python",
          content:
            "Python is a high-level, interpreted programming language known for its simple syntax.",
          points: [
            "Python is easy to learn.",
            "Python is dynamically typed.",
            "Python supports object-oriented programming.",
            "Python has a large standard library.",
            "Python is widely used in AI and web development."
          ],
          example:
            'print("Hello Python")'
        },
        {
          title: "Variables and Data Types",
          content:
            "Variables store values in Python and do not require explicit type declaration.",
          points: [
            "int stores integers.",
            "float stores decimal numbers.",
            "str stores text.",
            "bool stores True or False.",
            "list stores multiple values."
          ],
          example:
            'name = "Abhi"\nage = 20\nmarks = 85.5\npassed = True'
        },
        {
          title: "Operators",
          content:
            "Python operators are used to perform calculations and comparisons.",
          points: [
            "Arithmetic operators perform calculations.",
            "Comparison operators compare values.",
            "Logical operators combine conditions.",
            "Assignment operators assign values.",
            "Membership operators check collection values."
          ],
          example:
            "a = 10\nb = 5\nprint(a + b)\nprint(a > b)"
        },
        {
          title: "Conditional Statements",
          content:
            "Conditional statements allow Python programs to make decisions.",
          points: [
            "if checks a condition.",
            "elif checks another condition.",
            "else executes when conditions are false.",
            "Conditions use comparison operators."
          ],
          example:
            'age = 20\n\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")'
        },
        {
          title: "Loops",
          content:
            "Loops allow repeated execution of statements.",
          points: [
            "for loop iterates over sequences.",
            "while loop runs while a condition is true.",
            "range() generates a sequence of numbers.",
            "break stops a loop.",
            "continue skips an iteration."
          ],
          example:
            "for i in range(1, 6):\n    print(i)"
        }
      ]
    },

    react: {
      icon: "⚛️",
      title: "React Development",
      lessons: [
        {
          title: "Introduction to React",
          content:
            "React is a JavaScript library used to build interactive user interfaces.",
          points: [
            "React was created by Facebook.",
            "React uses components.",
            "React applications are component-based.",
            "JSX is commonly used with React.",
            "React supports reusable UI elements."
          ],
          example:
            "function App() {\n  return <h1>Hello React</h1>;\n}"
        },
        {
          title: "Components",
          content:
            "Components are reusable building blocks of a React application.",
          points: [
            "Components divide UI into smaller parts.",
            "Functional components are commonly used.",
            "Components can receive props.",
            "Components can maintain state.",
            "Components improve code reusability."
          ],
          example:
            "function Welcome() {\n  return <h2>Welcome!</h2>;\n}"
        },
        {
          title: "JSX",
          content:
            "JSX allows developers to write HTML-like syntax inside JavaScript.",
          points: [
            "JSX makes UI code easier to understand.",
            "JSX can contain JavaScript expressions.",
            "className is used instead of class.",
            "JSX must return a valid structure.",
            "Browsers do not directly understand JSX."
          ],
          example:
            "const name = 'Abhi';\n\nreturn <h1>Hello {name}</h1>;"
        },
        {
          title: "Props",
          content:
            "Props are used to pass data from one React component to another.",
          points: [
            "Props are read-only.",
            "Props pass data to child components.",
            "Props can contain strings, numbers and objects.",
            "Props improve component reusability."
          ],
          example:
            "function Student({ name }) {\n  return <h2>{name}</h2>;\n}"
        },
        {
          title: "State",
          content:
            "State stores data that can change during the lifetime of a React component.",
          points: [
            "useState is used to create state.",
            "Changing state causes re-rendering.",
            "State is local to a component.",
            "State should be updated using its setter."
          ],
          example:
            "const [count, setCount] = useState(0);"
        }
      ]
    },

    ai: {
      icon: "🤖",
      title: "Artificial Intelligence",
      lessons: [
        {
          title: "Introduction to AI",
          content:
            "Artificial Intelligence is a field of computer science focused on creating systems that can perform tasks requiring human-like intelligence.",
          points: [
            "AI enables machines to perform intelligent tasks.",
            "AI can learn from data.",
            "AI is used in many industries.",
            "Machine learning is a part of AI.",
            "AI systems can recognize patterns."
          ],
          example:
            "Example: Voice assistants can understand user commands and provide responses."
        },
        {
          title: "AI Applications",
          content:
            "AI is used in healthcare, education, finance, transportation and many other fields.",
          points: [
            "Healthcare uses AI for medical analysis.",
            "Education uses AI for personalized learning.",
            "Finance uses AI for fraud detection.",
            "Transportation uses AI for autonomous systems.",
            "Chatbots use AI for communication."
          ],
          example:
            "Example: Recommendation systems suggest videos or products based on user activity."
        },
        {
          title: "Machine Learning Basics",
          content:
            "Machine Learning is a technique where computers learn patterns from data.",
          points: [
            "ML uses data for learning.",
            "Models identify patterns.",
            "Training data is used to build models.",
            "Models can make predictions.",
            "Machine learning is a part of AI."
          ],
          example:
            "Input Data → Training → ML Model → Prediction"
        },
        {
          title: "Supervised Learning",
          content:
            "Supervised learning uses labeled data to train a machine learning model.",
          points: [
            "Training data contains inputs and expected outputs.",
            "Classification predicts categories.",
            "Regression predicts numerical values.",
            "The model learns from examples."
          ],
          example:
            "Student Study Hours → Model → Expected Exam Score"
        },
        {
          title: "Unsupervised Learning",
          content:
            "Unsupervised learning works with data without predefined labels.",
          points: [
            "The model finds hidden patterns.",
            "Clustering groups similar data.",
            "No predefined output is required.",
            "It is useful for discovering data structure."
          ],
          example:
            "Customer Data → Clustering → Customer Groups"
        }
      ]
    }
  };


  const course = courseData[courseId];
  const lessonNumber = Number(lessonId);

  if (
    !course ||
    !course.lessons[lessonNumber - 1]
  ) {
    return (
      <div className="courses-page">

        <div className="dashboard-card">

          <h1>
            Lesson Not Found
          </h1>

          <p className="error-text">
            The lesson you are looking for does not exist.
          </p>

          <Link
            to="/courses"
            className="primary-btn"
          >
            ← Back to Courses
          </Link>

        </div>

      </div>
    );
  }


  const lesson =
    course.lessons[lessonNumber - 1];


  return (
    <div className="courses-page">

      {/* BACK BUTTON */}

      <Link
        to={`/course/${courseId}`}
        className="secondary-btn"
      >
        ← Back to Course
      </Link>


      {/* LESSON CARD */}

      <div className="lesson-page-card">

        <span className="hero-badge">
          📖 LESSON {lessonNumber} OF {course.lessons.length}
        </span>


        <div className="lesson-page-header">

          <div className="lesson-big-icon">
            {course.icon}
          </div>

          <div>

            <h1>
              {lesson.title}
            </h1>

            <p>
              {course.title}
            </p>

          </div>

        </div>


        {/* CONTENT */}

        <div className="learning-content">

          <h2>
            📚 Lesson Overview
          </h2>

          <p>
            {lesson.content}
          </p>


          <h2 className="lesson-section-title">
            💡 Key Points
          </h2>

          <ul className="lesson-points">

            {lesson.points.map((point, index) => (
              <li key={index}>
                {point}
              </li>
            ))}

          </ul>


          <h2 className="lesson-section-title">
            💻 Example
          </h2>

          <pre className="lesson-code">
            <code>
              {lesson.example}
            </code>
          </pre>


          {/* PRACTICE */}

          <div className="practice-box">

            <h3>
              📝 Practice
            </h3>

            <p>
              Read this lesson carefully and try to
              explain the concept in your own words.
            </p>

            <button
              className="practice-btn"
              type="button"
            >
              Mark as Practiced ✓
            </button>

          </div>

        </div>


        {/* NAVIGATION */}

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


          {lessonNumber < course.lessons.length ? (

            <Link
              to={`/course/${courseId}/lesson/${lessonNumber + 1}`}
              className="primary-btn"
            >
              Next Lesson →
            </Link>

          ) : (

            <Link
              to={`/course/${courseId}`}
              className="primary-btn"
            >
              Complete Course 🏆
            </Link>

          )}

        </div>

      </div>

    </div>
  );
}

export default Lesson;