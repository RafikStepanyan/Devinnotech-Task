import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import './style.scss'

export const Layout = () => {
    return <div className='layout'>
        <Sidebar />
        <Outlet />
    </div>;
};