import CalendarView from "../components/calendar";
import PostCard from "../components/postCard";

function Home() {
  return (
    <main className="home">
      <header className="page-header">
        <p className="experiment-label">EXPERIMENT 4</p>
        <h1>Interactive Content Calendar</h1>
        <p className="page-description">
          Schedule and manage social media posts using an interactive calendar.
        </p>
      </header>

      <section className="content-layout">
        <div className="calendar-panel">
          <CalendarView />
        </div>

        <aside className="post-panel">
          <PostCard />
        </aside>
      </section>
    </main>
  );
}

export default Home;