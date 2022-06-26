import React from "react";
import './cross.css';

export default class cross extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/cross_run.png")}/>
                <div className="video">
                    <a href="https://youtu.be/3_4GVbcno0A">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
