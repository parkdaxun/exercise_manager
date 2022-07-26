import React from 'react';
import './cross.css';
import ReactPlayer from "react-player";

export default class mountain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>마운틴 클라이머</h1>
                <text className="explain">전신 유산소 운동으로 무릎을 가슴까지 끌어올리며 계속 달려 주는 동작</text>
                <button className="count">갯수 입력하기</button>
                <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=jDZGtNJ7hbg&t=1s" playing controls />
            </>
        );
    };
};
