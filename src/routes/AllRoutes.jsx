import { Routes, Route } from 'react-router-dom';
import Ranking from '../pages/Ranking';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';

const AllRoutes = () => (
    <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/ranking" element={<Ranking />} />
    </Routes>
);

export default AllRoutes;