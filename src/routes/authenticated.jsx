import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../api/agent";
import React from "react";

const RouteAuthenticated = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);

  const userExists = async () => {
    try {
      const userExists = await Axios("/api/user/exists");
      if (!userExists) {
        return setIsLogged(false);
      }
    } catch (err) {
      return setIsLogged(false);
    }
  };

  useEffect(() => {
    userExists();
  }, []);

  return !isLogged ? <Navigate to="/login" /> : children;
};

export default RouteAuthenticated;
