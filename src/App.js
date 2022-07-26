import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Main from './Components/Main';
import Look from './Components/look';
import Recode from './Components/recode';
import About from './Components/about';
import Cross from './Components/pages/cross';
import Crunchy from './Components/pages/crunchy';
import Mountain from './Components/pages/mountain';
import Slow from './Components/pages/slow';
import Squat from './Components/pages/squat';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/look" element={<Look/>}/>
                    <Route path="/recode" element={<Recode/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/look/cross" element={<Cross/>}/>
                    <Route path="/look/crunchy" element={<Crunchy/>}/>
                    <Route path="/look/mountain" element={<Mountain/>}/>
                    <Route path="/look/slow" element={<Slow/>}/>
                    <Route path="/look/squat" element={<Squat/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
