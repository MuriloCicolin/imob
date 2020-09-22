import { Router } from 'express';
import multer from 'multer';
import * as Yup from 'yup';
import { classToClass } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreatePropertyService from '../services/CreatePropertyService';

import uploadConfig from '../config/upload';
import ListPropertiesService from '../services/ListPropertiesService';
import AppError from '../errors/AppError';
import ListAllPropertiesServices from '../services/ListAllPropertiesServices';
import PropertiesRepository from '../repositories/PropertiesRepository';

const propertiesRouter = Router();

const upload = multer(uploadConfig);

propertiesRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('property_image'),
  async (request, response) => {
    const schema = Yup.object().shape({
      address: Yup.string().required(),
      uf: Yup.string().required(),
      city: Yup.string().required(),
      number: Yup.number().required(),
      type: Yup.string().required(),
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validation Fails');
    }

    try {
      const {
        address,
        city,
        uf,
        number,
        property_image,
        type,
        value,
        user_id,
      } = request.body;

      const createPropertyService = new CreatePropertyService();

      const properties = await createPropertyService.execute({
        address,
        city,
        number,
        property_image: request.file.filename,
        type,
        uf,
        value,
        user_id: request.user.id,
      });

      return response.json(properties);
    } catch (err) {
      throw new AppError('Error when registering property');
    }
  },
);

propertiesRouter.get('/', ensureAuthenticated, async (request, response) => {
  const schema = Yup.object().shape({
    uf: Yup.string().required(),
    city: Yup.string().required(),
    type: Yup.string().required(),
  });

  if (!(await schema.isValid(request.query))) {
    throw new AppError('Validation Fails');
  }

  const { uf, city, type } = request.query;

  const listPropertiesService = new ListPropertiesService();

  const properties = await listPropertiesService.execute({
    city,
    type,
    uf,
  });

  return response.json(classToClass(properties));
});

propertiesRouter.get('/all', ensureAuthenticated, async (request, response) => {
  const listAllPropertiesService = new ListAllPropertiesServices();

  const properties = await listAllPropertiesService.execute();

  return response.json(classToClass(properties));
});

propertiesRouter.get(
  '/count',
  ensureAuthenticated,
  async (request, response) => {
    const propertiesRepository = getCustomRepository(PropertiesRepository);

    const properties = await propertiesRepository.getCountProperties();

    return response.json(properties);
  },
);

export default propertiesRouter;
