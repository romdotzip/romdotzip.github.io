import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import NoPage from '../pages/NoPage';
import Bomberman from '../pages/Bomberman';
import DndSearch from '../pages/DndSearch';
import AboutMe from '../pages/AboutMe';
import Videos from '../pages/Videos';
import { HashRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/rm0819-website/" element={<HomePage />} />
            <Route path="/rm0819-website/home" element={<HomePage />} />
            <Route path="/rm0819-website/dndsearch" element={<DndSearch />} />
            <Route path="/rm0819-website/bomberman" element={<Bomberman />} />
            <Route path="/rm0819-website/about" element={<AboutMe />} />
            <Route path="/rm0819-website/videos" element={<Videos />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </HashRouter>
    )
};

export default Router;