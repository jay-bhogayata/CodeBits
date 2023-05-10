"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
    console.log(snippet);
    setSubmitting(false);
  };

  return (
    <div className=" text-white bg-gray-900 h-screen ">
      {session?.user ? (
        <Form
          type={"create"}
          snippet={snippet}
          setSnippet={setSnippet}
          handleSubmit={createSnippet}
        />
      ) : (
        router.push("/")
      )}
    </div>
  );
}

export default page;
