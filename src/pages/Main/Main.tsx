import { useDispatch, useSelector } from 'react-redux';
// import styles from './style.module.css';
import { RootState } from '../../redux/store';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { gameOpened, gamesFiltered } from '../../redux/gameSlice';
import { NavLink } from 'react-router-dom';
import { createUrl } from '../../utils';
import { useEffect, useState } from 'react';

const Main = () => {
  const [provider, setProvider] = useState<string>('');
  const [currencyLocal, setCurrencyLocal] = useState<string>('');
  const [lastIndex, setLastIndex] = useState(12);
  const { providers, currency, allGames } = useSelector((state: RootState) => ({
    providers: state.games.providers,
    currency: state.games.currency,
    allGames: state.games.allGames,
  }));
  const dispatch = useDispatch();
	
  const loadMore = () => setLastIndex((prevState) => prevState + 12);

  const openGame = (title: string) => {
    dispatch(gameOpened(title));
  };

  useEffect(() => {
    if (provider) {
      dispatch(gamesFiltered({ value: provider }));
    }
  }, [provider]);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="provider">Провайдер</InputLabel>
        <Select
          value={provider}
          labelId="provider"
          label="Провайдер"
          onChange={(e: SelectChangeEvent) => setProvider(e.target.value as string)}
        >
          {providers.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="currency">Валюта</InputLabel>
        <Select
          value={currencyLocal}
          labelId="currency"
          label="Валюта"
          onChange={(e: SelectChangeEvent) => setCurrencyLocal(e.target.value as string)}
        >
          {currency.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <ul>
        {allGames.slice(0, lastIndex).map((game) => (
          <li key={game[0]}>
            <NavLink onClick={() => openGame(game[1].title)} to={`/games/${createUrl(game[0])}`}>
              <img src={`https://cdn2.softswiss.net/i/s2/${game[0]}.png`} alt={game[1].title} />
              {game[1].title}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <Button onClick={() => loadMore(showedGames.length - 1)}>Показать ещё</Button> */}
      <Button onClick={loadMore}>Показать ещё</Button>
    </>
  );
};

export default Main;
