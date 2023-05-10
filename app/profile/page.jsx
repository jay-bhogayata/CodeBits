"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    const fetchSnippet = async () => {
      const res = await fetch(`/api/user/${session?.user?.id}/snippets`);
      const data = await res.json();
      console.log(data);
      setSnippets(data);
    };
    if (session?.user?.id) {
      fetchSnippet();
    }
  }, [session?.user?.id]);

  return (
    <section className="bg-gray-900 w-full text-white min-h-screen  py-10 px-4 md:px-16 lg:px-32">
      <h1 className="text-3xl font-semibold">
        welcome
        <span className="text-4xl">
          {"  "}
          {session?.user.name}
        </span>
      </h1>
      <Profile data={snippets} />
    </section>
  );
};

export default ProfilePage;
