import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {EpisodePage, EpisodesPage, MainLayout} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Navigate to="episodes"/>}/>
                <Route path="episodes">
                    <Route index element={<EpisodesPage/>}/>
                    <Route path=":id" element={<EpisodePage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;