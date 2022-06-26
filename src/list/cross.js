import React from "react";
import './cross.css';

export default class cross extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="cross_run" src={require("./images/cross_run.png")}/>
                <text1>시작하기</text1>
            </div>
        );
    };
};
