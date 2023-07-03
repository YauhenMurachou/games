import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { gameOpened } from '../../redux/gameSlice';
import { NavLink } from 'react-router-dom';
import { createUrl } from '../../utils';

import styles from './style.module.css';
import { GameType } from '../../types';

type Props = {
  game: [string, GameType];
};

const GameTitle: FC<Props> = ({ game }) => {
  const dispatch = useDispatch();

  const openGame = (title: string) => {
    dispatch(gameOpened(title));
  };

  return (
    <>
      <li key={game[0]}>
        <NavLink onClick={() => openGame(game[1].title)} to={`/games/${createUrl(game[0])}`}>
          <img
            src={`https://cdn2.softswiss.net/i/s2/${game[0]}.png`}
            alt={game[1].title}
            className={styles.image}
          />
          {game[1].title}
        </NavLink>
      </li>
    </>
  );
};

export default GameTitle;
