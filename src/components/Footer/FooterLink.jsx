import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';
export const FooterLink = ({ text }) => {
  return (
    <li
      className={classNames(
        styles.footerLinksItem,
        styles.footerLinksItemDesktop,
      )}
    >
      <a href="#">{text}</a>
    </li>
  );
};
