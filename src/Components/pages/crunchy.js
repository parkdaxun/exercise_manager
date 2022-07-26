import React from 'react';
import './cross.css';
import ReactPlayer from "react-player";

export default class crunchy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>바이시클 크런치</h1>
                <text className="explain">무릎을 번갈아 팔꿈치에 찍으며 복근을 마구마구 괴롭히는 운동</text>
                <button className="count">갯수 입력하기</button>
                <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=-0sqJcNO098" playing controls />
            </div>
        );
    };
};
