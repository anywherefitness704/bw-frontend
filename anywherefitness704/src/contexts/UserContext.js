import { createContext } from "react";

const dummyAuthData = {
  username: "",
  userType: "",
};
export const UserContext = createContext(dummyAuthData);
