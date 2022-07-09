import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { User } from "../components/User";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className=" flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt="google-logo"
          width={120}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 cursor-pointer text-gray-500 sm:mr-3"
          />
          <svg
            className="h-6 cursor-pointer hidden sm:inline-flex pl-4 border-l-2 border-gray-300 mr-3"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
          <SearchIcon className="h-6 cursor-pointer hidden sm:inline-flex text-blue-500" />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
