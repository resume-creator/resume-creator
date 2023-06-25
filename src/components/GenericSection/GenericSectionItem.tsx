import React, { FC } from 'react';
import { GenericSectionItemProps } from './types';
import * as S from './GenericSectionItem.styles';

export const GenericSectionItem: FC<GenericSectionItemProps> = (props) => {
  const {
    entity: { name: entityName, link: entityLink },
    duration,
    title,
    location,
    details,
  } = props;

  return (
    <S.GenericSectionItem>
      <S.FirstLine>
        {entityLink ? (
          <S.Entity>
            <S.EntityLink href={entityLink} target={'_blank'}>
              {entityName}
            </S.EntityLink>
          </S.Entity>
        ) : (
          <S.Entity>{entityName}</S.Entity>
        )}
        <S.Duration>{duration}</S.Duration>
      </S.FirstLine>
      <S.SecondLine>
        <S.Title>{title}</S.Title>
        <S.Location>{location}</S.Location>
      </S.SecondLine>
      {details && (
        <S.BulletGroup>
          {details.map((detail) => (
            <S.Bullet key={detail}>{detail}</S.Bullet>
          ))}
        </S.BulletGroup>
      )}
    </S.GenericSectionItem>
  );
};
