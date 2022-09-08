import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';

const AllRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/perfil" element={<Perfil />} />
    </Routes>
);

export default AllRoutes;