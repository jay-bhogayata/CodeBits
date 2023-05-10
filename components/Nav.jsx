"use client";

import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Nav = () => {
  const router = useRouter();

  // get session from next-auth
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getProviderList = async () => {
      const resp = await getProviders();
      setProviders(resp);
    };
    getProviderList();
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="px-4 md:px-16 lg:px-32">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex items-center ">
            <a href="/" className="flex-shrink-0 ">
              <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-semibold  font-mono text-transparent">
                {" "}
                CodeBits
              </h1>
            </a>
            {/* search block */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search snippets
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search snippets"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="btn ">
            {session?.user ? (
              <div className="flex">
                <button
                  className="text-white text-xl font-normal mr-5 rounded-md 
                py-1 px-8 bg-red-600  hidden md:block"
                  onClick={() => {
                    signOut();
                  }}
                >
                  logout
                </button>
                <Image
                  src={session?.user?.image}
                  height={30}
                  width={30}
                  alt="user-img"
                  onClick={() => router.push("/profile")}
                  className="cursor-pointer hidden md:block"
                />
              </div>
            ) : (
              <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-8 hidden md:block   py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-lg"
                onClick={() => signIn()}
              >
                Login
              </button>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className={isOpen ? "md:hidden" : "hidden"}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search snippets
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search snippets"
                required
              />
            </div>
          </form>
          {session?.user ? (
            <div>
              <div className="my-2">
                <Link
                  href={"/profile"}
                  className="flex text-white hover:text-gray-300 font-medium space-x-4 items-center"
                >
                  <Image
                    src={session?.user?.image}
                    width={30}
                    height={30}
                    alt="user-profile"
                    onClick={() => router.push("/profile")}
                  />
                  <p>{session?.user?.name}</p>
                </Link>
              </div>
              <button
                className="bg-red-600 focus:outline-none text-white  hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  w-full    py-1  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-lg"
                onClick={() => signOut()}
              >
                logout
              </button>
            </div>
          ) : (
            <button
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  w-full    py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-lg"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
