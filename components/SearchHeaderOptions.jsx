import React from "react";
import SearchHOption from "./SearchHOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-gray-700 text-sm lg:pl-52 lg:justify-start border-b ">
      <SearchHOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}

export default SearchHeaderOptions;
