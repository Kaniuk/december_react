import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {EpisodesPage, MainLayout} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;