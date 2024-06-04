import { ToggleThemeComponent } from "../features/ToggleThemeComponent";

export const LangSwitcher = () => {
  return (
    <>
      <div className="w-full flex justify-between">
        <ToggleThemeComponent />
        <div className="flex gap-5">
          <div className="h-10 w-10 rounded-full cursor-pointer bg-cat bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"></div>
          <div className="h-10 w-10 rounded-full cursor-pointer bg-esp bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"></div>
          <div className="h-10 w-10 rounded-full cursor-pointer bg-eng bg-cover bg-center opacity-75 hover:scale-105 hover:opacity-100 duration-200"></div>
        </div>
      </div>
    </>
  );
};
