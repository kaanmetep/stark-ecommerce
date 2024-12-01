import React from "react";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      <div>
        <h2 className="uppercase font-semibold text-lg tracking-wide mb-4">
          Profile
        </h2>
        <p>Welcome {currentUser?.name.toUpperCase()} !</p>
        <p
          className="mt-4 border-b inline-block cursor-pointer hover:border-transparent transition-all delay-[50ms] border-black"
          onClick={() => navigate("/orders")}
        >
          See my orders
        </p>
      </div>
    </div>
  );
};

export default Profile;
