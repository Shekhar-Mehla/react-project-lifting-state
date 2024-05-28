import React from "react";

export const UserlistDisplay = ({ list }) => {
  return (
    <div>
      <h2>Users list!</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
