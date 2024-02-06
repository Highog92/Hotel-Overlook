import { Outlet } from 'react-router-dom';
import { Navigation } from '../assets/Components/Nav/Nav';
import { Footer } from '../assets/Components/Footer/Footer';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation />
            <Outlet />
            <Footer/>
        </>

    )
}