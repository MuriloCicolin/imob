import React from 'react';

import { Container } from './styles';

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
      {property ? <h3>{property.address}</h3> : <h3>Não existe imóveis</h3>}
    </Container>
  );
};

export default PropertiesList;
