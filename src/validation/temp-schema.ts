import joi from 'joi';

export const tempSchema = joi.object().keys({
    name: joi.string().required(),
});
