import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthBtn() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <button onClick={() => logout()}>Log Out</button>
  ) : (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
}
