import React from 'react';
import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img
                    className="intro"
                    src={require("./images/exercise_img.png")}>
                </img>
            </div>
        );
    };
};
