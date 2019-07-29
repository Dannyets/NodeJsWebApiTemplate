import { InMemoryRepository } from '@components/repositories';
import { createRepository } from '@components/factories';
import { Temp } from '../models';

const tempRepository = createRepository<Temp>(
    InMemoryRepository,
    'temp',
    `${__dirname}/../data/temp.json`,
);

export {
    tempRepository
};
