import React from 'react';
import './Example.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Example from './Example.js';
import Cross from './list/cross.js';
import Topinfo from './Topinfo.js';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Topinfo/>
                <Routes>
                    <Route path="/" element={<Example/>}/>
                    <Route path="/cross" element={<Cross/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
