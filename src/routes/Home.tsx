import React, { Component, useEffect } from 'react';
import { Layout, Anchor } from 'antd';
import styled from 'styled-components';
import ceo from '../img/ceo.png';
import { media } from '../config/_mixin';
import OtherCompany from '../components/OtherCompany';
import Product from '../components/Product';
import { toast } from 'react-toastify';
import Menu from '../components/Menu';
import MainBanner from '../components/MainBanner';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import banner from '../img/banner.png';
import Road from '../components/Road';

const { Header, Content } = Layout;
const { Link } = Anchor;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: white;
  padding: 2rem 0;
  border-radius: 10px;
  margin: 1rem;
  position: relative;
  ${media.tablet} {
    padding-bottom: 12rem;
  }
`;

const Banner = styled.img`
  width: 100%;
  margin: 1rem 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

export default function Home() {
  return (
    <Layout
      style={{
        maxWidth: '70rem',
        margin: '0 auto',
        fontFamily: 'Nanum Myeongjo',
      }}
      className="layout"
    >
      <Header
        style={{
          zIndex: 3,
          padding: 0,
          width: '100%',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Menu />
      </Header>
      <Content id="Home">
        <MainBanner />
        <Banner src={banner} />
        <Product />
        <OtherCompany />
        <Road />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  );
}
