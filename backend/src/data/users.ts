import { hashSync } from "bcryptjs";

export const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Cool Boi",
    email: "cb@email.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Bad Boi",
    email: "bb@email.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Mean Girl",
    email: "mg@email.com",
    password: hashSync("123456", 10),
    isAdmin: false,
  },
];
