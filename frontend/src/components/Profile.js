import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <div>
      <h2>Your name is: {user.name}, and you are logged in. woho</h2>
    </div>
  ) : (
    <div>
      <h2>You are NOT logged in. buuu</h2>
    </div>
  );
}
