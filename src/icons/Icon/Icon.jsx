import React from 'react';
const PUBLIC_PATH = process.env.PUBLIC_URL;

export const Icon = ({ className, name }) => {
  return (
    <svg className={className}>
      <use href={`${PUBLIC_PATH}/images/sprite.svg#${name}`} />
    </svg>
  );
};
