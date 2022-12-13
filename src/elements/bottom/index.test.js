import { React } from "react";
import { render } from "@testing-library/react";
import Bottom from "./index";

test("Should not allowed click button id disable is parent", () => {
    const {container} = render(<Bottom isDisabled></Bottom>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})

test("Should not allowed click button id disable is parent", () => {
    const {container, getByText} = render(<Bottom isLoading></Bottom>);

    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector("span")).toBeInTheDocument();
})