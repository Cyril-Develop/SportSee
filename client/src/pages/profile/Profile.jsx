import './profile.scss';
import { useDataContext } from '../../context/dataContext'
import { Navigate } from 'react-router-dom';
import Home from '../home/Home';

export default function Profile() {

    const { userId } = useDataContext();

    if (!userId) return <Navigate to="/"/>

    return (
        <main>Profile</main>
    )
}