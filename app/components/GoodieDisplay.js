import React from "react";

const GoodieDisplay = props => {
  const { candy } = props;
  return (
    <div>
      <div id="goodies" className="goodie">
        <a>
          <img src={candy.imageUrl} />
          <p>{candy.name}</p>
          <small>{candy.description}</small>
        </a>
      </div>
    </div>
  );
};

export default GoodieDisplay;
