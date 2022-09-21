import { Routes, Route, Navigate } from 'react-router-dom';
import Ranking from '../pages/Ranking';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import TrocaPontos from '../pages/TrocaPontos';
import NotFound from '../pages/NotFound';


const AllRoutes = () => (

        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/perfil" element={<Perfil />} />
            <Route exact path="/ranking" element={<Ranking />} />
            <Route exact path="/troca-de-pontos" element={<TrocaPontos />} />
            <Route exact path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>

);

export default AllRoutes;