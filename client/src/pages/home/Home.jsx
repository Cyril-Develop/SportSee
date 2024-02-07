import './home.scss'
import { useState, useEffect } from 'react'
import { useDataContext } from '../../context/dataContext'

export default function Home() {
    const { setUserId, setEnv, userId, env } = useDataContext();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setEnv(isChecked ? "production" : "development");
    }, [isChecked, setEnv]);

    // If current environment is production, set the checkbox to checked
    useEffect(() => {
        setIsChecked(env === "production");
    }, []);

    useEffect(() => {
        localStorage.setItem("env", JSON.stringify(env));
    }, [env]);
    
    useEffect(() => {
        if (!userId) return;
        localStorage.setItem("user", JSON.stringify(userId));
    }, [userId]);

    return (
        <main className='home'>
            <div className="home_wrapper">
                <div className="home_wrapper_type">
                    <span>Développement</span>
                    <div className="checkbox">
                        <input type="checkbox" id='check' checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="check" aria-label="Choisir l'environnement"></label>
                    </div>
                    <span>Production</span>
                </div>
                <div className="home_wrapper_btn">
                    <button onClick={() => setUserId(12)} className={userId === 12 ? "active" : ""}>Utilisateur 12</button>
                    <button onClick={() => setUserId(18)} className={userId === 18 ? "active" : ""}>Utilisateur 18</button>
                </div>
                {!userId && <p className="home_warning">Veuillez sélectionner un utilisateur</p>}
            </div>
        </main>
    )
}
