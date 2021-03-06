import { Routes, Route, Navigate } from 'react-router-dom';
import List from '../containers/List';
import Detail from '../containers/Detail';
import Profile from '../containers/Profile';

const BundledRoute = () => (
  <Routes>
    <Route path='/' element={<List />} />
    <Route path='/detail/:name' element={<Detail />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='*' element={<Navigate to="/" replace />} />
  </Routes>
);

export default BundledRoute;
