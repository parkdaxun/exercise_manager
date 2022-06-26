import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Example.css';

export default class Example extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button className="recode">운동 기록하기</button>
                    <button className="look">운동 목록보기</button>
                    <button className="check">기록 확인하기</button>
                </div>
                <div className="exercise">
                    <div className="left">
                        <Link to="cross">
                            크로스 런지
                            <div className="info">
                                힙 집중
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="./list/slow.js">
                            슬로우 버피
                            <div className="info">
                                근력 및 전신 근육 발달
                            </div>
                        </Link>

                    </div>
                    <div className="left">
                        <Link to="./list/mountain.js">
                            마운틴 클라이머
                            <div className="info">
                                코어 자극 및 전신 유산소
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="./list/squat.js">
                            스쿼트
                            <div className="info">
                                앉았다 일어나기, 하체 집중
                            </div>
                        </Link>
                    </div>
                    <div className="left">
                        <Link to="./list/overhead.js">
                            스쿼트 오버헤드 프레스
                            <div className="info">
                                전신 칼로리 태우기
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="./list/tap.js">
                            시티드 넥 탭
                            <div className="info">
                                팔뚝살 앞쪽
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
};
