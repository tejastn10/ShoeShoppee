import { hashSync } from "bcryptjs";

export const users = [
  {
    name: "Main Admin",
    email: "admin@admin.com",
    password: hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Side Admin",
    email: "side@admin.com",
    password: hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Micheal Scott",
    email: "mscott28@gmail.com",
    password: hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ollie Bashirian",
    email: "ollbash4@yahoo.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Leola Carter",
    email: "leocarter3@gmail.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Haley Lehner",
    email: "haley_lehner@hotmail.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Calista Cummings",
    email: "calista71@yahoo.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
];
