import React, { FC, useCallback, useEffect, useState } from 'react';
import { ResumeState, SectionState } from './types';
import { useLoadResumeData } from './useLoadResumeData';
import { IntroSection } from '../IntroSection';
import { GenericSection } from '../GenericSection';
import * as S from './Resume.styles';

export const Resume: FC = () => {
  const { loadResumeData } = useLoadResumeData();
  const [resumeState, setResumeState] = useState<ResumeState>({ sections: [] });

  useEffect(() => {
    loadResumeData().then((state) => {
      setResumeState(state);
    });
  }, [setResumeState]);

  useCallback(
    (sectionTitle: string, sectionState: SectionState) => {
      setResumeState((prev): ResumeState => {
        const index = prev.sections.findIndex(
          (section) => section.title === sectionTitle,
        );
        if (index === -1) {
          return { ...prev };
        }
        return {
          ...prev,
          sections: [
            ...prev.sections.slice(0, index),
            sectionState,
            ...prev.sections.slice(index + 1),
          ],
        };
      });
    },
    [setResumeState],
  );

  return (
    <S.Resume>
      <S.ResumeTitle>Curriculum Vitae</S.ResumeTitle>
      {resumeState.sections.map((section) => (
        <S.Section key={section.title}>
          <S.SectionTitle>{section.title}</S.SectionTitle>
          {section.type === 'IntroSection' && (
            <IntroSection {...section.props} />
          )}
          {section.type === 'GenericSection' && (
            <GenericSection {...section.props} />
          )}
        </S.Section>
      ))}
    </S.Resume>
  );
};
