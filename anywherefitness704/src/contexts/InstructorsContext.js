import { createContext } from "react";

const instructorListData = [
  {
    name: "Yammy Kamkur",
    location: "5345 4015 W, Taylorsville, UT 84129",
    id: 1,
  },
  {
    name: "John Bear",
    location:
      "60, Hero Honda Rd, Udyog Vihar Industrial Area Phase VI, Sector 37, Gurugram, Haryana 122001, India",
    id: 2,
  },
  {
    name: "Jim Bobwana",
    location: "Zuni, NM 87327",
    id: 3,
  },
  {
    name: "Sammy Salivan",
    location: "5223 NE Sandy Blvd, Portland, OR 97213",
    id: 4,
  },
  {
    name: "Utma Mahna",
    location: "332 Crescent St, Quincy, CA 95971",
    id: 5,
  },
  {
    name: "Brock",
    location: "820 Lake Baldwin Ln, Orlando, FL 32803",
    id: 6,
  },
];

export const InstructorsContext = createContext(instructorListData);
