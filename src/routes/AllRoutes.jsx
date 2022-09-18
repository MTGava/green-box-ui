import { Routes, Route } from 'react-router-dom';
import Ranking from '../pages/Ranking';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import TrocaPontos from '../pages/TrocaPontos';

const AllRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/ranking" element={<Ranking />} />
        <Route exact path="/troca-de-pontos" element={<TrocaPontos />} />
    </Routes>
);

export default AllRoutes;