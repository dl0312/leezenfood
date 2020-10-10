import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
  IeOutlined,
} from '@ant-design/icons';
import { media } from '../config/_mixin';
import { Descriptions } from 'antd';

const Container = styled.div`
  padding: 1rem;
  background-color: white;
  position: relative;
  border-radius: 0.7rem;
  margin: 0 1rem 1rem 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const HoverContainer = styled.div`
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

const PersonalInfo = styled.div`
  font-size: 3rem;
  ${media.tablet} {
    font-size: 2rem;
  }
`;

const PersonalData = styled.div``;
interface Props {}

export default function Contact({}: Props): ReactElement {
  return (
    <Container id="Contact">
      <Descriptions title="회사 정보" bordered>
        <Descriptions.Item label="Telephone">
          <PersonalData>
            <PhoneOutlined />
            <span style={{ padding: 10 }}>02-525-9592</span>
          </PersonalData>
        </Descriptions.Item>
        <Descriptions.Item label="Tax">
          <PersonalData>
            <PhoneOutlined />
            <span style={{ padding: 10 }}>02-525-9593</span>
          </PersonalData>
        </Descriptions.Item>
        <Descriptions.Item label="Cellphone">
          <PersonalData>
            <PhoneOutlined />
            <span style={{ padding: 10 }}>010-5212-0755</span>
          </PersonalData>
        </Descriptions.Item>
        <Descriptions.Item label="본사">
          <PersonalData>
            <EnvironmentOutlined />
            <span style={{ padding: 10 }}>
              서울시 서초구 서초대로 17 방배대우디오빌 222호
            </span>
          </PersonalData>
        </Descriptions.Item>
        <Descriptions.Item label="Mail" span={2}>
          <PersonalData>
            <MailOutlined />
            <span style={{ padding: 10 }}>leebo0357@hanmail.net</span>
          </PersonalData>
        </Descriptions.Item>
        <Descriptions.Item label="Site" span={2}>
          <PersonalData>
            <IeOutlined />
            <span style={{ padding: 10 }}>www.leezenfood.com</span>
          </PersonalData>
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
}
