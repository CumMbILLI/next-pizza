import { hashSync } from "bcrypt";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export const USERS = [
  {
    fullName: "Ivan Ivanon",
    email: "invan.ivanov@gmail.com",
    password: hashSync("123456", 10),
    verified: new Date(),
    role: UserRole.USER,
  },
  {
    fullName: "Admin Ivanov",
    email: "admin.ivanov@gmail.com",
    password: hashSync("1111", 10),
    verified: new Date(),
    role: UserRole.ADMIN,
  },
];
