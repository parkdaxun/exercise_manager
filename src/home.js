import React, {useState} from "react";
import './home.css';

export default class home extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav">
                <h2>운동 매니저</h2>
                <hr></hr>
                <h1>💪🏻홈트레이닝</h1>
                <p>당신의 건강을 책임져 드립니다.</p>
            </div>
        )
    }
};
