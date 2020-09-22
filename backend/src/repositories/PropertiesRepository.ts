import { EntityRepository, Repository } from 'typeorm';

import Property from '../models/Property';

interface CountProperty {
  sum: number;
}

@EntityRepository(Property)
class PropertiesRepository extends Repository<Property> {
  public async getCountProperties(): Promise<CountProperty> {
    const properties = await this.findAndCount();

    return properties[1];
  }
}

export default PropertiesRepository;
