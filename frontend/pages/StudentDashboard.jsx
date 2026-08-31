import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* =====================================================
   COURSE DATA
===================================================== */

const dashboardCourses = [
  {
    id: "java",
    icon: "☕",
    title: "Java Programming",
    description:
      "Learn Java programming from basics to advanced concepts.",
    progress: 75,
    completed: 8,
    total: 10,
    score: 92,
    level: "Intermediate",
  },

  {
    id: "web",
    icon: "🌐",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and modern web development.",
    progress: 60,
    completed: 6,
    total: 10,
    score: 85,
    level: "Intermediate",
  },

  {
    id: "database",
    icon: "🗄️",
    title: "Database Management",
    description:
      "Understand databases, SQL and database management.",
    progress: 40,
    completed: 4,
    total: 10,
    score: 78,
    level: "Beginner",
  },

  {
    id: "python",
    icon: "🐍",
    title: "Python Programming",
    description:
      "Learn Python programming and problem solving.",
    progress: 30,
    completed: 3,
    total: 10,
    score: 72,
    level: "Beginner",
  },

  {
    id: "react",
    icon: "⚛️",
    title: "React Development",
    description:
      "Build modern interactive applications using React.",
    progress: 20,
    completed: 2,
    total: 10,
    score: 68,
    level: "Intermediate",
  },

  {
    id: "ai",
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Explore AI concepts and modern intelligent systems.",
    progress: 10,
    completed: 1,
    total: 10,
    score: 65,
    level: "Beginner",
  },
];


/* =====================================================
   STUDENT DASHBOARD
===================================================== */

