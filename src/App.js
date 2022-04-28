import React from 'react';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

import {CarPage, CarsPage} from "./Pages";


const Layout = () => (
    <>
        <nav className="layout">
            <NavLink to="cars">Cars</NavLink>
        </nav>
        <Outlet/>
    </>
);

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="cars" element={<CarsPage/>}/>
                <Route path="cars/:id" element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;