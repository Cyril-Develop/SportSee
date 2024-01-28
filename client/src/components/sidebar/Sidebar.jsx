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
                <a href="/">
                    <img src={LogoYoga} alt="" />
                </a>
                <a href="">
                    <img src={LogoSwim} alt="" />
                </a>
                <a href="">
                    <img src={LogoCycle} alt="" />
                </a>
                <a href="">
                    <img src={LogoDumbbell} alt="" />
                </a>
            </ul>
        </nav>
        <footer className='sidebar_footer'>
            <p>Copiryght, SportSee 2020</p>
        </footer>
    </aside>
  )
}
