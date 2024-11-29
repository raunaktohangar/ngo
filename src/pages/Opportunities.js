import React from "react";

function Opportunities() {
  const opportunities = [
    { id: 1, title: "Teach Kids Math", cause: "Education" },
    { id: 2, title: "Plant Trees", cause: "Environment" },
    { id: 3, title: "Assist in Hospital", cause: "Healthcare" }
  ];

  return (
    <div className="opportunities">
      <h2>Volunteer Opportunities</h2>
      <ul>
        {opportunities.map(opportunity => (
          <li key={opportunity.id}>
            <h3>{opportunity.title}</h3>
            <p>Cause: {opportunity.cause}</p>
            <button onClick={() => window.location.href="/bid"}>Bid Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Opportunities;
