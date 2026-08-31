import "../styles/App.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🎓 Digital Learning Platform</span>

          <h1>
            Learn Today.
            <br />
            <span>Grow Tomorrow.</span>
          </h1>

          <p>
            Capacity Connect is a digital learning management portal
            designed to help students build skills, track progress,
            and achieve their learning goals.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Courses →
            </button>

            <button className="secondary-btn">
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="learning-icon">📚</div>

          <h3>Your Learning Journey</h3>

          <p>Track your progress and improve your skills.</p>

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
              <strong>48</strong>
              <span>Lessons</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Quizzes</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stat">
          <h2>500+</h2>
          <p>Learning Resources</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Courses</p>
        </div>

        <div className="stat">
          <h2>1000+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Mentors</p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="section-heading">
          <span>WHY CAPACITY CONNECT?</span>

          <h2>
            Everything you need to
            <br />
            <strong>learn and grow.</strong>
          </h2>

          <p>
            A simple and powerful platform that brings learning,
            assessment and progress tracking together.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Quality Courses</h3>
            <p>
              Access structured courses and learning materials
              designed to improve your skills.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>
              Monitor your learning progress and understand
              how much you have completed.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Online Assessments</h3>
            <p>
              Test your knowledge through quizzes and
              assessments after completing lessons.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Achievements</h3>
            <p>
              Earn achievements and certificates as you
              complete your learning journey.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Mentors</h3>
            <p>
              Learn from teachers and mentors who can guide
              you throughout your journey.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>
              Get learning recommendations based on your
              interests and performance.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div>
          <span>START YOUR JOURNEY</span>

          <h2>
            Ready to build your
            <br />
            future?
          </h2>

          <p>
            Join Capacity Connect and start learning new skills today.
          </p>

          <button className="primary-btn">
            Start Learning →
          </button>
        </div>
      </section>

    </div>
  );
}

export default Home;