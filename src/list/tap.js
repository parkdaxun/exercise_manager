import React from "react";
import './cross.css';

export default class tap extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/crun.png")}/>
                <div className="video">
                    <a href="https://youtu.be/anoM9iutAuY">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
