import { useReducer } from "react";

import "./App.css";
import Display from "./Display";
import Controls from "./Controls";

function App() {
    const types = {
        INCREASE_STRIKE: "INCREASE_STRIKE",
        INCREASE_BALL: "INCREASE_BALL",
        RESET: "RESET",
    };
    const initialState = {
        strikes: 0,
        balls: 0,
    };

    const scoreReducer = (state, action) => {
        switch (action.type) {
            case types.INCREASE_STRIKE:
                return { ...state, strikes: state.strikes + 1 };
            case types.INCREASE_BALL:
                return { ...state, balls: state.balls + 1 };
            case types.RESET:
                return { strikes: 0, balls: 0 };
            default:
                throw new Error(`wrong action type ${action.type}`);
        }
    };

    const [state, dispatch] = useReducer(scoreReducer, initialState);

    const onStrike = () => {
        if (state.strikes < 2) {
            dispatch({ type: types.INCREASE_STRIKE });
        } else {
            dispatch({ type: types.RESET });
        }
    };

    const onBall = () => {
        if (state.balls < 3) {
            dispatch({ type: types.INCREASE_BALL });
        } else {
            dispatch({ type: types.RESET });
        }
    };

    const onHit = () => {
        dispatch({ type: types.RESET });
    };

    const onFoul = () => {
        if (state.strikes < 2) {
            dispatch({ type: types.INCREASE_STRIKE });
        }
    };

    return (
        <div className="App">
            <main>
                <Display {...state} />
                <Controls onStrike={onStrike} onBall={onBall} onHit={onHit} onFoul={onFoul} />
            </main>
        </div>
    );
}

export default App;
