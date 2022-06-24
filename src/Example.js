import React from "react";
import './App.css';

export default class Example extends React.Component {

    constructor(props) {
        super(props);
    }

    const start_recode = () => {

    }

    render() {
        return (
            <div>
                <button className="recode" onClick={start_recode}>운동 기록하기</button>
                <button className="look">운동 목록보기</button>
                <button className="check">기록 확인하기</button>
            </div>
        );
    };
};
