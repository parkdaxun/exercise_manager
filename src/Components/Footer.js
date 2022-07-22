import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="adver">
                    <text className="first">번거롭게 헬스장까지 가서 운동하고 싶지 않으시다고요?<br/></text>
                    <text className="second">집에서 편하게, 집에서 안전하게, 집에서 운동할 수 있도록 도와주는 사이트입니다.</text>
                </div>

            </div>
        );
    };
};
