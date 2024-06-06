import { useTranslation } from "react-i18next";

const LoadingSpinner = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        <span className="text-primary text-lg font-semibold">
          {t("loading")}...
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
