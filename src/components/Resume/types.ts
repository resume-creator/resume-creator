import type { GenericSectionProps } from '../GenericSection';
import type { IntroSectionProps } from '../IntroSection';

interface GenericSectionState {
  type: 'GenericSection';
  title: string;
  props: GenericSectionProps;
}

interface IntroSectionState {
  type: 'IntroSection';
  title: string;
  props: IntroSectionProps;
}

export type SectionState = GenericSectionState | IntroSectionState;

export interface ResumeState {
  sections: SectionState[];
}
