import { createContext } from "react";

const locationListData = [
  {
    location: "5345 4015 W, Taylorsville, UT 84129",
    id: 1,
  },
  {
    location:
      "60, Hero Honda Rd, Udyog Vihar Industrial Area Phase VI, Sector 37, Gurugram, Haryana 122001, India",
    id: 2,
  },
  {
    location: "Zuni, NM 87327",
    id: 3,
  },
  {
    location: "5223 NE Sandy Blvd, Portland, OR 97213",
    id: 4,
  },
  {
    location: "332 Crescent St, Quincy, CA 95971",
    id: 5,
  },
  {
    location: "820 Lake Baldwin Ln, Orlando, FL 32803",
    id: 6,
  },
];

export const LocationsContext = createContext(locationListData);
