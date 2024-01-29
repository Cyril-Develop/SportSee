import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [userId, setUserId] = useState();
    const [env, setEnv] = useState("development");
    const userUrl = `http://localhost:3000/user/${userId}`;
    const userActivity = `http://localhost:3000/user/${userId}/activity`;
    const userAvgSessions = `http://localhost:3000/user/${userId}/average-sessions`;
    const userPerformance = `http://localhost:3000/user/${userId}/performance`;

    const [user, setUser] = useState({});
    const [activity, setActivity] = useState([]);
    const [avgSessions, setAvgSessions] = useState([]);
    const [performance, setPerformance] = useState([]);

    useEffect(() => {
        if(userId === undefined) return;
        axios.get(userUrl).then((res) => setUser(res.data)).catch((err) => console.log(err));
        axios.get(userActivity).then((res) => setActivity(res.data)).catch((err) => console.log(err));
        axios.get(userAvgSessions).then((res) => setAvgSessions(res.data)).catch((err) => console.log(err));
        axios.get(userPerformance).then((res) => setPerformance(res.data)).catch((err) => console.log(err));
    }, [userId, userUrl, userActivity, userAvgSessions, userPerformance]);

    const updateUser = (newUserId, newEnv) => {
        setUserId(newUserId);
        setEnv(newEnv);
    };
        
    return (
        <DataContext.Provider value={{ user, activity, avgSessions, performance, updateUser }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);