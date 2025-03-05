import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import NoPage from '../pages/NoPage';
import Bomberman from '../pages/Bomberman';
import DndSearch from '../pages/DndSearch';
import Videos from '../pages/Videos';
import Me from '../pages/Me';
import Accessibility from '../pages/Accessibility';
import { HashRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dndsearch" element={<DndSearch />} />
            <Route path="/bomberman" element={<Bomberman />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/me" element={<Me />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </HashRouter>
    )
};

export default Router;