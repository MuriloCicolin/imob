import { Router } from 'express';
import usersRouter from './user.routes';
import sessionRouter from './session.routes';
import propertiesRouter from './property.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/properties', propertiesRouter);

export default routes;
