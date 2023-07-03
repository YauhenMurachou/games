import { FieldFilterType, GameType } from './types';

export const sortByPopularity = (array: [string, GameType][]) => {
  const sortedArray = array.sort(
    (a, b) => (a[1].collections.popularity as number) - (b[1].collections.popularity as number)
  );
  return sortedArray;
};

export const createUrl = (fullUrl: string) => {
  const lastIndex = fullUrl.lastIndexOf('/');
  return fullUrl.slice(lastIndex + 1);
};

export const getUniqueFilter = (array: [string, GameType][], field: FieldFilterType) => {
  const uniqueKeys = new Set<string>();
  array.forEach((game) => {
    const matchField = game[1][field];
    if (field === 'provider' && typeof matchField === 'string') {
      uniqueKeys.add(matchField);
    } else if (field === 'real' && typeof matchField !== 'string') {
      for (const key in matchField) {
        uniqueKeys.add(key);
      }
    }
  });
  return Array.from(uniqueKeys);
};

export const filterByProvider = (array: [string, GameType][], provider: string) => {
  return array.filter((game) => {
    return game[1]['provider'] === provider;
  });
};
