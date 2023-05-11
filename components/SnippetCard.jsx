import Image from "next/image";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SnippetCard = ({ data, id, handleDelete }) => {
  const handleCopy = (data) => {
    navigator.clipboard.writeText(data);
  };
  return (
    <section className="bg-gray-900 flex flex-col">
      <div key={data.name} className="w-full my-5 border-2 p-5 rounded-lg">
        <div className="flex space-x-10 mx-2 my-5 items-center justify-between">
          <div className="flex space-x-5 justify-center items-center ">
            <Image
              src={data?.author?.image}
              width={30}
              height={30}
              alt="user-img"
            />
            <p className="text-white text-xl">{data.name}</p>
          </div>
          <div className="flex  space-x-5 ">
            {data.author._id === id && (
              <img
                src="/del.svg"
                width={30}
                height={30}
                alt="del-icon"
                className="cursor-pointer"
                onClick={handleDelete}
              />
            )}
            <img
              src="/copy.svg"
              alt=""
              onClick={() => handleCopy(data.code)}
              className="cursor-pointer border rounded-lg p-2"
            />
          </div>
        </div>
        <SyntaxHighlighter
          language="auto"
          style={atomOneDark}
          showLineNumbers={true}
          className="rounded-lg"
        >
          {data.code}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default SnippetCard;
