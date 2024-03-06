import UserActivity from "../models/userActivity";
import UserSessions from "../models/userAvgSessions";
import UserInfos from "../models/userInfos";
import UserPerformance from "../models/userPerformance";
import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE,
} from "./mocks";

export const getUserInfos = async (userId, env) => {
    let user;

    try {
        if (env === "development") {
            user = USER_MAIN_DATA.find((user) => user.id === userId);
        } else if (env === "production") {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const data = await response.json();
            user = data.data;
        }
    } catch (error) {
        console.error(error);
    }

    console.log("data come from", env, "environment");
    const userInfo = new UserInfos(user);
    return userInfo;
};

export const getUserActivity = async (userId, env) => {
    let user;

    try {
        if (env === "development") {
            user = USER_ACTIVITY.find((user) => user.userId === userId);
        } else if (env === "production") {
            const response = await fetch(
                `http://localhost:3000/user/${userId}/activity`
            );
            const data = await response.json();
            user = data.data;
        }
    } catch (error) {
        console.error(error);
    }

    const userActivity = new UserActivity(user);
    return userActivity;
};

export const getUserAverageSessions = async (userId, env) => {
    let user;

    try {
        if (env === "development") {
            user = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
        } else if (env === "production") {
            const response = await fetch(
                `http://localhost:3000/user/${userId}/average-sessions`
            );
            const data = await response.json();
            user = data.data;
        }
    } catch (error) {
        console.error(error);
    }

    const userAverageSessions = new UserSessions(user);
    return userAverageSessions;
};

export const getUserPerformance = async (userId, env) => {
    let user;

    try {
        if (env === "development") {
            user = USER_PERFORMANCE.find((user) => user.userId === userId);
        } else if (env === "production") {
            const response = await fetch(
                `http://localhost:3000/user/${userId}/performance`
            );
            const data = await response.json();
            user = data.data;
        }
    } catch (error) {
        console.error(error);
    }

    const userPerformance = new UserPerformance(user);
    return userPerformance;
};
