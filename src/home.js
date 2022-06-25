import React, {useState} from "react";
import './home.css';

export default class home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button className="recode" >운동 기록하기</button>
                    <button className="look">운동 목록보기</button>
                    <button className="check">기록 확인하기</button>

                </div>
                <div className="exercise">
                    <div className="exercise1">크로스 런지</div>
                    <div className="exercise2">슬로우 버피</div>
                    <div className="exercise3">마운틴 클라이머</div>
                    <div className="exercise4">스쿼트</div>
                    <div className="exercise5">스쿼트 오버헤드 프레스</div>
                    <div className="exercise6">시티드 넥 탭</div>
                </div>
            </div>

        );
    };
};
