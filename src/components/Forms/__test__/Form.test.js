import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

test("Form is rendering without crash", () => {
    render(<Form />);
    const form = screen.getByTestId("form-test");
    expect(form).toBeInTheDocument();
});

test("Rendering contains 3 input components", () => {
    render(<Form />);
    const inputs = screen.queryAllByTestId("input-test");
    expect(inputs.length).toBe(3);
});

test("submit button is rendering with text 'Subscribe'", () =>{
    render(<Form />);
    const button = screen.getByTestId("button-test");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveTextContent("Subscribe");
})

test("All input fields has placeholder attribute", () => {
    render(<Form />);
    const inputs = screen.queryAllByTestId("input-test");
    inputs.forEach(input => {
        expect(input).toHaveAttribute("placeholder");
    })
})

