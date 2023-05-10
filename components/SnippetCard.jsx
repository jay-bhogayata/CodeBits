import Image from "next/image";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SnippetCard = ({ data }) => {
  const handleCopy = (data) => {
    navigator.clipboard.writeText(data);
  };
  return (
    <section className="bg-gray-900 flex flex-col">
      {data.map((s) => (
        <div key={s.name} className="w-full my-5 border-2 p-5 rounded-lg">
          <div className="flex space-x-10 mx-2 my-5 items-center justify-between">
            <div className="flex space-x-5 justify-center items-center ">
              <Image
                src={s?.author?.image}
                width={30}
                height={30}
                alt="user-img"
              />
              <p className="text-white text-xl">{s.name}</p>
            </div>
            <img
              src="/copy.svg"
              alt=""
              onClick={() => handleCopy(s.code)}
              className="cursor-pointer border rounded-lg p-2"
            />
          </div>
          <SyntaxHighlighter
            language="auto"
            style={atomOneDark}
            showLineNumbers={true}
            className="rounded-lg"
          >
            {s.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </section>
  );
};

export default SnippetCard;
