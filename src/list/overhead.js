import React from "react";
import './cross.css';

export default class overhead extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/overhead.png")}/>
                <div className="video">
                    <a href="https://youtu.be/q2eGkS4JTf4">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
