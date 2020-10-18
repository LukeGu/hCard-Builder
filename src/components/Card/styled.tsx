import styled from 'styled-components';
import defaultCover from '../../assets/images/default-cover-photo.png';

type ContainerProps = {
  postionY?: number;
};

type CoverProps = {
  bgImg?: string;
  postionY?: number;
};

type ZoomInProps = {
  zoomIn?: number;
};

export const Wrapper = styled.div`
  width: 40%;
  @media screen and (max-width: 35rem) {
    width: 100%;
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
  background-color: #fff;
  @media screen and (max-width: 35rem) {
    position: fixed;
    z-index: 1;
  }
`;

export const BodyContainer = styled.div<ContainerProps>`
  background-color: #fff;
  padding: 0 3rem;
  @media screen and (max-width: 35rem) {
    margin-top: ${(props) =>
      props.postionY ? `${420 - props.postionY / 2}px` : '420px'};
  }
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Icon = styled.img`
  margin-right: 1rem;
`;

export const Setting = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  padding: 1rem;
  ${Icon} {
    &:hover {
      filter: invert(0%) sepia(90%) saturate(7500%) hue-rotate(60deg)
        brightness(91%) contrast(109%);
    }
  }
`;

export const Cover = styled.div<CoverProps>`
  position: relative;
  height: 240px;
  @media screen and (max-width: 35rem) {
    height: ${(props) =>
      props.postionY ? `${240 - props.postionY}px` : '240px'};
  }
`;

export const CoverBg = styled.div<CoverProps>`
  height: 240px;
  background-image: ${(props) =>
    props.bgImg ? `url(${props.bgImg})` : `url(${defaultCover})`};
  background-size: cover;
  @media screen and (max-width: 35rem) {
    filter: ${(props) => props.postionY === 120 && 'blur(2px)'};
    background-repeat: no-repeat;
    background-size: 500px;
    height: ${(props) =>
      props.postionY ? `${240 - props.postionY}px` : '240px'};
  }
`;

export const Avatar = styled.img<ZoomInProps>`
  border-radius: 50%;
  width: 7rem;
  position: absolute;
  left: 3rem;
  bottom: -3.5rem;
  @media screen and (max-width: 35rem) {
    left: ${(props) => (props.zoomIn ? `${props.zoomIn * 3}rem` : '3rem')};
    transform: ${(props) => props.zoomIn && `scale(${props.zoomIn})`};
  }
`;

export const Name = styled.h3<ZoomInProps>`
  margin: 4rem 3rem 1rem 3rem;
  font-family: 'LeckerliOneRegular';
  font-size: 3rem;
  font-weight: 500;
  @media screen and (max-width: 35rem) {
    margin-top: ${(props) =>
      props.zoomIn ? `${props.zoomIn * 4}rem` : '4rem'};
  }
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
