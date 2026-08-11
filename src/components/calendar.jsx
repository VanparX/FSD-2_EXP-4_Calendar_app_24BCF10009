import { useState } from "react";
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

const platformColors = {
  Instagram: "#C13584",
  LinkedIn: "#0077B5",
  Facebook: "#1877F2",
};

function CalendarView() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Instagram");

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setTitle("");
    setPlatform("Instagram");
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    dispatch(selectPost(event));
  };

  const handleAddPost = () => {
    if (!title.trim() || !selectedDate) {
      return;
    }

    const start = new Date(selectedDate);
    const end = new Date(start);

    end.setHours(end.getHours() + 1);

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      platform,
      start,
      end,
    };

    dispatch(addPost(newPost));

    setTitle("");
    setPlatform("Instagram");
    setSelectedDate(null);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setTitle("");
    setPlatform("Instagram");
    setSelectedDate(null);
    setShowModal(false);
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <div>
          <h2>Content Schedule</h2>
          <p>
            Click a date to schedule a new social media post.
          </p>
        </div>

        <div className="calendar-legend">
          <span>
            <i
              style={{
                backgroundColor: platformColors.Instagram,
              }}
            />
            Instagram
          </span>

          <span>
            <i
              style={{
                backgroundColor: platformColors.LinkedIn,
              }}
            />
            LinkedIn
          </span>

          <span>
            <i
              style={{
                backgroundColor: platformColors.Facebook,
              }}
            />
            Facebook
          </span>
        </div>
      </div>

      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={posts}
          startAccessor="start"
          endAccessor="end"
          selectable
          popup
          defaultView="month"
          views={["month", "week", "day"]}
          style={{ height: 650 }}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor:
                platformColors[event.platform] || "#2563EB",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontWeight: "600",
            },
          })}
        />
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="schedule-modal">
            <div className="modal-header">
              <div>
                <p className="modal-label">NEW POST</p>
                <h2>Schedule Post</h2>
              </div>

              <button
                className="modal-close"
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>

            <div className="form-group">
              <label>Post Title</label>

              <input
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Platform</label>

              <select
                value={platform}
                onChange={(event) =>
                  setPlatform(event.target.value)
                }
              >
                <option value="Instagram">Instagram</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
              </select>
            </div>

            <div className="form-group">
              <label>Scheduled Date</label>

              <input
                type="text"
                value={
                  selectedDate
                    ? format(
                        selectedDate,
                        "dd MMMM yyyy"
                      )
                    : ""
                }
                readOnly
              />
            </div>

            <div className="modal-actions">
              <button
                className="cancel-button"
                onClick={handleCloseModal}
              >
                Cancel
              </button>

              <button
                className="save-button"
                onClick={handleAddPost}
                disabled={!title.trim()}
              >
                Schedule Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarView;