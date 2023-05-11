"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const id = session?.user?.id;
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchSnippet = async () => {
      const res = await fetch(`/api/user/${session?.user?.id}/snippets`);
      const data = await res.json();
      setSnippets(data);
    };
    if (session?.user?.id) {
      fetchSnippet();
    }
  }, [session?.user?.id]);
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt ?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/snippet/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = snippets.filter((item) => item._id !== post._id);
        setSnippets(filteredPosts);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <section className="bg-gray-900 w-full text-white min-h-screen  py-10 px-4 md:px-16 lg:px-32">
      <h1 className="text-3xl font-semibold">
        welcome
        <span className="text-4xl">
          {"  "}
          {session?.user.name}
        </span>
      </h1>
      <Profile data={snippets} id={id} handleDelete={handleDelete} />
    </section>
  );
};

export default ProfilePage;
