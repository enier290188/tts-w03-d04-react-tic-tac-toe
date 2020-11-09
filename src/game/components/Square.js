import React from "react";

class Square extends React.Component {
    render() {
        const {square, handleClick} = this.props
        return (
            <button className={(square !== null) ? "btn btn-secondary" : "btn btn-outline-secondary"} onClick={handleClick}>{square}</button>
        );
    }
}

export default Square;
