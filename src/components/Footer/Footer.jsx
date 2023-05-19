import React from 'react';
import classNames from 'classnames';

import { Logo } from '../Logo';
import { Icon } from '../../icons/Icon';
import { Container } from '../Container';
import { FooterLink } from './FooterLink';

import {
  footerLinksTextAbout,
  footerLinksTextProperty,
  footerLinksTextSupport,
} from '../../services/footerLinksText';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Logo
          className={classNames(styles.footerLogoMobile, styles.footerLogoIcon)}
        >
          <Icon
            className={classNames(
              styles.footerLogoMobile,
              styles.footerLogoIcon,
            )}
            name="logo"
          />
        </Logo>
        <nav className={styles.footerItems}>
          <div className={styles.footerItem}>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <h3 className={styles.footerLinksHeader}>About</h3>
              </li>
              {footerLinksTextAbout.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <h3 className={styles.footerLinksHeader}>Property types</h3>
              </li>
              {footerLinksTextProperty.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={styles.footerItem}>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <h3 className={styles.footerLinksHeader}>Support</h3>
              </li>
              {footerLinksTextSupport.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
        </nav>
        <div className={styles.footerCopyright}>
          © 2022 Triphouse, Inc. All rights reserved
        </div>
      </Container>
    </footer>
  );
};
