import { Navigate } from 'react-router-dom';
import apple from '../../assets/apple.svg';
import cheeseburger from '../../assets/cheeseburger.svg';
import chicken from '../../assets/chicken.svg';
import energy from '../../assets/energy.svg';
import Card from '../../components/card/Card';
import SimpleBarChart from '../../components/simpleBarChart/SimpleBarChart';
import { useDataContext } from '../../context/dataContext';
import './profile.scss';

export default function Profile() {

	const { userId, userInfos, userActivity } = useDataContext();

	if (!userId) return <Navigate to="/" />

	return (
		<main className='profile'>
			<header className='profile_title'>
				<h1>Bonjour <span>{userInfos?.firstName}</span></h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<section className='profile_main'>
				<div className='profile_main_charts'>
					<SimpleBarChart data={userActivity?.sessions} />
				</div>
				<div className='profile_main_cards'>
					<Card value={userInfos?.calorieCount} title="Calories" img={energy} unit="kCal" />
					<Card value={userInfos?.proteinCount} title="Proteines" img={chicken} unit="g" />
					<Card value={userInfos?.carbohydrateCount} title="Glucides" img={apple} unit="g" />
					<Card value={userInfos?.lipidCount} title="Lipides" img={cheeseburger} unit="g" />
				</div>
			</section>
		</main>
	)
}