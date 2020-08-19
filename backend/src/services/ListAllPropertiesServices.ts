import { getRepository } from 'typeorm';
import Property from '../models/Property';

class ListAllPropertiesServices {
  public async execute(): Promise<Property[]> {
    const propertiesRepository = getRepository(Property);

    const searchProperties = await propertiesRepository.find();

    return searchProperties;
  }
}

export default ListAllPropertiesServices;
