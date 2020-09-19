import React from 'react';

import { Container, CardProperty } from './styles';
import formatValue from '../../utils/formatValue';

interface IProperties {
  address: string;
  number: string;
  uf: string;
  type: 'Aluguel' | 'Venda';
  value: number;
  property_url: string;
}

interface IProps {
  property: IProperties;
}

const PropertiesList: React.FC<IProps> = ({ property }) => {
  return (
    <Container>
      <CardProperty>
        <img src={property.property_url} alt="" />
        <section>
          <div>
            <p>{property.address}</p>
            <p>
              Nº
              {property.number}
            </p>
            <p>{formatValue(property.value)}</p>
          </div>
        </section>
      </CardProperty>
    </Container>
  );
};

export default PropertiesList;
