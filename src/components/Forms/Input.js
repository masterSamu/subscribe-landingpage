import React, { useState } from "react";
import "../../App.css";

export default function Input({
  key,
  type,
  required,
  placeholder,
  defaultValue,
  setValue,
}) {
  const [style, setStyle] = useState(defaultStyle);
  const [asteriskVisible, setAsteriskVisible] = useState(required);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setAsteriskVisible(false);
    } else if (value.length < 1 && required) {
      setAsteriskVisible(true);
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;
    setValue(value);
    let valid = false;
    if (type === "email") {
      valid = emailIsValid(value);
    }
    if (type === "text") {
      if (value.length > 0) valid = true;
    }
    if (valid) {
      setStyle(validValue);
    } else if (required && !valid) {
      setStyle(invalidValue);
    } else {
      setStyle(defaultStyle);
    }
  };

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <div>
      <input
        type={type}
        style={style}
        defaultValue={defaultValue}
        placeholder={placeholder}
        key={key}
        data-testid="input-test"
        onFocus={() => setStyle(focus)}
        onBlur={(e) => handleBlur(e)}
        onChange={(e) => handleChange(e)}
      />
      {asteriskVisible === true && (
        <span data-testid="asterisk-test" className="asterisk"></span>
      )}
    </div>
  );
}

const padding = "5px";
const borderRadius = "5px";
const width = "90%";
const height = "20px";

const defaultStyle = {
  width: width,
  height: height,
  backgroundColor: "#FAE29C",
  padding: padding,
  border: "2px solid #000",
  borderRadius: borderRadius,
};

const focus = {
  width: width,
  height: height,
  backgroundColor: "#FFFFFF",
  padding: padding,
  border: "2px solid #000",
  borderRadius: borderRadius,
};

const invalidValue = {
  width: width,
  height: height,
  backgroundColor: "#FFCCCB",
  padding: padding,
  border: "2px solid #f70d1a",
  borderRadius: borderRadius,
};

const validValue = {
  width: width,
  height: height,
  backgroundColor: "#90EE90",
  padding: padding,
  border: "2px solid #0B890F",
  borderRadius: borderRadius,
};
