import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  selectPost,
} from "../features/posts/postSlice";

function PostCard() {
  const dispatch = useDispatch();

  const selectedPost = useSelector(
    (state) => state.posts.selectedPost
  );

  const handleDelete = () => {
    if (!selectedPost) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmed) {
      return;
    }

    dispatch(deletePost(selectedPost.id));
    dispatch(selectPost(null));
  };

  if (!selectedPost) {
    return (
      <div className="post-card empty-post-card">
        <div className="empty-icon">📅</div>

        <h2>No Post Selected</h2>

        <p>
          Click a scheduled post in the calendar to
          view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="post-card">
      <div className="post-card-header">
        <div>
          <p className="post-label">SCHEDULED POST</p>

          <h2>{selectedPost.title}</h2>
        </div>

        <span
          className="platform-badge"
          data-platform={selectedPost.platform}
        >
          {selectedPost.platform}
        </span>
      </div>

      <div className="post-info">
        <div className="info-item">
          <span className="info-label">
            Date
          </span>

          <span className="info-value">
            {new Date(
              selectedPost.start
            ).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">
            Time
          </span>

          <span className="info-value">
            {new Date(
              selectedPost.start
            ).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">
            Status
          </span>

          <span className="status-badge">
            Scheduled
          </span>
        </div>
      </div>

      <button
        className="delete-button"
        onClick={handleDelete}
      >
        Delete Post
      </button>
    </div>
  );
}

export default PostCard;