import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

import UserForm from "../components/PageHome/userForm";
import UserList from "../components/PageHome/userList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <section className="mx-12 flex min-h-screen w-[1250px] flex-col items-center justify-start bg-blue-300 pt-16">
      <h2 className="mb-6 w-full text-center text-6xl font-bold text-white">
        Home Page
      </h2>
      <UserForm />
      {loading ? <p>loading...</p> : <UserList profiles={profiles} />}
    </section>
  );
};

export default Home;
