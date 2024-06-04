import { LangSwitcher } from "./components/LangSwitcher";
import { MainInfo } from "./components/MainInfo";
import { TotalBalance } from "./components/TotalBalance";
import { BalanceProvider } from "./context/BalanceProvider";
import { ThemeProvider } from "./context/ThemeContext";

const App = (): JSX.Element => {
  return (
    <>
      <BalanceProvider>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col justify-center items-center">
            <LangSwitcher />
            <MainInfo />
            <TotalBalance />
          </div>
        </ThemeProvider>
      </BalanceProvider>
    </>
  );
};

export default App;
