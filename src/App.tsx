import { Suspense } from "react";
import { LangSwitcher } from "./components/LangSwitcher";
import { MainInfo } from "./components/MainInfo";
import { TotalBalance } from "./components/TotalBalance";
import { BalanceProvider } from "./context/BalanceProvider";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingSpinner from "./components/LoadingSpinner";

const App = (): JSX.Element => {
  return (
    <>
      <BalanceProvider>
        <ThemeProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full md:w-2/3 lg:w-1/3 mx-auto min-h-screen flex flex-col justify-center items-center">
              <LangSwitcher />
              <TotalBalance />
              <MainInfo />
            </div>
          </Suspense>
        </ThemeProvider>
      </BalanceProvider>
    </>
  );
};

export default App;
