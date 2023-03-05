import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCryptoName } from "../../redux/coinData";
import { updateDataDuration, updateDays } from "../../redux/daysData";
import { updateActiveButton } from "../../redux/misc";

function SearchBar() {
  const [searchBar, setSearchBar] = useState();
  const { coins } = useSelector((state) => state.coins);
  const coinName = coins.map((coin) => coin.id);
  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    setSearchBar(e.target.value.toLowerCase());
  };
  const handleSearch = () => {
    const searchedCoins = coinName.filter((item) => item.includes(searchBar));
    if (searchedCoins[0] !== undefined) {
      dispatch(
        updateCryptoName(coinName.filter((item) => item.includes(searchBar))[0])
      );
      dispatch(updateDays(1));
      dispatch(updateDataDuration("hourly"));
      dispatch(updateActiveButton("1D"));
    }
  };
  return (
    // <input
    //   type="text"
    //   className="w-full h-full rounded-md shadow-md px-4"
    //   placeholder="Search your favourite cryptocurrency here!"
    // />
    <div class="flex justify-center bg-white">
      <div class="w-full">
        <div class="relative flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search for your Crypto currency"
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={(e) => handleValueChange(e)}
          />
          <button
            class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
