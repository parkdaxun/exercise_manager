import React from 'react';
import './Example.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Example from './Example.js';
import Cross from './list/cross.js';
import Slow from './list/slow.js';
import Mountain from './list/mountain.js';
import Squat from './list/squat.js';
import Tap from './list/tap.js';
import Overhead from './list/overhead.js';
import Topinfo from './Topinfo.js';
import Introduce from './introduce.js';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Topinfo/>
                <Routes>
                    <Route path="/" element={<Example/>}/>
                    <Route path="/cross" element={<Cross/>}/>
                    <Route path="/slow" element={<Slow/>}/>
                    <Route path="/mountain" element={<Mountain/>}/>
                    <Route path="/squat" element={<Squat/>}/>
                    <Route path="/overhead" element={<Overhead/>}/>
                    <Route path="/tap" element={<Tap/>}/>
                    <Route path="/introduce" element={<Introduce/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
