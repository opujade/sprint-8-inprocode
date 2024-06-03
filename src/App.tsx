import { LangSwitcher } from "./components/LangSwitcher";
import { MainInfo } from "./components/MainInfo";
import { TotalBalance } from "./components/TotalBalance";
import { BalanceProvider } from "./context/BalanceProvider";

const App = (): JSX.Element => {
	return (
		<>
			<BalanceProvider>
				<LangSwitcher />
				<MainInfo />
				<TotalBalance />
			</BalanceProvider>
		</>
	);
};

export default App;
