import { useBalanceContext } from "../context/BalanceProvider";

export const TotalBalance = () => {
  const { balance } = useBalanceContext();
  return (
    <div className="flex justify-between py-4 px-5 bg-primary w-full rounded-2xl text-white my-5">
      <div>
        <p className="text-sm my-1">Total Balance</p>
        <p className="font-semibold text-xl my-1">{balance}€</p>
      </div>
      <div className="flex justify-center items-center gap-2 text-white">
        <div className="p-2 cursor-pointer hover:scale-125 hover:bg-white hover:bg-opacity-10 rounded-full duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
          >
            <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
          </svg>
        </div>
        <div className="p-2 cursor-pointer hover:scale-125 hover:bg-white hover:bg-opacity-10 rounded-full duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
          >
            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
