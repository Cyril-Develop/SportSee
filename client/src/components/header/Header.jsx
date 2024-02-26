import './header.scss'
import Logo from '../../assets/logo.png'
import Hamb from '../../assets/hamb.svg'
import { useDataContext } from '../../context/dataContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {

    const { userId } = useDataContext();
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="header">
            <img className="header_img" src={Logo} alt="SportSee - logo" />
            <img className="header_hamb" src={Hamb} alt="SportSee - menu" onClick={() => setToggleMenu(!toggleMenu)} />
            <nav className={toggleMenu ? "header_nav visible" : "header_nav"}>
                <ul>
                    <Link to="/">
                        <li>Accueil</li>
                    </Link>
                    <Link to={`/profile/${userId}`}>
                        <li>Profil</li>
                    </Link>
                    <Link to="/setting">
                        <li>Réglage</li>
                    </Link>
                    <Link to="/community">
                        <li>Communauté</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}