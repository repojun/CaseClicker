import { createContext, useContext } from "react";
import userStore from "./user";

const store = {userStore: new userStore()};

const contextStore = createContext(store);

const useContextStore = () => useContext(contextStore);

export default useContextStore