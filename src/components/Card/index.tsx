import React from 'react';
import styled from 'styled-components';

const DivTest = styled.div`
  font-family: 'LeckerliOneRegular';
`;

function Card() {
  return (
    <div>
      <div>
        header
        <DivTest>setting</DivTest>
        <div>avatar</div>
        <div>name</div>
      </div>
      <div>body</div>
    </div>
  );
}

export default Card;
