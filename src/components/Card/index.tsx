import React, { useEffect, useRef, useState } from 'react';
// components
import {
  Wrapper,
  HeadContainer,
  BodyContainer,
  Section,
  Cover,
  CoverBg,
  Avatar,
  Setting,
  Name,
  Title,
  Content,
  Icon,
} from './styled';
// types
import { DetailsInterface } from '../types';
// assets
import defaultAvatar from '../../assets/images/default-avatar.png';
import emailIcon from '../../assets/images/email-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import notificationIcon from '../../assets/images/notifications-icon.svg';
import menuIcon from '../../assets/images/menu-icon.svg';

function Card({ details }: { details: DetailsInterface }) {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [postionY, setPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setPositionY(currentScrollY);
      // console.log('!!!!!position: ', goingUp, currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  const zoomIn: number =
    postionY >= 120 ? 0.5 : Number(((240 - postionY) / 240).toFixed(2));
  const py = postionY >= 120 ? 120 : postionY;
  // const isFixed = postionY >= 120;
  console.log('!!!!!position: ', zoomIn, postionY);
  return (
    <Wrapper>
      <HeadContainer>
        <Cover bgImg={details.coverImg} postionY={py}>
          <CoverBg bgImg={details.coverImg} postionY={py} />
          <Setting>
            <Icon alt='notification-icon' src={notificationIcon} />
            <Icon alt='menu-icon' src={menuIcon} />
          </Setting>
          <Avatar
            alt='avatar'
            src={details.avatar || defaultAvatar}
            zoomIn={zoomIn}
          />
        </Cover>
        <Name zoomIn={zoomIn}>
          {!details.firstname && !details.lastname
            ? 'name'
            : `${details.firstname} ${details.lastname}`}
        </Name>
      </HeadContainer>
      <BodyContainer postionY={py}>
        <Section>
          <Content>
            <Icon alt='email-icon' src={emailIcon} />
            {details.email || 'email address'}
          </Content>
          <Content>
            <Icon alt='phone-icon' src={phoneIcon} />
            {details.phone || 'phone number'}
          </Content>
        </Section>
        <Section>
          <Title>address</Title>
          <Content>test</Content>
        </Section>
        <Section>
          <Title>postcode</Title>
          <Content>{details.stateNpostcode || 'XXX 0000'}</Content>
        </Section>
        <Section>
          <Title>country</Title>
          <Content>{details.country || 'Country name'}</Content>
        </Section>
      </BodyContainer>
    </Wrapper>
  );
}

export default Card;
