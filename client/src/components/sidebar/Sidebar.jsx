import './sidebar.scss';
import LogoYoga from '../../assets/yoga.png';
import LogoSwim from '../../assets/swim.png';
import LogoCycle from '../../assets/cycle.png';
import LogoDumbbell from '../../assets/dumbbell.png';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
        <nav className='sidebar_nav'>
            <ul>
                <li>
                    <img src={LogoYoga} alt="Yoga" />
                </li>
                <li>
                    <img src={LogoSwim} alt="Nager" />
                </li>
                <li>
                    <img src={LogoCycle} alt="Fazire du vélo" />
                </li>
                <li>
                    <img src={LogoDumbbell} alt="Musculation" />
                </li>
            </ul>
        </nav>
        <footer className='sidebar_footer'>
            <p>Copiryght, SportSee 2020</p>
        </footer>
    </aside>
  )
}
