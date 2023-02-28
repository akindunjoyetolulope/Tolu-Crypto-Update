import React, { createContext, useContext, useEffect, useState } from "react";

type CurrencyContextProps = {
  children: React.ReactNode;
};

const defaultValue = {
  currency: "NGN",
  symbol: "₦",
  handleCurrency: (x: string) => {},
};

export const Crypto = createContext(defaultValue);

const CryptoContext = ({ children }: CurrencyContextProps) => {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");

  useEffect(() => {
    if (currency === "NGN") setSymbol("₦");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  const handleCurrency = (x: string) => {
    setCurrency(x);
  };

  return (
    <Crypto.Provider value={{ currency, handleCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
