import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #e5e8ed;
  /* text-transform: capitalize; */
  width: 60%;
  padding: 4rem 2rem;
  @media screen and (max-width: 35rem) {
    width: calc(100% - 4rem);
  }
`;

export const Header = styled.h2`
  font-family: 'LarsseitBold';
  color: #224275;
  margin: 1rem;
`;

export const Form = styled.form`
  display: flex;
  @media screen and (max-width: 64rem) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin: 1rem;
  @media screen and (max-width: 64rem) {
    width: calc(100% - 2rem);
  }
`;

export const SectionTitle = styled.div`
  width: 100%;
  color: #224275;
  border-bottom: 1px solid;
  padding-bottom: 0.2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
