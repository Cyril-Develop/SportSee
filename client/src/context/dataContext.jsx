import { createContext, useContext, useEffect, useState } from "react";
import {
	getUserActivity,
	getUserAverageSessions,
	getUserInfos,
	getUserPerformance,
} from "../data/getDatas";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [userId, setUserId] = useState();	
	
	const [env, setEnv] = useState(
		JSON.parse(localStorage.getItem("env")) || null
	);

	const [userInfos, setUserInfos] = useState(null);
	const [userActivity, setUserActivity] = useState(null);
	const [userAvgSessions, setUserAvgSessions] = useState(null);
	const [userPerformance, setUserPerformance] = useState(null);

	useEffect(() => {
		if (!userId) return;
		const fetchData = async () => {
			const userInfoData = await getUserInfos(userId, env);

			const userActivityData = await getUserActivity(userId, env);

			const avgSessionsData = await getUserAverageSessions(userId, env);
			const userAvgSessionsData = avgSessionsData.getSessions();

			const performanceData = await getUserPerformance(userId, env);
			const userPerformanceData = performanceData.getPerformance();
			
			setUserInfos(userInfoData);
			setUserActivity(userActivityData);
			setUserAvgSessions(userAvgSessionsData);
			setUserPerformance(userPerformanceData);
		};
		fetchData();
	}, [userId, env]);

	return (
		<DataContext.Provider
			value={{
				userId,
				setUserId,
				env,
				setEnv,
				userInfos,
				userActivity,
				userAvgSessions,
				userPerformance,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);