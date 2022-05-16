import { useEffect, useState } from 'react';

import AppWrapper from './components/AppWrapper';
import { getCurrentUser } from './redux';
import { useAppDispatch, useAppSelector } from './redux/store';

function App() {
  const tokens = useAppSelector((state) => state.auth._id);
  const [isDashboardPage, setIsDashBoardPage] = useState<boolean>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!isDashboardPage && tokens) {
        try {
          await dispatch(getCurrentUser());
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [tokens, dispatch, isDashboardPage]);

  return (
    <>
      <AppWrapper />
    </>
  );
}

export default App;
