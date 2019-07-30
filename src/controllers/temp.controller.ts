import { Temp } from '../models';
import { tempRepository } from '../repositories';
import { createDefaultRouter, createLogger } from '@infra/factories';
import { tempSchema } from '../validation';

const logger = createLogger('temp-controller');

const { router, crudService } = createDefaultRouter<Temp>(tempRepository, logger, tempSchema);

export {
    router
};
