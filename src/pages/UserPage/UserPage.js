import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
//import { ClientInfo } from "../../components/UserProfile/ClientInfo";


const UserPage = () => {
  return (
    <div className="userPageContainer">
      <UserProfile />
      {/* <ClientInfo username={"test username"} email={"test@mail.com"}/> */}
    </div>
  );
};

export default UserPage;
