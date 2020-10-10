import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  min-height: 450px;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

interface Props {}

export default function Road({}: Props): ReactElement {
  return (
    <Container
      id="Road"
      style={{ background: '#fff', minHeight: 280, marginBottom: '1rem' }}
    >
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3165.930403212832!2d126.98409469291617!3d37.48596869334542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2a32230b2f78f33!2z64yA7Jqw65SU7Jik67mM67Cp67Cw!5e0!3m2!1sko!2skr!4v1542460877703"
        width="600"
        height="450"
        style={{ border: 0, width: '100%' }}
      />
    </Container>
  );
}
