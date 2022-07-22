import React from 'react';
import './Header.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="Nav">
                    <img
                        className="logo"
                        src={require("./images/logo.png")}>
                    </img>
                    <text className="main">운동 매니저</text>
                    <text className="look_info">운동 정보 보기</text>
                    <text className="look_recode">내 운동 기록 보기</text>
                    <text className="howto">사이트 사용 방법</text>
                </div>
            </div>
        );
    };
};
