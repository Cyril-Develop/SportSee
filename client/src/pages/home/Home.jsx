import './home.scss'
import { useState, useEffect } from 'react'
import { useDataContext } from '../../context/dataContext'

export default function Home() {
    const { user, updateUser} = useDataContext();

    console.log(user);

    const [isChecked, setIsChecked] = useState(false);
    const [env, setEnv] = useState("development");
    const [userId, setUserId] = useState();

    useEffect(() => {
        !isChecked ? setEnv("development") : setEnv("production");
    }, [isChecked]);

    useEffect(() => {
        updateUser(userId, env);
    }, [userId, env, updateUser]);


    return (
        <main className='home'>
            <div className="home_wrapper">
                <div className="home_wrapper_type">
                    <span>Développement</span>
                    <div className="checkbox">
                        <input type="checkbox" id='check' onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="check"></label>
                    </div>
                    <span>Production</span>
                </div>
                <div className="home_wrapper_btn">
                    <button onClick={() => setUserId(12)} className={userId === 12 ? "active" : ""}>Utilisateur 12</button>
                    <button onClick={() => setUserId(18)} className={userId === 18 ? "active" : ""}>Utilisateur 18</button>
                </div>
            </div>
        </main>
    )
}