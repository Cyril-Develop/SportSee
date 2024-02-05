import { createContext, useState, useEffect, useContext } from "react";
import { getUserInfos } from "../data/getDatas";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [env, setEnv] = useState(
        JSON.parse(localStorage.getItem("env")) || null
    );
    // const userActivity = `http://localhost:3000/user/${userId}/activity`;
    // const userAvgSessions = `http://localhost:3000/user/${userId}/average-sessions`;
    // const userPerformance = `http://localhost:3000/user/${userId}/performance`;

    const [userInfos, setUserInfos] = useState(null);

    useEffect(() => {
        if(!userId) return;
        const fetchData = async () => {
            const userInfoData = await getUserInfos(userId, env);
            setUserInfos(userInfoData);
        };
        fetchData();
    }, [userId, env]);
        
    return (
        <DataContext.Provider value={{ setUserId, setEnv, userId, env, userInfos }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);