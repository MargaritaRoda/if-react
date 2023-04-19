import React from 'react';
const PUBLIC_PATH = process.env.PUBLIC_URL;

export const Account = ({ className }) => {
  return (
    <svg className={className}>
      <use href={`${PUBLIC_PATH}/images/sprite.svg#account`} />
    </svg>
  );
};
