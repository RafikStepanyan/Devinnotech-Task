import { useRoutes } from 'react-router-dom';
import { Layout } from '../../pages/Layout';
import { Home } from '../../pages/Home';

export const Router = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
            ]
        }
    ]);
    return element;
};