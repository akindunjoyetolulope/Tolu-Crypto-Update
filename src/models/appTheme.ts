export interface AppThemeConfig {
  colors: {
    prime: string;
    lightGrey: string;
    dark: string;
    white: string;
    red: string;
    grey: string;
    yellow: string;
    transparent: string;
    blue: string;
    green: string;
    black: string;
  };
  backgroundColors: {
    greyscale: string;
    lightGrey: string;
    lightGreen: string;
    lightRed: string;
    lighterGreen: string;
    lightyellow: string;
  };
  shadows: {
    dark: string;
  };
}
export interface Data {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  alt: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: any;
  market_cap: number;
  market_cap_rank: number;
  description: {
    en: string;
  };
  rice_change_percentage_24h: number;
}
