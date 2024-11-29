import React from "react";

function BidPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bid submitted!");
  };

  return (
    <div className="bid-page">
      <h2>Submit Your Bid</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Amount of Time/Skills:
          <input type="text" required />
        </label>
        <label>
          Message to NGO:
          <textarea required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BidPage;
