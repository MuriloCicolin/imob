import { getRepository } from 'typeorm';
import Property from '../models/Property';

interface Request {
  type: 'Venda' | 'Aluguel';
  uf: string;
  city: string;
}

class ListPropertiesService {
  public async execute({ uf, type, city }: Request): Promise<Property[]> {
    const propertiesRepository = getRepository(Property);

    const searchProperties = await propertiesRepository.find({
      where: {
        uf,
        type,
        city,
      },
    });

    return searchProperties;
  }
}

export default ListPropertiesService;
