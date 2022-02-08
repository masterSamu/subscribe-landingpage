import React, { useState } from "react";

export default function Button({text, type}) {
  const [style, setStyle] = useState(defaultStyle);

  return (
    <button
      type={type}
      style={style}
      onMouseEnter={() => setStyle(mouseOver)}
      onMouseLeave={() => {
        setStyle(defaultStyle);
      }}
      onMouseDown={() => setStyle(active)}
      onMouseUp={() => setStyle(mouseOver)}
      onFocus={() => setStyle(active)}
      data-testid="button-test"
    >
      {text}
    </button>
  );
}

const border = "none";
const width = "120px";
const height = "30px";

const defaultStyle = {
  backgroundColor: "#003b49",
  color: "#ffc845",
  border: border,
  width: width,
  height: height,
};

const mouseOver = {
  backgroundColor: "#ffc845",
  color: "#003b49",
  border: border,
  width: width,
  height: height,
  cursor: "pointer"
};

const active = {
  backgroundColor: "#ffc845",
  color: "#000",
  border: border,
  width: width,
  height: height,
  cursor: "pointer",
};
