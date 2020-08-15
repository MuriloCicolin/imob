import { Router } from 'express';
import multer from 'multer';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreatePropertyService from '../services/CreatePropertyService';

import uploadConfig from '../config/upload';
import ListPropertiesService from '../services/ListPropertiesService';

const propertiesRouter = Router();

const upload = multer(uploadConfig);

propertiesRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('property_image'),
  async (request, response) => {
    try {
      const {
        address,
        city,
        number,
        property_image,
        type,
        value,
        uf,
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
      throw new Error(err.message);
    }
  },
);

propertiesRouter.get('/', ensureAuthenticated, async (request, response) => {
  const { uf, city, type } = request.query;

  const listPropertiesService = new ListPropertiesService();

  const properties = await listPropertiesService.execute({
    city,
    type,
    uf,
  });

  return response.json(properties);
});

export default propertiesRouter;
