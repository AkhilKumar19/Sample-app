import {render, screen} from '@testing-library/react';
import {BasicStateExample} from '../BasicStateExample';
import userEvent from "@testing-library/user-event";

test("BasicStateExampleStateChange", async () => {
    render(<BasicStateExample />);

    await userEvent.click(screen.getByTestId("basic-state-example-button"), );

    expect(screen.getByTestId("StateChangeMessage")).toBeInTheDocument();
})
