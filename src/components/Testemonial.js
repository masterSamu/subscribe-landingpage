import React from 'react';

export default function Testemonial({image, headline, text}) {
  return <div style={div}>
      <img src={image} style={imageStyle} data-testid="image-test" />
      <p style={boldText} data-testid="boldText-test">{headline}</p>
      <p style={normalText} data-testid="normalText-test">{text}</p>
  </div>;
}

const div = {
    textAlign: "center"
}

const boldText = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "5px",
}
const normalText = {
    fontSize: "0.8rem",
    margin: "5px",
}

const imageStyle = {
    height: "125px",
    width: "125px",
}