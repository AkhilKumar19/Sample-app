import BasicFuncStateExample from "../BasicFuncStateExample";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("BasicStateExampleStateChange", async () => {
    render(<BasicFuncStateExample title={"Functional Component"}/>);

    expect(screen.getByText("Functional Component")).toBeInTheDocument();
    const initialMessage = screen.queryByText("Button Clicked!!!");

    await userEvent.click(screen.getByTestId("testButton"));

    const afterButtonClicked = screen.queryByText("Button Clicked!!!");

    expect(initialMessage).toBeNull();

    expect(afterButtonClicked).toHaveTextContent("Button Clicked!!!");
})
