import React from 'react';
import './look.css';
import {Link} from "react-router-dom";

export default class look extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>운동 정보 보기</h1>
                <Link to = "cross">
                    <button className="box">
                        <text className="title">크로스 런지<br/></text>
                        <text className="explain">둔근을 좀 더 집중적으로 자극시킬 수 있는 운동으로 런지보다 가동범위가 좀 더 넓은 버전</text>
                    </button>
                </Link>
                <Link to = "slow">
                    <button className="box">
                        <text className="title">슬로우 버피<br/></text>
                        <text className="explain">버피가 너무 빠르고 힘들다면 한 동작 한 동작 천천히 진행해 볼 수 있는 운동</text>
                    </button>
                </Link>
                <Link to = "mountain">
                    <button className="box">
                        <text className="title">마운틴 클라이머<br/></text>
                        <text>전신 유산소 운동으로 무릎을 가슴까지 끌어올리며 계속 달려 주는 동작</text>
                    </button>
                </Link>
                <Link to = "squat">
                    <button className="box">
                        <text className="title">스쿼트<br/></text>
                        <text>맨몸 스쿼트로 허벅지와 코어 등 많은 부위의 근육을 활성화 시키는 운동</text>
                    </button>
                </Link>
                <Link to ="crunchy">
                    <button className="box">
                        <text className="title">바이시클 크런치<br/></text>
                        <text>무릎을 번갈아 팔꿈치에 찍으며 복근을 마구마구 괴롭히는 운동</text>
                    </button>
                </Link>
            </>
        );
    };
};
