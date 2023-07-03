import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import Main from './pages/Main/Main';
import Game from './pages/Game/Game';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games/:id" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
