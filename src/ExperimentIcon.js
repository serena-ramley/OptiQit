import React from "react";

const ExperimentIcon = ({ id, name, imgSrc }) => {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    // Use tachyons to create green background and grow upon hover
    <div>
      <h2>{name}</h2>
      <img
        className="br-pill"
        alt={name}
        src={`${imgSrc}`}
        width="200"
        height="200"
        onclick={handleClick}
      />
    </div>
  );
};

export default ExperimentIcon;
