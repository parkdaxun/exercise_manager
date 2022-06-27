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
                            둔근을 좀 더 집중적으로 자극 시킬 수 있는 운동으로<br/>런지보다 가동범위기 좀 더 넓은 업그레이드 버전이라고 생각하면 쉬워요!
                        </div>
                    </di>
                    <div className="right">
                        슬로우 버피
                        <div className="info">
                            버피가 너무 빠르고 힘들다면 한 동작 한 동작<br/> 천천히 진행해 볼 수 있는 운동이에요.
                        </div>
                    </div>
                    <div className="left">
                        마운틴 클라이머
                        <div className="info">
                            전신 유산소 운동으로 무릎을 가슴까지 끌어올리며 계속 달려주는 동작이에요.
                        </div>
                    </div>
                    <div className="right">
                        스쿼트
                        <div className="info">
                            맨몸 스쿼트로 허벅지와 코어 등 많은 부위의 근육을 활성화 시키며<br/> 다른 스쿼트를 진행하기 전 자세를 바로잡기에 적합한 운동이에요!
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
                            무릎을 번갈아 팔꿈치에 찍으며 복근을 마구마구 괴롭히는 운동이에요.<br/>뱃살을 모두 없앨 수 있죠!
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
