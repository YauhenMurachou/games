import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { gamesFiltered } from '../../redux/gameSlice';
import { useEffect, useState } from 'react';
import GameTitle from '../../components/GameTitle/GameTitle';

import styles from './style.module.css';
import React from 'react';

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

  useEffect(() => {
    if (provider) {
      dispatch(gamesFiltered({ value: provider, field: 'provider' }));
    } else if (currencyLocal) {
      dispatch(gamesFiltered({ value: currencyLocal, field: 'real' }));
    }
  }, [provider, currencyLocal]);

  const loadMore = () => setLastIndex((prevState) => prevState + 12);

  const handleProvider = (e: SelectChangeEvent) => {
    setProvider(e.target.value as string);
    if (currencyLocal) {
      setCurrencyLocal('');
    }
  };

  const handleCurrency = (e: SelectChangeEvent) => {
    setCurrencyLocal(e.target.value as string);
    if (provider) {
      setProvider('');
    }
  };

  return (
    <>
      <div className={styles.filters}>
        <FormControl fullWidth>
          <InputLabel id="provider">Провайдер</InputLabel>
          <Select
            value={provider}
            labelId="provider"
            label="Провайдер"
            onChange={(e: SelectChangeEvent) => handleProvider(e)}
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
            onChange={(e: SelectChangeEvent) => handleCurrency(e)}
          >
            {currency.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <ul className={styles.list}>
        {allGames.slice(0, lastIndex).map((game) => (
          <React.Fragment key={game[0]}>
            <GameTitle game={game} />
          </React.Fragment>
        ))}
      </ul>
      <Button onClick={loadMore} variant="contained" disabled={allGames.length - 1 === lastIndex}>
        Показать ещё
      </Button>
    </>
  );
};

export default Main;
