import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

import UserList from "../components/PageHome/userList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  console.log({ loading, data });

  return (
    <section className="mx-12 flex min-h-screen w-[1250px] flex-col items-center justify-start bg-blue-300 pt-16">
      <h2 className="mb-6 w-full text-center text-6xl font-bold text-white">
        Home Page
      </h2>
      <UserList profiles={profiles} />
    </section>
  );
};

export default Home;
