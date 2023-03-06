import React from "react";

export const ColorMessage = (props) => {
  console.log(props);
  const questionMessage = {
    color: props.color
  };

  return <p style={questionMessage}>{props.children}</p>;
};
