import "./Game.css";
import React from "react";
import Board from "./components/Board";
import Info from "./components/Info";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [Array(9).fill(null)],
            step: 0
        };
    }

    render() {
        const winner = this.calculateWinner(this.state.history[this.state.step]);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="m-0 mt-5 mb-4 p-0">
                            <h1 className="h1 text-center">React Tic-Tac-Toe</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-md-3 col-md-6">
                        <Board history={this.state.history} step={this.state.step} handleClick={index => this.handleBoardClick(index)} getXO={this.getXO}/>
                    </div>
                    <div className="col-12 col-md-3">
                        <Info history={this.state.history} step={this.state.step} handleClick={index => this.handleInfoClick(index)} getXO={this.getXO} winner={winner}/>
                    </div>
                </div>
            </div>
        );
    }

    getXO = (index) => {
        return ((index + 1) % 2) === 0 ? "O" : "X";
    }

    handleBoardClick = (index) => {
        const history = this.state.history.slice(0, this.state.step + 1);
        const squares = history[history.length - 1].slice();
        if (this.calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.getXO(this.state.step);
        this.setState({
            history: history.concat([squares]),
            step: history.length
        });
    }

    handleInfoClick = (index) => {
        this.setState({
            step: index
        });
    }

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Game;
