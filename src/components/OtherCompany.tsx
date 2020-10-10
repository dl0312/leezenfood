import React from 'react';
import styled from 'styled-components';
import seoulmilk from '../img/seoulmilk.jpg';
import cjfood from '../img/cjfood.jpg';
import cjfreshway from '../img/cjfreshway.jpg';
import delifood from '../img/delifood.jpg';
import dongwon from '../img/dongwon.jpg';
import seoulfnb from '../img/seoulfnb.jpg';
import yonseimilk from '../img/yonseimilk.jpg';
import { Card } from 'antd';

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bolder;
`;

const CompanyImg = styled.img`
  width: 100%;
  max-width: 8rem;
  object-fit: cover;
  transition: 0.5s ease;
  display: inline;
`;

const ExtendedCard = styled(Card)`
  border-radius: 0.7rem;
  margin: 0 1rem 1rem 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const gridStyle = {
  width: '25%',
  textAlign: 'center' as any,
};

export default function OtherCompany() {
  return (
    <ExtendedCard id="Affiliate" title={<Title>제휴회사</Title>}>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={seoulmilk} alt={'서울우유'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={dongwon} alt={'동원F&B'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={cjfreshway} alt={'CJ프레시웨이'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={cjfood} alt={'CJ푸드빌'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={seoulfnb} alt={'서울F&B'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={yonseimilk} alt={'연세우유'} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <CompanyImg src={delifood} alt={'델리푸드'} />
      </Card.Grid>
    </ExtendedCard>
  );
}
