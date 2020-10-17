import React from 'react';
// components
import {
  Wrapper,
  HeadContainer,
  BodyContainer,
  Section,
  Cover,
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
  return (
    <Wrapper>
      <HeadContainer>
        <Cover bgImg={details.coverImg}>
          <Setting>
            <Icon alt='notification-icon' src={notificationIcon} />
            <Icon alt='menu-icon' src={menuIcon} />
          </Setting>
          <Avatar alt='avatar' src={details.avatar || defaultAvatar} />
        </Cover>
        <Name>
          {!details.firstname && !details.lastname
            ? 'name'
            : `${details.firstname} ${details.lastname}`}
        </Name>
      </HeadContainer>
      <BodyContainer>
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
