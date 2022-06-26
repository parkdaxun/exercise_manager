import React from "react";
import './cross.css';

export default class mountain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/mountain.png")}/>
                <div className="video">
                    <a href="https://youtu.be/jDZGtNJ7hbg">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
