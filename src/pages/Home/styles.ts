import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
  padding: 30px 30px;
  background: #F1F5F7;
  position: fixed;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  margin: auto;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IntroSection = styled.div`
  h1 {
    display: flex;
    font-size: 22px;
    text-align: center;
    margin: 0 70px;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    display: flex;
    margin: 15px auto;
  }
`

export const FeatureSection = styled.div`
  margin-top: 40px;
`

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 35px;

  p {
    font-weight: lighter;
    margin-left: 24px;
  }
`

export const EmailSection = styled.div`
  background-color: #fff;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  
  h1 {
    margin: 30px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
  }

  input {
    margin-bottom: 30px;
  }
`

export const TestimonySection = styled.div`
  background-color: #DDE8F0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px;

  p {
    text-align: center;
    font-weight: lighter;
    font-style: italic;
    font-size: 14px;
    margin: 20px 0;
  }
`

export const PrivacySection = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;

  img {
    height: 70px;
  }

  h1 {
    display: flex;
    font-size: 22px;
    text-align: center;
    margin: 24px 35px;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 15px;
    margin-bottom: 10px;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-weight: lighter;
    font-size: 14px;
  }
`

export const CommunitySection = styled.div`
  background-color: #fff;
  text-align: center;
  width: 100%;
  padding: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    font-size: 22px;
    text-align: center;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: 15px;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 35px;
  }
`

export const CommunityFeature = styled.div`
  margin-top: 20px;

  img {
    height: 70px;
  }

  p {
    font-weight: lighter;
    font-size: 14px;
  }
`

export const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  margin-bottom: 10px;

  h1 {
    display: flex;
    font-size: 22px;
    text-align: center;
    margin-bottom: 24px;
    background: -webkit-linear-gradient(#2ABEBE, #08A5F1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img {
    height: 280px;
  }
`

export const Separator = styled.hr`
  width: 90%;
  border-top: 1px solid #636366;
`

export const Footer = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 160px;
  }
`

export const FooterSocialSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  margin-top: 30px;

  a {
    text-decoration: none;
    margin-top: 2px;
  }

  img {
    height: 45px;
    margin: 0 10px;
  }
`