import React, { useEffect } from 'react';
import PublicRoutes from './routes/PublicRoute/PublicRoutes';
import { useDispatch } from 'react-redux';
import { fetchMenuData } from './redux/reducers/commonReducer.slice';

const App = () => {
  const dispatch = useDispatch();

useEffect(() => {
  (async () => {
    try {
      const getmenulist = await dispatch(fetchMenuData());
      // console.log('getmenulist', getmenulist.payload);
    } catch (error) {
      console.log(error);
    }
  })();
}, [dispatch]);

  return (
    <div>
      <PublicRoutes />
    </div>
  );
};

export default App;
