import React from "react";
import './cross.css';
import cross_run from './image/cross_run.png';

export default class cross extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <img src={cross_run}/>
                <text1>크로스 런지</text1>
            </div>
        );
    };
};
