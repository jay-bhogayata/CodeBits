"use client";

import Link from "next/link";

const Form = ({ type, snippet, setSnippet, submitting, handleSubmit }) => {
  return (
    <section className="w-full flex flex-col items-center ">
      <h1 className="my-5 text-4xl font-semibold text-green-600">
        <span>{type} snippet</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" text-black space-y-4 flex flex-col w-full px-10 lg:w-1/3 "
      >
        <input
          value={snippet.desc}
          onChange={(e) => setSnippet({ ...snippet, desc: e.target.value })}
          type="text"
          placeholder="snippet description"
          className="p-2 rounded-lg border bg-gray-800 text-gray-200"
        />
        <input
          value={snippet.name}
          onChange={(e) => setSnippet({ ...snippet, name: e.target.value })}
          type="text"
          placeholder="Filename including extension"
          className="p-2 rounded-lg border bg-gray-800 text-gray-200"
        />
        <textarea
          value={snippet.code}
          onChange={(e) => {
            setSnippet({ ...snippet, code: e.target.value });
          }}
          className="bg-gray-800 border text-gray-200 rounded-lg p-2"
          placeholder="write your code here"
          rows="10"
        ></textarea>
        <div className="flex flex-wrap justify-between">
          <Link
            href="/"
            className="text-white text-xl font-normal rounded-md py-1 px-4 bg-red-600"
          >
            cancel
          </Link>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  px-8   py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-lg"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
