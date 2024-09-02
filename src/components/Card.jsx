// Card is a wrapper component

import React from "react";

// children is what we use for whatever we wrap
const Card = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
