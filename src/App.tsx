import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from '@/components/pages/WelcomePage';
import { StatsPage } from '@/components/pages/StatsPage';
import { FilmsLayout } from '@/components/layout/FilmsLayout';
import { WatchListPage } from '@/components/pages/WatchListPage';


function App() {

  return (
    <Routes>
      <Route path="" element={<WelcomePage />} />
      <Route path='/films' element={<FilmsLayout />}>
        <Route index element={<WatchListPage />} />
        <Route path='stats' element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
