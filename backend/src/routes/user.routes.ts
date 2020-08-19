import { Router } from 'express';
import * as Yup from 'yup';
import CreateUserService from '../services/CreateUserService';
import AppError from '../errors/AppError';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validation Fails');
    }

    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
