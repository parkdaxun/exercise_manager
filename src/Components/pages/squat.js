import React from 'react';
import './cross.css';
import ReactPlayer from "react-player";

export default class squat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>스쿼트</h1>
                <text className="explain">맨몸 스쿼트로 허벅지와 코어 등 많은 부위의 근육을 활성화 시키는 운동</text>
                <ReactPlayer className="youtube" url="https://www.youtube.com/watch?v=kz84Fc6HGu4&t=253s" playing controls />
            </>
        );
    };
};
