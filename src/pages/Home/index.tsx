import React from "react";

import { Container, Header, HeaderContent } from './styles';
import logoImage from '../../assets/header_logo.svg';

const Home: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <img src={logoImage} alt="Zello Messenger"/>
      </HeaderContent>
    </Header>
  </Container>
);

export default Home;