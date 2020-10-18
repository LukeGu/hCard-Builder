import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 2rem;
  width: 100%;
  z-index: 2000;
`;

const Container = styled.div`
  min-width: 10rem;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f44336;
  color: white;
  border-radius: 0.3rem;
`;

const CloseBtn = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

const MessageBox = (props: { message: string; onClose: () => void }) => {
  setTimeout(() => {
    props.onClose();
  }, 3000);

  return (
    <Wrapper>
      <Container>
        <CloseBtn onClick={props.onClose}>&times;</CloseBtn>
        <strong>Error: </strong> {props.message}
      </Container>
    </Wrapper>
  );
};

export default MessageBox;
