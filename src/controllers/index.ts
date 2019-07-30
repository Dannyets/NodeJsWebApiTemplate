import { Route } from '@infra/models';
import { router as tempRouter } from './temp.controller';

const routes: Route[] = [
    {
        route: '/api/temp',
        router: tempRouter,
    },
];

export {
    routes
};
