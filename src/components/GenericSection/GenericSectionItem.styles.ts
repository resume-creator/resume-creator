import styled from '@emotion/styled';

export const GenericSectionItem = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '0.5rem',
}));

export const FirstLine = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const Entity = styled.span(() => ({
  fontWeight: 'bold',
}));

export const EntityLink = styled.a(() => ({
  color: 'inherit',
  textDecoration: 'none',
}));

export const Duration = styled.div(() => ({}));

export const SecondLine = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const Title = styled.div(() => ({}));

export const Location = styled.address(() => ({}));

export const BulletGroup = styled.ul(() => ({
  margin: '4px 0 0',
  paddingLeft: '1.5rem',
}));

export const Bullet = styled.li(() => ({}));
