import React from 'react';
const PUBLIC_PATH = process.env.PUBLIC_URL;

export const Night = ({ className }) => {
  return (
    <svg className={className}>
      <use href={`${PUBLIC_PATH}/images/sprite.svg#night`} />
    </svg>
  );
};
