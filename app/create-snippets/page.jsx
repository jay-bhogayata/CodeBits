"use client";
import Form from "@components/Form";
import { useState } from "react";

function page() {
  const [snippet, setSnippet] = useState({
    name: "",
    desc: "",
    code: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const createSnippet = async (e) => {
    e.preventDefault();
    console.log(snippet);
    setSubmitting(false);
  };

  return (
    <div className=" text-white bg-gray-900 h-screen ">
      <Form
        type={"create"}
        snippet={snippet}
        setSnippet={setSnippet}
        handleSubmit={createSnippet}
      />
    </div>
  );
}

export default page;
