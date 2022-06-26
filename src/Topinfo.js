import React, {useState} from "react";
import './Topinfo.css';
import {Link} from "react-router-dom";

export default class Topinfo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav">
                <Link to={"/"}>
                    <h2>운동 매니저</h2>
                </Link>
                <hr></hr>
                <h1>💪🏻홈트레이닝</h1>
                <p>당신의 건강을 책임져 드립니다.</p>
            </div>
        )
    }
};
