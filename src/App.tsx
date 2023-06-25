import React, { FC } from 'react';
import { Resume } from './components/Resume';
import * as S from './App.styles';

export const App: FC = () => {
  return (
    <S.App>
      <Resume />
    </S.App>
  );
};
