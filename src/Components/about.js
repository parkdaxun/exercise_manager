import React from 'react';
import './about.css';

export default class about extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>사이트 사용 방법</h1>
                <div className="step1">
                    <text className="s1">운동 정보 보기</text>
                    <text className="s2">화면에서 원하는 운동 선택하기</text>
                    <div className="box2">
                        <text className="title">크로스 런지<br/></text>
                        <text className="explain">둔근을 좀 더 집중적으로 자극시킬 수 있는 운동으로 런지보다 가동범위가 좀 더 넓은 버전</text>
                    </div>
                </div>
                <div className="step2">
                    <text className="k2">원하는 운동의 유튜브 영상을 보며 운동하자!</text>
                </div>
            </div>
        );
    };
};
