import React from "react";
import './cross.css';

export default class squat extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/squat.png")}/>
                <div className="video">
                    <a href="https://youtu.be/kz84Fc6HGu4">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
