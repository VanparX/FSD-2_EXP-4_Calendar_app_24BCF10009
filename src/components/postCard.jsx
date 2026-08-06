import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPost } from "../features/posts/postSlice";

function PostCard() {
  const dispatch = useDispatch();

  const selectedPost = useSelector(
    (state) => state.posts.selectedPost
  );

  if (!selectedPost) {
    return (
      <div className="post-card">
        <h2>📌 Selected Post</h2>

        <div className="empty-card">
          <h3>No Post Selected</h3>
          <p>Click on any event in the calendar to view its details.</p>
        </div>
      </div>
    );
  }

  const deleteSelected = () => {
    const confirmDelete = window.confirm(
      "Delete this scheduled post?"
    );

    if (!confirmDelete) return;

    dispatch(deletePost(selectedPost.id));
    dispatch(selectPost(null));
  };

  const badgeColor = {
    Instagram: "#C13584",
    LinkedIn: "#0077B5",
    Facebook: "#1877F2",
    Twitter: "#1DA1F2",
    YouTube: "#FF0000",
  };

  return (
    <div className="post-card">

      <h2>📌 Selected Post</h2>

      <div className="post-details">

        <h3>{selectedPost.title}</h3>

        <span
          className="platform-badge"
          style={{
            background: badgeColor[selectedPost.platform],
          }}
        >
          {selectedPost.platform}
        </span>

        <div className="detail-row">
          <strong>📅 Date</strong>

          <span>
            {new Date(selectedPost.start).toLocaleDateString()}
          </span>
        </div>

        <div className="detail-row">
          <strong>🕒 Time</strong>

          <span>
            {new Date(selectedPost.start).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="detail-row">
          <strong>Status</strong>

          <span className="status">
            Scheduled
          </span>
        </div>

        <button
          className="delete-btn"
          onClick={deleteSelected}
        >
          🗑 Delete Post
        </button>

      </div>

    </div>
  );
}

export default PostCard;