import "bootstrap/dist/css/bootstrap.css";
import "./game/Game.css"
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./game/Game";


ReactDOM.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById("game")
);
