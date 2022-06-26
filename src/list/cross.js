import React from "react";
import './cross.css';
import {Link} from "react-router-dom";

export default class cross extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="cross_run" src={require("./images/cross_run.png")}/>
                <div className="cross_watch">
                    <a href="https://youtu.be/3_4GVbcno0A">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
