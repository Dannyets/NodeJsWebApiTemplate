import { Temp } from '../models';
import { tempRepository } from '../repositories';
import { createDefaultRouter, createLogger } from '@components/factories';

const logger = createLogger('temp-controller');

const { router, crudService } = createDefaultRouter<Temp>(tempRepository, logger);

export {
    router
};
