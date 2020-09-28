import styled, { css } from 'styled-components';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: rgb(95, 158, 160);
  font-size: 16px;

  ${(props) =>
    props.primary &&
    css`
      color: rgb(177 218 54);
      font-size: 18px;
    `};
`;

const ScComponent = () => {
  return (
    <Container>
      <Text>Not Primary</Text>
      <Text primary>Primary</Text>
    </Container>
  );
};

export default ScComponent;
