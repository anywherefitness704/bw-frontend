import { createContext } from "react";

const dummyAuthData = {
  username: "Johnny",
  userType: "instructors",
};
export const UserContext = createContext(dummyAuthData);
