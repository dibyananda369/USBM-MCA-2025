import React from "react";

function UserCard({ user }) {
  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
      </p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  margin: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  width: "300px",
};

export default UserCard;
