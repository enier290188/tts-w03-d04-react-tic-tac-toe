import React from "react";

class Info extends React.Component {
    render() {
        const {history, step, handleClick, getXO, winner} = this.props
        return (
            <div className="m-0 mt-3 m-md-0 p-0 border border-muted bg-light">
                <h4 className="m-0 p-3">
                    {
                        (winner) ? "Winner: Player " + winner : "Next move Player " + getXO(step)
                    }
                </h4>
                <ul className="m-3 p-0 list-group">
                    {
                        history.map((squares, index) => {
                            const description = index ? `Move #${index} >>> Player ${((index % 2) === 0) ? "O" : "X"}` : "Start Game";
                            return (
                                <button key={index} className="list-group-item list-group-item-action" onClick={() => handleClick(index)}>{description}</button>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Info;
