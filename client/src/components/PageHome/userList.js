import React from "react";

const UserList = ({ profiles }) => {
  return (
    <div className="w-full space-y-4 p-4">
      {profiles.map((profile) => (
        <div
          key={profile._id}
          className="flex w-full flex-col rounded-lg bg-gray-200 p-2"
        >
          <p>Name: {profile.name}</p>
          <p className="">ID: {profile._id}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
