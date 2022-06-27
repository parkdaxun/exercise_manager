import React, {useState} from "react";
import './introduce.css';
import {Link} from "react-router-dom";

export default class introduce extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>
                    <Link to = "/">
                        <button className="recode">영상 시청하기</button>
                    </Link>

                    <Link to = "">
                        <button className="look">운동 설명보기</button>
                    </Link>
                </div>
                <div className="exercise">
                    <di className="left">
                        크로스 런지
                        <div className="info">
                            힙 집중
                        </div>
                    </di>
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
                        바이시클 크런치
                        <div className="info">
                            전체적인 복근 자극
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
