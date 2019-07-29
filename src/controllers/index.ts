import { Route } from '@components/models';
import { router as tempRouter } from './temp.controller';

const routes: Route[] = [
    {
        route: '/api/product',
        router: tempRouter,
    },
];

export {
    routes
};
