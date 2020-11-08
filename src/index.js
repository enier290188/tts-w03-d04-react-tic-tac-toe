import "bootstrap/dist/css/bootstrap.css";
import "./index.css"
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import Board from "./game/components/Board";

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="rows">
                    <div className="col-12">

                        <div className="game">
                            <div className="game-board">
                                <Board/>
                            </div>
                            <div className="game-info">
                                <div>{/* status */}</div>
                                <ol>{/* TODO */}</ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

ReactDOM.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById("game")
);
