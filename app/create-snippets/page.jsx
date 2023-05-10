"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [snippet, setSnippet] = useState({
    name: "",
    desc: "",
    code: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const createSnippet = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/snippet/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          name: snippet.name,
          desc: snippet.desc,
          code: snippet.code,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
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
