import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { QUERY_PROFILES } from "../../utils/queries";
import { ADD_PROFILE } from "../../utils/mutations";

const UserForm = () => {
  const [name, setName] = useState("");

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    update(cache, { data: { addProfile } }) {
      try {
        const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

        cache.writeQuery({
          query: QUERY_PROFILES,
          data: { profiles: [...profiles, addProfile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addProfile({
        variables: { name },
      });

      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-red-300 p-2">
      <p className="text-xl font-bold text-white">Add User</p>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleFormSubmit}
      >
        <input
          className="mb-2 text-center"
          value={name}
          placeholder="Add user name..."
          onChange={(event) => setName(event.target.value)}
        />
        <button
          type="submit"
          className="h-min w-min bg-green-300 p-2 text-2xl font-bold"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default UserForm;
