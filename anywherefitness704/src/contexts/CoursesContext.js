import { createContext } from "react";

// const courseListData = [
//   {
//     name: "Advanced Stretches for Breathing",
//     location: "5345 4015 W, Taylorsville, UT 84129",
//     description: "Come learn to breath with the rest of the mouth breathers!",
//     cost: "$42.50",
//     instructor: "Yammy Kamkur",
//     id: 1,
//   },
//   {
//     name: "Yoga and Meditions",
//     location:
//       "60, Hero Honda Rd, Udyog Vihar Industrial Area Phase VI, Sector 37, Gurugram, Haryana 122001, India",
//     description:
//       "Contort yourself, who needs a pretzel? We'll show you how to impress your friends with your own ligaments.",
//     cost: "$65",
//     instructor: "John Bear",
//     id: 2,
//   },
//   {
//     name: "Native Leg Workouts",
//     location: "Zuni, NM 87327",
//     description:
//       "Come on down to the reservation! We know how to work every muscle in your legs.",
//     cost: "$165",
//     instructor: "Jim Bobwana",
//     id: 3,
//   },
//   {
//     name: "Cooking Keto Meals While Suspended Upside Down",
//     location: "5223 NE Sandy Blvd, Portland, OR 97213",
//     description: "A diet and fitness class with an inverted twist.",
//     cost: "$70",
//     instructor: "Sammy Salivan",
//     id: 4,
//   },
//   {
//     name: "Tribal Dance",
//     location: "332 Crescent St, Quincy, CA 95971",
//     description:
//       "Come and make your family proud! Learn to dance like never before.",
//     cost: "$45",
//     instructor: "Utma Mahna",
//     id: 5,
//   },
//   {
//     name: "Zuzi-Zumba",
//     location: "820 Lake Baldwin Ln, Orlando, FL 32803",
//     description: "Florida man learns Zumba. So can you!",
//     cost: "$65",
//     instructor: "Brock",
//     id: 6,
//   },
// ];

export const CoursesContext = createContext({ data: [] });
