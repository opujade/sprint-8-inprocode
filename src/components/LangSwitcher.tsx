import { useTranslation } from "react-i18next";
import { ToggleThemeComponent } from "../features/ToggleThemeComponent";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <ToggleThemeComponent />
        <div className="flex gap-5">
          <button
            onClick={() => changeLanguage("cat")}
            className="h-10 w-10 rounded-full cursor-pointer bg-cat bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"
          ></button>
          <button
            onClick={() => changeLanguage("es")}
            className="h-10 w-10 rounded-full cursor-pointer bg-esp bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"
          ></button>
          <button
            onClick={() => changeLanguage("eng")}
            className="h-10 w-10 rounded-full cursor-pointer bg-eng bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"
          ></button>
        </div>
      </div>
    </>
  );
};
