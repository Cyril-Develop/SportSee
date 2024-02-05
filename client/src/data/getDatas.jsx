import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./mocks";
import UserInfos from "../models/userInfos";

export const getUserInfos = async (userId, env) => {
    let user;

    try {
        if (env === "development") {
            user = USER_MAIN_DATA.find(user => user.id === userId);
        } else if (env === "production") {
            const response = await fetch(`http://localhost:3000/user/${userId}`)
            const data = await response.json();
            user = data.data;
        }
    } catch (error) {
        console.error(error);
    }
    const userInfo = new UserInfos(user);
    return userInfo;
};