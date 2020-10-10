import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
  IeOutlined,
} from '@ant-design/icons';
const { Footer: AntdFooter } = Layout;
interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <AntdFooter
      style={{
        backgroundColor: '#c0a265',
        color: 'white',
      }}
    >
      ㈜ 이젠푸드 ©2011 | 대표 : 이병오 | 사업자등록번호 : 876-86-00508
      <br />
      <EnvironmentOutlined /> 본사 : 서울시 서초구 서초대로 17 방배대우디오빌
      222호 |
      <PhoneOutlined /> TEL : 02-525-9592 |
      <PhoneOutlined /> FAX : 02-525-9593 | <PhoneOutlined /> CELL.
      010-5212-0755
      <br />
      <MailOutlined /> MAIL : leebo0357@hanmail.net | <IeOutlined /> SITE.
      www.leezenfood.com
      <br />
      Copyright. LEEZENFOOD all rights reserved.
    </AntdFooter>
  );
}
