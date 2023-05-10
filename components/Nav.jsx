"use client";

import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getProviderList = async () => {
      const resp = await getProviders();
      setProviders(resp);
    };
    getProviderList();
  }, []);

  return (
    <section>
      <h1>{session?.user?.name || "Hello"}</h1>
      {providers &&
        Object.values(providers).map((p) => (
          <button type="button" key={p.name} onClick={() => signIn()}>
            SignIn with {p.name}
          </button>
        ))}
      <br />
      <button onClick={() => signOut()}>logout</button>
    </section>
  );
};

export default Nav;
