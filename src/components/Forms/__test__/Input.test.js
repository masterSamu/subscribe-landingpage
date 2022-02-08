import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

test("Input field is rendering properly", () => {
  render(<Input setValue={jest.fn()} />);
  const input = screen.getByTestId("input-test");
  expect(input).toBeInTheDocument();
});

test("required asterisk is hidden when required is false", () => {
  render(<Input required={false} setValue={jest.fn()} />);
  const asterisk = screen.queryByTestId("asterisk-test");
  expect(asterisk).not.toBeInTheDocument();
});

test("required asterisk is visible when required=true and input is empty", () => {
  render(<Input required={true}  setValue={jest.fn()} />);
  const asterisk = screen.queryByTestId("asterisk-test");
  expect(asterisk).toBeInTheDocument();
  const input = screen.getByTestId("input-test");
  fireEvent.change(input, { target: { value: "asd" } });
  expect(asterisk).not.toBeInTheDocument();
});

test("Input field styles are changing properly", () => {
  render(<Input setValue={jest.fn()} />);
  const input = screen.getByTestId("input-test");

  expect(input).toHaveStyle(defaultStyle);
  fireEvent.focus(input);
  expect(input).toHaveStyle(focus);
  fireEvent.blur(input);
  expect(input).toHaveStyle(defaultStyle);
});

test("Check if required=true is changing styles properly", () => {
  render(<Input type="text" required={true} setValue={jest.fn()} />);
  const input = screen.getByTestId("input-test");

  expect(input).toHaveStyle(defaultStyle);
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "asdasdwqe" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(validValue);

  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(invalidValue);
});

test("Check if required=false is changing styles properly", () => {
  render(<Input type="text" required={false} setValue={jest.fn()} />);
  const input = screen.getByTestId("input-test");

  expect(input).toHaveStyle(defaultStyle);
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "asdasdwqe" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(validValue);

  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(defaultStyle);
});

test("Check if type=email is working properly", () => {
  render(<Input type="email" required={true} setValue={jest.fn()} />);
  const input = screen.getByTestId("input-test");
  expect(input).toHaveStyle(defaultStyle);

  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "asdasdwqe" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(invalidValue);

  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(invalidValue);

  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: "asd@qwe.com" } });
  fireEvent.blur(input);
  expect(input).toHaveStyle(validValue);
});

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

