import React, { FC } from 'react';
import { GenericSectionItem } from './GenericSectionItem';
import { GenericSectionProps } from './types';
import * as S from './GenericSection.styles';

export const GenericSection: FC<GenericSectionProps> = (props) => (
  <S.GenericSection>
    {props.items.map((item) => (
      <GenericSectionItem key={item.entity.name} {...item} />
    ))}
  </S.GenericSection>
);
