import { User, USER_ROLES } from "../../src/model/User";

export const normalUserMock = new User(
    "abc123Normal", "name", "email@email.com", "password", USER_ROLES.NORMAL);

export const adminUserMock = new User(
    "abc123Admin", "name", "admin@email.com", "password", USER_ROLES.ADMIN);