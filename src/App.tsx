import { LangSwitcher } from "./components/LangSwitcher";
import { MainInfo } from "./components/MainInfo";
import { TotalBalance } from "./components/TotalBalance";
import { BalanceProvider } from "./context/BalanceProvider";

const App = (): JSX.Element => {
  return (
    <>
      <BalanceProvider>
        <div className="min-h-screen flex justify-center items-center">
          <LangSwitcher />
          <MainInfo />
          <TotalBalance />
        </div>
      </BalanceProvider>
    </>
  );
};

export default App;
