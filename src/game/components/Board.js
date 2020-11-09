import React from "react";
import Square from "./Square";

class Board extends React.Component {
    render() {
        const {history, step, handleClick} = this.props
        return (
            <div className="m-0 p-0">
                <div className="row row-cols-3">
                    {
                        history[step].map((square, index) =>
                            <div key={index} className="col m-0 p-1 d-flex flex-column justify-content-around align-items-stretch">
                                <Square square={square} handleClick={() => handleClick(index)}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Board;
