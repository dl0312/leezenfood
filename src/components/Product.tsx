import React from 'react';
import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpg';
import p4 from '../img/p4.jpg';
import p5 from '../img/p5.jpg';
import p6 from '../img/p6.jpg';
import p7 from '../img/p7.jpg';
import p8 from '../img/p8.jpg';
import p9 from '../img/p9.jpg';
import p10 from '../img/p10.jpg';
import p11 from '../img/p11.jpg';
import p12 from '../img/p12.jpg';
import p13 from '../img/p13.jpg';
import p14 from '../img/p14.jpg';
import p15 from '../img/p15.jpg';
import p16 from '../img/p16.jpg';
import styled from 'styled-components';
import { Card } from 'antd';

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bolder;
`;

const Img = styled.img`
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

export default function Product() {
  return (
    <ExtendedCard id="Product" title={<Title>제품</Title>}>
      <Card.Grid style={gridStyle}>
        <Img src={p1} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p2} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p3} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p4} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p5} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p6} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p7} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p8} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p9} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p10} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p11} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p12} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p13} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p14} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p15} />
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Img src={p16} />
      </Card.Grid>
    </ExtendedCard>
  );
}
