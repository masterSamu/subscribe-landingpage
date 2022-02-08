import {render, screen} from "@testing-library/react";
import Testemonial from "../Testemonial";

test("props from components are rendering", () => {
    render(<Testemonial image="#" headline="Hello" text="World" />);
    const image = screen.getByTestId("image-test");
    expect(image).toBeInTheDocument();
    const headline = screen.getByTestId("boldText-test");
    expect(headline).toHaveTextContent("Hello");
    const text = screen.getByTestId("normalText-test");
    expect(text).toHaveTextContent("World");
})