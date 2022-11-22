import React from "react";

const EmptySearch = ({ title }) => {
  return (
    <div
      id="empty"
      className="d-flex flex-column p-5 justify-content-center align-items-center"
    >
      <i className="bi bi-emoji-frown-fill display-1" />
      <p className="mt-3 h4">
        No items found for "<strong>{title}</strong>"
      </p>
    </div>
  );
};

export default EmptySearch;
