import React, { ReactElement } from 'react';
import { Menu as AntdMenu } from 'antd';
import styled from 'styled-components';
import { media } from '../config/_mixin';
const { Item } = AntdMenu;

const ExtendedItem = styled(Item)`
  font-weight: bolder;
  font-size: 1.2rem;
`;

interface Props {}
const ExtendedAntdMenu = styled(AntdMenu)``;

export default function Menu({}: Props): ReactElement {
  return (
    <ExtendedAntdMenu mode="horizontal" selectedKeys={[]}>
      <ExtendedItem>
        <a href={'#Home'} style={{ fontWeight: 'bolder' }}>
          이젠푸드
        </a>
      </ExtendedItem>
      <ExtendedItem>
        <a href="#Company">회사</a>
      </ExtendedItem>
      <ExtendedItem>
        <a href="#Product">제품</a>
      </ExtendedItem>
      <ExtendedItem>
        <a href="#Affiliate">제휴회사</a>
      </ExtendedItem>
      <ExtendedItem>
        <a href="#Road">오시는길</a>
      </ExtendedItem>
      <ExtendedItem>
        <a href="#Contact">연락</a>
      </ExtendedItem>
    </ExtendedAntdMenu>
  );
}
