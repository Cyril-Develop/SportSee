import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Setting from './pages/setting/Setting';
import Community from './pages/community/Community';

function App() {
    const queryClient = new QueryClient();
    
    const Layout = () => {
        return (
            <QueryClientProvider client={queryClient}>
                <Header/>
                <div style={{display: "flex"}}>
                    <Sidebar/>
                    <Outlet/>
                </div>
            </QueryClientProvider>
        )
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Layout/>
            ),
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/profile/:id",
                    element: <Profile/>
                },
                {
                    path: "/setting",
                    element: <Setting/>
                },
                {
                    path: "/community",
                    element: <Community/>
                },
            ]   
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;