import './header.scss'
import Logo from '../../assets/logo.png'
import { useDataContext } from '../../context/dataContext'
import { Link } from 'react-router-dom';

export default function Header() {

    const { userId } = useDataContext();

    return (
        <header className="header">
            <img className="header_img" src={Logo} alt="SportSee - logo" />
            <nav className="header_nav">
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