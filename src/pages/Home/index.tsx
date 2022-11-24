import React from "react";

import { 
  Container,
  Header,
  HeaderContent,
  Content,
  IntroSection,
  FeatureSection,
  Feature,
  EmailSection,
  TestimonySection,
  PrivacySection,
  CommunitySection,
  CommunityFeature,
  AppSection,
  Separator,
  Footer,
  FooterSocialSection
} from './styles';

import logoImage from '../../assets/header_logo.svg';
import mockupImage from '../../assets/zello_mockup.svg';
import messageIcon from '../../assets/message_icon.svg';
import clockIcon from '../../assets/clock_icon.svg';
import priorityIcon from '../../assets/priority_icon.svg';
import testimonyImage from '../../assets/testimony_image.svg';
import testimonyMessage from '../../assets/testimony_message.svg';
import mediumLogo from '../../assets/zello_medium_logo.svg';
import linkIcon from '../../assets/link_icon.svg';
import qrCodeIcon from '../../assets/qrcode_icon.svg';
import carouselImage1 from '../../assets/carousel_image_1.svg';
import footerLogo from '../../assets/zello_footer_logo.svg';
import instagramLogo from '../../assets/instagram_logo.svg';
import appStoreLogo from '../../assets/app_store_logo.svg';

const Home: React.FC = () => (
  <Container>
    <Header>
      <HeaderContent>
        <a href="/"><img src={logoImage} alt="Zello Messenger"/></a>
      </HeaderContent>
    </Header>
    <Content>
      <IntroSection>
        <h1>O chat seguro que conecta profissionais da saúde a seus pacientes</h1>
        <img src={mockupImage} alt="Zello Messenger"/>
      </IntroSection>
      <FeatureSection>
        <Feature>
          <img src={messageIcon} alt="Zello Messenger"/>
          <p>Armazene trocas de mensagens com seus pacientes de forma segura</p>
        </Feature>
        <Feature>
          <img src={clockIcon} alt="Zello Messenger"/>
          <p>Descansar é importante! Receba notificações somente no horário de trabalho.</p>
        </Feature>
        <Feature>
          <img src={priorityIcon} alt="Zello Messenger"/>
          <p>Seja notificado quando algum de seus pacientes prioritários entrar em contato</p>
        </Feature>
      </FeatureSection>
      <EmailSection>
        <h1>Seja um dos primeiros a experimentar a segurança, exclusividade e praticidade do Zello</h1>
        <input type="text" />
      </EmailSection>
      <TestimonySection>
        <img src={testimonyImage} alt="Zello Messenger"/>
        <p>“Contar com um aplicativo de mensagens direcionado a assuntos profissionais, em separado das conversas com família e amigos, é ótimo para a organização no dia a dia do médico”</p>
        <img src={testimonyMessage} alt="Zello Messenger" />
      </TestimonySection>
      <PrivacySection>
        <img src={mediumLogo} alt="Zello Messenger" />
        <h1>Armazene trocas de mensagens com seus pacientes de forma segura</h1>
        <h2>Sua privacidade é respeitada</h2>
        <p>O fornecimento de dados pessoais nunca é obrigatório. Você sempre pode decidir se deseja ou não fornecer dados pessoais. <br /><br />Quando solicitarmos a entrada de dados pessoais, indicaremos quais dados são necessários para fazer uso do serviço e, portanto, devem ser fornecidos, e quais dados podem ser fornecidos opcionalmente.</p>
      </PrivacySection>
      <CommunitySection>
        <h1>Comunidade Zello</h1>
        <h3>Junte-se ao corpo de profissionais da saúde que transformam sua comunicação</h3>
        <h2>Inicie chats com quem desejar</h2>
        <CommunityFeature>
          <img src={linkIcon} alt="Zello Messenger" />
          <p>Envie um link de convite</p>
        </CommunityFeature>
        <CommunityFeature>
          <img src={qrCodeIcon} alt="Zello Messenger" />
          <p>Mostre seu QR Code</p>
        </CommunityFeature>
      </CommunitySection>
      <AppSection>
        <h1>O app teste</h1>
        <img src={carouselImage1} alt="Zello Messenger" />
      </AppSection>
      <Separator />
      <Footer>
        <img src={footerLogo} alt="" />
        <FooterSocialSection>
          <a href="https://www.instagram.com/zellomessenger/"><img src={instagramLogo} alt="Zello Messenger" /></a>
          <img src={appStoreLogo} alt="Zello Messenger" />
        </FooterSocialSection>
      </Footer>
    </Content>
  </Container>
);

export default Home;