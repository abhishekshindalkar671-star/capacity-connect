import { Link, useParams } from "react-router-dom";

const courses = {
  java: {
    icon: "☕",
    title: "Java Programming",
    description:
      "Learn Java programming from basics to advanced concepts and build strong programming skills.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    lessons: "40 Lessons",
  },

  web: {
    icon: "🌐",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and modern web development by building interactive websites.",
    level: "Beginner",
    duration: "10 Weeks",
    lessons: "50 Lessons",
  },

  database: {
    icon: "🗄️",
    title: "Database Management",
    description:
      "Understand databases, SQL queries and database management concepts.",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: "30 Lessons",
  },

  python: {
    icon: "🐍",
    title: "Python Programming",
    description:
      "Learn Python programming, problem solving and build useful applications.",
    level: "Beginner to Advanced",
    duration: "8 Weeks",
    lessons: "45 Lessons",
  },

  react: {
    icon: "⚛️",
    title: "React Development",
    description:
      "Build modern and interactive web applications using React.",
    level: "Intermediate",
    duration: "7 Weeks",
    lessons: "35 Lessons",
  },

  ai: {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Explore artificial intelligence concepts and modern intelligent systems.",
    level: "Intermediate",
    duration: "10 Weeks",
    lessons: "45 Lessons",
  },
};

function CourseDetails() {
  const { courseId } = useParams();

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="course-details-page">
        <div className="course-not-found">
          <h1>Course Not Found</h1>
          <p>The course you are looking for does not exist.</p>

          <Link to="/courses" className="primary-btn">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    alert(`🎉 Successfully enrolled in ${course.title}!`);
  };

  return (
    <div className="course-details-page">

      {/* BACK BUTTON */}
      <Link to="/courses" className="back-course">
        ← Back to Courses
      </Link>

      {/* COURSE HERO */}
      <div className="course-details-hero">

        <div className="course-details-icon">
          {course.icon}
        </div>

        <div className="course-details-info">

          <span className="course-details-badge">
            📚 COURSE DETAILS
          </span>

          <h1>{course.title}</h1>

          <p>{course.description}</p>

          <button
            className="enroll-btn"
            onClick={handleEnroll}
          >
            Enroll Now →
          </button>

        </div>

      </div>

      {/* COURSE INFORMATION */}
      <div className="course-info-grid">

        <div className="course-info-card">
          <span>🎯</span>
          <small>Level</small>
          <strong>{course.level}</strong>
        </div>

        <div className="course-info-card">
          <span>⏱️</span>
          <small>Duration</small>
          <strong>{course.duration}</strong>
        </div>

        <div className="course-info-card">
          <span>📖</span>
          <small>Lessons</small>
          <strong>{course.lessons}</strong>
        </div>

        <div className="course-info-card">
          <span>🏆</span>
          <small>Certificate</small>
          <strong>Available</strong>
        </div>

      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="course-learning-card">

        <h2>What You Will Learn</h2>

        <p>
          Complete this course and improve your practical
          knowledge and technical skills.
        </p>

        <div className="learning-list">

          <div>✅ Strong fundamental concepts</div>
          <div>✅ Practical programming skills</div>
          <div>✅ Real-world problem solving</div>
          <div>✅ Projects and assignments</div>
          <div>✅ Course completion certificate</div>
          <div>✅ Progress tracking</div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;