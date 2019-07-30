import { InMemoryRepository } from '@infra/repositories';
import { createRepository } from '@infra/factories';
import { Temp } from '../models';

const tempRepository = createRepository<Temp>(
    InMemoryRepository,
    'temp',
    `${__dirname}/../data/temp.json`,
);

export {
    tempRepository
};
