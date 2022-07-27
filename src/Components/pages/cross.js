import React from 'react';
import './cross.css';
import ReactPlayer from "react-player";

export default class cross extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>크로스 런</h1>
                <text className="explain">둔근을 좀 더 집중적으로 자극시킬 수 있는 운동으로 런지보다 가동범위가 좀 더 넓은 버전</text>
                <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=3_4GVbcno0A" playing controls />
            </div>
        );
    };
};
