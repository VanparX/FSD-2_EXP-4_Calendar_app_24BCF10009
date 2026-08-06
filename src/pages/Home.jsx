import { useEffect, useState } from "react";
import CalendarView from "../components/calendar";
import PostCard from "../components/postCard";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <div className="dashboard">

      <header className="hero">

        <div className="hero-top">

          <div>
            <h1>📅 Social Media Content Planner</h1>

            <p>
              Schedule and manage your posts efficiently.
            </p>
          </div>

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

        </div>

      </header>

      <div className="dashboard-layout">

        <div className="calendar-section">
          <CalendarView />
        </div>

        <div className="sidebar">
          <PostCard />
        </div>

      </div>

    </div>
  );
}

export default Home;