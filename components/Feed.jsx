"use client";

import SnippetCard from "./SnippetCard";
import { useState, useEffect } from "react";

const Feed = () => {
  const [snippet, setSnippet] = useState([]);

  useEffect(() => {
    const fetchSnippet = async () => {
      const response = await fetch("/api/snippet");
      const data = await response.json();

      setSnippet(data);
    };
    fetchSnippet();
  }, []);

  return (
    <div className="lg:px-44 px-10">
      {snippet.map((d) => (
        <SnippetCard key={d._id} data={d} />
      ))}
    </div>
  );
};

export default Feed;
