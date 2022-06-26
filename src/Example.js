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
                    <button className="recode">영상 시청하기</button>
                    <button className="look">운동 설명보기</button>
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
                        <Link to="slow">
                            슬로우 버피
                            <div className="info">
                                근력 및 전신 근육 발달
                            </div>
                        </Link>

                    </div>
                    <div className="left">
                        <Link to="mountain">
                            마운틴 클라이머
                            <div className="info">
                                코어 자극 및 전신 유산소
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="squat">
                            스쿼트
                            <div className="info">
                                앉았다 일어나기, 하체 집중
                            </div>
                        </Link>
                    </div>
                    <div className="left">
                        <Link to="overhead">
                            스쿼트 오버헤드 프레스
                            <div className="info">
                                전신 칼로리 태우기
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="tap">
                            바이시클 크런치
                            <div className="info">
                                전체적인 복근 자극
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
};
