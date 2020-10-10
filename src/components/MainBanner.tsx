import React, { ReactElement } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import cheese1 from '../img/cheese1.jpg';
import cheese2 from '../img/cheese2.jpg';
import cheese3 from '../img/cheese3.jpg';
import cheese4 from '../img/cheese4.jpg';
import cheese5 from '../img/cheese5.png';
import cheese6 from '../img/cheese6.jpg';
import cheese7 from '../img/cheese7.jpg';

const Container = styled.div`
  position: relative;
`;

const Img = styled('div')<{ url: string }>`
  background: url(${({ url }) => url});
  background-position: center center;
  background-size: auto auto;
  background-repeat: no-repeat;
  filter: brightness(60%);
`;

const HoverContainer = styled.div`
  position: absolute;
  z-index: 3;
  color: white;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`;

const MainTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bolder;
`;

interface Props {}

export default function MainBanner({}: Props): ReactElement {
  return (
    <Container>
      <HoverContainer>
        <SubTitle>the nation's best cheese distribution & importation</SubTitle>
        <MainTitle>건강을 생각하는 기업 이젠푸드</MainTitle>
      </HoverContainer>
      <Carousel>
        <Img url={cheese1} />
        <Img url={cheese2} />
        <Img url={cheese3} />
        <Img url={cheese4} />
        <Img url={cheese5} />
        <Img url={cheese6} />
        <Img url={cheese7} />
      </Carousel>
    </Container>
  );
}
