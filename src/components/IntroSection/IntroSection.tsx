import React, { FC } from 'react';
import { IntroSectionProps } from './types';
import * as S from './IntroSection.styles';

export const IntroSection: FC<IntroSectionProps> = (props) => {
  const { name, email, phone } = props;
  return (
    <S.IntroSection>
      <S.Line>
        <S.Label>Name:</S.Label>
        <S.Text>{name}</S.Text>
      </S.Line>
      <S.Line>
        <S.Label>Email:</S.Label>
        <S.Text>{email}</S.Text>
      </S.Line>
      <S.Line>
        <S.Label>Phone:</S.Label>
        <S.Text>{phone}</S.Text>
      </S.Line>
    </S.IntroSection>
  );
};
