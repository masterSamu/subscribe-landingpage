import React, { useState } from "react";
import Input from "./Input";
import Button from "../Buttons/Button";

export default function Form() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} data-testid="form-test" style={defaultStyle}>
      <Input
        type="text"
        required={true}
        placeholder="Enter firstname"
        setValue={setFirstname}
      />
      <Input
        type="text"
        required={true}
        placeholder="Enter lastname"
        setValue={setLastname}
      />
      <Input
        type="email"
        required={true}
        placeholder="Enter email"
        setValue={setEmail}
      />
      <Button type="submit" text="Subscribe" />
    </form>
  );
}

const defaultStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  justifyContent: "center",
};
