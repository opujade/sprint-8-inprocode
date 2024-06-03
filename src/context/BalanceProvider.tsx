import React, { createContext } from "react";
import { calculateBalance } from "../utils/calculateBalance";

type BalanceProviderProps = {
	children: React.ReactNode;
};

export const BalanceContext = createContext(0);

export const BalanceProvider = ({ children }: BalanceProviderProps) => {
	const balance = calculateBalance();

	return (
		<BalanceContext.Provider value={balance}>
			{children}
		</BalanceContext.Provider>
	);
};
