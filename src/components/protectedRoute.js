import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

const protecttedRoute =
  (Comp, route = "/profile") =>
  props => {
    async function checkAuthState() {
      try {
        await Auth.currentAuthenticatedUser();
      } catch (error) {
        props.history.push(route);
      }
    }
    useEffect(() => {
      checkAuthState();
    }, []);
    return <Comp {...props} />;
  };
export default protecttedRoute;