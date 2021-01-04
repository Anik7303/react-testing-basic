import { render, cleanup } from "@testing-library/react";
import Display from "./Display";

afterEach(cleanup);

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });

    it("runs with props => (2, 3)", () => {
        const strikes = 2,
            balls = 3;
        const { getByText } = render(<Display strikes={strikes} balls={balls} />);
        getByText(/strikes: 2/i);
        getByText(/balls: 3/i);
    });

    it("runs with props => (1, 1)", () => {
        const strikes = 1;
        const balls = 1;
        const { getByText } = render(<Display strikes={strikes} balls={balls} />);
        getByText(/strikes: 1/i);
        getByText(/balls: 1/i);
    });
});
