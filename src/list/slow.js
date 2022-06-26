import React from "react";
import './cross.css';

export default class slow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img className="picture" src={require("./images/slow.png")}/>
                <div className="video">
                    <a href="https://youtu.be/4leACgpgUTI">영상 시청하기</a>
                </div>
            </div>
        );
    };
};
