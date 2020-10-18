import styled from 'styled-components';
import defaultCover from '../../assets/images/default-cover-photo.png';

export const Wrapper = styled.div`
  width: 40%;
  @media screen and (max-width: 35rem) {
    width: 100%;
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
`;

export const BodyContainer = styled.div`
  background-color: #fff;
  padding: 0 3rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Icon = styled.img`
  margin-right: 1rem;
`;

export const Setting = styled.div`
  position: absolute;
  right: 0;
  padding: 1rem;
  ${Icon} {
    &:hover {
      filter: invert(0%) sepia(90%) saturate(7500%) hue-rotate(60deg)
        brightness(91%) contrast(109%);
    }
  }
`;

type CoverProps = {
  bgImg?: string;
};

export const Cover = styled.div<CoverProps>`
  position: relative;
  min-height: 15rem;
  background-image: ${(props) =>
    props.bgImg ? `url(${props.bgImg})` : `url(${defaultCover})`};
  background-size: cover;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 7rem;
  position: absolute;
  left: 3rem;
  bottom: -3.5rem;
`;

export const Name = styled.h3`
  margin: 4rem 3rem 1rem 3rem;
  font-family: 'LeckerliOneRegular';
  font-size: 3rem;
  font-weight: 500;
`;

export const Title = styled.div`
  text-transform: uppercase;
  color: #b5b5b5;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
`;
