import { useState } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Game from './pages/Game/Game';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Валюта</h2>
      <h3>Провайдер</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <Main />
      <Game />
    </>
  );
};

export default App;