function StudentDashboard() {

  /* ===================================================
     SEARCH STATE
  =================================================== */

  const [search, setSearch] = useState("");


  /* ===================================================
     FILTER COURSES
  =================================================== */

  const filteredCourses = useMemo(() => {

    const searchText = search.toLowerCase().trim();

    if (!searchText) {
      return dashboardCourses;
    }

    return dashboardCourses.filter((course) =>
      course.title.toLowerCase().includes(searchText)
    );

  }, [search]);


  /* ===================================================
     DASHBOARD STATISTICS
  =================================================== */

  const totalCourses = dashboardCourses.length;

  const completedCourses = dashboardCourses.filter(
    (course) => course.progress === 100
  ).length;

  const totalLessons = dashboardCourses.reduce(
    (total, course) => total + course.total,
    0
  );

  const completedLessons = dashboardCourses.reduce(
    (total, course) => total + course.completed,
    0
  );

  const averageProgress = Math.round(
    dashboardCourses.reduce(
      (total, course) => total + course.progress,
      0
    ) / totalCourses
  );

  const averageScore = Math.round(
    dashboardCourses.reduce(
      (total, course) => total + course.score,
      0
    ) / totalCourses
  );


  /* ===================================================
     BEST COURSE
  =================================================== */

  const bestCourse = dashboardCourses.reduce(
    (best, course) =>
      course.score > best.score ? course : best,
    dashboardCourses[0]
  );


  /* ===================================================
     ACHIEVEMENT COUNT
  =================================================== */

  const achievementCount =
    averageScore >= 70
      ? 3
      : averageScore >= 50
      ? 2
      : 1;


  /* ===================================================
     UI
  =================================================== */

  return (

    <div className="courses-page">

      {/* =================================================
          WELCOME HEADER
      ================================================= */}

      <div className="courses-header">

        <span className="hero-badge">
          🎓 STUDENT DASHBOARD
        </span>

        <h1>
          Welcome Back, Student! 👋
        </h1>

        <p>
          Continue your learning journey and improve your
          skills every day.
        </p>

      </div>


      {/* =================================================
          QUICK STATS
      ================================================= */}

      <div
        className="stats-section"
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >

        <div className="stat">

          <h2>
            📚 {totalCourses}
          </h2>

          <p>
            Enrolled Courses
          </p>

        </div>


        <div className="stat">

          <h2>
            🏆 {completedCourses}
          </h2>

          <p>
            Completed Courses
          </p>

        </div>


        <div className="stat">

          <h2>
            📖 {completedLessons}/{totalLessons}
          </h2>

          <p>
            Lessons Completed
          </p>

        </div>


        <div className="stat">

          <h2>
            🎯 {averageScore}%
          </h2>

          <p>
            Average Score
          </p>

        </div>

      </div>


      {/* =================================================
          OVERALL PROGRESS
      ================================================= */}

      <div className="dashboard-card">

        <div className="dashboard-card-title">

          <div>

            <h2>
              📊 Overall Learning Progress
            </h2>

            <p>
              Keep going! You are making great progress.
            </p>

          </div>

          <strong
            style={{
              fontSize: "28px",
            }}
          >
            {averageProgress}%
          </strong>

        </div>


        <div
          className="dashboard-progress-bar"
          style={{
            marginTop: "20px",
          }}
        >

          <div
            className="dashboard-progress-fill"
            style={{
              width: `${averageProgress}%`,
            }}
          ></div>

        </div>


        <p className="progress-text">
          {completedLessons} of {totalLessons} lessons completed
        </p>

      </div>


      {/* =================================================
          DASHBOARD CONTENT
      ================================================= */}

      <div
        className="dashboard-content"
        style={{
          marginTop: "30px",
        }}
      >


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div>

          {/* =================================================
              MY COURSES
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-title">

              <div>

                <h2>
                  📚 My Courses
                </h2>

                <p>
                  Continue learning from where you stopped.
                </p>

              </div>

              <Link
                to="/courses"
                className="secondary-btn"
              >
                View All →
              </Link>

            </div>


            {/* =================================================
                COURSE SEARCH
            ================================================= */}

            <div
              style={{
                marginTop: "20px",
              }}
            >

              <input
                type="text"
                placeholder="🔎 Search your courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "13px 15px",
                  borderRadius: "10px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                  fontSize: "15px",
                  boxSizing: "border-box",
                }}
              />

            </div>


            {/* =================================================
                COURSE LIST
            ================================================= */}

            <div
              className="lesson-list"
              style={{
                marginTop: "20px",
              }}
            >

              {filteredCourses.length > 0 ? (

                filteredCourses.map((course) => (

                  <div
                    key={course.id}
                    className="lesson-link"
                    style={{
                      cursor: "default",
                    }}
                  >

                    {/* COURSE ICON */}

                    <span
                      className="lesson-number"
                      style={{
                        fontSize: "24px",
                      }}
                    >
                      {course.icon}
                    </span>


                    {/* COURSE INFORMATION */}

                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >

                      <strong>
                        {course.title}
                      </strong>

                      <small>
                        {course.completed} / {course.total} lessons completed
                      </small>


                      {/* PROGRESS BAR */}

                      <div
                        className="dashboard-progress-bar"
                        style={{
                          marginTop: "10px",
                          maxWidth: "100%",
                        }}
                      >

                        <div
                          className="dashboard-progress-fill"
                          style={{
                            width: `${course.progress}%`,
                          }}
                        ></div>

                      </div>

                    </div>


                    {/* PROGRESS */}

                    <span
                      style={{
                        fontWeight: "700",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {course.progress}%
                    </span>


                    {/* CONTINUE */}

                    <Link
                      to={`/course/${course.id}`}
                      className="course-btn"
                    >
                      Continue →
                    </Link>

                  </div>

                ))

              ) : (

                <div
                  style={{
                    textAlign: "center",
                    padding: "30px 10px",
                    color: "#6b7280",
                  }}
                >

                  <div
                    style={{
                      fontSize: "40px",
                    }}
                  >
                    🔍
                  </div>

                  <h3>
                    No Course Found
                  </h3>

                  <p>
                    Try searching with another course name.
                  </p>

                </div>

              )}

            </div>

          </div>


          {/* =================================================
              TOP PERFORMING COURSE
          ================================================= */}

          <div
            className="dashboard-card"
            style={{
              marginTop: "25px",
            }}
          >

            <div className="dashboard-card-title">

              <div>

                <h2>
                  🌟 Top Performing Course
                </h2>

                <p>
                  Your highest quiz score so far.
                </p>

              </div>

              <span
                style={{
                  fontSize: "28px",
                }}
              >
                🏆
              </span>

            </div>


            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "15px",
                background: "#f8fafc",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >

              <div
                style={{
                  fontSize: "42px",
                }}
              >
                {bestCourse.icon}
              </div>

              <div
                style={{
                  flex: 1,
                }}
              >

                <h3>
                  {bestCourse.title}
                </h3>

                <p
                  style={{
                    color: "#6b7280",
                    marginTop: "5px",
                  }}
                >
                  {bestCourse.description}
                </p>

              </div>

              <strong
                style={{
                  fontSize: "24px",
                }}
              >
                {bestCourse.score}%
              </strong>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDEBAR
        ================================================= */}

        <div className="dashboard-side">


          {/* =================================================
              PROFILE
          ================================================= */}

          <div className="dashboard-card">

            <div
              style={{
                textAlign: "center",
              }}
            >

              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "36px",
                  color: "white",
                }}
              >
                👨‍🎓
              </div>


              <h2>
                Student
              </h2>

              <p
                style={{
                  color: "#6b7280",
                  marginTop: "5px",
                }}
              >
                Learner
              </p>

            </div>


            <div
              style={{
                marginTop: "20px",
              }}
            >

              <div className="overview-item">
                📚 {totalCourses} Enrolled Courses
              </div>

              <div className="overview-item">
                📖 {completedLessons} Lessons Completed
              </div>

              <div className="overview-item">
                🏆 {averageScore}% Average Score
              </div>

              <div className="overview-item">
                🎖️ {achievementCount} Achievements
              </div>

            </div>

          </div>


          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          <div className="dashboard-card">

            <h2>
              🏆 Achievements
            </h2>


            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "12px",
              }}
            >

              <div
                className="overview-item"
                style={{
                  background: "#fef3c7",
                }}
              >
                🎯 Keep Learning
              </div>


              <div
                className="overview-item"
                style={{
                  background: "#dcfce7",
                }}
              >
                📚 Course Explorer
              </div>


              <div
                className="overview-item"
                style={{
                  background: "#ede9fe",
                }}
              >
                🧠 Knowledge Builder
              </div>

            </div>

          </div>


          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <div className="dashboard-card">

            <h2>
              ⚡ Quick Actions
            </h2>


            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "20px",
              }}
            >

              <Link
                to="/courses"
                className="primary-btn"
                style={{
                  textAlign: "center",
                }}
              >
                📚 Browse Courses
              </Link>


              <Link
                to="/course/java"
                className="secondary-btn"
                style={{
                  textAlign: "center",
                }}
              >
                ☕ Continue Java
              </Link>


              <Link
                to="/course/react"
                className="secondary-btn"
                style={{
                  textAlign: "center",
                }}
              >
                ⚛️ Learn React
              </Link>

            </div>

          </div>


          {/* =================================================
              LEARNING SUMMARY
          ================================================= */}

          <div className="dashboard-card">

            <h2>
              📈 Learning Summary
            </h2>


            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "15px",
              }}
            >

              <div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >

                  <span>
                    Course Progress
                  </span>

                  <strong>
                    {averageProgress}%
                  </strong>

                </div>


                <div className="dashboard-progress-bar">

                  <div
                    className="dashboard-progress-fill"
                    style={{
                      width: `${averageProgress}%`,
                    }}
                  ></div>

                </div>

              </div>


              <div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "7px",
                  }}
                >

                  <span>
                    Quiz Performance
                  </span>

                  <strong>
                    {averageScore}%
                  </strong>

                </div>


                <div className="dashboard-progress-bar">

                  <div
                    className="dashboard-progress-fill"
                    style={{
                      width: `${averageScore}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              MOTIVATION
          ================================================= */}

          <div className="dashboard-card">

            <div
              style={{
                textAlign: "center",
              }}
            >

              <div
                style={{
                  fontSize: "40px",
                }}
              >
                🚀
              </div>

              <h3
                style={{
                  marginTop: "10px",
                }}
              >
                Keep Going!
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                Every lesson you complete brings
                you one step closer to your goal.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM CTA
      ================================================= */}

      <div
        className="cta-section"
        style={{
          marginTop: "40px",
        }}
      >

        <span>
          KEEP LEARNING
        </span>

        <h2>
          Your Learning Journey Starts Here 🚀
        </h2>

        <p>
          Explore more courses, complete lessons and
          improve your skills.
        </p>

        <Link
          to="/courses"
          className="primary-btn"
        >
          Explore Courses →
        </Link>

      </div>

    </div>

  );
}


export default StudentDashboard;