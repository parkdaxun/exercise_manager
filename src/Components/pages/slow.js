import React from 'react';
import './cross.css';
import ReactPlayer from "react-player";

export default class slow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>슬로우 버피</h1>
                <text className="explain">버피가 너무 빠르고 힘들다면 한 동작 한 동작 천천히 진행해 볼 수 있는 운동</text>
                <button className="count">갯수 입력하기</button>
                <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=I2H9OTY9Gjw" playing controls />
            </>
        );
    };
};
