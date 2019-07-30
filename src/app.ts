import express from 'express';
import cors from 'cors';
import { routes } from './controllers';
import expressWinston from 'express-winston';
import { logUtils } from '@infra/utils';
import { Route } from '@infra/models';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(expressWinston.logger(logUtils.createLoggerOptions()));

routes.forEach(({ router, route }: Route) => app.use(route, router));

app.use(expressWinston.errorLogger(logUtils.createLoggerOptions()));

export {
    app
};
