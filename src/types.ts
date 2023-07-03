export type FieldFilterType = 'provider' | 'real';

export type GameType = {
  title: string;
  provider: string;
  collections: {
    novelty?: number;
    popularity?: number;
    slots?: number;
    all?: number;
    _hd?: number;
    lottery?: number;
    bonusbuy?: number;
    tablegames?: number;
    new?: number;
    btcgames?: number;
    ltcgames?: number;
    dogegames?: number;
    xrpgames?: number;
    roulette?: number;
    respin?: number;
    ethgames?: number;
    nudge?: number;
    jackpot?: number;
    usdtgames?: number;
    cryptogames?: number;
    accumulating?: number;
    books?: number;
    craps?: number;
    dice?: number;
    megaways?: number;
    online?: number;
    'free-slots'?: number;
    'viking-slots'?: number;
    'best-online-slots'?: number;
    'cluster-pays'?: number;
    'double-symbols'?: number;
    'moving-wilds'?: number;
    'sweet-bonanza-slots'?: number;
    'collapsing-reels'?: number;
    'mega-symbols'?: number;
    'win-both-ways'?: number;
    'bonus-wheel'?: number;
    'guaranteed-wins'?: number;
    'mystery-symbols'?: number;
    'buffalo-slots'?: number;
    'increasing-multiplier'?: number;
    'instant-win'?: number;
    'low-volatility'?: number;
    'pick-bonus'?: number;
    'high-volatility'?: number;
    'vegas-slots'?: number;
    'christmas-slots'?: number;
    'sticky-wilds'?: number;
    'multi-level-bonus'?: number;
    'gamble-feature'?: number;
    'hold-and-win'?: number;
    'free-spins'?: number;
    'leprechaun-slots'?: number;
    'expanding-wilds'?: number;
    'classic-slots'?: number;
    'lucky-ladys-charm'?: number;
    'bonus-bet'?: number;
    retrigger?: number;
    'stacked-symbols'?: number;
    'multiplier-wild'?: number;
    'scatter-pays'?: number;
    'turbo-spin'?: number;
    'fruit-slots'?: number;
    'random-multiplier'?: number;
  };
  real: {
    DOG?: {
      id: number;
    };
    LTC?: {
      id: number;
    };
    USDT?: {
      id: number;
    };
    BTC?: {
      id: number;
    };
    XRP?: {
      id: number;
    };
    ETH?: {
      id: number;
    };
  };
  demo: string;
};

export type GamesInitialType = { [key: string]: GameType };
