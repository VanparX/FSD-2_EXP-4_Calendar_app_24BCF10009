import { useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { enUS } from "date-fns/locale";

import { useDispatch, useSelector } from "react-redux";

import {
  addPost,
  selectPost,
  setFilter,
  setSearch,
} from "../features/posts/postSlice";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const colors = {
  Instagram: "#C13584",
  LinkedIn: "#0077B5",
  Facebook: "#1877F2",
  Twitter: "#1DA1F2",
  YouTube: "#FF0000",
};

function CalendarView() {
  const dispatch = useDispatch();

  const { posts, filter, search } = useSelector(
    (state) => state.posts
  );

  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [title, setTitle] = useState("");

  const [platform, setPlatform] = useState("Instagram");

  const filteredEvents = useMemo(() => {
    return posts
      .filter((post) => {
        if (filter === "All") return true;
        return post.platform === filter;
      })
      .filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
      .map((post) => ({
        ...post,
      }));
  }, [posts, filter, search]);

  const handleSlot = ({ start }) => {
    setSelectedDate(start);
    setShowModal(true);
  };

  const savePost = () => {
    if (!title.trim()) return;

    dispatch(
      addPost({
        id: Date.now(),
        title,
        platform,
        start: selectedDate,
        end: selectedDate,
      })
    );

    setTitle("");
    setPlatform("Instagram");
    setShowModal(false);
  };

  const totalPosts = posts.length;

  const todayPosts = posts.filter(
    (p) =>
      new Date(p.start).toDateString() ===
      new Date().toDateString()
  ).length;

  const upcomingPosts = posts.filter(
    (p) => new Date(p.start) > new Date()
  ).length;

  return (
    <>
      <div className="toolbar">

        <input
          placeholder="🔍 Search Posts"
          value={search}
          onChange={(e) =>
            dispatch(setSearch(e.target.value))
          }
        />

        <select
          value={filter}
          onChange={(e) =>
            dispatch(setFilter(e.target.value))
          }
        >
          <option>All</option>
          <option>Instagram</option>
          <option>LinkedIn</option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>YouTube</option>
        </select>

      </div>

      <div className="stats">

        <div className="card">
          <h3>Total</h3>
          <h2>{totalPosts}</h2>
        </div>

        <div className="card">
          <h3>Today</h3>
          <h2>{todayPosts}</h2>
        </div>

        <div className="card">
          <h3>Upcoming</h3>
          <h2>{upcomingPosts}</h2>
        </div>

      </div>

      <div className="calendar-container">

        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          selectable
          popup
          defaultView="month"
          views={["month", "week", "day"]}
          style={{ height: 600 }}
          onSelectSlot={handleSlot}
          onSelectEvent={(event) =>
            dispatch(selectPost(event))
          }
          eventPropGetter={(event) => ({
            style: {
              backgroundColor:
                colors[event.platform] || "#2563eb",
              borderRadius: "6px",
              border: "none",
            },
          })}
        />

      </div>

      {showModal && (
        <div className="modal">

          <div className="modal-content">

            <h2>Schedule Post</h2>

            <input
              placeholder="Post Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <select
              value={platform}
              onChange={(e) =>
                setPlatform(e.target.value)
              }
            >
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>YouTube</option>
            </select>

            <div className="buttons">

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                Cancel
              </button>

              <button onClick={savePost}>
                Save
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default CalendarView;