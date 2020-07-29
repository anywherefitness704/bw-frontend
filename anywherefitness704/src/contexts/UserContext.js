import { createContext } from "react";

const dummyAuthData = {
  username: "",
  userType: "",
  setUserType: function (type) {
    this.userType = type;
  },
};
export const UserContext = createContext(dummyAuthData);
