"use client";

import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const UpdateSnippet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const snippetId = searchParams.get("id");
  const [submitting, setSubmitting] = useState(false);
  const [snippet, setSnippet] = useState({
    name: "",
    desc: "",
    code: "",
  });

  useEffect(() => {
    const getSnippetDetails = async () => {
      const response = await fetch(`/api/snippet/${snippetId}`);
      const data = await response.json();
      console.log(`data from update snippet,${data}`);

      setSnippet({
        name: data.name,
        desc: data.description,
        code: data.code,
      });
    };
    if (snippetId) {
      getSnippetDetails();
    }
  }, [snippetId]);

  const updateSnippet = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!snippetId) {
      return alert("Snippet id not found");
    }
    try {
      const response = await fetch(`/api/snippet/${snippetId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: snippet.name,
          desc: snippet.desc,
          code: snippet.code,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 h-screen">
      <Form
        type={"edit"}
        snippet={snippet}
        setSnippet={setSnippet}
        submitting={submitting}
        handleSubmit={updateSnippet}
      />
    </section>
  );
};

export default UpdateSnippet;
