import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../api/agent";
import React from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../context";
import { useNavigate } from "react-router-dom";

const RouteAuthenticated = ({ children }) => {
  const {userStore: {setUser}} = useContextStore();
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();
  const userExists = async () => {
    try {
      const userExists = await Axios("/api/user/exists");
 
      if (!userExists) {
        return navigate("/login");
      }
      setUser(userExists);
    } catch (err) {
   
      return navigate("/login");
    }
  };

  useEffect(() => {
    userExists();
  }, []);

  return children;
};

export default observer(RouteAuthenticated);
