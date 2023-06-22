import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const userId = useSelector((state) => state.user.user_id);
  return userId ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
