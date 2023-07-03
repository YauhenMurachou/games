import { useSelector } from 'react-redux';
import styles from './style.module.css';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Game = () => {
  const openedGameTitle = useSelector((state: RootState) => state.games.openedGameTitle);
  const allGames = useSelector((state: RootState) => state.games.allGames);
  const id = useParams<{ id: string }>().id;
  const gameFromUrl = allGames.find((game) => game[0].includes(id as string))?.[1].title;

  return (
    <>
      <NavLink to="/">
        <Button variant="contained">Назад к списку игр</Button>
      </NavLink>
      <h2 className={styles.wrapper}>{openedGameTitle ?? gameFromUrl}</h2>
    </>
  );
};

export default Game;
