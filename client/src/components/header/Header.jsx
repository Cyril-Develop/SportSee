import './header.scss'
import Logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header className="header">
            <img className="header_img" src={Logo} alt="SportSee - logo" />
            <nav className="header_nav">
                <ul>
                    <a href="/">
                        <li>Accueil</li>
                    </a>
                    <a href="/profile/12">
                        <li>Profil</li>
                    </a>
                    <a href="/setting">
                        <li>Réglage</li>
                    </a>
                    <a href="/community">
                        <li>Communauté</li>
                    </a>
                </ul>
            </nav>
        </header>
    )
}
