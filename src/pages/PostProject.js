import React from "react";

function PostProject() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Project posted successfully!");
  };

  return (
    <div className="post-project">
      <h2>Post a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Title:
          <input type="text" required />
        </label>
        <label>
          Cause:
          <select required>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </label>
        <label>
          Description:
          <textarea required />
        </label>
        <button type="submit">Post Project</button>
      </form>
    </div>
  );
}

export default PostProject;
