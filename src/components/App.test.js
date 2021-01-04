import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

afterEach(cleanup);

describe("<App />", () => {
    it("renders without crashing", () => {
        render(<App />);
    });

    it("big blob of tests", () => {
        const { getByText } = render(<App />);
        const strike = getByText(/^strike$/i);
        const ball = getByText(/^ball$/i);
        const hit = getByText(/^hit$/i);
        const foul = getByText(/^foul$/i);

        // Test strike
        fireEvent.click(strike);
        getByText(/strikes: /i);

        // Test balls
        fireEvent.click(ball);
        fireEvent.click(ball);
        getByText(/balls: 2/i);

        // Test foul
        fireEvent.click(foul);
        fireEvent.click(foul);
        getByText(/strikes: 2/i);

        // Test foul after 2 strikes
        fireEvent.click(foul);
        getByText(/strikes: 2/i);

        // Test hit
        fireEvent.click(hit);
        getByText(/strikes: 0/i);
        getByText(/balls: 0/i);

        // Test four balls
        fireEvent.click(ball);
        fireEvent.click(ball);
        fireEvent.click(ball);
        fireEvent.click(ball);
        getByText(/strikes: 0/i);
        getByText(/balls: 0/i);

        // Test three strikes
        fireEvent.click(strike);
        fireEvent.click(strike);
        fireEvent.click(strike);
        getByText(/strikes: 0/i);
        getByText(/balls: 0/i);
    });
});
