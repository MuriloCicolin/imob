import { getRepository } from 'typeorm';
import User from '../models/User';
import Property from '../models/Property';

interface Request {
  address: string;
  number: string;
  type: 'Venda' | 'Aluguel';
  value: number;
  uf: string;
  city: string;
  property_image: string;
  user_id: string;
}

class CreatePropertyService {
  public async execute({
    address,
    number,
    type,
    value,
    uf,
    city,
    property_image,
    user_id,
  }: Request): Promise<Property> {
    const usersRepository = getRepository(User);
    const propertiesRepository = getRepository(Property);

    const userExist = await usersRepository.findOne({
      where: {
        id: user_id,
      },
    });

    if (!userExist) {
      throw new Error('User does not exists');
    }

    const properties = await propertiesRepository.create({
      address,
      city,
      number,
      property_image,
      type,
      value,
      uf,
      user_id,
    });

    await propertiesRepository.save(properties);

    return properties;
  }
}

export default CreatePropertyService;
