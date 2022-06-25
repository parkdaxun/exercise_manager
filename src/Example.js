import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './list/slow.js';
import './App.css';

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
                        크로스 런지
                        <div className="info">
                            힙 집중
                        </div>
                    </div>
                    <div className="right">

                            슬로우 버피
                            <div className="info">
                                근력 및 전신 근육 발달
                            </div>
                    </div>
                    <div className="left">
                        마운틴 클라이머
                        <div className="info">
                            코어 자극 및 전신 유산소
                        </div>
                    </div>
                    <div className="right">
                        스쿼트
                        <div className="info">
                            앉았다 일어나기, 하체 집중
                        </div>
                    </div>
                    <div className="left">
                        스쿼트 오버헤드 프레스
                        <div className="info">
                            전신 칼로리 태우기
                        </div>
                    </div>
                    <div className="right">
                        시티드 넥 탭
                        <div className="info">
                            팔뚝살 앞쪽
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
