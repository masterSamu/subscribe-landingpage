import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("Button text is rendering correctly", () => {
  const btnText = "Subscribe";
  render(<Button text={btnText} />);
  const button = screen.getByTestId("button-test");
  expect(button).toHaveTextContent(btnText);
});

test("Button changes style properly", () => {
  const btnText = "Subscribe";
  const width = "120px";
  const height = "30px";

  const defaultStyle = {
    backgroundColor: "#003b49",
    color: "#ffc845",
    width: width,
    height: height,
  };

  const mouseOver = {
    backgroundColor: "#ffc845",
    color: "#003b49",
    width: width,
    height: height,
    cursor: "pointer",
  };

  const active = {
    backgroundColor: "#ffc845",
    color: "#000",
    width: width,
    height: height,
    cursor: "pointer",
  };

  render(<Button text={btnText} />);
  const button = screen.getByTestId("button-test");
  expect(button).toHaveStyle(defaultStyle);

  fireEvent.mouseEnter(button);
  expect(button).toHaveStyle(mouseOver);

  fireEvent.mouseDown(button);
  expect(button).toHaveStyle(active);

  fireEvent.mouseUp(button);
  expect(button).toHaveStyle(mouseOver);

  fireEvent.mouseLeave(button);
  expect(button).toHaveStyle(defaultStyle);
});
