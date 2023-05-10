import Image from "next/image";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SnippetCard = () => {
  const [snippet, setSnippet] = useState([]);

  useEffect(() => {
    const fetchSnippet = async () => {
      const response = await fetch("/api/snippet", {});
      const data = await response.json();
      setSnippet(data);
    };
    fetchSnippet();
  }, []);

  return (
    <section className="bg-gray-900 flex flex-col items-center ">
      {snippet.map((s) => (
        <div key={s.name} className="w-full my-5 px-10 lg:w-1/2">
          <div className="flex space-x-10 my-5 items-center">
            <Image
              src={s?.author?.image}
              width={30}
              height={30}
              alt="user-img"
            />
            <p className="text-white text-xl">{s.name}</p>
          </div>
          <SyntaxHighlighter
            language="auto"
            style={atomOneDark}
            showLineNumbers={true}
            className=""
          >
            {s.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </section>
  );
};

export default SnippetCard;
